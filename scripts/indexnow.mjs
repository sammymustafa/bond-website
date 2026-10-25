#!/usr/bin/env node
/**
 * Tells IndexNow search engines (Bing, and through it ChatGPT search) which bondtrials.com URLs
 * changed. Run it after a deploy is live, not before: the engines fetch the pages right away.
 *
 *   npm run indexnow -- /engage /security     # specific pages, as paths or full URLs
 *   npm run indexnow -- --sitemap             # every URL in the live sitemap
 *   npm run indexnow -- --sitemap --dry-run   # list what would be sent, send nothing
 *
 * The key is public by design: IndexNow checks that https://bondtrials.com/<key>.txt contains it.
 */
const HOST = "bondtrials.com";
const KEY = "7deee7c933c9b7e8524da75ede32aefb";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

let urls = args
  .filter((a) => !a.startsWith("--"))
  .map((a) => (a.startsWith("http") ? a : `https://${HOST}${a.startsWith("/") ? "" : "/"}${a}`));

if (args.includes("--sitemap")) {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  urls.push(...[...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
}

urls = [...new Set(urls)];
if (!urls.length) {
  console.error("Give paths, full URLs or --sitemap.");
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
