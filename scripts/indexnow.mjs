#!/usr/bin/env node
/**
 * Tells IndexNow search engines (Bing, and through it ChatGPT search) which bondtrials.com URLs
 * changed. Run it after a deploy is live, not before: the engines fetch the pages right away.
 *
 *   npm run indexnow -- /engage /security     # specific pages, as paths or full URLs
 *   npm run indexnow -- --sitemap             # every URL in the live sitemap
 *   npm run indexnow -- --sitemap --dry-run   # list what would be sent, send nothing
 *   npm run indexnow -- --since=1             # live sitemap URLs with lastmod today or yesterday (UTC)
 *
 * --since=N keeps sitemap URLs whose lastmod is on or after N days before today (UTC), so
 * --since=0 means today only. If none match it sends nothing and exits 0. The IndexNow
 * workflow (.github/workflows/indexnow.yml) runs it after every production deploy.
 *
 * The key is public by design: IndexNow checks that https://bondtrials.com/<key>.txt contains it.
 */
import { setDefaultAutoSelectFamilyAttemptTimeout } from "node:net";

// Node's default 250 ms per-address connect attempt times out against Cloudflare on slow networks.
setDefaultAutoSelectFamilyAttemptTimeout(3000);

const HOST = "bondtrials.com";
const KEY = "7deee7c933c9b7e8524da75ede32aefb";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const sinceArg = args.find((a) => a.startsWith("--since="));
const sinceDays = sinceArg === undefined ? null : Number(sinceArg.slice("--since=".length));
if (sinceDays !== null && !(Number.isInteger(sinceDays) && sinceDays >= 0)) {
  console.error("--since takes a whole number of days, for example --since=1.");
  process.exit(1);
}

let urls = args
  .filter((a) => !a.startsWith("--"))
  .map((a) => (a.startsWith("http") ? a : `https://${HOST}${a.startsWith("/") ? "" : "/"}${a}`));

if (args.includes("--sitemap") || sinceDays !== null) {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const entries = [...(await res.text()).matchAll(/<url>([\s\S]*?)<\/url>/g)]
    .map((m) => ({
      loc: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1],
      lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
    }))
    .filter((e) => e.loc);
  if (sinceDays === null) {
    urls.push(...entries.map((e) => e.loc));
  } else {
    const cutoff = new Date(Date.now() - sinceDays * 86_400_000).toISOString().slice(0, 10);
    const recent = entries.filter((e) => e.lastmod && e.lastmod.slice(0, 10) >= cutoff);
    console.log(`${recent.length} of ${entries.length} sitemap URLs have lastmod on or after ${cutoff}.`);
    urls.push(...recent.map((e) => e.loc));
  }
}

urls = [...new Set(urls)];
if (!urls.length) {
  if (sinceDays !== null) {
    console.log("Nothing changed in that window, so nothing was sent.");
    process.exit(0);
  }
  console.error("Give paths, full URLs, --sitemap or --since=N.");
  process.exit(1);
}
const foreign = urls.filter((u) => new URL(u).host !== HOST);
if (foreign.length) {
  console.error(`Not on ${HOST}: ${foreign.join(", ")}`);
  process.exit(1);
}

console.log(`${urls.length} URL${urls.length === 1 ? "" : "s"}`);
if (dryRun) {
  for (const u of urls) console.log(`  ${u}`);
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
// 200 and 202 both mean accepted; 403 means the key file is not live yet.
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
