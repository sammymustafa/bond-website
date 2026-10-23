/**
 * Step 1: sort Search Console queries by who is searching.
 *
 *   npm run geo:queries                         # Search Console API (service account), last 90 days
 *   npm run geo:queries -- --queries-csv Queries.csv   # or a CSV exported from the Search Console UI
 *   options: --days 90  --limit 500  --dry-run
 *
 * Writes reports/geo/<date>/queries.csv and queries.md.
 */
import { parseArgs } from "./lib/args";
import { loadEnv } from "./lib/env";
import { gscCsv, gscQuery, type GscRow } from "./lib/gsc";
import { DEFAULT_MODEL, mapPool, respondJson, usageLine } from "./lib/openai";
import { mdTable, pct, writeCsv, writeText } from "./lib/report";

const AUDIENCES = [
  "site_buyer",
  "sponsor_cro_buyer",
  "patient_or_caregiver",
  "researcher_or_student",
  "competitor_research",
  "bond_brand",
  "job_seeker",
  "other",
] as const;

const SYSTEM = `You label Google search queries that led to bondtrials.com, the website of Bond Health.
Bond Health sells AI software and services for clinical trial patient recruitment: it screens a research site's EHR against trial criteria, contacts and pre-screens patients by voice and text, books screening visits, supports informed consent, runs Meta and Google ads for studies, and helps retain enrolled participants. Its buyers are research sites, site networks, physician groups, CROs and sponsors.

For each query choose one audience:
- site_buyer: research site, site network or practice staff (coordinators, directors, PIs, IT) looking for recruitment help, tools or know-how they would use at work
- sponsor_cro_buyer: sponsor or CRO staff working on enrollment, site selection or feasibility
- patient_or_caregiver: someone looking for a trial, a treatment or health information for themselves or family
- researcher_or_student: academic, student or general-interest research with no buying intent
- competitor_research: a query about another vendor (e.g. Trially, Tempus, Deep 6, Inato, Power, Antidote, 1nHealth, Hippocratic AI)
- bond_brand: a query naming Bond Health, Bond Trials or bondtrials
- job_seeker: jobs, salaries or careers
- other: anything else
buyer is true only for queries from people who could plausibly buy or recommend Bond (site_buyer, sponsor_cro_buyer, and competitor_research or bond_brand when the searcher is likely evaluating vendors).
stage: learning (understanding a topic), comparing (evaluating options or vendors), ready (looking for a vendor, pricing or a demo).
topic: 2 to 5 words. reason: one short sentence.`;

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["labels"],
  properties: {
    labels: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["query", "audience", "buyer", "stage", "topic", "reason"],
        properties: {
          query: { type: "string" },
          audience: { type: "string", enum: [...AUDIENCES] },
          buyer: { type: "boolean" },
          stage: { type: "string", enum: ["learning", "comparing", "ready"] },
          topic: { type: "string" },
          reason: { type: "string" },
        },
      },
    },
  },
};

type Label = { query: string; audience: (typeof AUDIENCES)[number]; buyer: boolean; stage: string; topic: string; reason: string };

interface QueryStats {
  query: string;
  clicks: number;
  impressions: number;
  position: number;
  topPage: string;
}

/** Collapses query+page rows into one row per query, keeping the page with the most impressions. */
function byQuery(rows: GscRow[]): QueryStats[] {
  const map = new Map<string, QueryStats & { posWeight: number; pageImpr: number }>();
  for (const r of rows) {
    if (!r.query) continue;
    const q = map.get(r.query) ?? { query: r.query, clicks: 0, impressions: 0, position: 0, topPage: "", posWeight: 0, pageImpr: -1 };
    q.clicks += r.clicks;
    q.impressions += r.impressions;
    q.posWeight += r.position * r.impressions;
    if (r.page && r.impressions > q.pageImpr) {
      q.topPage = r.page.replace(/^https?:\/\/[^/]+/, "") || "/";
      q.pageImpr = r.impressions;
    }
    map.set(r.query, q);
  }
  return [...map.values()]
    .map(({ posWeight, pageImpr: _pageImpr, ...q }) => ({ ...q, position: q.impressions ? posWeight / q.impressions : 0 }))
    .sort((a, b) => b.impressions - a.impressions);
}

