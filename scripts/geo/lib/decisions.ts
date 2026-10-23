/**
 * Client for OpenAI's Decisions API (POST /v1/decisions, gpt-6-luna): bounded answers to many questions
 * about one shared input. Each request takes 1 to 400 questions of three types:
 *   predicate -> probability (0 to 1) that a condition is true
 *   choice    -> one of the supplied values, with per-value probabilities and a confidence
 *   score     -> probability-weighted index over 2 to 10 ordered levels, with a confidence
 * Decisions returns no free text; anything that needs writing (a new title, a draft) uses the Responses API.
 * Pricing at launch (October 2026): uncached input $0.10 per 1M tokens, output not charged.
 */
import { usage } from "./openai";

export type DecisionQuestion =
  | { type: "predicate"; name: string; instructions: string }
  | { type: "choice"; name: string; instructions: string; choices: { value: string; description: string }[] }
  | { type: "score"; name: string; instructions: string; levels: { label: string; description: string }[] };

export type DecisionAnswer =
  | { type: "predicate"; name: string; probability: number }
  | { type: "choice"; name: string; choice: string; probabilities: { value: string; probability: number }[]; confidence: number }
  | { type: "score"; name: string; score: number; probabilities: { value: number; label: string; probability: number }[]; confidence: number }
  | { type: "refusal"; name: string };

/** Shared evidence: a context sentence plus native JSON data. */
export interface DecisionInput {
  text: string;
  data?: unknown;
}

const MAX_QUESTIONS = 400;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function decideOnce(input: DecisionInput, questions: DecisionQuestion[]): Promise<DecisionAnswer[]> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY is not set (add it to .env.local).");
  const content: Record<string, unknown>[] = [{ type: "input_text", text: input.text }];
  if (input.data !== undefined) content.push({ type: "input_json", data: input.data });
  const body = {
    model: process.env.OPENAI_DECISIONS_MODEL ?? "gpt-6-luna",
    input: [{ role: "user", content }],
    questions,
  };
  for (let attempt = 0; ; attempt++) {
    const res = await fetch("https://api.openai.com/v1/decisions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const json = (await res.json()) as { answers?: DecisionAnswer[]; usage?: { input_tokens?: number } };
      usage.decisionRequests += 1;
      usage.decisionInputTokens += json.usage?.input_tokens ?? 0;
      return json.answers ?? [];
    }
    const errText = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt < 5) {
      await sleep(2000 * 2 ** attempt);
      continue;
    }
    throw new Error(`Decisions ${res.status}: ${errText.slice(0, 500)}`);
  }
}

/** Asks any number of questions about one input, 400 per request, and returns answers by name. */
export async function decide(input: DecisionInput, questions: DecisionQuestion[]): Promise<Map<string, DecisionAnswer>> {
  const answers = new Map<string, DecisionAnswer>();
  for (let i = 0; i < questions.length; i += MAX_QUESTIONS) {
    for (const a of await decideOnce(input, questions.slice(i, i + MAX_QUESTIONS))) answers.set(a.name, a);
  }
  return answers;
}

export const probabilityOf = (a: DecisionAnswer | undefined): number => (a && a.type === "predicate" ? a.probability : 0);
export const choiceOf = (a: DecisionAnswer | undefined): string => (a && a.type === "choice" ? a.choice : "");
export const confidenceOf = (a: DecisionAnswer | undefined): number => (a && (a.type === "choice" || a.type === "score") ? a.confidence : 0);
/** Score as a fraction of the top level (0 to 1), so rubrics with different level counts compare. */
export function scoreFraction(a: DecisionAnswer | undefined, levels: number): number {
  return a && a.type === "score" ? a.score / (levels - 1) : 0;
}
