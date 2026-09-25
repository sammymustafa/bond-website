import data from "@/content/data/ctgov-geo.json";
import { formatDate } from "@/content/seo";
import type { CiteIndex } from "./inline";
import { Cite } from "./inline";

interface Trial {
  nct: string;
  title: string | null;
  conditions: string[];
  sponsor: string | null;
  phase: string[];
  type: string | null;
}

interface Geo {
  states: string[];
  counts: Record<string, number | null>;
  samples: Record<string, Trial[]>;
}

interface Dataset {
  as_of: string;
  source: string;
  geos: Record<string, Geo>;
  us: Record<string, number | null>;
}

const dataset = data as Dataset;

export const GEO_NAMES: Record<string, string> = {
  texas: "Texas",
  florida: "Florida",
  arizona: "Arizona",
  nevada: "Nevada",
  utah: "Utah",
  southeast: "Southeast",
  midwest: "Midwest",
};

const CONDITION_LABELS: Record<string, string> = {
  all: "All conditions",
  oncology: "Oncology",
  obesity: "Obesity and type 2 diabetes",
  cardiology: "Cardiology",
  neurology: "Neurology",
  dermatology: "Dermatology",
  pain: "Pain",
  gastroenterology: "Gastroenterology",
  psychiatry: "Psychiatry",
};

export function getGeo(geo: string): Geo | undefined {
  return dataset.geos[geo];
}

export function datasetAsOf(): string {
  return dataset.as_of;
}

export function usCounts(): Record<string, number | null> {
  return dataset.us;
}

export function conditionLabel(key: string): string {
  return CONDITION_LABELS[key] ?? key;
}

const fmt = (n: number | null | undefined) => (n == null ? "n/a" : n.toLocaleString("en-US"));

export function TrialCounts({ geo, cite, cites }: { geo: string; cite: string; cites: CiteIndex }) {
  const g = dataset.geos[geo];
  if (!g) return null;
  const name = GEO_NAMES[geo] ?? geo;
  const keys = Object.keys(CONDITION_LABELS);
  return (
    <figure className="my-8">
      <figcaption className="mb-3 font-semibold text-gray-900">
        Recruiting trials with at least one site in {name}, by area
        <Cite ids={[cite]} cites={cites} />
      </figcaption>
      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Area</th>
              <th className="px-4 py-3 font-semibold text-right">{name}</th>
              <th className="px-4 py-3 font-semibold text-right">United States</th>
              <th className="px-4 py-3 font-semibold text-right">Share of US</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((k) => {
              const local = g.counts[k];
              const us = dataset.us[k];
              const share = local != null && us ? `${((local / us) * 100).toFixed(0)}%` : "n/a";
              return (
                <tr key={k} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">{CONDITION_LABELS[k]}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-gray-900">{fmt(local)}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-gray-600">{fmt(us)}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-gray-600">{share}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Counts are studies with overall status Recruiting and at least one location in{" "}
        {g.states.length > 1 ? `one of: ${g.states.join(", ")}` : name}, queried on {formatDate(dataset.as_of)}. Area
        counts use keyword searches on the condition field and overlap; regional counts sum the states and can count a
        multi-state study more than once.
      </p>
    </figure>
  );
}

export function TrialExamples({
  geo,
  condition,
  cite,
  cites,
}: {
  geo: string;
  condition: string;
  cite: string;
  cites: CiteIndex;
}) {
  const g = dataset.geos[geo];
  const trials = g?.samples[condition];
  if (!g || !trials || !trials.length) return null;
  const state = g.states[0];
  return (
    <figure className="my-8">
      <figcaption className="mb-3 font-semibold text-gray-900">
        Examples of recruiting {CONDITION_LABELS[condition]?.toLowerCase() ?? condition} studies with a site in {state}
        <Cite ids={[cite]} cites={cites} />
      </figcaption>
      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Registry ID</th>
              <th className="px-4 py-3 font-semibold">Study</th>
              <th className="px-4 py-3 font-semibold">Lead sponsor</th>
              <th className="px-4 py-3 font-semibold">Phase</th>
            </tr>
          </thead>
          <tbody>
            {trials.map((t) => (
              <tr key={t.nct} className="border-t border-gray-100 align-top">
                <td className="px-4 py-3 whitespace-nowrap">
                  <a
                    href={`https://clinicaltrials.gov/study/${t.nct}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bond-primary font-medium hover:underline"
                  >
                    {t.nct}
                  </a>
                </td>
                <td className="px-4 py-3 text-gray-900">{t.title}</td>
                <td className="px-4 py-3 text-gray-600">{t.sponsor}</td>
                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                  {t.phase?.length ? t.phase.map((p) => p.replace("PHASE", "Phase ").replace("NA", "N/A")).join(", ") : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Most recently updated recruiting studies as of {formatDate(dataset.as_of)}. Listing a study does not imply Bond
        Health works with its sponsor or sites.
      </p>
    </figure>
  );
}
