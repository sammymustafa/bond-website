import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import WhyBond from "@/components/WhyBond";
import { glossary } from "@/content/glossary";
import { SITE_URL, formatDate, staticPageMetadata } from "@/content/seo";

export const metadata: Metadata = staticPageMetadata({
  path: "/glossary",
  title: "Clinical trial recruitment glossary",
  description:
    "Plain-language definitions of the enrollment terms sites, CROs and sponsors use, from screen failure rate and first patient in to site feasibility and pre-screening.",
});

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  const latest = sorted.reduce((d, t) => (t.lastUpdated > d ? t.lastUpdated : d), "2026-01-01");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE_URL}/glossary`,
    name: "Clinical trial recruitment glossary",
    hasDefinedTerm: sorted.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.short,
      url: `${SITE_URL}/glossary/${t.slug}`,
    })),
  };
  const letters = Array.from(new Set(sorted.map((t) => t.term[0].toUpperCase())));

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-gray-100 bg-gradient-hero pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className="container-lg px-4 sm:px-6">
          <p className="eyebrow mb-3">Glossary</p>
          <h1 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-balance text-gray-900">
            Clinical trial recruitment terms, defined
          </h1>
          <p className="body-lg mt-5 max-w-3xl">
            {sorted.length} terms that come up in feasibility calls, IRB submissions and enrollment reports, each with a
            source and a link to where it matters in the recruitment workflow.
          </p>
          <p className="mt-4 text-sm text-gray-500">Last updated {formatDate(latest)}</p>
          <nav aria-label="Letters" className="mt-6 flex flex-wrap gap-2">
            {letters.map((l) => (
              <a
                key={l}
                href={`#letter-${l}`}
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-white px-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200 transition-colors hover:bg-bond-primary/5 hover:text-bond-primary hover:ring-bond-primary/30"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="container-lg px-4 py-12 sm:px-6 sm:py-16">
        {letters.map((l) => (
          // One list per letter, with the letter in a left rail from md: a two-column card grid left a lone card on
          // most letters
          <section key={l} id={`letter-${l}`} className="mb-8 sm:mb-10 md:grid md:grid-cols-[3rem_minmax(0,1fr)] md:gap-6">
            <h2 className="mb-3 font-display text-2xl font-bold text-gray-900 md:sticky md:top-24 md:mb-0 md:self-start md:pt-4">{l}</h2>
            <div className="divide-y divide-gray-200/70 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              {sorted
                .filter((t) => t.term[0].toUpperCase() === l)
                .map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossary/${t.slug}`}
                    className="group block p-4 transition-colors hover:bg-gray-50 sm:p-5 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)_auto] lg:items-baseline lg:gap-6"
                  >
                    <h3 className="font-display text-base font-semibold text-gray-900 group-hover:text-bond-primary sm:text-lg">{t.term}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 lg:mt-0">{t.short}</p>
                    <span className="mt-2 inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-bond-primary lg:mt-0">
                      Full definition <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
      <WhyBond compact />
      <CTA />
      <Footer />
    </main>
  );
}
