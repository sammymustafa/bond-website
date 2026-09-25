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
    <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
      {list.map((p) => (
        <Link
          key={p.path}
          href={p.path}
          className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-bond-primary/30 hover:shadow-md"
        >
          <span className="font-display text-base font-semibold text-gray-900 group-hover:text-bond-primary">{p.h1}</span>
          <span className="mt-2 text-sm text-gray-600">{p.summary}</span>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-bond-primary">
            Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
