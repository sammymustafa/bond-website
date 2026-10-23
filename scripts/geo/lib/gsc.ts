import { execFileSync } from "node:child_process";
import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";

/**
 * Google Search Console data, from one of:
 * - the Search Console API as a service account, without a key: GSC_IMPERSONATE_SERVICE_ACCOUNT. gcloud
 *   (signed in as someone allowed to act as that account) issues a one-hour token per run. Bond's Google
 *   organization blocks service-account key files, so this is the default setup.
 * - the API with a service-account key file: GSC_SERVICE_ACCOUNT_FILE, where key files are allowed.
 * - a CSV exported from the Search Console UI (Performance > Export > CSV: "Queries.csv" or "Pages.csv").
 * GSC_SITE names the property (default sc-domain:bondtrials.com).
 */

export interface GscRow {
  query?: string;
  page?: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

function base64url(input: Buffer | string): string {
  return Buffer.from(input).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

/** A one-hour token for `account` from gcloud's signed-in user, with no key file. */
function impersonatedToken(account: string): string {
  const args = ["auth", "print-access-token", `--impersonate-service-account=${account}`, `--scopes=${SCOPE}`];
  for (const bin of [process.env.GCLOUD_BIN ?? "gcloud", "/opt/homebrew/bin/gcloud", "/usr/local/bin/gcloud"]) {
    try {
      return execFileSync(bin, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === "ENOENT") continue;
      const detail = String((e as { stderr?: string }).stderr ?? e).split("\n").find((l) => l.includes("ERROR")) ?? "";
      throw new Error(`gcloud could not get a token for ${account}. Run "gcloud auth login" and try again. ${detail}`.trim());
    }
  }
  throw new Error("gcloud was not found. Install the Google Cloud CLI or set GCLOUD_BIN.");
}

/** The service account in use and a Search Console access token for it. */
async function credentials(): Promise<{ email: string; token: string }> {
  const account = process.env.GSC_IMPERSONATE_SERVICE_ACCOUNT;
  if (account) return { email: account, token: impersonatedToken(account) };
  const keyFile = process.env.GSC_SERVICE_ACCOUNT_FILE;
  if (!keyFile) throw new Error("Search Console API is not set up (GSC_IMPERSONATE_SERVICE_ACCOUNT); pass --queries-csv/--pages-csv instead.");
  const email = (JSON.parse(readFileSync(keyFile, "utf8")) as { client_email: string }).client_email;
  return { email, token: await keyFileToken(keyFile) };
}

/** Exchanges a service-account key for an access token (OAuth 2.0 JWT bearer flow). */
async function keyFileToken(keyFile: string): Promise<string> {
  const key = JSON.parse(readFileSync(keyFile, "utf8")) as { client_email: string; private_key: string };
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({ iss: key.client_email, scope: SCOPE, aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 }),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const jwt = `${header}.${claims}.${base64url(signer.sign(key.private_key))}`;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: jwt }),
  });
  if (!res.ok) throw new Error(`Google token error ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return ((await res.json()) as { access_token: string }).access_token;
}

/** The service account's email (add it as a user in Search Console) and the properties it can read. */
export async function gscSites(): Promise<{ email: string; sites: { siteUrl: string; permissionLevel: string }[] }> {
  const { email, token } = await credentials();
  const res = await fetch("https://searchconsole.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Search Console ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return { email, sites: ((await res.json()) as { siteEntry?: { siteUrl: string; permissionLevel: string }[] }).siteEntry ?? [] };
}

function isoDaysAgo(days: number): string {
  return new Date(Date.now() - days * 86_400_000).toISOString().slice(0, 10);
}

/** Pulls Search Analytics rows for the last `days` days (Search Console lags about 2 days). */
export async function gscQuery(opts: { dimensions: ("query" | "page")[]; days: number }): Promise<GscRow[]> {
  const site = process.env.GSC_SITE ?? "sc-domain:bondtrials.com";
  const { token } = await credentials();
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  const rows: GscRow[] = [];
  for (let startRow = 0; ; startRow += 25_000) {
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        startDate: isoDaysAgo(opts.days + 2),
        endDate: isoDaysAgo(2),
        dimensions: opts.dimensions,
        rowLimit: 25_000,
        startRow,
      }),
    });
    if (!res.ok) throw new Error(`Search Console ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const json = (await res.json()) as { rows?: { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }[] };
    for (const r of json.rows ?? []) {
      const row: GscRow = { clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position };
      opts.dimensions.forEach((d, i) => (row[d] = r.keys[i]));
      rows.push(row);
    }
    if ((json.rows?.length ?? 0) < 25_000) break;
  }
  return rows;
}

/** Parses CSV text into rows, honoring double-quoted fields, including ones that span lines. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (ch === '"') quoted = false;
      else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(cur);
      cur = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cur);
      cur = "";
      if (row.some((c) => c.trim())) rows.push(row);
      row = [];
    } else cur += ch;
  }
  row.push(cur);
  if (row.some((c) => c.trim())) rows.push(row);
  return rows;
}

/** Reads a Search Console UI export ("Top queries" or "Top pages", Clicks, Impressions, CTR, Position). */
export function gscCsv(file: string, kind: "query" | "page"): GscRow[] {
  const [head, ...body] = parseCsv(readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
  const header = head.map((h) => h.trim().toLowerCase());
  const col = (name: string) => header.findIndex((h) => h.includes(name));
  const keyCol = header.findIndex((h) => h.includes(kind === "query" ? "quer" : "page"));
  if (keyCol < 0) throw new Error(`${file}: expected a "Top ${kind === "query" ? "queries" : "pages"}" column, found ${header.join(", ")}`);
  const num = (v: string | undefined) => Number((v ?? "").replace(/[%,]/g, "")) || 0;
  return body.map((f) => {
    const ctrRaw = f[col("ctr")] ?? "";
    const row: GscRow = {
      clicks: num(f[col("click")]),
      impressions: num(f[col("impression")]),
      ctr: ctrRaw.includes("%") ? num(ctrRaw) / 100 : num(ctrRaw),
      position: num(f[col("position")]),
    };
    // Some queries are pasted text with line breaks; keep them as one line.
    row[kind] = (f[keyCol] ?? "").replace(/\s+/g, " ").trim();
    return row;
  });
}
