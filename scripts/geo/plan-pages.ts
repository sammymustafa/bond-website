/**
 * Step 7: decide which pages to create and which to edit.
 *   1. Sorts every page the AI assistants cited (latest answers.jsonl) by page type, to see which types get cited.
 *   2. For each buyer question with no good page (latest question-matches.csv), picks the page type to create
 *      and checks that the topic is one Bond can credibly own.
 *   3. Lists existing pages to edit: weak AI citability (latest page-scores.csv) on pages that buyers'
 *      questions land on.
 * Uses the Decisions API for every judgment. It does not write pages: anything on the create list is drafted
 * through the normal content process (sources, `npm run validate`, Bond's wording rules).
 *
 *   npm run geo:plan        (run geo:citations, geo:match and geo:score first)
 *   options: --dry-run
 *
 * Writes reports/geo/<date>/page-plan.csv and page-plan.md.
 */
import { readFileSync } from "node:fs";
import { parseArgs } from "./lib/args";
import { choiceOf, decide, probabilityOf, type DecisionQuestion } from "./lib/decisions";
import { loadEnv } from "./lib/env";
import { usageLine } from "./lib/openai";
import { latestReport, mdTable, pct, readCsv, writeCsv, writeText } from "./lib/report";

const PAGE_TYPES: { value: string; description: string }[] = [
  { value: "comparison", description: "Compares named vendors head to head, or lists alternatives to one vendor." },
  { value: "best_of_list", description: "A roundup or ranking of the best tools or vendors for a need." },
  { value: "vendor_page", description: "A vendor's own product, solution, pricing or feature page." },
  { value: "guide", description: "A how-to or explainer that teaches a process." },
  { value: "glossary", description: "Defines a term." },
  { value: "template", description: "A template, checklist or downloadable tool." },
  { value: "research", description: "A study, paper, survey or data report." },
  { value: "directory", description: "A review site, marketplace or directory listing many vendors." },
  { value: "forum", description: "A forum, Q&A or community discussion." },
  { value: "news", description: "News, a press release or an announcement." },
];

interface Answer {
  question: string;
  citations: { url: string; title?: string }[];
}

const domain = (u: string) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return u;
  }
};
const cleanUrl = (u: string) => u.replace(/[?&]utm_source=openai$/, "");

