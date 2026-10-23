import { publishedPages } from "../../../src/content/published";
import { glossary } from "../../../src/content/glossary";
import { BRAND, glossaryTermToPage, jsonLdFor, stripInline } from "../../../src/content/seo";
import type { Block, SeoPage } from "../../../src/content/types";

export interface PageFacts {
  path: string;
  category: string;
  /** The <title> as rendered, including " | Bond Health" unless the title already names the brand. */
  renderedTitle: string;
  title: string;
  description: string;
  h1: string;
  headings: string[];
  faqQuestions: string[];
  schemaTypes: string[];
  words: number;
  lastUpdated: string;
  /** Lead paragraph as plain text (citations and link markup removed). */
  intro: string;
  /** Whole page as plain text, in reading order. */
  text: string;
  /** The page's cited sources as "publisher: title (year)"; inline citation markers are stripped from `text`. */
  sources: string[];
}

function blockText(b: Block): string {
  switch (b.type) {
    case "p":
    case "h3":
    case "callout":
    case "quote":
      return b.text;
    case "ul":
    case "ol":
    case "checklist":
      return b.items.join(" ");
    case "steps":
      return b.items.map((i) => `${i.title} ${i.text}`).join(" ");
    case "table":
      return b.rows.flat().join(" ");
    default:
      return "";
  }
}

export function pageFacts(page: SeoPage): PageFacts {
  const branded = page.title.includes(BRAND);
  const text = stripInline(
    [page.intro, ...page.sections.flatMap((s) => [s.heading, ...s.blocks.map(blockText)]), ...(page.faq ?? []).flatMap((f) => [f.q, f.a])].join("\n"),
  );
  return {
    path: page.path,
    category: page.category,
    renderedTitle: branded ? page.title : `${page.title} | ${BRAND}`,
    title: page.title,
    description: page.description,
    h1: page.h1,
    headings: page.sections.map((s) => s.heading),
    faqQuestions: (page.faq ?? []).map((f) => f.q),
    schemaTypes: jsonLdFor(page).map((j) => String(j["@type"])),
    words: text.split(/\s+/).filter(Boolean).length,
    lastUpdated: page.lastUpdated,
    intro: stripInline(page.intro),
    text,
    sources: page.sources.map((s) => `${s.publisher}: ${s.title}${s.year ? ` (${s.year})` : ""}`),
  };
}

/** Every live content page plus the glossary terms (scheduled posts are excluded until their date). */
export function livePages(): PageFacts[] {
  return [...publishedPages, ...glossary.map(glossaryTermToPage)].map(pageFacts);
}
