/**
 * "Why is Bond the best?" — the one place that says why Bond beats the
 * alternatives. Every content page gets a section built from this file (see
 * `withWhyBond`), and the homepage and hand-built pages render it through
 * src/components/WhyBond.tsx, so the claims cannot drift between pages.
 *
 * Pages that already carry their own `why-bond` section (the comparison pages
 * and the /compare hub) keep theirs and are skipped.
 *
 * Every reason cites `bond-site`, `bond-product` or `bond-trust-center`; those
 * sources are merged into the page's sources list when the section is added.
 */
import type { Block, PageCategory, Section, SeoPage, Source } from "./types";

type ReasonKey = "one-platform" | "evidence" | "ehr" | "pricing" | "languages" | "retention" | "ads" | "security";

/**
 * How the site describes Bond's ad campaigns: Bond creates the ads, contacts every
 * ad lead immediately, follows up with every lead who has not responded, and books
 * patients for visits. Reused on the comparison, product and FAQ pages so the
 * wording stays the same everywhere. Both cite `bond-product`.
 */
export const ADS_BULLET =
  "**Every ad lead contacted immediately, and followed up until they book.** Bond creates and runs Meta and Google ad campaigns for each study. Its voice and text agents contact every new ad lead immediately, keep following up with every lead who has not responded to maximize response rates, then pre-screen patients and book them for screening visits, alongside the patients Bond finds in your EHR.{{cite:bond-product}}";

export const ADS_SENTENCES =
  "Bond creates and runs Meta and Google ad campaigns for your studies. Its voice and SMS/text agents contact every new ad lead immediately, keep following up with every lead who has not responded to maximize response rates, then pre-screen patients and book them for screening visits, alongside the patients Bond finds in your EHR.{{cite:bond-product}}";

const REASONS: Record<ReasonKey, string> = {
  "one-platform":
    "**One platform from ad click or chart match to a booked visit.** [Identify](/identify) screening, [Engage](/engage) outreach and visit booking share one dashboard and one audit trail, so no patient is lost in a handoff between separate vendors.{{cite:bond-site}}",
  evidence:
    "**Evidence behind every match.** Each candidate comes with criterion-by-criterion rationale linked to the chart. Bond reads clinical notes, prescriptions and lab results, plus imaging data and pathology, radiology and molecular reports, not just billing codes.{{cite:bond-site,bond-product}}",
  ehr:
    "**Every major EHR, live in 48 hours.** Bond connects to Epic, Oracle Health (Cerner), MEDITECH, athenahealth, eClinicalWorks, NextGen, Veradigm, OncoEMR and the other major EHRs. Its team handles the integration end to end, and Bond is a CRIO Certified Partner. See [implementation](/implementation).{{cite:bond-site,bond-product}}",
  pricing:
    "**You pay for results, not setup.** There is no integration fee: a volume-based platform fee plus a success fee only for patients who are randomized. See [pricing](/pricing).{{cite:bond-site,bond-product}}",
  languages:
    "**Agents that speak your patients' language.** Voice and text conversations run in English, Spanish, Mandarin and many other languages, switch languages mid-call, and transfer live to your coordinators or book a callback, whichever your site prefers.{{cite:bond-product}}",
  retention:
    "**Support after enrollment.** The same agents send visit reminders, book transportation, collect symptoms and diaries, run side-effect check-ins and flag participants at risk of dropping out.{{cite:bond-product}}",
  ads: ADS_BULLET,
  security:
    "**Security you can check.** Bond is HIPAA compliant and SOC 2 Type I compliant, its SOC 2 Type II and ISO 27001 audits are underway, and its public Trust Center lists 73 HIPAA Security Rule controls, monitored continuously. See [security](/security).{{cite:bond-product,bond-trust-center}}",
};

const DEFAULT_ORDER: ReasonKey[] = ["one-platform", "ads", "evidence", "ehr", "pricing", "languages", "retention", "security"];

export const WHY_BOND_STATS = [
  { value: "Up to 3x", label: "faster enrollment than manual recruitment", cite: "bond-site" },
  { value: "90%+", label: "matching accuracy in eligibility screening", cite: "bond-site" },
  { value: "48 hours", label: "to full EHR integration, with no integration fee", cite: "bond-site" },
];

