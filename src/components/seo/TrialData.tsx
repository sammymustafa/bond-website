import data from "@/content/data/ctgov-geo.json";
import { formatDate } from "@/content/seo";
import type { CiteIndex } from "./inline";
import { Cite } from "./inline";
import ScrollTable from "./ScrollTable";
import { roles, stacked, tableStyle as t } from "./stackedTable";

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
  /** City areas only: a radius search, with its own query date and US totals from the same day. */
  area?: string;
  as_of?: string;
  us?: Record<string, number | null>;
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
  boston: "the Boston area",
  "new-york-city": "the New York City area",
  philadelphia: "the Philadelphia area",
  "los-angeles": "the Los Angeles area",
  "san-francisco-bay-area": "the San Francisco Bay Area",
  seattle: "the Seattle area",
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

// Tighter cells on phones, so the four count columns fit a 360px screen without scrolling
const pad = t.compactPad;

export function TrialCounts({ geo, cite, cites }: { geo: string; cite: string; cites: CiteIndex }) {
  const g = dataset.geos[geo];
  if (!g) return null;
  const name = GEO_NAMES[geo] ?? geo;
  const keys = Object.keys(CONDITION_LABELS);
  return (
    <figure className="my-8">
      <figcaption className={t.caption}>
        Recruiting trials with at least one site in {name}, by area
        <Cite ids={[cite]} cites={cites} />
      </figcaption>
      <ScrollTable columns={4} label={`Recruiting trials in ${name}`}>
        <table className={t.table}>
          <thead className={t.thead}>
            <tr>
              <th className={`${t.th} ${pad}`}>Area</th>
              {/* Geo names start lowercase ("the Boston area"); capitalized in CSS only */}
              <th className={`${t.th} ${pad} text-right first-letter:uppercase`}>{name}</th>
              <th className={`${t.th} ${pad} text-right`}>United States</th>
              <th className={`${t.th} ${pad} text-right`}>Share of US</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((k) => {
              const local = g.counts[k];
              const us = (g.us ?? dataset.us)[k];
              const share = local != null && us ? `${((local / us) * 100).toFixed(0)}%` : "n/a";
              return (
                <tr key={k} className={t.tr}>
                  <td className={`${t.td} ${pad} font-medium text-gray-900`}>{CONDITION_LABELS[k]}</td>
                  <td className={`${t.td} ${pad} ${t.num} text-gray-900`}>{fmt(local)}</td>
                  <td className={`${t.td} ${pad} ${t.num} text-gray-600`}>{fmt(us)}</td>
                  <td className={`${t.td} ${pad} ${t.num} text-gray-600`}>{share}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ScrollTable>
      <p className={t.note}>
        Counts are studies with overall status Recruiting and at least one location{" "}
        {g.area ? `within ${g.area}` : `in ${g.states.length > 1 ? `one of: ${g.states.join(", ")}` : name}`}, queried on{" "}
        {formatDate(g.as_of ?? dataset.as_of)}. Area counts use keyword searches on the condition field and overlap
        {g.states.length > 1 ? "; regional counts sum the states and can count a multi-state study more than once" : ""}.
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
  // City areas have no state list; describe them by their radius instead.
  const place = g.area ? `within ${g.area}` : `in ${g.states[0]}`;
  return (
    <figure className="my-8">
      <figcaption className={t.caption}>
        Examples of recruiting {CONDITION_LABELS[condition]?.toLowerCase() ?? condition} studies with a site {place}
        <Cite ids={[cite]} cites={cites} />
      </figcaption>
      <ScrollTable columns={4} label="Example recruiting studies" stacked>
        <table className={`${t.table} ${stacked.table}`} {...roles.table}>
          <thead className={`${t.thead} ${stacked.thead}`} {...roles.rowgroup}>
            <tr {...roles.row}>
              <th className={t.th} {...roles.columnheader}>Registry ID</th>
              <th className={t.th} {...roles.columnheader}>Study</th>
              <th className={t.th} {...roles.columnheader}>Lead sponsor</th>
              <th className={t.th} {...roles.columnheader}>Phase</th>
            </tr>
          </thead>
          <tbody className={stacked.tbody} {...roles.rowgroup}>
            {trials.map((trial) => (
              <tr key={trial.nct} className={`${t.tr} ${stacked.tr}`} {...roles.row}>
                <td className={`${t.td} whitespace-nowrap ${stacked.firstCell}`} {...roles.cell}>
                  <a
                    href={`https://clinicaltrials.gov/study/${trial.nct}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bond-primary font-medium hover:underline"
                  >
                    {trial.nct}
                  </a>
                </td>
                <td data-label="Study" className={`${t.td} text-gray-900 ${stacked.cell}`} {...roles.cell}>{trial.title}</td>
                <td data-label="Lead sponsor" className={`${t.td} text-gray-600 ${stacked.cell}`} {...roles.cell}>{trial.sponsor}</td>
                <td data-label="Phase" className={`${t.td} text-gray-600 whitespace-nowrap ${stacked.cell}`} {...roles.cell}>
                  {trial.phase?.length ? trial.phase.map((p) => p.replace("PHASE", "Phase ").replace("NA", "N/A")).join(", ") : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollTable>
      <p className={t.note}>
        Most recently updated recruiting studies as of {formatDate(g?.as_of ?? dataset.as_of)}. Listing a study does not imply Bond
        Health works with its sponsor or sites.
      </p>
    </figure>
  );
}
