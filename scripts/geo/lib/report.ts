import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

/** reports/geo/YYYY-MM-DD/ (gitignored), created on first write. */
export function reportDir(): string {
  const dir = resolve(process.cwd(), "reports", "geo", new Date().toISOString().slice(0, 10));
  mkdirSync(dir, { recursive: true });
  return dir;
}

function csvCell(v: unknown): string {
  const s = (v === undefined || v === null ? "" : Array.isArray(v) ? v.join("; ") : String(v)).replace(/\s*\r?\n\s*/g, " ");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function writeCsv(name: string, rows: Record<string, unknown>[]): string {
  const file = join(reportDir(), name);
  const cols = rows.length ? Object.keys(rows[0]) : [];
  const body = [cols.join(","), ...rows.map((r) => cols.map((c) => csvCell(r[c])).join(","))].join("\n");
  writeFileSync(file, body + "\n");
  return file;
}

export function writeText(name: string, text: string): string {
  const file = join(reportDir(), name);
  writeFileSync(file, text);
  return file;
}

export function mdTable(columns: string[], rows: (string | number)[][]): string {
  const esc = (v: string | number) => String(v).replace(/\|/g, "\\|").replace(/\n/g, " ");
  return [
    `| ${columns.join(" | ")} |`,
    `| ${columns.map(() => "---").join(" | ")} |`,
    ...rows.map((r) => `| ${r.map(esc).join(" | ")} |`),
  ].join("\n");
}

export const pct = (n: number, d: number) => (d ? `${Math.round((100 * n) / d)}%` : "0%");

/** The newest reports/geo/<date>/<file>, or undefined if no run has produced it yet. */
export function latestReport(file: string): string | undefined {
  const root = resolve(process.cwd(), "reports", "geo");
  if (!existsSync(root)) return undefined;
  for (const dir of readdirSync(root).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort().reverse()) {
    const candidate = join(root, dir, file);
    if (existsSync(candidate)) return candidate;
  }
  return undefined;
}

/** Reads a CSV written by writeCsv (quoted fields, no line breaks inside cells). */
export function readCsv(file: string): Record<string, string>[] {
  const split = (line: string) => {
    const out: string[] = [];
    let cur = "";
    let quoted = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (quoted) {
        if (ch === '"' && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else if (ch === '"') quoted = false;
        else cur += ch;
      } else if (ch === '"') quoted = true;
      else if (ch === ",") {
        out.push(cur);
        cur = "";
      } else cur += ch;
    }
    out.push(cur);
    return out;
  };
  const [head, ...lines] = readFileSync(file, "utf8").split("\n").filter((l) => l.trim());
  const cols = split(head);
  return lines.map((l) => {
    const f = split(l);
    return Object.fromEntries(cols.map((c, i) => [c, f[i] ?? ""]));
  });
}
