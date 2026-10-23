/**
 * Steps 2 and 4: ask buyer questions the way ChatGPT, Claude and Gemini would (each with its own web search),
 * then record whether Bond is mentioned or cited, who is mentioned and cited instead, and what each searched for.
 *
 *   npm run geo:citations                          # questions from scripts/geo/questions.txt, 3 runs each
 *   options: --questions file.txt  --runs 3  --limit 5  --models chatgpt,claude,gemini  --dry-run
 *
 * Each assistant runs when its key is in .env.local (OPENAI_API_KEY, ANTHROPIC_API_KEY, GEMINI_API_KEY).
 * The APIs with web search are close stand-ins for the consumer apps, not exact copies, and answers vary
 * from run to run, which is why each question runs several times.
 * Writes reports/geo/<date>/citations.csv, citations.md and answers.jsonl.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseArgs } from "./lib/args";
import { loadEnv } from "./lib/env";
import { askClaude, DEFAULT_CLAUDE_MODEL } from "./lib/claude";
import { askGemini, DEFAULT_GEMINI_MODEL } from "./lib/gemini";
import { DEFAULT_SEARCH_MODEL, mapPool, respond, usageLine, type ResponseResult } from "./lib/openai";
import { mdTable, pct, writeCsv, writeText } from "./lib/report";

const BOND = /\bBond Health\b|\bBond Trials\b|bondtrials\.com/i;

/** Names to count in answers. Matching is approximate; "Power" is matched only in vendor-like phrases. */
const COMPETITORS: [string, RegExp][] = [
  ["Trially", /\btrially\b/i],
  ["Tempus / Deep 6", /\btempus\b|\bdeep ?6\b/i],
  ["Alleviate Health", /\balleviate health\b/i],
  ["Hippocratic AI", /\bhippocratic ai\b/i],
  ["Grove AI", /\bgrove ai\b/i],
  ["Inato", /\binato\b/i],
  ["Power", /\bwithpower\b|\bPower\b(?= (?:clinical|trials|is an?|offers|connects|\())/],
  ["Antidote", /\bantidote\b/i],
  ["1nHealth", /\b1nhealth\b/i],
  ["IQVIA", /\biqvia\b/i],
  ["Mendel", /\bmendel(?:\.ai)?\b/i],
  ["TriNetX", /\btrinetx\b/i],
  ["SubjectWell", /\bsubjectwell\b/i],
  ["Elligo", /\belligo\b/i],
  ["Clariness", /\bclariness\b/i],
  ["Paradigm Health", /\bparadigm health\b/i],
  ["Carebox", /\bcarebox\b/i],
  ["Trialbee", /\btrialbee\b/i],
  ["StudyTeam (Reify Health)", /\bstudyteam\b|\breify health\b/i],
];

function domain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function readQuestions(file: string): string[] {
  return readFileSync(file, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));
}

type Assistant = "chatgpt" | "claude" | "gemini";

const ASSISTANTS: Record<Assistant, { label: string; key: string; model: () => string; ask: (q: string) => Promise<ResponseResult> }> = {
  chatgpt: {
    label: "ChatGPT",
    key: "OPENAI_API_KEY",
    model: () => process.env.OPENAI_SEARCH_MODEL ?? DEFAULT_SEARCH_MODEL,
    ask: (question) =>
      respond({
        model: process.env.OPENAI_SEARCH_MODEL ?? DEFAULT_SEARCH_MODEL,
        input: question,
        tools: [{ type: "web_search", user_location: { type: "approximate", country: "US" } }],
        include: ["web_search_call.action.sources"],
      }),
  },
  claude: { label: "Claude", key: "ANTHROPIC_API_KEY", model: () => process.env.CLAUDE_MODEL ?? DEFAULT_CLAUDE_MODEL, ask: askClaude },
  gemini: { label: "Gemini", key: "GEMINI_API_KEY", model: () => process.env.GEMINI_MODEL ?? DEFAULT_GEMINI_MODEL, ask: askGemini },
};

interface Answer {
  assistant: Assistant;
  model: string;
  question: string;
  run: number;
  mentionsBond: boolean;
  citesBond: boolean;
  competitors: string[];
  citedDomains: string[];
  searches: string[];
  text: string;
  citations: { url: string; title?: string; domain?: string }[];
}

