import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/** Maps a source id to its 1-based number in the page's sources list. */
export type CiteIndex = Map<string, number>;

const TOKEN_RE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\)|\{\{cite:[^}]+\}\}|`[^`]+`)/g;
const LINK_RE = /^\[([^\]]+)\]\(([^)\s]+)\)$/;

// Underlined (faintly, darker on hover): blue on gray-700 text is only ~2:1, too close to tell links apart by colour
const LINK =
  "font-medium text-bond-primary underline decoration-bond-primary/30 underline-offset-[3px] transition-colors hover:decoration-bond-primary";

/** `className` sets the marker size; by default 0.7em of the text, but never under 11px (in 12px table notes 0.7em
 * was 8.4px). */
export function Cite({ ids, cites, className = "text-[max(0.7em,0.6875rem)]" }: { ids: string[]; cites: CiteIndex; className?: string }) {
  return (
    <sup className={`ml-0.5 leading-none ${className}`}>
      {/* Word joiner: keeps the marker on the same line as the word it cites. A long run of markers may wrap after
          a comma (<wbr>), so it can't force a table column wide; each marker itself never breaks. */}
      {"\u2060"}
      {ids.map((id, i) => {
        const n = cites.get(id);
        return (
          <Fragment key={id}>
            {i > 0 && (
              <>
                ,<wbr />
              </>
            )}
            <a href={`#src-${id}`} className="whitespace-nowrap text-bond-primary hover:underline" aria-label={`Source ${n ?? "unknown"}`}>
              [{n ?? "?"}]
            </a>
          </Fragment>
        );
      })}
    </sup>
  );
}

/** Keeps hyphenated words ("LLM-based", "per-screened-patient") whole, so a balanced heading never breaks after a hyphen. */
export function keepHyphenated(text: string): ReactNode[] {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
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
          <Link key={key} href={href} className={LINK}>
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
          className={LINK}
        >
          {label}
        </a>
      );
    }
    return part;
  });
}
