import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Download,
  Info,
  Sparkles,
} from "lucide-react";
import type { Block } from "@/content/types";
import { Cite, keepHyphenated, renderInline, type CiteIndex } from "./inline";
import PageList from "./PageList";
import SmartLink from "./SmartLink";
import { TrialCounts, TrialExamples } from "./TrialData";
import BarChart from "./BarChart";
import ScrollTable from "./ScrollTable";
import { roles, stacked, tableStyle as t } from "./stackedTable";

interface Props {
  blocks: Block[];
  cites: CiteIndex;
  keyPrefix: string;
}

// Running text, and the boxes that hold running text (callouts, CTAs, downloads), is held to 42rem (about 80
// characters a line) and set at 17px from sm; data blocks (tables, stats, charts, scripts, forms) use the full column.
const prose = "max-w-[42rem]";
const bodyText = "leading-relaxed text-gray-700 sm:text-[17px]";

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

/** A cell's visible text, without inline markup, for measuring it. */
const plain = (cell: string) =>
  cell
    .replace(/\{\{cite:[^}]*\}\}/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*|`/g, "")
    .trim();

const NUMBER_RE = /^[~≈<>$+-]?\d[\d,.]*\s*(%|x|×|k|M)?$|^n\/a$/i;

/** Columns and rows that are Bond's own get a light highlight on comparison tables. */
const BOND_COLUMN_RE = /^(Bond\b|With Bond$)/;
const BOND_ROW_RE = /^Bond( Health)?$/;

/**
 * Which form-preview fields take the full row in the two-column layout: long answers (textareas), and a short field
 * that would otherwise sit alone beside an empty half (before a textarea, or last).
 */
function formSpans(fields: Extract<Block, { type: "form" }>["fields"]): boolean[] {
  const span = fields.map((f) => f.kind === "textarea");
  let col = 0;
  fields.forEach((_, i) => {
    if (span[i]) {
      if (col === 1) span[i - 1] = true;
      col = 0;
    } else {
      col = col === 0 ? 1 : 0;
    }
  });
  if (col === 1) span[fields.length - 1] = true;
  return span;
}

function TableBlock({ block, cites, k }: { block: Extract<Block, { type: "table" }>; cites: CiteIndex; k: string }) {
  const n = block.columns.length;
  // A fill-in worksheet ("grid") scrolls sideways on phones with its first column pinned and columns wide enough to
  // write in. A table of six or more columns gets minimum column widths from sm, so it scrolls instead of squeezing
  // every column to its longest word; from five columns the first column is pinned, since those can scroll too.
  const grid = block.layout === "grid";
  const wide = !grid && n >= 6;
  const pinFirst = !grid && n >= 5;
  // Short values (counts, percentages, yes/no) fit a phone as a table; anything longer becomes one card per row.
  const compact = !grid && block.rows.every((r) => r.slice(1).every((c) => plain(c).length <= 16));
  const stack = n >= 3 && !grid && !compact;
  const s = stack ? stacked : null;
  const r = stack ? roles : null;
  const numeric = block.columns.map((_, i) => i > 0 && block.rows.every((row) => NUMBER_RE.test(plain(row[i] ?? ""))));
  const bondCol = block.columns.findIndex((c, i) => i > 0 && BOND_COLUMN_RE.test(c));
  const isBondRow = (row: string[]) => BOND_ROW_RE.test(plain(row[0] ?? ""));
  // Average visible length of a column's cells: in a wide table, columns of running text get minimum widths (the
  // longest more than the rest, so one of them doesn't set the height of every row)
  const avgLength = (i: number) => block.rows.reduce((sum, row) => sum + plain(row[i] ?? "").length, 0) / block.rows.length;

  // Phone padding for tables that stay tables: tighter, and tightest for compact ones so four short columns fit 360px
  const phonePad = stack || grid ? "" : compact ? t.compactPad : "max-sm:px-3";
  const pinTh = grid ? `${t.pin} bg-gray-50` : pinFirst ? "sm:sticky sm:left-0 sm:z-[1] sm:bg-gray-50 sm:shadow-[1px_0_0_var(--color-gray-200),6px_0_8px_-6px_rgb(0_0_0/0.12)]" : "";
  const pinTd = (bondRow: boolean) =>
    grid
      ? `${t.pin} ${bondRow ? "bg-[#f7faff]" : "bg-white"}`
      : pinFirst
        ? `sm:sticky sm:left-0 sm:z-[1] sm:shadow-[1px_0_0_var(--color-gray-200),6px_0_8px_-6px_rgb(0_0_0/0.12)] ${bondRow ? "sm:bg-[#f7faff]" : "sm:bg-white"}`
        : "";

  const thWidth = (i: number) => {
    if (grid) return i === 0 ? "min-w-[5rem]" : "max-sm:min-w-[10rem] sm:min-w-[7rem]";
    // Minimums for columns of running text only; numbers and short labels size themselves
    if (wide) {
      if (i === 0) return "sm:min-w-[9rem]";
      const avg = avgLength(i);
      return avg > 150 ? "sm:min-w-[14rem]" : avg > 60 ? "sm:min-w-[11rem]" : "";
    }
    // A wider label column only where four or fewer columns leave room for it (from md, where the column is 768px)
    return i === 0 && n <= 4 ? "md:min-w-[10rem]" : "";
  };
  // Vertical rules make a worksheet read as something to fill in
  const gridRules = grid ? "[&>td+td]:border-l [&>td+td]:border-gray-200/70 [&>th+th]:border-l [&>th+th]:border-gray-200" : "";

  return (
    <figure className="my-8">
      {block.caption && <figcaption className={t.caption}>{block.caption}</figcaption>}
      <ScrollTable columns={n} label={block.caption} stacked={stack} pinned={grid || pinFirst}>
        <table className={`${t.table} ${s?.table ?? ""}`} {...r?.table}>
          <thead className={`${t.thead} ${s?.thead ?? ""}`} {...r?.rowgroup}>
            <tr className={gridRules} {...r?.row}>
              {block.columns.map((c, i) => (
                <th
                  key={i}
                  className={`${t.th} ${thWidth(i)} ${numeric[i] ? "text-right" : ""} ${i === 0 ? pinTh : ""} ${
                    i === bondCol ? "bg-bond-primary/[0.06] text-bond-primary-dark shadow-[inset_0_2px_0_var(--color-bond-primary)]" : ""
                  } ${phonePad}`}
                  {...r?.columnheader}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={s?.tbody} {...r?.rowgroup}>
            {block.rows.map((row, ri) => {
              const bondRow = isBondRow(row);
              return (
                <tr
                  key={ri}
                  className={`${t.tr} ${gridRules} ${bondRow ? "bg-bond-primary/[0.03]" : ""} ${s?.tr ?? ""} ${
                    bondRow && stack ? "max-sm:border-bond-primary/25 max-sm:bg-[#f7faff]" : ""
                  }`}
                  {...r?.row}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      data-label={stack ? block.columns[ci] : undefined}
                      className={`${t.td} ${ci === 0 ? "font-medium text-gray-900" : "text-gray-700"} ${
                        numeric[ci] ? t.num : ""
                      } ${ci === bondCol ? (stack ? "sm:bg-bond-primary/[0.03] max-sm:border-l-2 max-sm:border-bond-primary/60 max-sm:pl-3" : "bg-bond-primary/[0.03]") : ""} ${
                        s ? (ci === 0 ? s.firstCell : s.cell) : ""
                      } ${ci === 0 ? pinTd(bondRow) : ""} ${phonePad}`}
                      {...r?.cell}
                    >
                      {renderInline(cell, cites, `${k}-${ri}-${ci}`)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </ScrollTable>
      {block.note && <p className={t.note}>{renderInline(block.note, cites, `${k}-note`)}</p>}
    </figure>
  );
}

function BlockView({ block, cites, k }: { block: Block; cites: CiteIndex; k: string }) {
  switch (block.type) {
    case "p":
      return <p className={`my-4 ${prose} ${bodyText}`}>{renderInline(block.text, cites, k)}</p>;

    case "h3":
      return (
        <h3 className={`mt-8 mb-3 ${prose} text-balance font-display text-lg font-semibold text-gray-900 sm:text-xl`}>{keepHyphenated(block.text)}</h3>
      );

    case "ul":
      return (
        <ul className={`my-4 space-y-2.5 ${prose}`}>
          {block.items.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 ${bodyText}`}>
              {/* em-based offset centres the dot on the first line at 16px and 17px */}
              <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-bond-primary" />
              <span>{renderInline(item, cites, `${k}-${i}`)}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className={`my-4 space-y-2.5 ${prose}`}>
          {block.items.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 ${bodyText}`}>
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bond-primary/10 text-xs font-semibold text-bond-primary">
                {i + 1}
              </span>
              <span>{renderInline(item, cites, `${k}-${i}`)}</span>
            </li>
          ))}
        </ol>
      );

    case "checklist":
      return (
        <ul className={`my-4 space-y-2.5 ${prose}`}>
          {block.items.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 ${bodyText}`}>
              <span
                aria-hidden
                className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-300 bg-white"
              />
              <span>{renderInline(item, cites, `${k}-${i}`)}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return <TableBlock block={block} cites={cites} k={k} />;

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
        // Links on the tint use the darker blue: brand blue on its own tint is just under 4.5:1
        <aside className={`my-6 flex gap-3 rounded-2xl border p-4 sm:p-5 [&_a]:text-bond-primary-dark ${prose} ${s.box}`}>
          <span className="mt-0.5 shrink-0">{s.icon}</span>
          <div className="text-[15px] leading-relaxed text-gray-700">
            {block.title && <p className="mb-1 font-semibold text-gray-900">{block.title}</p>}
            <p>{renderInline(block.text, cites, k)}</p>
          </div>
        </aside>
      );
    }

    case "stats": {
      // Three go three across; otherwise two by two, with an odd last card (five stats) spanning the row
      const three = block.items.length === 3;
      return (
        <div
          className={`my-8 grid gap-3 sm:gap-4 ${three ? "sm:grid-cols-3" : "sm:grid-cols-2 sm:[&>:last-child:nth-child(odd)]:col-span-2"}`}
        >
          {block.items.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs sm:p-5">
              <p
                className={`font-display font-bold text-balance text-gray-900 ${three ? "text-2xl xl:text-[1.75rem]" : "text-2xl lg:text-3xl"}`}
              >
                {s.value}
                {/* A small, light marker: at the value's size it competed with the number */}
                <Cite ids={[s.cite]} cites={cites} className="text-[max(0.45em,0.6875rem)] font-medium" />
              </p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      );
    }

    case "steps":
      return (
        <ol className={`my-6 space-y-4 ${prose}`}>
          {block.items.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bond-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              {/* pt-1 sets the title's first line level with the 32px number */}
              <div className="pt-1">
                <p className="font-semibold text-gray-900 sm:text-[17px]">{s.title}</p>
                <p className={`mt-1 ${bodyText}`}>{renderInline(s.text, cites, `${k}-${i}`)}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className={`my-6 border-l-4 border-bond-primary/40 pl-5 italic ${prose} ${bodyText}`}>
          <p>{renderInline(block.text, cites, k)}</p>
          {block.attribution && <footer className="mt-2 text-sm not-italic text-gray-500">{block.attribution}</footer>}
        </blockquote>
      );

    case "cta":
      return (
        <div className={`no-print my-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 ${prose}`}>
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
        <div
          className={`no-print my-8 flex flex-col items-start gap-4 rounded-2xl border border-bond-primary/20 bg-bond-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 ${prose}`}
        >
          <div>
            <p className="font-semibold text-gray-900">{block.label}</p>
            <p className="mt-1 text-sm text-gray-600">
              {block.format}
              {block.note ? <> · {renderInline(block.note, cites, `${k}-note`)}</> : null}
            </p>
          </div>
          <a href={block.href} download className="btn-primary w-full shrink-0 justify-center sm:w-auto">
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      );

    case "script": {
      // From sm the speaker chips form their own column, so wrapped lines hang under the text, not the chip
      const chip = (speaker: string) =>
        speaker === "Note"
          ? "bg-gray-100 text-gray-500"
          : speaker === "Patient"
            ? "bg-white text-gray-600 ring-1 ring-gray-200"
            : "bg-white text-bond-primary ring-1 ring-gray-200";
      return (
        <div className="my-8 space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm sm:grid sm:grid-cols-[minmax(7rem,max-content)_minmax(0,1fr)] sm:gap-x-3 sm:gap-y-3 sm:space-y-0 sm:p-6 sm:text-[15px]">
          {block.lines.map((l, i) => (
            <p key={i} className="leading-relaxed text-gray-800 sm:contents">
              <span
                className={`mb-1 block w-fit rounded-md px-2 py-0.5 text-xs font-semibold uppercase tracking-wide sm:mb-0 sm:mt-0.5 sm:self-start ${chip(l.speaker)}`}
              >
                {l.speaker}
              </span>
              <span className={l.speaker === "Note" ? "italic text-gray-600" : undefined}>{l.text}</span>
            </p>
          ))}
        </div>
      );
    }

    case "form": {
      const span = formSpans(block.fields);
      return (
        <div className="my-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          {block.title && <p className="font-semibold text-gray-900">{block.title}</p>}
          <p className="mb-4 mt-1 text-xs text-gray-500">Preview of the form. Use the Word download on this page to fill it in.</p>
          {/* Two columns from sm; long answers (textareas) take the full row */}
          <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 sm:space-y-0">
            {block.fields.map((f, i) => (
              <div key={i} className={`flex flex-col ${span[i] ? "sm:col-span-2" : ""}`}>
                {f.kind === "checkbox" ? (
                  <p className="flex items-start gap-2.5 text-sm font-medium text-gray-900">
                    <span aria-hidden className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-gray-300 bg-white" />
                    <span>{f.label}</span>
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-900">{f.label}</p>
                )}
                {f.hint && <p className={`mt-0.5 text-xs text-gray-500 ${f.kind === "checkbox" ? "pl-7.5" : ""}`}>{f.hint}</p>}
                {f.kind === "select" && f.options && (
                  <p className="mt-1 text-xs text-gray-500">Options: {f.options.join(" / ")}</p>
                )}
                {f.kind !== "checkbox" && (
                  <div
                    aria-hidden
                    className={`mt-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 sm:mt-auto ${f.kind === "textarea" ? "h-16" : "h-9"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

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
