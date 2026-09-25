import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { blogPosts } from "@/content/site";
import { staticPageMetadata, formatDate } from "@/content/seo";

export const metadata: Metadata = staticPageMetadata({
  path: "/blog",
  title: "Blog",
  description:
    "Sourced writing on clinical trial recruitment: EHR screening, patient outreach rules, consent, and what sites report about enrollment.",
});

export default function BlogIndex() {
  const posts = blogPosts();
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <header className="border-b border-gray-100 bg-gradient-hero pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className="container-lg px-4 sm:px-6">
          <p className="eyebrow mb-3">Blog</p>
          <h1 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
            Notes on enrollment
          </h1>
          <p className="body-lg mt-5 max-w-3xl">
            Short, sourced pieces on how patients actually get into trials: what the chart holds, what the rules allow,
            and what sites tell surveys. Every number links to where it came from.
          </p>
        </div>
      </header>
      <div className="container-lg px-4 py-12 sm:px-6 sm:py-16">
        {posts.length === 0 ? (
          <p className="text-gray-600">First posts are on the way.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.path}
                href={p.path}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-bond-primary/30 hover:shadow-md"
              >
                <p className="text-xs text-gray-500">
                  {formatDate(p.blog!.date)} · {p.blog!.author}
                  {p.blog!.readingMinutes ? ` · ${p.blog!.readingMinutes} min read` : ""}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-gray-900 group-hover:text-bond-primary">{p.h1}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-bond-primary">
                  Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
