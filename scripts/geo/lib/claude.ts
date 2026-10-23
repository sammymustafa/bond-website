/**
 * Asks Claude a buyer question with Anthropic's server-side web search, the way a buyer would in Claude.
 * Uses the official SDK (@anthropic-ai/sdk, a dev dependency); the key comes from ANTHROPIC_API_KEY.
 *
 * Model: CLAUDE_MODEL, default claude-opus-5-5. Server-side fallback is on (`fallbacks: "default"`): if the
 * model declines a question, Anthropic re-runs it on its recommended fallback model instead of refusing.
 */
import Anthropic from "@anthropic-ai/sdk";
import { usage, type Citation, type ResponseResult } from "./openai";

export const DEFAULT_CLAUDE_MODEL = "claude-opus-5-5";

let client: Anthropic | undefined;

export async function askClaude(question: string): Promise<ResponseResult> {
  client ??= new Anthropic();
  const messages: Anthropic.Beta.BetaMessageParam[] = [{ role: "user", content: question }];
  let text = "";
  const citations: Citation[] = [];
  const searches: ResponseResult["searches"] = [];

  // A long server-side search loop can stop with pause_turn; resending the turn resumes it.
  for (let turn = 0; turn < 5; turn++) {
    const response = await client.beta.messages.create({
      model: process.env.CLAUDE_MODEL ?? DEFAULT_CLAUDE_MODEL,
      max_tokens: 16000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      // The basic web search tool, not web_search_20260209: the newer tool filters results through code
      // execution, and its final answer carries no citations, which is exactly what this check measures.
      tools: [{ type: "web_search_20250305", name: "web_search", max_uses: 5, user_location: { type: "approximate", country: "US" } }],
      messages,
    });
    usage.claudeRequests += 1;
    usage.claudeInputTokens += response.usage.input_tokens;
    usage.claudeOutputTokens += response.usage.output_tokens;
    usage.claudeWebSearches += response.usage.server_tool_use?.web_search_requests ?? 0;

    if (response.stop_reason === "refusal") break;
    for (const block of response.content) {
      if (block.type === "server_tool_use" && block.name === "web_search") {
        const query = (block.input as { query?: string } | null)?.query;
        searches.push({ type: "search", query, sources: [] });
      } else if (block.type === "web_search_tool_result") {
        // A successful result is a list of pages; an error is a single object.
        if (Array.isArray(block.content) && searches.length) {
          searches[searches.length - 1].sources.push(...block.content.map((r) => r.url));
        }
      } else if (block.type === "text") {
        text += block.text;
        for (const c of block.citations ?? []) {
          if (c.type === "web_search_result_location") citations.push({ url: c.url, title: c.title ?? undefined });
        }
      }
    }
    if (response.stop_reason !== "pause_turn") break;
    messages.push({ role: "assistant", content: response.content });
  }
  return { text, citations, searches, raw: null };
}
