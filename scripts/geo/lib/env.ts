import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Loads KEY=value lines from .env.local into process.env (values already set in the shell win).
 * .env*.local is gitignored, so API keys stay out of the repo.
 */
export function loadEnv(file = resolve(process.cwd(), ".env.local")): void {
  if (!existsSync(file)) return;
  for (const raw of readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq < 1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

export function requireEnv(name: string, hint: string): string {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing ${name}. ${hint}\nSee scripts/geo/README.md.`);
    process.exit(1);
  }
  return value;
}
