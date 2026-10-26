import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pagesInCategory } from "@/content/site";
import type { PageCategory } from "@/content/types";

export default function PageList({
  category,
  exclude = [],
}: {
  category: PageCategory | PageCategory[];
  exclude?: string[];
}) {
  const list = pagesInCategory(category, exclude);
  if (!list.length) return null;
  return (
    <div className="not-prose my-8 grid gap-3 sm:grid-cols-2 sm:gap-4 sm:[&>:last-child:nth-child(odd)]:col-span-2">
      {list.map((p) => (
        <Link key={p.path} href={p.path} className="card-link group">
          <span className="font-display text-base font-semibold text-balance text-gray-900 group-hover:text-bond-primary">{p.h1}</span>
          <span className="mt-2 text-sm leading-relaxed text-gray-600">{p.summary}</span>
          {/* mt-auto: "Read" sits at the bottom, level across a row of equal-height cards */}
          <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-bond-primary">
            Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
