import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { glossary, getGlossaryTerm } from "@/content/glossary";
import { buildMetadata, glossaryTermToPage, SITE_URL } from "@/content/seo";
import SeoArticle from "@/components/seo/SeoArticle";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return {};
  return buildMetadata(glossaryTermToPage(term));
}

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();
  const page = glossaryTermToPage(term);
  const definedTerm = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.short,
    url: `${SITE_URL}/glossary/${term.slug}`,
    inDefinedTermSet: `${SITE_URL}/glossary`,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTerm) }} />
      <SeoArticle page={page} />
    </>
  );
}
