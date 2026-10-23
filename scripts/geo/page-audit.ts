/**
 * Step 6: keep-or-change for the title, meta description, H1, FAQ and schema of every live page.
 *
 *   npm run geo:pages                                # page data from the repo + Search Console API
 *   npm run geo:pages -- --pages-csv Pages.csv       # or a Search Console UI export (page totals only)
 *   npm run geo:pages -- --no-gsc                    # judge on page content alone
 *   options: --days 90  --only /compare  --limit 10  --dry-run
 *
 * Writes reports/geo/<date>/page-audit.csv, page-audit.json and page-audit.md. Nothing on the site changes;
 * accepted suggestions are applied to src/content by hand and pass `npm run validate` like any edit.
 */
import { parseArgs } from "./lib/args";
import { loadEnv } from "./lib/env";
import { gscCsv, gscQuery, type GscRow } from "./lib/gsc";
import { DEFAULT_MODEL, mapPool, respondJson, usageLine } from "./lib/openai";
import { livePages, type PageFacts } from "./lib/pages";
import { mdTable, writeCsv, writeText } from "./lib/report";

const SYSTEM = `You review one page of bondtrials.com (Bond Health: AI software and services for clinical trial patient recruitment, sold to research sites, site networks, CROs and sponsors) for search and AI-answer visibility. Decide keep or change for its title, meta description, H1 and FAQ.

Rules:
- Change only when the new version is clearly better for the searchers in the data; otherwise keep and leave suggestion empty.
- Title: at most 60 characters, excluding the " | Bond Health" suffix the site adds unless the title already says "Bond Health". Lead with the words searchers use.
- Meta description: 70 to 160 characters; say what the page answers and for whom.
- H1: states the page's main topic or question plainly; it may differ from the title.
- FAQ: suggest at most 3 questions buyers ask that this page's content already answers; never questions the page cannot support.
- Use only facts present in the page data. Never invent features, numbers or customers.
- Wording Bond must follow: SOC 2 is "compliant", never "certified". ISO/IEC 27001 certifies Bond Health's information security management system, never the product. On comparison pages, never mention a competitor's security or compliance, never quote a competitor statistic that could beat Bond's, and never discuss patient safety. Never mention Mayo Clinic or Mayo Clinic Platform.`;

const ELEMENT = {
  type: "object",
  additionalProperties: false,
  required: ["verdict", "suggestion", "reason"],
  properties: {
    verdict: { type: "string", enum: ["keep", "change"] },
    suggestion: { type: "string" },
    reason: { type: "string" },
  },
};

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["title", "description", "h1", "faq"],
  properties: {
    title: ELEMENT,
    description: ELEMENT,
    h1: ELEMENT,
    faq: {
      type: "object",
      additionalProperties: false,
      required: ["verdict", "add_questions", "reason"],
      properties: {
        verdict: { type: "string", enum: ["keep", "change"] },
        add_questions: { type: "array", items: { type: "string" } },
        reason: { type: "string" },
      },
    },
  },
};

type Element = { verdict: "keep" | "change"; suggestion: string; reason: string };
type Verdicts = { title: Element; description: Element; h1: Element; faq: { verdict: "keep" | "change"; add_questions: string[]; reason: string } };

interface PageStats {
  clicks: number;
  impressions: number;
  position: number;
  topQueries: string[];
}

