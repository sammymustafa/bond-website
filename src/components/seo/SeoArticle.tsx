import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import type { SeoPage } from "@/content/types";
import {
  breadcrumbsFor,
  buildCiteIndex,
  categoryLabel,
  formatDate,
  jsonLdFor,
  showsLastUpdated,
} from "@/content/seo";
import { demoHref } from "@/content/nav";
import { withWhyBond } from "@/content/whyBond";
import { Blocks } from "./Blocks";
import ContactButton from "./ContactButton";
import { keepHyphenated, renderInline } from "./inline";
import PartnerStrip from "./PartnerStrip";
import ComplianceBadges from "@/components/ComplianceBadges";
import SmartLink from "./SmartLink";
import TocSpy from "./TocSpy";

export default function SeoArticle({ page: content }: { page: SeoPage }) {
  const page = withWhyBond(content);
  const cites = buildCiteIndex(page);
  const crumbs = breadcrumbsFor(page);
  const jsonLd = jsonLdFor(page);
  const showDate = showsLastUpdated(page);
  const hero = page.heroCta ?? { label: "Book a demo", href: demoHref };
  const showToc = page.sections.length > 1;
  const toc = [
    ...page.sections.map((s) => ({ id: s.id, label: s.heading })),
    ...(page.faq && page.faq.length > 0 ? [{ id: "faq", label: "Frequently asked questions" }] : []),
    ...(page.sources.length > 0 ? [{ id: "sources", label: "Sources" }] : []),
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}

      <article>
        {/* Header */}
        <header className="border-b border-gray-100 bg-gradient-hero pt-28 pb-8 sm:pt-36 sm:pb-14">
          <div className="container-lg px-4 sm:px-6">
            {/* One line: the current page, which repeats the H1, is cut short rather than wrapping under its chevron */}
            <nav aria-label="Breadcrumb" className="mb-6 flex min-w-0 items-center gap-1 text-xs text-gray-500 sm:text-sm">
              {crumbs.map((c, i) => (
                <span key={c.href} className={`flex items-center gap-1 ${i < crumbs.length - 1 ? "shrink-0" : "min-w-0"}`}>
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-300" />}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.href} className="-my-3 py-3 hover:text-gray-900">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="truncate text-gray-700">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <p className="eyebrow mb-3">{page.eyebrow || categoryLabel(page.category)}</p>
            <h1 className="max-w-4xl text-balance font-display text-[clamp(1.75rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-gray-900">
              {keepHyphenated(page.h1)}
            </h1>
            <p className="body-lg mt-4 max-w-3xl sm:mt-5">{renderInline(page.intro, cites, "intro")}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 sm:mt-6">
              {page.blog && (
                <span>
                  By {page.blog.author} · {formatDate(page.blog.date)}
                  {page.blog.readingMinutes ? ` · ${page.blog.readingMinutes} min read` : ""}
                </span>
              )}
              {showDate && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-gray-400" />
                  Last updated {formatDate(page.lastUpdated)}
                </span>
              )}
              {page.sources.length > 0 && (
                <a
                  href="#sources"
                  className="-my-2 inline-flex items-center gap-1.5 py-2 underline decoration-gray-300 underline-offset-4 hover:text-gray-900 hover:decoration-gray-500"
                >
                  <BookOpen className="h-4 w-4 text-gray-400" />
                  {page.sources.length} {page.sources.length === 1 ? "source" : "sources"}
                </a>
              )}
            </div>

            {page.category !== "hub" && (
              <div className="no-print mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <SmartLink href={hero.href} className="btn-primary">
                  {hero.label}
                  <ArrowRight className="h-4 w-4" />
                </SmartLink>
                {hero.secondaryLabel && hero.secondaryHref ? (
                  <SmartLink href={hero.secondaryHref} className="btn-secondary">
                    {hero.secondaryLabel}
                  </SmartLink>
                ) : (
                  <ContactButton />
                )}
              </div>
            )}

            {(page.category === "comparison" || page.path === "/compare") && <PartnerStrip />}
            {page.path === "/security" && <ComplianceBadges title="Independently audited" className="no-print mt-8" />}
          </div>
        </header>

        {/* Body */}
        <div className="container-lg px-4 py-8 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
            <aside className="no-print hidden lg:block">
              {/* Never taller than the window: the contents list scrolls inside it (fading at the bottom edge) and the
                  demo card below it stays in view */}
              <div className="sticky top-28 flex max-h-[calc(100dvh-8.5rem)] flex-col gap-6">
                {showToc && (
                  <nav aria-label="On this page" className="flex min-h-0 flex-col">
                    <p className="overline-label mb-3">On this page</p>
                    <ul
                      data-toc-scroll
                      className="min-h-0 overflow-y-auto pb-6 [mask-image:linear-gradient(to_bottom,#000_calc(100%-1.5rem),transparent)] [scrollbar-width:thin]"
                    >
                      {toc.map((t) => (
                        <li key={t.id}>
                          <a
                            href={`#${t.id}`}
                            data-toc={t.id}
                            className="block border-l-2 border-gray-200 py-1.5 pl-3 text-[13px] leading-snug text-pretty text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 data-[active]:border-bond-primary data-[active]:font-medium data-[active]:text-gray-900"
                          >
                            {t.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
                {page.category !== "hub" && (
                  <div className="shrink-0 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-900">See Bond on your own criteria</p>
                    <p className="mt-1 text-xs text-gray-600">A 15-minute demo with the Bond team.</p>
                    <a href={demoHref} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 w-full justify-center text-sm">
                      Book a demo
                    </a>
                  </div>
                )}
              </div>
            </aside>

            {/* Running text (headings, paragraphs, lists: see Blocks) is held to 42rem, about 80 characters a line;
                tables, charts and boxed blocks use the full column */}
            <div className="min-w-0 max-w-3xl">
              {/* Below lg the sidebar is hidden, so long pages get a collapsible contents list instead */}
              {showToc && (
                <details className="no-print group mb-8 rounded-2xl border border-gray-200 bg-gray-50 lg:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-gray-900">
                    On this page
                    <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="px-4 pb-3">
                    {toc.map((t) => (
                      <li key={t.id}>
                        <a
                          href={`#${t.id}`}
                          data-toc={t.id}
                          className="block py-3 text-sm leading-snug text-pretty text-gray-600 hover:text-gray-900 data-[active]:font-medium data-[active]:text-bond-primary"
                        >
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
              {showToc && <TocSpy ids={toc.map((t) => t.id)} />}
              {/* first-of-type: the phone contents list comes first in this column, so first: never matched. The
                  first block after a heading and the last in a section drop their margins, so every section has the
                  same spacing whatever block it starts or ends with. */}
              {page.sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="border-b border-gray-200/70 py-8 first-of-type:pt-0 last:border-b-0 sm:py-10 [&>h2+*]:mt-0 [&>:last-child]:mb-0 [&>h3+:is(div,figure,aside)]:mt-4"
                >
                  <h2 className="heading-md mb-4 max-w-[42rem]">{keepHyphenated(s.heading)}</h2>
                  <Blocks blocks={s.blocks} cites={cites} keyPrefix={s.id} />
                </section>
              ))}

              {page.faq && page.faq.length > 0 && (
                <section id="faq" className="border-b border-gray-200/70 py-8 sm:py-10">
                  <h2 className="heading-md mb-2 max-w-[42rem]">Frequently asked questions</h2>
                  <div>
                    {page.faq.map((f, i) => (
                      <details key={i} className="faq-item group last:border-b-0" open={i === 0}>
                        <summary className="faq-question w-full list-none text-left">
                          <span className="max-w-[42rem]">{f.q}</span>
                          <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="faq-answer max-w-[42rem]">{renderInline(f.a, cites, `faq-${i}`)}</div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {page.sources.length > 0 && (
                <section id="sources" className="py-8 sm:py-10">
                  <h2 className="heading-sm mb-4">Sources</h2>
                  <ol className="max-w-[42rem] space-y-4 text-sm text-gray-600">
                    {page.sources.map((s, i) => (
                      <li key={s.id} id={`src-${s.id}`} className="flex gap-3">
                        <span className="w-6 shrink-0 text-right font-medium tabular-nums text-gray-500">{i + 1}.</span>
                        {/* min-w-0 and overflow-wrap: long URLs and file names in notes otherwise run off a phone screen */}
                        <div className="min-w-0 [overflow-wrap:anywhere]">
                          {s.url ? (
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-gray-900 hover:text-bond-primary"
                            >
                              <TitleWithIcon title={s.title} />
                            </a>
                          ) : (
                            <span className="font-medium text-gray-900">{s.title}</span>
                          )}
                          <span>
                            {" "}
                            · {s.publisher}
                            {s.year ? `, ${s.year}` : ""}
                          </span>
                          {s.note && <SourceNote note={s.note} />}
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>

          {page.related.length > 0 && (
            <section className="no-print mt-8 border-t border-gray-200/70 pt-8 sm:mt-12 sm:pt-10">
              <h2 className="heading-sm mb-5">Related pages</h2>
              <div className={`grid gap-3 sm:grid-cols-2 sm:gap-4 ${relatedCols(page.related.length)}`}>
                {page.related.map((r) => (
                  <SmartLink key={r.href} href={r.href} className="card-link group p-4 sm:p-5">
                    <p className="font-display font-semibold text-gray-900 group-hover:text-bond-primary">{r.label}</p>
                    {r.description && <p className="mt-1 text-sm text-gray-600">{r.description}</p>}
                    <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-bond-primary">
                      {r.href.startsWith("http") ? "Open" : "Read"}{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </SmartLink>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <div className="no-print">
        <CTA />
      </div>
      <Footer />
    </main>
  );
}

/**
 * Desktop columns for the related-pages grid: two or four cards fill their rows exactly; otherwise three across.
 * Between sm and lg (two columns) an odd last card spans the row.
 */
function relatedCols(n: number) {
  const odd = "sm:max-lg:[&>:last-child:nth-child(odd)]:col-span-2";
  if (n === 2) return "lg:grid-cols-2";
  if (n === 4) return "lg:grid-cols-4";
  return `${odd} lg:grid-cols-3`;
}

/**
 * Keeps the external-link icon on the same line as the title's last word, so it never wraps alone. Not when that
 * word is long (a file name, say): unbreakable, it would run off a phone screen.
 */
function TitleWithIcon({ title }: { title: string }) {
  const cut = title.lastIndexOf(" ") + 1;
  if (title.length - cut > 20) {
    return (
      <>
        {title}
        <ExternalLink className="ml-1 inline h-3 w-3 text-gray-400" />
      </>
    );
  }
  return (
    <>
      {title.slice(0, cut)}
      <span className="whitespace-nowrap">
        {title.slice(cut)}
        <ExternalLink className="ml-1 inline h-3 w-3 text-gray-400" />
      </span>
    </>
  );
}

/**
 * Long notes (some run past 1,000 characters) made Sources lists several phone screens long, so they start
 * collapsed to their opening words. The full text stays in the HTML.
 */
function SourceNote({ note }: { note: string }) {
  if (note.length <= 160) return <span className="block text-xs text-gray-500">{note}</span>;
  const preview = note.slice(0, note.lastIndexOf(" ", 130));
  return (
    <details className="group text-xs text-gray-500">
      <summary className="cursor-pointer list-none group-open:hidden [&::-webkit-details-marker]:hidden">
        {preview}… <span className="font-medium text-gray-700 underline">more</span>
      </summary>
      {note}
    </details>
  );
}
