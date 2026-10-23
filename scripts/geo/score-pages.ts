/**
 * Step 5: score why AI answers skip a page, and turn low scores into a page-by-page rewrite checklist.
 * Uses the Decisions API: one request per page with a score question per rubric item, plus the
 * probability that an AI assistant would cite the page.
 *
 *   npm run geo:score                       # all live pages; Search Console impressions from the latest page audit
 *   options: --only /compare  --limit 10  --dry-run
 *
 * Writes reports/geo/<date>/page-scores.csv and page-scores.md.
 */
import { parseArgs } from "./lib/args";
import { decide, probabilityOf, scoreFraction, type DecisionQuestion } from "./lib/decisions";
import { loadEnv } from "./lib/env";
import { mapPool, usageLine } from "./lib/openai";
import { livePages } from "./lib/pages";
import { latestReport, mdTable, readCsv, writeCsv, writeText } from "./lib/report";

interface Criterion {
  name: string;
  instructions: string;
  levels: [string, string][];
  fix: string;
}

/** What tends to get a page cited in AI answers. Each item scores 0 (weak) to the top level (strong). */
const RUBRIC: Criterion[] = [
  {
    name: "answer_first",
    instructions: "Does the page answer its main question directly in its first two or three sentences?",
    levels: [
      ["No direct answer", "The opening is background or promotion; the answer comes late or never."],
      ["Partial", "The opening hints at the answer but hedges or buries it."],
      ["Direct", "The first sentences state the answer plainly enough to quote."],
    ],
    fix: "Open with a one- or two-sentence direct answer to the page's main question.",
  },
  {
    name: "specific_facts",
    instructions: "How specific and verifiable are the page's claims?",
    levels: [
      ["Generic", "Mostly general statements without numbers, names or dates."],
      ["Some specifics", "Some numbers or named examples, but few tied to sources."],
      ["Specific and sourced", "Concrete numbers, names and dates tied to named sources."],
    ],
    fix: "Add specific facts (numbers, dates, named sources) that an AI can quote and attribute.",
  },
  {
    name: "question_headings",
    instructions: "Do the section headings match questions buyers ask, each answered right below?",
    levels: [
      ["Labels", "Headings are topic labels, not questions."],
      ["Some questions", "Some headings are buyer questions."],
      ["Buyer questions", "Most headings are buyer questions with the answer in the first sentence below."],
    ],
    fix: "Rewrite section headings as the questions buyers ask, with the answer in the first sentence under each.",
  },
  {
    name: "extractable_structure",
    instructions: "Are the key facts in pieces an AI can lift directly: tables, numbered steps, lists or an FAQ?",
    levels: [
      ["Prose only", "Key facts are spread through paragraphs."],
      ["Some structure", "A list or table exists but key facts are still in prose."],
      ["Highly structured", "Tables, steps, lists or an FAQ carry the key facts."],
    ],
    fix: "Move key facts into a table, numbered steps, a list or the FAQ.",
  },
  {
    name: "entity_clarity",
    instructions: "Where relevant to the topic, does the page make clear who Bond Health is, what it does and for whom?",
    levels: [
      ["Unclear", "Bond is absent or described vaguely where it matters."],
      ["Mentioned", "Bond is mentioned but what it does is not stated plainly."],
      ["Clear", "One quotable sentence says what Bond does and for whom, or the topic does not call for it."],
    ],
    fix: "Add one quotable sentence saying what Bond Health does and who it is for.",
  },
  {
    name: "coverage",
    instructions: "Does the page cover the subtopics a buyer researching this topic would expect?",
    levels: [
      ["Thin", "Major expected subtopics are missing."],
      ["Partial", "Covers the basics but misses some expected subtopics."],
      ["Thorough", "Covers what a buyer would expect to find."],
    ],
    fix: "Cover the missing subtopics buyers expect (see question-matches.md for unanswered questions).",
  },
  {
    name: "originality",
    instructions: "Does the page contain original data, worked examples, templates or specifics unlikely to be found on other sites?",
    levels: [
      ["Generic", "Restates what many sites say."],
      ["Some original", "Has some distinctive examples or data."],
      ["Distinctive", "Offers original data, templates or examples worth citing."],
    ],
    fix: "Add original material: Bond's own data, a worked example, a template or a checklist.",
  },
];

