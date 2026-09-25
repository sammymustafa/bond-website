/**
 * Validates every content page and glossary term against the site rules.
 *
 *   npx tsx scripts/validate-content.ts            # errors fail the run
 *   npx tsx scripts/validate-content.ts --warn     # print warnings too
 *
 * Rules (errors):
 *  - section headings are questions (end with "?")
 *  - every {{cite:id}} and stats/trial/chart cite resolves to a source on that page
 *  - every source has an id, title, publisher, and (unless internal "bond-*") an http(s) URL
 *  - a block that states a number carries a cite in that same block
 *  - comparison and pricing pages contain at least one table
 *  - internal links (related, inline, cta, download) point at routes that exist
 *  - lastUpdated is a valid ISO date; paths are unique and well-formed
 *  - required internal-link rules: guides -> product, glossary -> product, comparison -> /pricing and /security
 * Warnings:
 *  - title longer than 65 chars, description outside 70-165 chars
 *  - sources that are never cited
 */
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { glossaryTermToPage } from "../src/content/seo";
import type { Block, GlossaryTerm, SeoPage } from "../src/content/types";

const WARN = process.argv.includes("--warn");
const errors: string[] = [];
const warnings: string[] = [];

const PRODUCT_PATHS = ["/identify", "/engage", "/consent", "/implementation", "/pricing", "/security", "/book-a-demo"];
// Routes outside the content registry. Mirrors STATIC_ROUTES in src/content/site.ts.
const STATIC_ROUTES = ["/", "/careers", "/privacy-policy", "/terms-of-service", "/book-a-demo", "/blog", "/glossary", "/newsletter"];
// Filled in main(): registry routes in full mode, planned routes in single-file mode.
const routes = new Set<string>(STATIC_ROUTES);
const HOME_ANCHORS = ["/#product", "/#solutions", "/#pricing", "/#security", "/#faq", "/#contact", "/#about"];

// Global regexes are only ever used with matchAll. Never call .test() on them:
// a global regex keeps lastIndex between calls, and matchAll starts from it.
const CITE_RE = /\{\{cite:([^}]+)\}\}/g;
const HAS_CITE = /\{\{cite:/;
const LINK_RE = /\[[^\]]+\]\(([^)\s]+)\)/g;
// A "number" for the purposes of the sourcing rule: money, percentages, quantities with units,
// thousands-separated figures, multipliers. Bare years and regulation citations are exempt.
const NUMBER_RE =
  /(\$\s?\d[\d,.]*\s?(k|m|b|million|billion)?\b|\d[\d,.]*\s?(%|percent)|\b\d[\d,]*(\.\d+)?\s?(million|billion|thousand|hours?|hrs?|minutes?|min|days?|weeks?|months?|years?|pages?|patients?|participants?|sites?|trials?|studies|charts?|records?|words?|providers?|physicians?|hospitals?|practices?|health centers?|clinics?|calls?|messages?|nodes|criteria)\b|\b\d{1,3}(,\d{3})+\b|\b\d+(\.\d+)?[x×]\b|\b(one|two|three|four|five|six|seven|eight|nine|ten) in (two|three|four|five|six|seven|eight|nine|ten)\b|\b\d+ in \d+\b|\b\d+ out of \d+\b)/i;
const EXEMPT_RE = /\b(21|45|42|47) CFR\b|\bICD-10|\bHL7\b|\bFHIR R4\b|\bUSCDI v?\d|\bPhase [1234I]+\b|\bE6\(R[23]\)|\bStep \d\b|\bweek \d\b|\bday \d\b/gi;

function stripExempt(text: string): string {
  return text.replace(EXEMPT_RE, "");
}

function textOfBlock(b: Block): string[] {
  switch (b.type) {
    case "p":
    case "callout":
    case "quote":
      return [b.text];
    case "h3":
      return [];
    case "ul":
    case "ol":
    case "checklist":
      return b.items;
    case "table":
      return [b.caption ?? "", ...b.rows.flat(), b.note ?? ""];
    case "steps":
      return b.items.map((s) => `${s.title} ${s.text}`);
    case "cta":
      return [b.text ?? ""];
    case "download":
      return [b.note ?? ""];
    case "script":
      return b.lines.map((l) => l.text);
    case "form":
      return b.fields.map((f) => `${f.label} ${f.hint ?? ""}`);
    default:
      return [];
  }
}

function explicitCites(b: Block): string[] {
  switch (b.type) {
    case "stats":
      return b.items.map((s) => s.cite);
    case "trialCounts":
    case "trials":
    case "chart":
      return [b.cite];
    default:
      return [];
  }
}

function linksOfBlock(b: Block): string[] {
  const out: string[] = [];
  if (b.type === "cta") {
    out.push(b.href);
    if (b.secondaryHref) out.push(b.secondaryHref);
  }
  if (b.type === "download") out.push(b.href);
  return out;
}

