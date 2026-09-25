import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages } from "@/content/registry";
import { getPage } from "@/content/site";
import { buildMetadata } from "@/content/seo";
import SeoArticle from "@/components/seo/SeoArticle";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.path.replace(/^\//, "").split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(`/${slug.join("/")}`);
  if (!page) return {};
  return buildMetadata(page);
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(`/${slug.join("/")}`);
  if (!page) notFound();
  return <SeoArticle page={page} />;
}