async function main() {
  loadEnv();
  const args = parseArgs();
  const runs = args.num("runs", 3);
  const requested = (args.get("models") ?? "chatgpt,claude,gemini").split(",").map((m) => m.trim()) as Assistant[];
  const assistants = requested.filter((a) => ASSISTANTS[a] && process.env[ASSISTANTS[a].key]);
  for (const a of requested.filter((x) => ASSISTANTS[x] && !process.env[ASSISTANTS[x].key])) console.log(`Skipping ${ASSISTANTS[a].label}: ${ASSISTANTS[a].key} is not set.`);
  const questions = readQuestions(resolve(args.get("questions") ?? "scripts/geo/questions.txt")).slice(0, args.num("limit", 1000));
  const jobs = assistants.flatMap((assistant) => questions.flatMap((question) => Array.from({ length: runs }, (_, run) => ({ assistant, question, run: run + 1 }))));
  console.log(`${questions.length} questions x ${runs} runs x ${assistants.length} assistants (${assistants.map((a) => `${ASSISTANTS[a].label}: ${ASSISTANTS[a].model()}`).join(", ")}) = ${jobs.length} web-search requests.`);
  if (args.has("dry-run")) {
    console.log(questions.map((q) => `  - ${q}`).join("\n"));
    return;
  }

  const results = await mapPool(jobs, 6, async ({ assistant, question, run }, i): Promise<Answer | undefined> => {
    let r: ResponseResult;
    try {
      r = await ASSISTANTS[assistant].ask(question);
    } catch (e) {
      console.log(`  ${i + 1}/${jobs.length} ${ASSISTANTS[assistant].label} FAILED: ${e instanceof Error ? e.message.slice(0, 200) : e}`);
      return undefined;
    }
    const citedDomains = [...new Set(r.citations.map((c) => c.domain ?? domain(c.url)))];
    const readDomains = [...citedDomains, ...r.searches.flatMap((s) => s.sources).map(domain)];
    console.log(`  ${i + 1}/${jobs.length} ${ASSISTANTS[assistant].label} ${BOND.test(r.text) ? "Bond mentioned" : "no Bond"}: ${question}`);
    return {
      assistant,
      model: ASSISTANTS[assistant].model(),
      question,
      run,
      mentionsBond: BOND.test(r.text),
      citesBond: readDomains.some((d) => d.endsWith("bondtrials.com")),
      competitors: COMPETITORS.filter(([, re]) => re.test(r.text)).map(([name]) => name),
      citedDomains,
      searches: r.searches.map((s) => s.query ?? "").filter(Boolean),
      text: r.text,
      citations: r.citations,
    };
  });
  const answers = results.filter((a): a is Answer => Boolean(a));

  writeText("answers.jsonl", answers.map((a) => JSON.stringify(a)).join("\n") + "\n");
  const csvFile = writeCsv(
    "citations.csv",
    answers.map((a) => ({
      assistant: ASSISTANTS[a.assistant].label,
      model: a.model,
      question: a.question,
      run: a.run,
      mentions_bond: a.mentionsBond,
      bondtrials_com_cited_or_read: a.citesBond,
      competitors_mentioned: a.competitors,
      cited_domains: a.citedDomains,
      searches_run: a.searches,
      answer_start: a.text.slice(0, 300),
    })),
  );

  const count = <T>(items: T[]) => {
    const m = new Map<T, number>();
    for (const it of items) m.set(it, (m.get(it) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  };
  const used = assistants.filter((a) => answers.some((x) => x.assistant === a));
  const rate = (as: Answer[]) => `${as.filter((a) => a.mentionsBond).length}/${as.length}`;
  const perQuestion = questions.map((q) => {
    const as = answers.filter((a) => a.question === q);
    return [
      q,
      ...used.map((a) => rate(as.filter((x) => x.assistant === a))),
      count(as.flatMap((a) => a.competitors)).slice(0, 4).map(([n, c]) => `${n} (${c})`).join(", ") || "-",
      count(as.flatMap((a) => a.citedDomains)).slice(0, 4).map(([d, c]) => `${d} (${c})`).join(", ") || "-",
    ];
  });
  const mentioned = answers.filter((a) => a.mentionsBond).length;
  const md = [
    `# Who AI answers mention and cite (${new Date().toISOString().slice(0, 10)})`,
    `${questions.length} buyer questions, ${runs} runs each, asked with web search. Bond was mentioned in ${mentioned} of ${answers.length} answers (${pct(mentioned, answers.length)}).`,
    `## By assistant`,
    mdTable(
      ["Assistant", "Model", "Answers", "Bond mentioned", "bondtrials.com cited or read", "Top vendors mentioned"],
      used.map((a) => {
        const as = answers.filter((x) => x.assistant === a);
        return [ASSISTANTS[a].label, ASSISTANTS[a].model(), as.length, `${as.filter((x) => x.mentionsBond).length} (${pct(as.filter((x) => x.mentionsBond).length, as.length)})`, as.filter((x) => x.citesBond).length, count(as.flatMap((x) => x.competitors)).slice(0, 4).map(([n, c]) => `${n} (${c})`).join(", ") || "-"];
      }),
    ),
    `## By question (Bond mentioned, per assistant)`,
    mdTable(["Question", ...used.map((a) => ASSISTANTS[a].label), "Others mentioned", "Most-cited sites"], perQuestion),
    `## Vendors mentioned across all answers`,
    mdTable(["Vendor", "Answers"], [["Bond Health", mentioned], ...count(answers.flatMap((a) => a.competitors))]),
    `## Most-cited sites`,
    mdTable(["Site", "Answers citing it"], count(answers.flatMap((a) => a.citedDomains)).slice(0, 30)),
    `## Questions where Bond never came up`,
    perQuestion.filter((r) => used.every((_, i) => String(r[i + 1]).startsWith("0/"))).map((r) => `- ${r[0]}`).join("\n") || "None.",
    `## What the assistants searched for (step 2)`,
    ...used.map((a) => `### ${ASSISTANTS[a].label}\n\n${mdTable(["Search", "Times run"], count(answers.filter((x) => x.assistant === a).flatMap((x) => x.searches)).slice(0, 40))}`),
    `_Usage: ${usageLine()}_`,
  ].join("\n\n");
  console.log(`Wrote ${csvFile}\nWrote ${writeText("citations.md", md + "\n")}\n${usageLine()}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