async function main() {
  loadEnv();
  const args = parseArgs();
  const answersFile = latestReport("answers.jsonl");
  const matchesFile = latestReport("question-matches.csv");
  const scoresFile = latestReport("page-scores.csv");
  if (!answersFile || !matchesFile || !scoresFile) {
    console.error("Missing inputs. Run, in order: npm run geo:citations, npm run geo:match, npm run geo:score.");
    process.exit(1);
  }
  const answers = readFileSync(answersFile, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l) as Answer);
  const matches = readCsv(matchesFile);
  const scores = readCsv(scoresFile);

  // 1. Page types among cited pages
  const cited = new Map<string, string>();
  // Gemini cites through Google redirect links, which say nothing about the page itself; leave them out.
  const isRedirect = (u: string) => domain(u) === "vertexaisearch.cloud.google.com";
  for (const a of answers) for (const c of a.citations) if (!isRedirect(c.url)) cited.set(cleanUrl(c.url), c.title ?? "");
  const urls = [...cited.keys()];
  const gaps = matches.filter((m) => m.covered !== "true");
  console.log(`${answers.length} answers citing ${urls.length} pages; ${gaps.length} questions without a good page; ${scores.length} scored pages.`);
  if (args.has("dry-run")) return;

  const typeAnswers = await decide(
    { text: "Each question names one web page that an AI assistant cited when answering buyer questions about clinical trial recruitment software. Classify the page from its URL and title." },
    urls.map((u, i): DecisionQuestion => ({ type: "choice", name: `u${i}`, instructions: `Page: "${cited.get(u) || "(no title)"}" at ${u}. What type of page is this?`, choices: PAGE_TYPES })),
  );
  const typeOf = new Map(urls.map((u, i) => [u, choiceOf(typeAnswers.get(`u${i}`)) || "unknown"]));
  const typeCount = new Map<string, number>();
  for (const a of answers) {
    const types = new Set(a.citations.filter((c) => !isRedirect(c.url)).map((c) => typeOf.get(cleanUrl(c.url)) ?? "unknown"));
    for (const t of types) typeCount.set(t, (typeCount.get(t) ?? 0) + 1);
  }
  const typeShare = Object.fromEntries([...typeCount.entries()].sort((a, b) => b[1] - a[1]).map(([t, n]) => [t, `${pct(n, answers.length)} of answers`]));

  // 2. Create list: page type and a credibility check for each uncovered question
  const createAnswers = gaps.length
    ? await decide(
        {
          text: "Bond Health sells AI software and services for clinical trial patient recruitment to research sites, site networks, CROs and sponsors. For each buyer question its website has no good page for, decide what page to create. The data shows which page types AI assistants cite in this market.",
          data: { citedPageTypes: typeShare },
        },
        gaps.flatMap((g, i): DecisionQuestion[] => [
          { type: "choice", name: `t${i}`, instructions: `Buyer question: "${g.question}". Which page type should Bond create so AI assistants cite it for this question?`, choices: PAGE_TYPES.filter((t) => !["research", "directory", "forum", "news"].includes(t.value)) },
          { type: "predicate", name: `c${i}`, instructions: `Buyer question: "${g.question}". Could Bond credibly publish a useful, well-sourced page answering this, relevant to buyers of clinical trial recruitment software?` },
        ]),
      )
    : new Map();
  const createRows = gaps
    .map((g, i) => ({
      action: "create",
      question: g.question,
      source: g.source,
      impressions: Number(g.impressions) || 0,
      page_type: choiceOf(createAnswers.get(`t${i}`)),
      credible: probabilityOf(createAnswers.get(`c${i}`)),
      closest_existing: g.best_page,
    }))
    .filter((r) => r.credible >= 0.6)
    .sort((a, b) => b.impressions - a.impressions || b.credible - a.credible);

  // 3. Edit list: pages buyers' questions land on, ranked by impressions and weak citability
  const landed = new Map<string, number>();
  for (const m of matches) if (m.covered === "true") landed.set(m.best_page, (landed.get(m.best_page) ?? 0) + 1);
  const editRows = scores
    .filter((s) => Number(s.would_cite) < 0.6 && (landed.has(s.path) || Number(s.impressions) > 0))
    .map((s) => ({ action: "edit", path: s.path, impressions: Number(s.impressions) || 0, buyer_questions: landed.get(s.path) ?? 0, would_cite: s.would_cite, checklist: s.checklist }))
    .sort((a, b) => b.impressions + b.buyer_questions * 100 - (a.impressions + a.buyer_questions * 100))
    .slice(0, 40);

  const csvFile = writeCsv("page-plan.csv", [
    ...createRows.map((r) => ({ action: r.action, target: r.question, source: r.source, impressions: r.impressions, page_type: r.page_type, score: r.credible.toFixed(2), notes: `closest existing: ${r.closest_existing}` })),
    ...editRows.map((r) => ({ action: r.action, target: r.path, source: "page-scores", impressions: r.impressions, page_type: "", score: r.would_cite, notes: r.checklist })),
  ]);
  const md = [
    `# Pages to create and edit (${new Date().toISOString().slice(0, 10)})`,
    `Judged with the Decisions API (gpt-6-luna) from ${answers.length} ChatGPT answers, ${matches.length} buyer questions and ${scores.length} scored pages. Nothing is written automatically: create-list pages go through the normal content process. Full list: page-plan.csv.`,
    `## Page types AI assistants cite`,
    mdTable(["Page type", "Answers citing one"], [...typeCount.entries()].sort((a, b) => b[1] - a[1]).map(([t, n]) => [t, `${n} (${pct(n, answers.length)})`])),
    `## Create (questions with no good page that Bond can credibly answer)`,
    mdTable(["Question", "Source", "Impressions", "Page type", "Credibility", "Closest existing page"], createRows.slice(0, 40).map((r) => [r.question, r.source, r.impressions || "-", r.page_type, r.credible.toFixed(2), r.closest_existing])),
    `## Edit (pages buyers land on that AI answers rarely cite)`,
    mdTable(["Page", "Impressions", "Buyer questions it answers", "Would cite", "Top fix"], editRows.slice(0, 25).map((r) => [r.path, r.impressions, r.buyer_questions, r.would_cite, r.checklist.split("; ")[0] || "-"])),
    `_Usage: ${usageLine()}_`,
  ].join("\n\n");
  console.log(`Wrote ${csvFile}\nWrote ${writeText("page-plan.md", md + "\n")}\n${usageLine()}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