async function main() {
  loadEnv();
  const args = parseArgs();
  const model = process.env.OPENAI_MODEL ?? DEFAULT_MODEL;
  const csv = args.get("queries-csv");
  const rows = csv ? gscCsv(csv, "query") : await gscQuery({ dimensions: ["query", "page"], days: args.num("days", 90) });
  const queries = byQuery(rows).slice(0, args.num("limit", 20_000));
  const chunks: QueryStats[][] = [];
  for (let i = 0; i < queries.length; i += 40) chunks.push(queries.slice(i, i + 40));
  console.log(`${queries.length} queries in ${chunks.length} requests to ${model}.`);
  if (args.has("dry-run")) {
    console.log("Dry run: first 10 queries:", queries.slice(0, 10).map((q) => q.query));
    return;
  }

  const labels = new Map<string, Label>();
  await mapPool(chunks, 4, async (chunk, i) => {
    const out = await respondJson<{ labels: Label[] }>({
      model,
      system: SYSTEM,
      user: `Label each query. Return them in the same order.\n${chunk.map((q) => `- ${q.query}`).join("\n")}`,
      name: "query_labels",
      schema: SCHEMA,
    });
    out.labels.forEach((l, j) => labels.set(chunk[j]?.query ?? l.query, l));
    console.log(`  batch ${i + 1}/${chunks.length} done`);
  });

  const rowsOut = queries.map((q) => {
    const l = labels.get(q.query);
    return {
      query: q.query,
      clicks: q.clicks,
      impressions: q.impressions,
      ctr: q.impressions ? (q.clicks / q.impressions).toFixed(3) : "0",
      position: q.position.toFixed(1),
      top_page: q.topPage,
      audience: l?.audience ?? "unlabeled",
      buyer: l?.buyer ?? false,
      stage: l?.stage ?? "",
      topic: l?.topic ?? "",
      reason: l?.reason ?? "",
    };
  });
  const csvFile = writeCsv("queries.csv", rowsOut);

  const totalImpr = rowsOut.reduce((s, r) => s + r.impressions, 0);
  const byAudience = AUDIENCES.map((a) => {
    const rs = rowsOut.filter((r) => r.audience === a);
    return [a, rs.length, rs.reduce((s, r) => s + r.impressions, 0), pct(rs.reduce((s, r) => s + r.impressions, 0), totalImpr), rs.reduce((s, r) => s + r.clicks, 0)] as (string | number)[];
  });
  const buyers = rowsOut.filter((r) => r.buyer);
  const top = (rs: typeof rowsOut, n = 25) =>
    rs.slice(0, n).map((r) => [r.query, r.impressions, r.clicks, r.position, r.top_page || "-", r.stage]);
  const md = [
    `# Search Console queries by audience (${new Date().toISOString().slice(0, 10)})`,
    `${rowsOut.length} queries, ${totalImpr.toLocaleString()} impressions. Labeled by ${model}. Full list: queries.csv.`,
    `## Who is searching`,
    mdTable(["Audience", "Queries", "Impressions", "Share", "Clicks"], byAudience),
    `## Top buyer queries`,
    mdTable(["Query", "Impressions", "Clicks", "Avg position", "Top page", "Stage"], top(buyers)),
    `## Buyer queries ranking below page 1 (position > 10)`,
    mdTable(["Query", "Impressions", "Clicks", "Avg position", "Top page", "Stage"], top(buyers.filter((r) => Number(r.position) > 10))),
    `## Buyer queries with impressions but no clicks`,
    mdTable(["Query", "Impressions", "Clicks", "Avg position", "Top page", "Stage"], top(buyers.filter((r) => r.clicks === 0 && r.impressions >= 10))),
    `_Usage: ${usageLine()}_`,
  ].join("\n\n");
  console.log(`Wrote ${csvFile}\nWrote ${writeText("queries.md", md + "\n")}\n${usageLine()}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
