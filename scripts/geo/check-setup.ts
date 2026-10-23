/**
 * Checks the geo scripts' setup: the OpenAI key and models, and Search Console access.
 *   npm run geo:check
 */
import { loadEnv } from "./lib/env";
import { gscSites } from "./lib/gsc";
import { DEFAULT_MODEL, DEFAULT_SEARCH_MODEL } from "./lib/openai";
import { livePages } from "./lib/pages";

async function main() {
  loadEnv();
  console.log(`Site pages: ${livePages().length} live pages and glossary terms found in the repo.`);

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    console.log("OpenAI: OPENAI_API_KEY is not set. Add it to .env.local.");
  } else {
    const res = await fetch("https://api.openai.com/v1/models", { headers: { Authorization: `Bearer ${key}` } });
    if (!res.ok) {
      console.log(`OpenAI: key rejected (${res.status}).`);
    } else {
      const ids = ((await res.json()) as { data: { id: string }[] }).data.map((m) => m.id).sort();
      const model = process.env.OPENAI_MODEL ?? DEFAULT_MODEL;
      const search = process.env.OPENAI_SEARCH_MODEL ?? DEFAULT_SEARCH_MODEL;
      console.log(`OpenAI: key works. Labeling model ${model}: ${ids.includes(model) ? "available" : "NOT available"}. Search model ${search}: ${ids.includes(search) ? "available" : "NOT available"}.`);
      console.log(`  GPT models on this key: ${ids.filter((id) => /^gpt-/.test(id) && !/audio|realtime|transcribe|tts|image|search-preview/.test(id)).join(", ")}`);
      console.log("  To change models, set OPENAI_MODEL and OPENAI_SEARCH_MODEL in .env.local.");
    }
  }

  if (!process.env.GSC_IMPERSONATE_SERVICE_ACCOUNT && !process.env.GSC_SERVICE_ACCOUNT_FILE) {
    console.log("Search Console: not set up (GSC_IMPERSONATE_SERVICE_ACCOUNT). Use --queries-csv / --pages-csv exports, or see the README.");
  } else {
    try {
      const { email, sites } = await gscSites();
      const want = process.env.GSC_SITE ?? "sc-domain:bondtrials.com";
      console.log(`Search Console: service account ${email} can read ${sites.length} propert${sites.length === 1 ? "y" : "ies"}: ${sites.map((s) => s.siteUrl).join(", ") || "none"}.`);
      console.log(sites.some((s) => s.siteUrl === want) ? `  ${want} is accessible.` : `  ${want} is NOT accessible: add ${email} as a user on that property in Search Console.`);
    } catch (e) {
      console.log(`Search Console: ${e instanceof Error ? e.message : e}`);
    }
  }
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
