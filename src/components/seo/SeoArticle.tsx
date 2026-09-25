import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
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
import { Blocks } from "./Blocks";
import ContactButton from "./ContactButton";
import { renderInline } from "./inline";
import PartnerStrip from "./PartnerStrip";
import SmartLink from "./SmartLink";

export default function SeoArticle({ page }: { page: SeoPage }) {
  const cites = buildCiteIndex(page);
  const crumbs = breadcrumbsFor(page);
  const jsonLd = jsonLdFor(page);
  const showDate = showsLastUpdated(page);
  const hero = page.heroCta ?? { label: "Book a demo", href: demoHref };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}

      <article>
        {/* Header */}
        <header className="border-b border-gray-100 bg-gradient-hero pt-28 pb-10 sm:pt-36 sm:pb-14">
          <div className="container-lg px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-gray-500 sm:text-sm">
              {crumbs.map((c, i) => (
                <span key={c.href} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-300" />}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.href} className="hover:text-gray-900">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-gray-700">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <p className="eyebrow mb-3">{page.eyebrow || categoryLabel(page.category)}</p>
            <h1 className="max-w-4xl font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
              {page.h1}
            </h1>
            <p className="body-lg mt-5 max-w-3xl">{renderInline(page.intro, cites, "intro")}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
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
                <a href="#sources" className="hover:text-gray-900">
                  {page.sources.length} {page.sources.length === 1 ? "source" : "sources"}
                </a>
              )}
            </div>

            {page.category !== "hub" && (
              <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </header>

        {/* Body */}
        <div className="container-lg px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
            <aside className="no-print hidden lg:block">
              <div className="sticky top-28 space-y-6">
                {page.sections.length > 1 && (
                  <nav aria-label="On this page">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">On this page</p>
                    <ul className="space-y-2 border-l border-gray-200">
                      {page.sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="-ml-px block border-l-2 border-transparent pl-3 text-sm leading-snug text-gray-600 hover:border-bond-primary hover:text-gray-900"
                          >
                            {s.heading}
                          </a>
                        </li>
                      ))}
                      {page.faq && page.faq.length > 0 && (
                        <li>
                          <a
                            href="#faq"
                            className="-ml-px block border-l-2 border-transparent pl-3 text-sm text-gray-600 hover:border-bond-primary hover:text-gray-900"
                          >
                            Frequently asked questions
                          </a>
                        </li>
                      )}
                      {page.sources.length > 0 && (
                        <li>
                          <a
                            href="#sources"
                            className="-ml-px block border-l-2 border-transparent pl-3 text-sm text-gray-600 hover:border-bond-primary hover:text-gray-900"
                          >
                            Sources
                          </a>
                        </li>
                      )}
                    </ul>
                  </nav>
                )}
                {page.category !== "hub" && (
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-900">See Bond on your own criteria</p>
                    <p className="mt-1 text-xs text-gray-600">A 15-minute demo with the Bond team.</p>
                    <Link href={demoHref} className="btn-primary mt-3 w-full justify-center text-sm">
                      Book a demo
                    </Link>
                  </div>
                )}
              </div>
            </aside>

            <div className="min-w-0 max-w-3xl">
              {page.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-gray-100 py-8 first:pt-0 last:border-b-0">
                  <h2 className="heading-md mb-4">{s.heading}</h2>
                  <Blocks blocks={s.blocks} cites={cites} keyPrefix={s.id} />
                </section>
              ))}

              {page.faq && page.faq.length > 0 && (
                <section id="faq" className="scroll-mt-28 border-b border-gray-100 py-8">
                  <h2 className="heading-md mb-4">Frequently asked questions</h2>
                  <div>
                    {page.faq.map((f, i) => (
                      <details key={i} className="faq-item group" open={i === 0}>
                        <summary className="faq-question w-full list-none text-left">
                          <span>{f.q}</span>
                          <ChevronDown className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="faq-answer mt-3">{renderInline(f.a, cites, `faq-${i}`)}</div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {page.sources.length > 0 && (
                <section id="sources" className="scroll-mt-28 py-8">
                  <h2 className="heading-sm mb-4">Sources</h2>
                  <ol className="space-y-3 text-sm text-gray-600">
                    {page.sources.map((s, i) => (
                      <li key={s.id} id={`src-${s.id}`} className="flex gap-3 scroll-mt-28">
                        <span className="w-6 flex-shrink-0 text-right font-medium text-gray-400">{i + 1}.</span>
                        <span>
                          {s.url ? (
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-gray-900 hover:text-bond-primary"
                            >
                              {s.title}
                              <ExternalLink className="ml-1 inline h-3 w-3 text-gray-400" />
                            </a>
                          ) : (
                            <span className="font-medium text-gray-900">{s.title}</span>
                          )}
                          <span>
                            {" "}
                            · {s.publisher}
                            {s.year ? `, ${s.year}` : ""}
                          </span>
                          {s.note && <span className="block text-xs text-gray-500">{s.note}</span>}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>

          {page.related.length > 0 && (
            <section className="no-print mt-12 border-t border-gray-100 pt-10">
              <h2 className="heading-sm mb-5">Related pages</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-bond-primary/30 hover:shadow-md"
                  >
                    <p className="font-semibold text-gray-900 group-hover:text-bond-primary">{r.label}</p>
                    {r.description && <p className="mt-1 text-sm text-gray-600">{r.description}</p>}
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-bond-primary">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
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
