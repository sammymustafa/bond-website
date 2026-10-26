import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import WhyBond from "@/components/WhyBond";
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
          <h1 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-balance text-gray-900">
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
          // With an odd number of posts the newest spans both columns, so no card sits alone on the last row
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:[&>:first-child:nth-last-child(odd)]:col-span-2">
            {posts.map((p, i) => {
              // The newest post, when it spans both columns, gets a larger heading so it reads as featured
              const featured = i === 0 && posts.length % 2 === 1;
              return (
                <Link key={p.path} href={p.path} className={`card-link group sm:p-6 ${featured ? "md:p-8" : ""}`}>
                  <p className="text-xs text-gray-500">
                    {formatDate(p.blog!.date)} · {p.blog!.author}
                    {p.blog!.readingMinutes ? ` · ${p.blog!.readingMinutes} min read` : ""}
                  </p>
                  <h2
                    className={`mt-2 font-display text-xl font-semibold text-balance text-gray-900 group-hover:text-bond-primary ${featured ? "md:text-2xl" : ""}`}
                  >
                    {p.h1}
                  </h2>
                  <p className={`mt-2 text-sm leading-relaxed text-gray-600 ${featured ? "md:max-w-3xl md:text-base" : ""}`}>
                    {p.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-bond-primary">
                    Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <WhyBond compact />
      <CTA />
      <Footer />
    </main>
  );
}
