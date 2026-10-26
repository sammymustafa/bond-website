import type { CiteIndex } from "./inline";
import { Cite } from "./inline";

interface Props {
  title: string;
  unit?: string;
  data: { label: string; value: number }[];
  cite: string;
  cites: CiteIndex;
}

/**
 * A simple, dependency-free horizontal bar chart built from HTML, so labels wrap and text keeps its size on a phone
 * (an SVG scaled to fit shrank them to about 8px). Below `sm` each label sits above its bar.
 */
export default function BarChart({ title, unit, data, cite, cites }: Props) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const fmt = (n: number) => n.toLocaleString("en-US");
  return (
    <figure className="my-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
      <figcaption className="mb-4 text-[15px] font-semibold leading-snug text-gray-900">
        {title}
        <Cite ids={[cite]} cites={cites} />
      </figcaption>
      <ul className="space-y-3 sm:space-y-2">
        {data.map((d) => (
          <li key={d.label} className="grid gap-1 sm:grid-cols-[12rem_minmax(0,1fr)] sm:items-center sm:gap-3">
            <span className="text-sm leading-snug text-gray-700 sm:text-right">{d.label}</span>
            <span className="flex items-center gap-2">
              {/* 7rem stays free beside the longest bar for its value, e.g. "7,074 studies" */}
              <span
                aria-hidden
                className="h-5 min-w-0.5 rounded-md bg-bond-primary/90 [print-color-adjust:exact]"
                style={{ width: `calc((100% - 7rem) * ${d.value / max})` }}
              />
              <span className="shrink-0 whitespace-nowrap text-sm font-semibold tabular-nums text-gray-900">
                {fmt(d.value)}
                {unit ? ` ${unit}` : ""}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