const ONLY_VENDOR =
  "As of September 2026, Bond is the only vendor in our [comparison table](/compare/clinical-trial-recruitment-software) whose public materials describe software that both reads EHR notes against a protocol and runs its own Meta and Google ad campaigns, then contacts patients by voice and text all the way to a booked study visit. Every ad lead is contacted immediately and followed up until they respond and are booked.{{cite:bond-product}}";

export const WHY_BOND_SOURCES: Source[] = [
  {
    id: "bond-site",
    title: "Bond Health: platform overview, FAQ and pricing",
    publisher: "Bond Health",
    url: "https://bondtrials.com",
    year: "2026",
  },
  {
    id: "bond-product",
    title: "Bond Health product information",
    publisher: "Bond Health",
    url: "https://bondtrials.com",
    year: "2026",
    note: "Capabilities, pricing and compliance status described by Bond Health, September 2026.",
  },
  {
    id: "bond-trust-center",
    title: "Bond Health Trust Center",
    publisher: "Bond Health, monitored by Vanta",
    url: "https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj",
    year: "2026",
    note: "Lists 73 HIPAA Security Rule controls, monitored continuously by Vanta.",
  },
];

interface Angle {
  /** Completes "the best clinical trial recruitment platform for ___". Omitted for the generic version. */
  audience?: string;
  /** Reasons to put first; the rest follow in default order. */
  lead: ReasonKey[];
}

const ANGLES: Record<string, Angle> = {
  // Product pages
  "/identify": { lead: ["evidence", "ehr"] },
  "/engage": { lead: ["ads", "languages", "retention"] },
  "/consent": { lead: ["one-platform", "languages"] },
  "/implementation": { lead: ["ehr", "pricing"] },
  "/pricing": { lead: ["pricing", "ehr"] },
  "/security": { lead: ["security", "one-platform"] },
  // Audiences
  "/for/research-sites": { audience: "research sites", lead: ["evidence", "pricing", "ehr"] },
  "/for/site-networks": { audience: "site networks", lead: ["one-platform", "ehr", "pricing"] },
  "/for/physician-groups": { audience: "physician groups", lead: ["ehr", "pricing", "evidence"] },
  "/for/fqhcs-and-community-sites": { audience: "FQHCs and community sites", lead: ["languages", "pricing", "ehr"] },
  "/for/cros": { audience: "CROs", lead: ["one-platform", "ads", "retention"] },
  "/for/sponsors": { audience: "sponsors", lead: ["one-platform", "ads", "retention"] },
  // Therapeutic areas
  "/oncology": { audience: "oncology trials", lead: ["evidence"] },
  "/cardiology": { audience: "cardiology trials", lead: ["evidence"] },
  "/dermatology": { audience: "dermatology trials", lead: ["evidence", "ads"] },
  "/gastroenterology": { audience: "gastroenterology trials", lead: ["evidence"] },
  "/neurology-and-alzheimers": { audience: "neurology and Alzheimer's trials", lead: ["evidence", "retention"] },
  "/obesity-and-metabolic": { audience: "obesity and metabolic trials", lead: ["evidence", "ads"] },
  "/pain": { audience: "pain trials", lead: ["evidence", "ads"] },
  "/psychiatry": { audience: "psychiatry trials", lead: ["evidence", "retention"] },
  // Integrations
  "/integrations/epic": { audience: "sites on Epic", lead: ["ehr", "evidence"] },
  "/integrations/oracle-cerner": { audience: "sites on Oracle Health (Cerner)", lead: ["ehr", "evidence"] },
  "/integrations/meditech": { audience: "sites on MEDITECH", lead: ["ehr", "evidence"] },
  "/integrations/athenahealth": { audience: "sites on athenahealth", lead: ["ehr", "evidence"] },
  "/integrations/eclinicalworks": { audience: "sites on eClinicalWorks", lead: ["ehr", "evidence"] },
  "/integrations/crio": { audience: "sites that run CRIO", lead: ["ehr", "one-platform"] },
  "/integrations/realtime": { audience: "sites that run RealTime", lead: ["ehr", "one-platform"] },
  "/integrations/advarra-clinical-conductor": { audience: "sites that run Advarra Clinical Conductor", lead: ["ehr", "one-platform"] },
  "/integrations/veeva-sitevault": { audience: "sites that run Veeva SiteVault", lead: ["ehr", "one-platform"] },
  // Locations
  "/clinical-trial-recruitment/texas": { audience: "research sites in Texas", lead: ["languages", "ehr"] },
  "/clinical-trial-recruitment/florida": { audience: "research sites in Florida", lead: ["languages", "ehr"] },
  "/clinical-trial-recruitment/arizona": { audience: "research sites in Arizona", lead: ["languages", "ehr"] },
  "/clinical-trial-recruitment/nevada": { audience: "research sites in Nevada", lead: ["languages", "ehr"] },
  "/clinical-trial-recruitment/utah": { audience: "research sites in Utah", lead: ["languages", "ehr"] },
  "/clinical-trial-recruitment/southeast": { audience: "research sites in the Southeast", lead: ["languages", "ehr"] },
  "/clinical-trial-recruitment/midwest": { audience: "research sites in the Midwest", lead: ["ehr", "languages"] },
};