const toPath = (url: string) => (url.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/");

async function loadStats(args: ReturnType<typeof parseArgs>): Promise<Map<string, PageStats>> {
  const stats = new Map<string, PageStats>();
  if (args.has("no-gsc")) return stats;
  const add = (r: GscRow) => {
    if (!r.page) return;
    const p = toPath(r.page);
    const s = stats.get(p) ?? { clicks: 0, impressions: 0, position: 0, topQueries: [] };
    s.position = (s.position * s.impressions + r.position * r.impressions) / Math.max(1, s.impressions + r.impressions);
    s.clicks += r.clicks;
    s.impressions += r.impressions;
    stats.set(p, s);
  };
  const csv = args.get("pages-csv");
  if (csv) {
    gscCsv(csv, "page").forEach(add);
    return stats;
  }
  // Page totals come from the page dimension, which includes queries Google anonymizes;
  // the query+page rows (which leave those out) only supply each page's top queries.
  (await gscQuery({ dimensions: ["page"], days: args.num("days", 90) })).forEach(add);
  const rows = await gscQuery({ dimensions: ["query", "page"], days: args.num("days", 90) });
  const byPage = new Map<string, GscRow[]>();
  for (const r of rows) if (r.page && r.query) byPage.set(toPath(r.page), [...(byPage.get(toPath(r.page)) ?? []), r]);
  for (const [p, rs] of byPage) {
    const s = stats.get(p);
    if (s) s.topQueries = rs.sort((a, b) => b.impressions - a.impressions).slice(0, 10).map((r) => `${r.query} (${r.impressions} impr, pos ${r.position.toFixed(1)})`);
  }
  return stats;
}

function prompt(p: PageFacts, s: PageStats | undefined): string {
  return [
    `Path: ${p.path} (category: ${p.category}, ${p.words} words)`,
    `Title (${p.title.length} chars; rendered as "${p.renderedTitle}"): ${p.title}`,
    `Meta description (${p.description.length} chars): ${p.description}`,
    `H1: ${p.h1}`,
    `Section headings:\n${p.headings.map((h) => `- ${h}`).join("\n")}`,
    `FAQ questions (${p.faqQuestions.length}):\n${p.faqQuestions.map((q) => `- ${q}`).join("\n") || "- none"}`,
    s
      ? `Search Console, last 90 days: ${s.impressions} impressions, ${s.clicks} clicks, average position ${s.position.toFixed(1)}.\nTop queries:\n${s.topQueries.map((q) => `- ${q}`).join("\n") || "- not available"}`
      : "Search Console: no data for this page.",
  ].join("\n\n");
}

async function main() {
  loadEnv();
  const args = parseArgs();
  const model = process.env.OPENAI_MODEL ?? DEFAULT_MODEL;
  const only = args.get("only");
  const pages = livePages()
    .filter((p) => !only || p.path.startsWith(only))
    .slice(0, args.num("limit", 10_000));
  const stats = await loadStats(args);
  console.log(`${pages.length} live pages, ${stats.size} with Search Console data, ${pages.length} requests to ${model}.`);
  if (args.has("dry-run")) {
    console.log(`Sample prompt for ${pages[0]?.path}:\n\n${pages[0] ? prompt(pages[0], stats.get(pages[0].path)) : ""}`);
    return;
  }

  const results = await mapPool(pages, 4, async (p, i) => {
    const v = await respondJson<Verdicts>({ model, system: SYSTEM, user: prompt(p, stats.get(p.path)), name: "page_verdicts", schema: SCHEMA });
    console.log(`  ${i + 1}/${pages.length} ${p.path}`);
    return { page: p, stats: stats.get(p.path), v };
  });

  const rows = results.map(({ page: p, stats: s, v }) => ({
    path: p.path,
    category: p.category,
    impressions: s?.impressions ?? "",
    clicks: s?.clicks ?? "",
    ctr: s && s.impressions ? (s.clicks / s.impressions).toFixed(3) : "",
    position: s ? s.position.toFixed(1) : "",
    rendered_title_chars: p.renderedTitle.length,
    title_verdict: v.title.verdict,
    title_suggestion: v.title.suggestion,
    title_reason: v.title.reason,
    suggested_title_chars: v.title.suggestion ? v.title.suggestion.length : "",
    description_chars: p.description.length,
    description_verdict: v.description.verdict,
    description_suggestion: v.description.suggestion,
    description_reason: v.description.reason,
    suggested_description_chars: v.description.suggestion ? v.description.suggestion.length : "",
    h1_verdict: v.h1.verdict,
    h1_suggestion: v.h1.suggestion,
    h1_reason: v.h1.reason,
    faq_count: p.faqQuestions.length,
    faq_verdict: v.faq.verdict,
    faq_add_questions: v.faq.add_questions,
    faq_reason: v.faq.reason,
    schema_types: p.schemaTypes,
    schema_verdict: p.schemaTypes.includes("FAQPage") ? "keep" : "change: add an FAQ, which emits FAQPage",
  }));
  const csvFile = writeCsv("page-audit.csv", rows);
  writeText("page-audit.json", JSON.stringify(results.map(({ page, stats: s, v }) => ({ path: page.path, stats: s ?? null, ...v })), null, 2) + "\n");

  const changes = (k: "title" | "description" | "h1" | "faq") => results.filter((r) => r.v[k].verdict === "change").length;
  const byImpr = [...rows].sort((a, b) => Number(b.impressions || 0) - Number(a.impressions || 0));
  const md = [
    `# Page audit: keep or change (${new Date().toISOString().slice(0, 10)})`,
    `${rows.length} live pages, judged by ${model}${stats.size ? " with Search Console data" : " on page content only"}. Full detail: page-audit.csv.`,
    mdTable(
      ["Element", "Change", "Keep"],
      [
        ...(["title", "description", "h1", "faq"] as const).map((k): (string | number)[] => [k, changes(k), rows.length - changes(k)]),
        ["schema (FAQPage)", rows.filter((r) => r.schema_verdict !== "keep").length, rows.filter((r) => r.schema_verdict === "keep").length],
      ],
    ),
    `## Suggestions that break length limits (shorten before applying)`,
    rows
      .flatMap((r) => [
        r.title_verdict === "change" && !r.title_suggestion.includes("Bond Health") && r.title_suggestion.length > 60 ? `- ${r.path}: title is ${r.title_suggestion.length} characters (max 60)` : "",
        r.description_verdict === "change" && (r.description_suggestion.length < 70 || r.description_suggestion.length > 160) ? `- ${r.path}: description is ${r.description_suggestion.length} characters (70 to 160)` : "",
      ])
      .filter(Boolean)
      .join("\n") || "None.",
    `## Suggested title changes, most-seen pages first`,
    mdTable(["Page", "Impressions", "Current title", "Suggested", "Why"], byImpr.filter((r) => r.title_verdict === "change").slice(0, 40).map((r) => [r.path, r.impressions || "-", pages.find((p) => p.path === r.path)?.title ?? "", r.title_suggestion, r.title_reason])),
    `## Suggested description changes, most-seen pages first`,
    mdTable(["Page", "Impressions", "Suggested", "Why"], byImpr.filter((r) => r.description_verdict === "change").slice(0, 40).map((r) => [r.path, r.impressions || "-", r.description_suggestion, r.description_reason])),
    `## FAQ questions to add`,
    mdTable(["Page", "Questions"], rows.filter((r) => r.faq_verdict === "change").map((r) => [r.path, r.faq_add_questions.join(" / ")])),
    `_Usage: ${usageLine()}_`,
  ].join("\n\n");
  console.log(`Wrote ${csvFile}\nWrote ${writeText("page-audit.md", md + "\n")}\n${usageLine()}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
