import Link from "next/link";
import type { ReactNode } from "react";

/** Maps a source id to its 1-based number in the page's sources list. */
export type CiteIndex = Map<string, number>;

const TOKEN_RE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|\{\{cite:[^}]+\}\}|`[^`]+`)/g;
const LINK_RE = /^\[([^\]]+)\]\(([^)\s]+)\)$/;

export function Cite({ ids, cites }: { ids: string[]; cites: CiteIndex }) {
  return (
    <sup className="ml-0.5 whitespace-nowrap text-[0.7em] leading-none">
      {/* Word joiner: keeps the marker on the same line as the word it cites. */}
      {"\u2060"}
      {ids.map((id, i) => {
        const n = cites.get(id);
        return (
          <a
            key={id}
            href={`#src-${id}`}
            className="text-bond-primary hover:underline"
            aria-label={`Source ${n ?? "unknown"}`}
          >
            {i > 0 ? "," : ""}[{n ?? "?"}]
          </a>
        );
      })}
    </sup>
  );
}

/**
 * Renders inline text with a tiny markdown subset: **bold**, `code`,
 * [label](href), and {{cite:id}} tokens.
 */
export function renderInline(text: string, cites: CiteIndex, keyPrefix = "i"): ReactNode[] {
  const parts = text.split(TOKEN_RE);
  return parts.map((part, i) => {
    if (!part) return null;
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={key} className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.9em] text-gray-800">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("{{cite:")) {
      const ids = part
        .slice(7, -2)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      return <Cite key={key} ids={ids} cites={cites} />;
    }
    const m = part.match(LINK_RE);
    if (m) {
      const [, label, href] = m;
      if (href.startsWith("/") || href.startsWith("#")) {
        return (
          <Link key={key} href={href} className="text-bond-primary font-medium hover:underline">
            {label}
          </Link>
        );
      }
      return (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bond-primary font-medium hover:underline"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}
