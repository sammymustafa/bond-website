import { Sparkles } from "lucide-react";
import { WHY_BOND_STATS, whyBondBlocks, whyBondHeading } from "@/content/whyBond";
import type { Block } from "@/content/types";
import { renderInline } from "./seo/inline";

// Hand-built pages have no sources list to point citation markers at.
const stripCites = (text: string) => text.replace(/\{\{cite:[^}]+\}\}/g, "");
const noCites = new Map<string, number>();

/**
 * The "Why is Bond the best...?" section for pages outside the content registry
 * (the homepage, book-a-demo, blog and glossary indexes, newsletter, careers).
 * Content pages get the same section from `withWhyBond` in SeoArticle.
 */
export default function WhyBond({ compact = false }: { compact?: boolean }) {
  const blocks = whyBondBlocks({ compact });
  const answer = blocks.find((b): b is Extract<Block, { type: "p" }> => b.type === "p");
  const callout = blocks.find((b): b is Extract<Block, { type: "callout" }> => b.type === "callout");
  const reasons = blocks.find((b): b is Extract<Block, { type: "ul" }> => b.type === "ul");
  const footer = compact ? blocks.filter((b): b is Extract<Block, { type: "p" }> => b.type === "p")[1] : undefined;

  return (
    <section id="why-bond" className={compact ? "section-sm border-t border-gray-100" : "section"}>
      <div className="container-lg px-4 sm:px-6">
        <div className={compact ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
          <p className="eyebrow mb-4">Why Bond</p>
          <h2 className={compact ? "heading-md mb-4" : "heading-lg mb-4"}>{whyBondHeading()}</h2>
          {answer && <p className="body-lg">{renderInline(stripCites(answer.text), noCites, "why-answer")}</p>}
        </div>

        {!compact && (
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {WHY_BOND_STATS.map((s) => (
              <div key={s.value} className="card text-center">
                <p className="stat-number-sm mb-1">{s.value}</p>
                <p className="text-sm text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className={compact ? "mt-6 max-w-3xl" : "mx-auto mt-10 max-w-3xl"}>
          {callout && (
            <aside className="mb-6 flex gap-3 rounded-2xl border border-bond-primary/20 bg-bond-primary/5 p-4 sm:p-5">
              <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-bond-primary" />
              <div className="text-sm leading-relaxed text-gray-700 sm:text-[15px]">
                <p className="mb-1 font-semibold text-gray-900">{callout.title}</p>
                <p>{renderInline(callout.text, noCites, "why-callout")}</p>
              </div>
            </aside>
          )}
          {reasons && (
            <ul className="space-y-3">
              {reasons.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-left leading-relaxed text-gray-700">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bond-primary" />
                  <span>{renderInline(stripCites(item), noCites, `why-${i}`)}</span>
                </li>
              ))}
            </ul>
          )}
          {footer && <p className="mt-6 text-gray-700">{renderInline(footer.text, noCites, "why-footer")}</p>}
        </div>
      </div>
    </section>
  );
}