const QUESTIONS: DecisionQuestion[] = [
  ...RUBRIC.map((c) => ({ type: "score" as const, name: c.name, instructions: c.instructions, levels: c.levels.map(([label, description]) => ({ label, description })) })),
  {
    type: "predicate",
    name: "would_cite",
    instructions: "If an AI assistant were answering a buyer's question on this page's topic, would it likely cite this page as a source?",
  },
];

async function main() {
  loadEnv();
  const args = parseArgs();
  const only = args.get("only");
  const pages = livePages()
    .filter((p) => !only || p.path.startsWith(only))
    .slice(0, args.num("limit", 10_000));
  const impressions = new Map<string, number>();
  const audit = latestReport("page-audit.csv");
  if (audit) for (const r of readCsv(audit)) impressions.set(r.path, Number(r.impressions) || 0);
  console.log(`${pages.length} pages x ${QUESTIONS.length} questions: ${pages.length} Decisions requests.${audit ? "" : " (No page-audit.csv yet, so pages are not weighted by impressions.)"}`);
  if (args.has("dry-run")) return;

  const results = await mapPool(pages, 6, async (p, i) => {
    const a = await decide(
      {
        text: "This is one page from bondtrials.com (Bond Health, clinical trial patient recruitment software). Score it on what makes AI assistants cite a page. Claims in the content carry numbered citations on the live page; citedSources lists them.",
        data: { path: p.path, category: p.category, title: p.title, h1: p.h1, lastUpdated: p.lastUpdated, headings: p.headings, faq: p.faqQuestions, content: p.text.slice(0, 12000), citedSources: p.sources.slice(0, 40) },
      },
      QUESTIONS,
    );
    if ((i + 1) % 20 === 0) console.log(`  ${i + 1}/${pages.length} pages`);
    const scores = Object.fromEntries(RUBRIC.map((c) => [c.name, scoreFraction(a.get(c.name), c.levels.length)]));
    return { page: p, scores, cite: probabilityOf(a.get("would_cite")) };
  });

  const rows = results.map(({ page: p, scores, cite }) => {
    const weak = RUBRIC.filter((c) => scores[c.name] < 0.75);
    const impr = impressions.get(p.path) ?? 0;
    return {
      path: p.path,
      category: p.category,
      impressions: impr,
      would_cite: cite.toFixed(2),
      ...Object.fromEntries(RUBRIC.map((c) => [c.name, scores[c.name].toFixed(2)])),
      priority: Math.round(Math.max(impr, 1) * (1 - cite) * 100) / 100,
      checklist: weak.map((c) => c.fix),
    };
  });
  rows.sort((a, b) => b.priority - a.priority);
  const csvFile = writeCsv("page-scores.csv", rows);

  const avg = (name: string) => (results.reduce((s, r) => s + r.scores[name], 0) / Math.max(1, results.length)).toFixed(2);
  const md = [
    `# Why pages get skipped by AI answers (${new Date().toISOString().slice(0, 10)})`,
    `${rows.length} pages scored with the Decisions API (gpt-6-luna). Scores run 0 (weak) to 1 (strong); "would cite" is the probability an AI assistant cites the page. Priority = impressions x (1 - would cite). Full detail: page-scores.csv.`,
    `## Site-wide averages`,
    mdTable(["Criterion", "Average"], [...RUBRIC.map((c) => [c.name, avg(c.name)]), ["would_cite", (results.reduce((s, r) => s + r.cite, 0) / Math.max(1, results.length)).toFixed(2)]]),
    `## Rewrite checklist, highest priority first`,
    rows
      .filter((r) => r.checklist.length)
      .slice(0, 30)
      .map((r) => `### ${r.path}\n${r.impressions} impressions, would cite ${r.would_cite}\n${r.checklist.map((c) => `- [ ] ${c}`).join("\n")}`)
      .join("\n\n"),
    `_Usage: ${usageLine()}_`,
  ].join("\n\n");
  console.log(`Wrote ${csvFile}\nWrote ${writeText("page-scores.md", md + "\n")}\n${usageLine()}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
