/**
 * Asks Gemini a buyer question with Grounding with Google Search, the way a buyer would in Gemini.
 * Key: GEMINI_API_KEY. Model: GEMINI_MODEL, default gemini-pro-latest (Google's current Pro model).
 *
 * Gemini's grounding sources come back as Google redirect URLs whose title is the source's domain,
 * so each citation carries that domain explicitly.
 */
import { usage, type Citation, type ResponseResult } from "./openai";

export const DEFAULT_GEMINI_MODEL = "gemini-pro-latest";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface GeminiResponse {
  candidates?: {
    content?: { parts?: { text?: string; thought?: boolean }[] };
    groundingMetadata?: {
      webSearchQueries?: string[];
      groundingChunks?: { web?: { uri?: string; title?: string } }[];
    };
  }[];
  usageMetadata?: { promptTokenCount?: number; candidatesTokenCount?: number; thoughtsTokenCount?: number };
}

export async function askGemini(question: string): Promise<ResponseResult> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY is not set (add it to .env.local).");
  const model = process.env.GEMINI_MODEL ?? DEFAULT_GEMINI_MODEL;
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: question }] }], tools: [{ google_search: {} }] }),
    });
    if (!res.ok) {
      const err = await res.text();
      if ((res.status === 429 || res.status >= 500) && attempt < 5) {
        await sleep(2000 * 2 ** attempt);
        continue;
      }
      throw new Error(`Gemini ${res.status}: ${err.slice(0, 500)}`);
    }
    const json = (await res.json()) as GeminiResponse;
    const cand = json.candidates?.[0];
    const meta = cand?.groundingMetadata;
    usage.geminiRequests += 1;
    usage.geminiInputTokens += json.usageMetadata?.promptTokenCount ?? 0;
    usage.geminiOutputTokens += (json.usageMetadata?.candidatesTokenCount ?? 0) + (json.usageMetadata?.thoughtsTokenCount ?? 0);
    usage.geminiSearches += meta?.webSearchQueries?.length ?? 0;
    const citations: Citation[] = (meta?.groundingChunks ?? [])
      .filter((c) => c.web?.uri)
      .map((c) => ({ url: c.web!.uri!, title: c.web!.title, domain: c.web!.title?.replace(/^www\./, "") }));
    return {
      text: (cand?.content?.parts ?? []).filter((p) => !p.thought).map((p) => p.text ?? "").join(""),
      citations,
      searches: (meta?.webSearchQueries ?? []).map((query) => ({ type: "search", query, sources: [] })),
      raw: null,
    };
  }
}
