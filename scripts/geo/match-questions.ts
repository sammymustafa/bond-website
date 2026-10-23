/**
 * Step 3: match each buyer question to the best page on the site, and list the questions with no good page.
 * Uses the Decisions API: one request per page, asking for each question whether the page answers it.
 *
 *   npm run geo:match                      # questions from the latest geo:queries and geo:citations runs + questions.txt
 *   options: --max-queries 150  --threshold 0.5  --questions file.txt  --dry-run
 *
 * Question sources:
 *   - Search Console buyer queries (latest queries.csv, buyer=true, brand searches excluded), by impressions
 *   - scripts/geo/questions.txt
 *   - the searches ChatGPT, Claude and Gemini ran in the latest citation check (answers.jsonl)
 * Writes reports/geo/<date>/question-matches.csv and question-matches.md.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseArgs } from "./lib/args";
import { decide, probabilityOf } from "./lib/decisions";
import { loadEnv } from "./lib/env";
import { mapPool, usageLine } from "./lib/openai";
import { livePages } from "./lib/pages";
import { latestReport, mdTable, readCsv, writeCsv, writeText } from "./lib/report";

interface BuyerQuestion {
  text: string;
  source: string;
  impressions: number;
  googlePage: string;
}

function collectQuestions(args: ReturnType<typeof parseArgs>): BuyerQuestion[] {
  const out = new Map<string, BuyerQuestion>();
  const add = (q: BuyerQuestion) => {
    const key = q.text.toLowerCase().replace(/[?.!]+$/, "").trim();
    if (key && !out.has(key)) out.set(key, q);
  };
  const queriesCsv = latestReport("queries.csv");
  if (queriesCsv) {
    readCsv(queriesCsv)
      .filter((r) => r.buyer === "true" && r.audience !== "bond_brand")
      .sort((a, b) => Number(b.impressions) - Number(a.impressions))
      .slice(0, args.num("max-queries", 150))
      .forEach((r) => add({ text: r.query, source: "search console", impressions: Number(r.impressions), googlePage: r.top_page }));
  }
  const file = resolve(args.get("questions") ?? "scripts/geo/questions.txt");
  readFileSync(file, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .forEach((text) => add({ text, source: "questions.txt", impressions: 0, googlePage: "" }));
  const answers = latestReport("answers.jsonl");
  if (answers) {
    readFileSync(answers, "utf8")
      .split("\n")
      .filter(Boolean)
      .flatMap((l) => (JSON.parse(l) as { searches: string[] }).searches)
      .slice(0, args.num("max-searches", 100))
      .forEach((text) => add({ text, source: "AI assistant search", impressions: 0, googlePage: "" }));
  }
  return [...out.values()];
}

async function main() {
  loadEnv();
  const args = parseArgs();
  const threshold = args.num("threshold", 0.5);
  const pages = livePages();
  const questions = collectQuestions(args);
  const bySource = (s: string) => questions.filter((q) => q.source === s).length;
  console.log(
    `${questions.length} buyer questions (${bySource("search console")} Search Console, ${bySource("questions.txt")} questions.txt, ${bySource("AI assistant search")} AI assistant searches) x ${pages.length} pages: ${pages.length * Math.ceil(questions.length / 400)} Decisions requests.`,
  );
  if (args.has("dry-run")) {
    console.log(questions.slice(0, 15).map((q) => `  [${q.source}] ${q.text}`).join("\n"));
    return;
  }

  const qs = questions.map((q, i) => ({
    type: "predicate" as const,
    name: `q${i}`,
    instructions: `A buyer asks: "${q.text}". Would this page give them a direct, useful answer, good enough for an AI assistant to cite?`,
  }));
  // probs[pageIndex][questionIndex]
  const probs = await mapPool(pages, 6, async (p, i) => {
    const answers = await decide(
      {
        text: "This is one page from bondtrials.com (Bond Health, clinical trial patient recruitment software). Judge it against each buyer question.",
        data: { path: p.path, title: p.title, h1: p.h1, description: p.description, headings: p.headings, faq: p.faqQuestions, content: p.text.slice(0, 6000) },
      },
      qs,
    );
    if ((i + 1) % 20 === 0) console.log(`  ${i + 1}/${pages.length} pages`);
    return qs.map((q) => probabilityOf(answers.get(q.name)));
  });

  const rows = questions.map((q, qi) => {
    const ranked = pages.map((p, pi) => ({ path: p.path, prob: probs[pi][qi] })).sort((a, b) => b.prob - a.prob);
    const [best, second] = ranked;
    const covered = best.prob >= threshold;
    return {
      question: q.text,
      source: q.source,
      impressions: q.impressions || "",
      covered,
      best_page: best.path,
      best_probability: best.prob.toFixed(2),
      runner_up: second?.path ?? "",
      runner_up_probability: second ? second.prob.toFixed(2) : "",
      google_shows: q.googlePage,
      google_shows_other_page: Boolean(covered && q.googlePage && q.googlePage !== best.path),
    };
  });
  const csvFile = writeCsv("question-matches.csv", rows);

  const gaps = rows.filter((r) => !r.covered).sort((a, b) => Number(b.impressions || 0) - Number(a.impressions || 0));
  const mismatched = rows.filter((r) => r.google_shows_other_page).sort((a, b) => Number(b.impressions || 0) - Number(a.impressions || 0));
  const md = [
    `# Buyer questions matched to pages (${new Date().toISOString().slice(0, 10)})`,
    `${rows.length} buyer questions checked against ${pages.length} live pages with the Decisions API (gpt-6-luna). A question counts as covered when its best page scores at least ${threshold}. Full detail: question-matches.csv.`,
    mdTable(
      ["Source", "Questions", "Covered", "No good page"],
      ["search console", "questions.txt", "AI assistant search"].map((s) => {
        const rs = rows.filter((r) => r.source === s);
        return [s, rs.length, rs.filter((r) => r.covered).length, rs.filter((r) => !r.covered).length];
      }),
    ),
    `## Questions with no good page (create or expand)`,
    mdTable(["Question", "Source", "Impressions", "Closest page", "Score"], gaps.slice(0, 60).map((r) => [r.question, r.source, r.impressions || "-", r.best_page, r.best_probability])),
    `## Google shows a different page than the best match`,
    "Internal links, titles or canonical signals may be pointing Google at the weaker page.",
    mdTable(["Query", "Impressions", "Google shows", "Best page", "Score"], mismatched.slice(0, 30).map((r) => [r.question, r.impressions || "-", r.google_shows, r.best_page, r.best_probability])),
    `_Usage: ${usageLine()}_`,
  ].join("\n\n");
  console.log(`Wrote ${csvFile}\nWrote ${writeText("question-matches.md", md + "\n")}\n${usageLine()}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
