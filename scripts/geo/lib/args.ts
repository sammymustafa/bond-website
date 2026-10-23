/** Minimal --flag value / --flag parser for the geo scripts. */
export function parseArgs(argv = process.argv.slice(2)): {
  get(name: string): string | undefined;
  has(name: string): boolean;
  num(name: string, fallback: number): number;
} {
  const values = new Map<string, string>();
  const flags = new Set<string>();
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next !== undefined && !next.startsWith("--")) {
      values.set(key, next);
      i++;
    } else {
      flags.add(key);
    }
  }
  return {
    get: (name) => values.get(name),
    has: (name) => flags.has(name) || values.has(name),
    num: (name, fallback) => {
      const v = values.get(name);
      const n = v === undefined ? NaN : Number(v);
      return Number.isFinite(n) ? n : fallback;
    },
  };
}