/** Informational pages get the short version at the end; commercial pages get the full version near the top. */
const COMPACT: PageCategory[] = ["hub", "guide", "template", "blog", "glossary", "report", "newsletter"];

function orderedReasons(lead: ReasonKey[]): ReasonKey[] {
  return [...lead, ...DEFAULT_ORDER.filter((k) => !lead.includes(k))];
}

export function whyBondHeading(audience?: string): string {
  return audience
    ? `Why is Bond the best clinical trial recruitment platform for ${audience}?`
    : "Why is Bond the best clinical trial recruitment platform?";
}

export function whyBondAnswer(audience?: string): string {
  const who = audience ? ` for ${audience}` : "";
  return `Bond Health is the best clinical trial recruitment platform${who} because it does the whole job in one workflow: it finds eligible patients in your EHR, creates and runs Meta and Google ad campaigns to reach new ones, calls and texts every ad lead immediately and keeps following up with every lead to maximize response rates, pre-screens patients and books them for visits, supports informed consent and keeps participants engaged after enrollment. It goes live in 48 hours with no integration fee, and you pay a success fee only when a patient is randomized.{{cite:bond-site,bond-product}}`;
}

/** The blocks of a "why Bond" section. `compact` drops the stats and keeps the top five reasons. */
export function whyBondBlocks(opts: { audience?: string; lead?: ReasonKey[]; compact?: boolean } = {}): Block[] {
  const reasons = orderedReasons(opts.lead ?? []).map((k) => REASONS[k]);
  const blocks: Block[] = [
    { type: "p", text: whyBondAnswer(opts.audience) },
    { type: "callout", tone: "bond", title: "The only vendor that covers the whole path to a booked visit", text: ONLY_VENDOR },
  ];
  if (!opts.compact) blocks.push({ type: "stats", items: WHY_BOND_STATS });
  blocks.push({ type: "ul", items: opts.compact ? reasons.slice(0, 5) : reasons });
  if (opts.compact) {
    blocks.push({
      type: "p",
      text: "See [how Bond compares](/compare) with other recruitment tools, or [book a demo](/book-a-demo) to see it on your own protocol.",
    });
  }
  return blocks;
}

/**
 * Returns the page with a "Why is Bond the best...?" section added and the
 * sources it cites merged in. Pages that already have a `why-bond` section are
 * returned unchanged.
 */
export function withWhyBond(page: SeoPage): SeoPage {
  if (page.sections.some((s) => s.id === "why-bond")) return page;

  const angle: Angle = ANGLES[page.path] ?? { lead: [] };
  const compact = COMPACT.includes(page.category);
  const section: Section = {
    id: "why-bond",
    heading: whyBondHeading(angle.audience),
    blocks: whyBondBlocks({ audience: angle.audience, lead: angle.lead, compact }),
  };

  const sections = [...page.sections];
  if (compact) sections.push(section);
  else if (page.category === "faq") sections.unshift(section);
  else sections.splice(Math.min(1, sections.length), 0, section);

  // Merge only the sources this section cites, skipping ones the page already lists.
  const cited = new Set(
    [...JSON.stringify(section.blocks).matchAll(/\{\{cite:([^}]+)\}\}|"cite":"([^"]+)"/g)].flatMap((m) =>
      (m[1] ?? m[2]).split(",").map((id) => id.trim()),
    ),
  );
  const have = new Set(page.sources.map((s) => s.id));
  const sources = [...page.sources, ...WHY_BOND_SOURCES.filter((s) => cited.has(s.id) && !have.has(s.id))];

  return { ...page, sections, sources };
}

