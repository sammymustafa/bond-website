import type { CiteIndex } from "./inline";
import { Cite } from "./inline";

interface Props {
  title: string;
  unit?: string;
  data: { label: string; value: number }[];
  cite: string;
  cites: CiteIndex;
}

/** A simple, dependency-free horizontal bar chart rendered as SVG. */
export default function BarChart({ title, unit, data, cite, cites }: Props) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const rowH = 34;
  const labelW = 190;
  const width = 640;
  // Leave room right of the longest bar for its value label (e.g. "7,074 studies").
  const valueW = 130;
  const barMax = width - labelW - valueW;
  const height = data.length * rowH + 8;
  const fmt = (n: number) => n.toLocaleString("en-US");
  return (
    <figure className="my-8 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm">
      <figcaption className="mb-4 font-semibold text-gray-900">
        {title}
        <Cite ids={[cite]} cites={cites} />
      </figcaption>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          role="img"
          aria-label={title}
          className="min-w-[420px]"
        >
          {data.map((d, i) => {
            const y = i * rowH + 4;
            const w = Math.max(2, Math.round((d.value / max) * barMax));
            return (
              <g key={d.label} transform={`translate(0, ${y})`}>
                <text x={labelW - 10} y={rowH / 2 + 1} textAnchor="end" fontSize="13" fill="#374151" dominantBaseline="middle">
                  {d.label}
                </text>
                <rect x={labelW} y={6} width={w} height={rowH - 12} rx={5} fill="#0066FF" opacity={0.9} />
                <text x={labelW + w + 8} y={rowH / 2 + 1} fontSize="13" fill="#111827" dominantBaseline="middle" fontWeight={600}>
                  {fmt(d.value)}
                  {unit ? ` ${unit}` : ""}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}
