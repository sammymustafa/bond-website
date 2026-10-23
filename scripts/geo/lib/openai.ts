/**
 * Small fetch-based client for OpenAI's Responses API (no SDK dependency).
 *
 * Models come from .env.local so they can change without code edits:
 *   OPENAI_MODEL         model for labeling and judging (default gpt-6-luna)
 *   OPENAI_SEARCH_MODEL  model used with web search to stand in for ChatGPT (default gpt-6-luna)
 *   OPENAI_REASONING_EFFORT  optional, e.g. "low", for reasoning models
 * Run `npm run geo:check` to see which models your key can use.
 */

export const DEFAULT_MODEL = "gpt-6-luna";
export const DEFAULT_SEARCH_MODEL = "gpt-6-luna";

export interface Usage {
  requests: number;
  inputTokens: number;
  outputTokens: number;
  webSearches: number;
  decisionRequests: number;
  decisionInputTokens: number;
  claudeRequests: number;
  claudeInputTokens: number;
  claudeOutputTokens: number;
  claudeWebSearches: number;
  geminiRequests: number;
  geminiInputTokens: number;
  geminiOutputTokens: number;
  geminiSearches: number;
}

export const usage: Usage = {
  requests: 0,
  inputTokens: 0,
  outputTokens: 0,
  webSearches: 0,
  decisionRequests: 0,
  decisionInputTokens: 0,
  claudeRequests: 0,
  claudeInputTokens: 0,
  claudeOutputTokens: 0,
  claudeWebSearches: 0,
  geminiRequests: 0,
  geminiInputTokens: 0,
  geminiOutputTokens: 0,
  geminiSearches: 0,
};

/** List prices at the time of writing (USD); override in .env.local if OpenAI's pricing page changes. */
const price = (name: string, fallback: number) => Number(process.env[name] ?? fallback);

export interface Citation {
  url: string;
  title?: string;
  /** Set when the URL is a redirect (Gemini) and the source's domain is known separately. */
  domain?: string;
}

export interface WebSearchAction {
  type: string;
  query?: string;
  url?: string;
  sources: string[];
}

export interface ResponseResult {
  text: string;
  citations: Citation[];
  searches: WebSearchAction[];
  raw: unknown;
}

interface ResponsesBody {
  model: string;
  input: string | { role: "system" | "user"; content: string }[];
  tools?: Record<string, unknown>[];
  include?: string[];
  text?: Record<string, unknown>;
  reasoning?: { effort: string };
}

type OutputItem = {
  type?: string;
  action?: { type?: string; query?: string; url?: string; sources?: { url?: string }[] };
  content?: { type?: string; text?: string; annotations?: { type?: string; url?: string; title?: string }[] }[];
};

function apiKey(): string {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY is not set (add it to .env.local).");
  return key;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Calls POST /v1/responses with retries on rate limits and server errors. */
export async function respond(body: ResponsesBody): Promise<ResponseResult> {
  const effort = process.env.OPENAI_REASONING_EFFORT;
  const payload: ResponsesBody = effort ? { ...body, reasoning: { effort } } : body;
  for (let attempt = 0; ; attempt++) {
    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey()}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      const json = (await res.json()) as { output?: OutputItem[]; usage?: { input_tokens?: number; output_tokens?: number } };
      usage.requests += 1;
      usage.inputTokens += json.usage?.input_tokens ?? 0;
      usage.outputTokens += json.usage?.output_tokens ?? 0;
      return parseOutput(json.output ?? [], json);
    }
    const errText = await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt < 5) {
      await sleep(2000 * 2 ** attempt);
      continue;
    }
    throw new Error(`OpenAI ${res.status}: ${errText.slice(0, 500)}`);
  }
}

function parseOutput(output: OutputItem[], raw: unknown): ResponseResult {
  let text = "";
  const citations: Citation[] = [];
  const searches: WebSearchAction[] = [];
  for (const item of output) {
    if (item.type === "web_search_call") {
      usage.webSearches += 1;
      const a = item.action ?? {};
      searches.push({
        type: a.type ?? "search",
        query: a.query,
        url: a.url,
        sources: (a.sources ?? []).map((s) => s.url ?? "").filter(Boolean),
      });
    }
    if (item.type === "message") {
      for (const c of item.content ?? []) {
        if (c.type !== "output_text") continue;
        text += c.text ?? "";
        for (const ann of c.annotations ?? []) {
          if (ann.type === "url_citation" && ann.url) citations.push({ url: ann.url, title: ann.title });
        }
      }
    }
  }
  return { text, citations, searches, raw };
}

/** Asks for JSON matching `schema` (strict structured output) and parses it. */
export async function respondJson<T>(opts: {
  model: string;
  system: string;
  user: string;
  name: string;
  schema: Record<string, unknown>;
}): Promise<T> {
  const r = await respond({
    model: opts.model,
    input: [
      { role: "system", content: opts.system },
      { role: "user", content: opts.user },
    ],
    text: { format: { type: "json_schema", name: opts.name, schema: opts.schema, strict: true } },
  });
  return JSON.parse(r.text) as T;
}

/** Runs `fn` over `items` with at most `limit` in flight, preserving order. */
export async function mapPool<T, R>(items: T[], limit: number, fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

export function usageLine(): string {
  const cost =
    (usage.inputTokens / 1e6) * price("PRICE_INPUT_PER_M", 0.1) +
    (usage.outputTokens / 1e6) * price("PRICE_OUTPUT_PER_M", 0.5) +
    usage.webSearches * price("PRICE_WEB_SEARCH_EACH", 0.01) +
    (usage.decisionInputTokens / 1e6) * price("PRICE_DECISIONS_INPUT_PER_M", 0.1) +
    (usage.claudeInputTokens / 1e6) * price("PRICE_CLAUDE_INPUT_PER_M", 4) +
    (usage.claudeOutputTokens / 1e6) * price("PRICE_CLAUDE_OUTPUT_PER_M", 20) +
    usage.claudeWebSearches * price("PRICE_CLAUDE_WEB_SEARCH_EACH", 0.01);
  const parts = [];
  if (usage.requests) parts.push(`${usage.requests} Responses requests (${usage.inputTokens.toLocaleString()} input, ${usage.outputTokens.toLocaleString()} output tokens, ${usage.webSearches} web searches)`);
  if (usage.decisionRequests) parts.push(`${usage.decisionRequests} Decisions requests (${usage.decisionInputTokens.toLocaleString()} input tokens)`);
  if (usage.claudeRequests) parts.push(`${usage.claudeRequests} Claude requests (${usage.claudeInputTokens.toLocaleString()} input, ${usage.claudeOutputTokens.toLocaleString()} output tokens, ${usage.claudeWebSearches} web searches)`);
  if (usage.geminiRequests) parts.push(`${usage.geminiRequests} Gemini requests (${usage.geminiInputTokens.toLocaleString()} input, ${usage.geminiOutputTokens.toLocaleString()} output tokens, ${usage.geminiSearches} searches; not priced here)`);
  return `${parts.join("; ") || "no API calls"}; about $${cost.toFixed(2)} at list prices${usage.geminiRequests ? " excluding Gemini" : ""}`;
}
