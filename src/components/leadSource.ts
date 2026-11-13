/**
 * Where a website lead came from. Browsers send other sites only our origin as the Referer (see
 * Referrer-Policy in next.config.ts), so Formspree and Cal.com alone can't tell which page produced a
 * lead. Every lead therefore carries three readable fields, with the same names on both paths:
 *
 * - `page`: the path the visitor was on when they sent the contact form or opened the Cal.com
 *   scheduler, e.g. `/pricing`.
 * - `first_page`: the path this visit landed on, e.g. `/clinical-trial-ads?utm_source=linkedin&ads=linkedin`.
 * - `referrer`: the site that sent the visitor to that first page, as an origin only
 *   (`https://www.google.com`), or `direct` when there was none or it was bondtrials.com itself.
 *
 * The contact form (DemoModal) sends them as Formspree fields, which its Slack plugin posts to
 * #website-demo-leads. "Book a demo" links to Cal.com get them as `metadata[page]`, `metadata[first_page]`
 * and `metadata[referrer]` (LeadSourceTracker adds them when the link is used); Cal.com stores them on the
 * booking and sends them in its webhook payload under `metadata`.
 *
 * Privacy: paths only, never full URLs. Of the query string, only utm_source, utm_medium and utm_campaign
 * are kept, and a Google or LinkedIn ad click ID (gclid, li_fat_id) becomes `ads=google` or
 * `ads=linkedin` without the ID itself; everything else, and any #fragment, is dropped. The referrer keeps
 * its origin only. The landing values sit in sessionStorage for the visit and leave the browser only with
 * a form submission or a Cal.com booking link.
 */

export interface LeadSource {
  page: string;
  first_page: string;
  referrer: string;
}

type Landing = Omit<LeadSource, "page">;

/** Shown when there was no referrer, or the visitor came from one of our own pages. */
export const DIRECT_REFERRER = "direct";

/** The Cal.com host every "Book a demo" link points to (calComHref in src/content/nav.ts). */
export const CAL_COM_HOST = "bond-health.cal.com";

const STORAGE_KEY = "bond_lead_source";
const KEPT_PARAMS = ["utm_source", "utm_medium", "utm_campaign"] as const;
/** Ad click IDs whose presence (never the value) is kept as ads=<network>. */
const AD_CLICK_IDS = [
  ["gclid", "google"],
  ["li_fat_id", "linkedin"],
] as const;
const MAX_PATH_LENGTH = 200;
const MAX_PARAM_LENGTH = 100;

/**
 * Percent-encodes anything outside a plain path, so a value can never break the JSON or Slack text it is
 * pasted into (for example `"` or `\` in a Cal.com webhook template). Browsers already encode most of it.
 */
function plainPath(path: string): string {
  return path.replace(/[^\w\-.~/%]/gu, (char) => encodeURIComponent(char));
}

/** A URL reduced to its path plus the kept campaign parameters, e.g. `/pricing?utm_source=google&ads=google`. */
export function cleanPath(url: URL): string {
  const path = plainPath(url.pathname.slice(0, MAX_PATH_LENGTH)) || "/";
  const kept = new URLSearchParams();
  for (const name of KEPT_PARAMS) {
    const value = url.searchParams.get(name)?.trim();
    if (value) kept.set(name, value.slice(0, MAX_PARAM_LENGTH));
  }
  const ad = AD_CLICK_IDS.find(([param]) => url.searchParams.has(param));
  if (ad) kept.set("ads", ad[1]);
  const query = kept.toString();
  return query ? `${path}?${query}` : path;
}

function withoutWww(host: string): string {
  return host.toLowerCase().replace(/^www\./, "");
}

/** The referrer's origin, or `direct` when it is empty, unparseable or one of our own pages. */
export function cleanReferrer(referrer: string, ownHost: string): string {
  if (!referrer) return DIRECT_REFERRER;
  try {
    const url = new URL(referrer);
    if (withoutWww(url.hostname) === withoutWww(ownHost)) return DIRECT_REFERRER;
    // URL.origin is "null" for app schemes such as android-app://com.linkedin.android/, so build it.
    const origin = url.origin !== "null" ? url.origin : url.host ? `${url.protocol}//${url.host}` : "";
    return /^[a-z][a-z\d+.-]*:\/\/[\w.:%-]+$/i.test(origin) ? origin.slice(0, MAX_PARAM_LENGTH) : DIRECT_REFERRER;
  } catch {
    return DIRECT_REFERRER;
  }
}

// The landing values for this page load, so they survive client-side navigation even where storage is
// blocked (some private modes throw on sessionStorage access).
let landingThisLoad: Landing | null = null;

function readStoredLanding(): Landing | null {
  try {
    const stored: unknown = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "null");
    if (stored && typeof stored === "object") {
      const { first_page, referrer } = stored as Partial<Landing>;
      if (typeof first_page === "string" && typeof referrer === "string") return { first_page, referrer };
    }
  } catch {
    // Storage blocked or the value was edited by hand: treat it as not recorded.
  }
  return null;
}

function currentLanding(): Landing {
  return {
    first_page: cleanPath(new URL(window.location.href)),
    referrer: cleanReferrer(document.referrer, window.location.hostname),
  };
}

/**
 * Records the landing page and external referrer on the first page view of a browser session (a tab's
 * sessionStorage). Later page views, including full reloads, keep the first values. Never throws.
 */
export function recordLanding(): void {
  try {
    if (landingThisLoad) return;
    const stored = readStoredLanding();
    if (stored) {
      landingThisLoad = stored;
      return;
    }
    landingThisLoad = currentLanding();
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(landingThisLoad));
  } catch {
    // Storage blocked: landingThisLoad (if set) still covers this page load.
  }
}

/** The three lead-source fields for a lead sent from the current page. Never throws. */
export function getLeadSource(): LeadSource {
  try {
    const landing = landingThisLoad ?? readStoredLanding() ?? currentLanding();
    return { page: cleanPath(new URL(window.location.href)), ...landing };
  } catch {
    return { page: "", first_page: "", referrer: "" };
  }
}

/** Whether a link opens Bond's Cal.com scheduler. */
export function isCalComLink(url: URL): boolean {
  return url.hostname === CAL_COM_HOST;
}

/**
 * A Cal.com booking link with the lead-source fields added as `metadata[...]` parameters, replacing any
 * added earlier, so the link always carries the page it was used from.
 */
export function withCalComMetadata(url: URL, source: LeadSource): string {
  const decorated = new URL(url.href);
  for (const [field, value] of Object.entries(source)) {
    if (value) decorated.searchParams.set(`metadata[${field}]`, value);
    else decorated.searchParams.delete(`metadata[${field}]`);
  }
  return decorated.href;
}