function checkLink(href: string, where: string) {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) return;
  if (href.startsWith("#")) return;
  if (href.startsWith("/downloads/")) {
    const file = join(process.cwd(), "public", href);
    if (!existsSync(file)) errors.push(`${where}: download target missing on disk: ${href}`);
    return;
  }
  const clean = href.split("#")[0].split("?")[0];
  if (HOME_ANCHORS.includes(href)) return;
  if (!routes.has(clean)) errors.push(`${where}: internal link does not resolve: ${href}`);
}

function validatePage(page: SeoPage, where: string, opts: { isGlossary?: boolean } = {}) {
  const sourceIds = new Set(page.sources.map((s) => s.id));
  const cited = new Set<string>();

  if (!/^\/[a-z0-9\-/]*$/.test(page.path)) errors.push(`${where}: path must be lowercase kebab-case: ${page.path}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.lastUpdated) || Number.isNaN(Date.parse(page.lastUpdated))) {
    errors.push(`${where}: lastUpdated must be YYYY-MM-DD, got "${page.lastUpdated}"`);
  }
  if (page.title.length > 65) warnings.push(`${where}: title is ${page.title.length} chars (aim for <= 60)`);
  if (page.description.length < 70 || page.description.length > 165) {
    warnings.push(`${where}: description is ${page.description.length} chars (aim for 70-160)`);
  }
  if (!page.summary) errors.push(`${where}: summary is required`);
  if (!page.sections.length) errors.push(`${where}: at least one section is required`);

  for (const s of page.sources) {
    if (!s.id || !s.title || !s.publisher) errors.push(`${where}: source "${s.id}" needs id, title and publisher`);
    if (!s.id.startsWith("bond-")) {
      if (!s.url || !/^https?:\/\//.test(s.url)) errors.push(`${where}: source "${s.id}" needs an http(s) url`);
      else if (/example\.com|placeholder|TODO/i.test(s.url)) errors.push(`${where}: source "${s.id}" has a placeholder url`);
    }
  }
  const dupIds = page.sources.map((s) => s.id).filter((id, i, a) => a.indexOf(id) !== i);
  if (dupIds.length) errors.push(`${where}: duplicate source ids: ${dupIds.join(", ")}`);

  const checkText = (text: string, label: string, blockHasCite: () => boolean) => {
    for (const m of text.matchAll(CITE_RE)) {
      for (const id of m[1].split(",").map((x) => x.trim())) {
        cited.add(id);
        if (!sourceIds.has(id)) errors.push(`${where} ${label}: cite "${id}" has no matching source`);
      }
    }
    for (const m of text.matchAll(LINK_RE)) checkLink(m[1], `${where} ${label}`);
    const stripped = stripExempt(text);
    if (NUMBER_RE.test(stripped) && !blockHasCite()) {
      const hit = stripped.match(NUMBER_RE)?.[0];
      errors.push(`${where} ${label}: states a number ("${hit}") without a {{cite:...}} in the same block`);
    }
  };

  checkText(page.intro, "intro", () => HAS_CITE.test(page.intro));

  let tables = 0;
  page.sections.forEach((sec, si) => {
    if (!sec.heading.trim().endsWith("?")) errors.push(`${where} section ${si + 1} ("${sec.heading}"): heading must be a question`);
    if (!/^[a-z0-9-]+$/.test(sec.id)) errors.push(`${where} section ${si + 1}: id must be kebab-case`);
    sec.blocks.forEach((b, bi) => {
      const label = `section "${sec.heading}" block ${bi + 1} (${b.type})`;
      if (b.type === "table") tables++;
      const texts = textOfBlock(b);
      const blockText = texts.join(" ");
      const hasCite = () => /\{\{cite:/.test(blockText) || explicitCites(b).length > 0;
      for (const t of texts) checkText(t, label, hasCite);
      for (const id of explicitCites(b)) {
        cited.add(id);
        if (!sourceIds.has(id)) errors.push(`${where} ${label}: cite "${id}" has no matching source`);
      }
      for (const href of linksOfBlock(b)) checkLink(href, `${where} ${label}`);
      if (b.type === "table" && (!b.columns.length || b.rows.some((r) => r.length !== b.columns.length))) {
        errors.push(`${where} ${label}: every row must have ${b.columns.length} cells`);
      }
    });
  });

  page.faq?.forEach((f, i) => {
    if (!f.q.trim().endsWith("?")) errors.push(`${where} faq ${i + 1}: question must end with "?"`);
    checkText(f.a, `faq ${i + 1}`, () => /\{\{cite:/.test(f.a));
  });

  const relatedHrefs = page.related.map((r) => r.href);
  for (const r of page.related) checkLink(r.href, `${where} related`);
  if (page.heroCta) {
    checkLink(page.heroCta.href, `${where} heroCta`);
    if (page.heroCta.secondaryHref) checkLink(page.heroCta.secondaryHref, `${where} heroCta`);
  }

  const allLinks = new Set<string>(relatedHrefs);
  const collect = (t: string) => {
    for (const m of t.matchAll(LINK_RE)) allLinks.add(m[1].split("#")[0]);
  };
  collect(page.intro);
  page.sections.forEach((s) => s.blocks.forEach((b) => textOfBlock(b).forEach(collect)));
  page.sections.forEach((s) => s.blocks.forEach((b) => linksOfBlock(b).forEach((h) => allLinks.add(h))));
  const linksToProduct = [...allLinks].some((h) => PRODUCT_PATHS.includes(h));

  if (page.category === "comparison" || page.path === "/pricing") {
    if (tables === 0) errors.push(`${where}: comparison and pricing pages must contain a table`);
  }
  if (page.category === "comparison") {
    if (!allLinks.has("/pricing")) errors.push(`${where}: comparison pages must link to /pricing`);
    if (!allLinks.has("/security")) errors.push(`${where}: comparison pages must link to /security`);
  }
  if ((page.category === "guide" || opts.isGlossary) && !linksToProduct) {
    errors.push(`${where}: ${opts.isGlossary ? "glossary terms" : "guides"} must link to a product page (${PRODUCT_PATHS.join(", ")})`);
  }
  if (page.category !== "hub" && page.related.length < 2) warnings.push(`${where}: fewer than 2 related links`);

  for (const s of page.sources) {
    if (!cited.has(s.id)) warnings.push(`${where}: source "${s.id}" is never cited`);
  }
}

/**
 * Adds every registry page and glossary term to the known routes. A page that is
 * mid-edit elsewhere can make the import throw; single-file runs then fall back
 * to PLANNED_ROUTES instead of failing.
 */
async function addRegistryRoutes() {
  try {
    const { pages } = await import("../src/content/registry");
    const { glossary } = await import("../src/content/glossary");
    for (const p of pages) routes.add(p.path);
    for (const t of glossary) routes.add(`/glossary/${t.slug}`);
  } catch {
    // Links are then checked against STATIC_ROUTES and PLANNED_ROUTES only.
  }
}

async function main() {
  // While pages are being written in parallel, PLANNED_ROUTES can point at a JSON
  // array of paths that will exist so cross-links do not fail early.
  if (process.env.PLANNED_ROUTES) {
    const planned = JSON.parse(readFileSync(process.env.PLANNED_ROUTES, "utf8")) as string[];
    for (const r of planned) routes.add(r);
  }

  // --file <path>: validate one content module only, without importing the
  // registry, so a half-written page elsewhere cannot break this run.
  // --glossary: validate glossary terms only.
  const fileIdx = process.argv.indexOf("--file");
  let pageList: SeoPage[] = [];
  let termList: GlossaryTerm[] = [];
  if (fileIdx > -1) {
    const target = resolve(process.argv[fileIdx + 1]);
    const mod = (await import(pathToFileURL(target).href)) as { default?: SeoPage };
    if (!mod.default || !mod.default.path) {
      console.error(`${target} does not default-export a SeoPage`);
      process.exit(1);
    }
    pageList = [mod.default];
    routes.add(mod.default.path);
    await addRegistryRoutes();
  } else if (process.argv.includes("--glossary")) {
    const { glossary } = await import("../src/content/glossary");
    termList = glossary;
    for (const t of glossary) routes.add(`/glossary/${t.slug}`);
    await addRegistryRoutes();
  } else {
    const { pages } = await import("../src/content/registry");
    const { glossary } = await import("../src/content/glossary");
    pageList = pages;
    termList = glossary;
    for (const p of pages) routes.add(p.path);
    for (const t of glossary) routes.add(`/glossary/${t.slug}`);
  }

  const seen = new Set<string>();
  for (const page of pageList) {
    const where = `[${page.path}]`;
    if (seen.has(page.path)) errors.push(`${where}: duplicate path`);
    seen.add(page.path);
    validatePage(page, where);
  }
  const seenSlugs = new Set<string>();
  for (const term of termList) {
    if (seenSlugs.has(term.slug)) errors.push(`[/glossary/${term.slug}]: duplicate slug`);
    seenSlugs.add(term.slug);
    validatePage(glossaryTermToPage(term), `[/glossary/${term.slug}]`, { isGlossary: true });
  }

  if (WARN && warnings.length) {
    console.log(`\n${warnings.length} warnings:`);
    for (const w of warnings) console.log(`  warn  ${w}`);
  }
  if (errors.length) {
    console.error(`\n${errors.length} errors:`);
    for (const e of errors) console.error(`  error ${e}`);
    console.error(`\nContent validation failed: ${pageList.length} pages, ${termList.length} glossary terms checked.`);
    process.exit(1);
  }
  console.log(`Content validation passed: ${pageList.length} pages, ${termList.length} glossary terms, ${warnings.length} warnings.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
