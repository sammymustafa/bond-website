import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
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
          <h1 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
            Clinical trial recruitment terms, defined
          </h1>
          <p className="body-lg mt-5 max-w-3xl">
            {sorted.length} terms that come up in feasibility calls, IRB submissions and enrollment reports, each with a
            source and a link to where it matters in the recruitment workflow.
          </p>
          <p className="mt-4 text-sm text-gray-500">Last updated {formatDate(latest)}</p>
          <nav aria-label="Letters" className="mt-6 flex flex-wrap gap-2">
            {letters.map((l) => (
              <a key={l} href={`#letter-${l}`} className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-gray-200 hover:text-bond-primary">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="container-lg px-4 py-12 sm:px-6 sm:py-16">
        {letters.map((l) => (
          <section key={l} id={`letter-${l}`} className="scroll-mt-28 mb-10">
            <h2 className="mb-4 font-display text-2xl font-bold text-gray-900">{l}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {sorted
                .filter((t) => t.term[0].toUpperCase() === l)
                .map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossary/${t.slug}`}
                    className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-bond-primary/30 hover:shadow-md"
                  >
                    <h3 className="font-display text-lg font-semibold text-gray-900 group-hover:text-bond-primary">{t.term}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.short}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-bond-primary">
                      Full definition <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
