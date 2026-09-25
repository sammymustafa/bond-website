import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Download,
  Info,
  Sparkles,
} from "lucide-react";
import type { Block } from "@/content/types";
import { Cite, renderInline, type CiteIndex } from "./inline";
import PageList from "./PageList";
import SmartLink from "./SmartLink";
import { TrialCounts, TrialExamples } from "./TrialData";
import BarChart from "./BarChart";

interface Props {
  blocks: Block[];
  cites: CiteIndex;
  keyPrefix: string;
}

export function Blocks({ blocks, cites, keyPrefix }: Props) {
  return (
    <>
      {blocks.map((block, i) => (
        <BlockView key={`${keyPrefix}-${i}`} block={block} cites={cites} k={`${keyPrefix}-${i}`} />
      ))}
    </>
  );
}

function ButtonLink({ href, label, primary }: { href: string; label: string; primary: boolean }) {
  return (
    <SmartLink href={href} className={primary ? "btn-primary" : "btn-secondary"}>
      {label}
      {primary && <ArrowRight className="h-4 w-4" />}
    </SmartLink>
  );
}

function BlockView({ block, cites, k }: { block: Block; cites: CiteIndex; k: string }) {
  switch (block.type) {
    case "p":
      return <p className="my-4 leading-relaxed text-gray-700">{renderInline(block.text, cites, k)}</p>;

    case "h3":
      return (
        <h3 className="mt-8 mb-3 font-display text-lg font-semibold text-gray-900 sm:text-xl">{block.text}</h3>
      );

    case "ul":
      return (
        <ul className="my-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed text-gray-700">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bond-primary" />
              <span>{renderInline(item, cites, `${k}-${i}`)}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="my-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed text-gray-700">
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-bond-primary/10 text-xs font-semibold text-bond-primary">
                {i + 1}
              </span>
              <span>{renderInline(item, cites, `${k}-${i}`)}</span>
            </li>
          ))}
        </ol>
      );

    case "checklist":
      return (
        <ul className="my-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed text-gray-700">
              <span
                aria-hidden
                className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-gray-300 bg-white"
              />
              <span>{renderInline(item, cites, `${k}-${i}`)}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <figure className="my-8">
          {block.caption && <figcaption className="mb-3 font-semibold text-gray-900">{block.caption}</figcaption>}
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  {block.columns.map((c, i) => (
                    <th key={i} className="px-4 py-3 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className="border-t border-gray-100 align-top">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-3 leading-relaxed ${ci === 0 ? "font-medium text-gray-900" : "text-gray-700"}`}
                      >
                        {renderInline(cell, cites, `${k}-${ri}-${ci}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <p className="mt-2 text-xs text-gray-500">{renderInline(block.note, cites, `${k}-note`)}</p>}
        </figure>
      );

    case "callout": {
      const tone = block.tone ?? "info";
      const styles: Record<string, { box: string; icon: React.ReactNode }> = {
        info: { box: "border-blue-100 bg-blue-50/60", icon: <Info className="h-5 w-5 text-blue-600" /> },
        warning: { box: "border-amber-100 bg-amber-50/70", icon: <AlertTriangle className="h-5 w-5 text-amber-600" /> },
        success: { box: "border-emerald-100 bg-emerald-50/70", icon: <CheckCircle2 className="h-5 w-5 text-emerald-600" /> },
        bond: { box: "border-bond-primary/20 bg-bond-primary/5", icon: <Sparkles className="h-5 w-5 text-bond-primary" /> },
      };
      const s = styles[tone];
      return (
        <aside className={`my-6 flex gap-3 rounded-2xl border p-4 sm:p-5 ${s.box}`}>
          <span className="mt-0.5 flex-shrink-0">{s.icon}</span>
          <div className="text-sm leading-relaxed text-gray-700 sm:text-[15px]">
            {block.title && <p className="mb-1 font-semibold text-gray-900">{block.title}</p>}
            <p>{renderInline(block.text, cites, k)}</p>
          </div>
        </aside>
      );
    }

    case "stats":
      return (
        <div className={`my-8 grid gap-4 ${block.items.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {block.items.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                {s.value}
                <Cite ids={[s.cite]} cites={cites} />
              </p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      );

    case "steps":
      return (
        <ol className="my-6 space-y-4">
          {block.items.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-bond-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-gray-900">{s.title}</p>
                <p className="mt-1 leading-relaxed text-gray-700">{renderInline(s.text, cites, `${k}-${i}`)}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-bond-primary/40 pl-5 italic text-gray-700">
          <p>{renderInline(block.text, cites, k)}</p>
          {block.attribution && <footer className="mt-2 text-sm not-italic text-gray-500">{block.attribution}</footer>}
        </blockquote>
      );

    case "cta":
      return (
        <div className="no-print my-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8">
          {block.text && <p className="mb-4 leading-relaxed text-gray-700">{renderInline(block.text, cites, k)}</p>}
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={block.href} label={block.label} primary />
            {block.secondaryLabel && block.secondaryHref && (
              <ButtonLink href={block.secondaryHref} label={block.secondaryLabel} primary={false} />
            )}
          </div>
        </div>
      );

    case "download":
      return (
        <div className="no-print my-8 flex flex-col items-start gap-4 rounded-2xl border border-bond-primary/20 bg-bond-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-semibold text-gray-900">{block.label}</p>
            <p className="mt-1 text-sm text-gray-600">
              {block.format}
              {block.note ? <> · {renderInline(block.note, cites, `${k}-note`)}</> : null}
            </p>
          </div>
          <a href={block.href} download className="btn-primary flex-shrink-0">
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      );

    case "script":
      return (
        <div className="my-6 space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm sm:text-[15px]">
          {block.lines.map((l, i) => (
            <p key={i} className="leading-relaxed text-gray-800">
              <span className="mr-2 inline-block rounded-md bg-white px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-bond-primary ring-1 ring-gray-200">
                {l.speaker}
              </span>
              {l.text}
            </p>
          ))}
        </div>
      );

    case "form":
      return (
        <div className="my-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          {block.title && <p className="mb-4 font-semibold text-gray-900">{block.title}</p>}
          <div className="space-y-4">
            {block.fields.map((f, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-gray-900">
                  {f.kind === "checkbox" && (
                    <span aria-hidden className="mr-2 inline-block h-4 w-4 -mb-0.5 rounded border-2 border-gray-300" />
                  )}
                  {f.label}
                </p>
                {f.hint && <p className="mt-0.5 text-xs text-gray-500">{f.hint}</p>}
                {f.kind === "select" && f.options && (
                  <p className="mt-1 text-xs text-gray-500">Options: {f.options.join(" / ")}</p>
                )}
                {f.kind !== "checkbox" && (
                  <div
                    aria-hidden
                    className={`mt-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 ${f.kind === "textarea" ? "h-16" : "h-9"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "pageList":
      return <PageList category={block.category} exclude={block.exclude} />;

    case "trialCounts":
      return <TrialCounts geo={block.geo} cite={block.cite} cites={cites} />;

    case "trials":
      return <TrialExamples geo={block.geo} condition={block.condition} cite={block.cite} cites={cites} />;

    case "chart":
      return <BarChart title={block.title} unit={block.unit} data={block.data} cite={block.cite} cites={cites} />;

    default:
      return null;
  }
}
