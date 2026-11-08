"use client";

import { useId, useState } from "react";
import { Calculator as CalculatorIcon, RotateCcw } from "lucide-react";
import type { CalculatorKind } from "@/content/types";

/**
 * Interactive calculators for the /calculators pages (block type "calculator"). Each one is a small form whose
 * results update as the visitor types. The formulas are written out under the result, and the page text explains
 * them again, so the page still reads correctly before this component hydrates.
 */

interface Field {
  key: string;
  label: string;
  hint: string;
  /** The example value the calculator opens with. */
  example: number;
  prefix?: "$";
  suffix?: string;
  step?: number;
}

interface Result {
  label: string;
  value: string;
  /** The headline result is shown large. */
  main?: boolean;
}

interface Output {
  results: Result[];
  /** The formula with the visitor's numbers in it. */
  worked: string;
  /** Shown instead of results when the inputs cannot produce one. */
  error?: string;
}

interface Spec {
  title: string;
  formula: string;
  fields: Field[];
  compute: (v: Record<string, number>) => Output;
  footnote: string;
}

const num = (n: number, digits = 1) => n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
const int = (n: number) => Math.round(n).toLocaleString("en-US");
const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const SPECS: Record<CalculatorKind, Spec> = {
  "screen-failure-rate": {
    title: "Screen failure rate calculator",
    formula: "Screen failure rate = screen failures ÷ patients screened × 100",
    fields: [
      { key: "screened", label: "Patients screened", hint: "Signed consent and started screening", example: 40 },
      { key: "failed", label: "Screen failures", hint: "Did not meet the eligibility criteria during screening", example: 14 },
      { key: "target", label: "Randomized patients still needed", hint: "Optional: to plan the screening visits ahead", example: 10 },
    ],
    compute: ({ screened, failed, target }) => {
      if (!(screened > 0)) return { results: [], worked: "", error: "Enter the number of patients screened." };
      if (failed > screened) return { results: [], worked: "", error: "Screen failures cannot be more than patients screened." };
      const rate = failed / screened;
      const passed = screened - failed;
      const results: Result[] = [
        { label: "Screen failure rate", value: `${num(rate * 100)}%`, main: true },
        { label: "Patients who passed screening", value: int(passed) },
      ];
      if (passed > 0) {
        results.push({ label: "Patients screened per patient who passes", value: num(screened / passed, 2) });
        if (target > 0) results.push({ label: "Screenings needed for the patients still needed", value: int(Math.ceil(target / (1 - rate))) });
      } else {
        results.push({ label: "Patients screened per patient who passes", value: "None passed yet" });
      }
      return { results, worked: `${int(failed)} ÷ ${int(screened)} × 100 = ${num(rate * 100)}%` };
    },
    footnote:
      "Count everyone who signed consent and started screening, and use the same date range for both numbers. Patients ruled out at pre-screening, before consent, are not screen failures. The planning figure assumes every patient who passes screening is randomized.",
  },
  "enrollment-rate": {
    title: "Enrollment rate calculator",
    formula: "Enrollment rate = participants enrolled ÷ (sites × months open to enrollment)",
    fields: [
      { key: "enrolled", label: "Participants enrolled", hint: "Across all sites so far", example: 18 },
      { key: "sites", label: "Active sites", hint: "Sites open to enrollment", example: 6 },
      { key: "months", label: "Months open, per site", hint: "Average months since each site was activated", example: 4, step: 0.5 },
      { key: "target", label: "Enrollment target", hint: "Optional: total participants the study needs", example: 60 },
    ],
    compute: ({ enrolled, sites, months, target }) => {
      if (!(sites > 0) || !(months > 0)) return { results: [], worked: "", error: "Enter at least one site and a number of months above zero." };
      const siteMonths = sites * months;
      const rate = enrolled / siteMonths;
      const results: Result[] = [
        { label: "Patients per site per month", value: num(rate, 2), main: true },
        { label: "Site-months of enrollment", value: num(siteMonths) },
        { label: "Patients per month, all sites", value: num(enrolled / months, 1) },
      ];
      if (target > 0) {
        const remaining = target - enrolled;
        if (remaining <= 0) results.push({ label: "Months to reach the target", value: "Target reached" });
        else if (rate > 0) results.push({ label: "Months to reach the target, at this rate", value: num(remaining / (rate * sites)) });
        else results.push({ label: "Months to reach the target, at this rate", value: "No enrollment yet" });
      }
      return { results, worked: `${int(enrolled)} ÷ (${int(sites)} × ${num(months)}) = ${num(rate, 2)}` };
    },
    footnote:
      "Count each site from its own activation date, so a site that opened late does not drag the rate down. The months-to-target figure assumes the current sites keep enrolling at the current rate.",
  },
  "cost-per-randomized-patient": {
    title: "Cost per randomized patient calculator",
    formula: "Cost per randomized patient = total recruitment cost ÷ patients randomized",
    fields: [
      { key: "ads", label: "Advertising and media spend", hint: "Ad budget, agency or media vendor fees", example: 12000, prefix: "$" },
      { key: "vendor", label: "Recruitment vendor and software fees", hint: "Referral, platform and per-patient fees", example: 8000, prefix: "$" },
      { key: "hours", label: "Staff hours on recruitment", hint: "Calls, chart review, pre-screening, scheduling", example: 120, suffix: "hours" },
      { key: "hourly", label: "Cost of an hour of staff time", hint: "Salary plus benefits and overhead", example: 45, prefix: "$" },
      { key: "screening", label: "Unreimbursed screening costs", hint: "Screen-failure visits and tests the budget does not pay for", example: 3000, prefix: "$" },
      { key: "randomized", label: "Patients randomized", hint: "Over the same period", example: 10 },
    ],
    compute: ({ ads, vendor, hours, hourly, screening, randomized }) => {
      const staff = hours * hourly;
      const total = ads + vendor + staff + screening;
      if (!(randomized > 0)) {
        return {
          results: [{ label: "Total recruitment cost", value: usd(total), main: true }],
          worked: "",
          error: "Enter the number of patients randomized to get the cost per patient.",
        };
      }
      return {
        results: [
          { label: "Cost per randomized patient", value: usd(total / randomized), main: true },
          { label: "Total recruitment cost", value: usd(total) },
          { label: "Staff time", value: usd(staff) },
        ],
        worked: `(${usd(ads)} + ${usd(vendor)} + ${usd(staff)} + ${usd(screening)}) ÷ ${int(randomized)} = ${usd(total / randomized)}`,
      };
    },
    footnote:
      "Use one date range for every input. Staff time is usually the cost left out: include every hour spent finding, calling, pre-screening and booking patients, not only time spent on patients who enrolled.",
  },
};

const initialValues = (spec: Spec) => Object.fromEntries(spec.fields.map((f) => [f.key, String(f.example)]));

export default function Calculator({ kind }: { kind: CalculatorKind }) {
  const spec = SPECS[kind];
  const id = useId();
  const [values, setValues] = useState<Record<string, string>>(() => initialValues(spec));

  const parsed = Object.fromEntries(
    spec.fields.map((f) => {
      const n = Number(values[f.key]);
      return [f.key, Number.isFinite(n) && n > 0 ? n : 0];
    }),
  );
  const out = spec.compute(parsed);
  const main = out.results.find((r) => r.main);
  const rest = out.results.filter((r) => !r.main);
  const isExample = spec.fields.every((f) => values[f.key] === String(f.example));

  return (
    <section aria-labelledby={`${id}-title`} className="no-print my-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-xs sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 id={`${id}-title`} className="flex items-center gap-2 font-display text-lg font-semibold text-gray-900">
          <CalculatorIcon aria-hidden className="h-5 w-5 text-bond-primary" />
          {spec.title}
        </h3>
        {!isExample && (
          <button
            type="button"
            onClick={() => setValues(initialValues(spec))}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <RotateCcw aria-hidden className="h-3.5 w-3.5" />
            Reset
          </button>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-500">
        {isExample ? "Filled in with example numbers. Replace them with your own." : "Results update as you type."}
      </p>

      <div className="mt-5 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        {/* content-start: rows keep their own height when the result panel beside them is taller */}
        <div className="grid content-start gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {spec.fields.map((f) => {
            const inputId = `${id}-${f.key}`;
            return (
              <div key={f.key} className="flex flex-col">
                <label htmlFor={inputId} className="text-sm font-medium text-gray-900">
                  {f.label}
                </label>
                <span id={`${inputId}-hint`} className="mt-0.5 text-xs text-gray-500">
                  {f.hint}
                </span>
                <div className="mt-2 flex items-center rounded-lg border border-gray-300 bg-white focus-within:border-bond-primary focus-within:ring-2 focus-within:ring-bond-primary/20 sm:mt-auto">
                  {f.prefix && <span className="pl-3 text-gray-500">{f.prefix}</span>}
                  <input
                    id={inputId}
                    aria-describedby={`${inputId}-hint`}
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={f.step ?? 1}
                    value={values[f.key]}
                    onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                    className="w-full min-w-0 rounded-lg bg-transparent px-3 py-2.5 text-base text-gray-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  {f.suffix && <span className="pr-3 text-sm text-gray-500">{f.suffix}</span>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col rounded-2xl border border-bond-primary/20 bg-bond-primary/5 p-5" aria-live="polite">
          {main && (
            <div>
              <p className="text-sm font-medium text-gray-700">{main.label}</p>
              <p className="mt-1 font-display text-4xl font-bold tracking-tight text-gray-900">{main.value}</p>
            </div>
          )}
          {out.error && <p className={`text-sm text-amber-800 ${main ? "mt-3" : ""}`}>{out.error}</p>}
          {rest.length > 0 && (
            <dl className="mt-4 space-y-2 border-t border-bond-primary/15 pt-4 text-sm">
              {rest.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-gray-600">{r.label}</dt>
                  <dd className="text-right font-semibold tabular-nums text-gray-900">{r.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-auto pt-5 text-xs leading-relaxed text-gray-600">
            <p className="font-medium text-gray-700">{spec.formula}</p>
            {out.worked && <p className="mt-1 tabular-nums">{out.worked}</p>}
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-gray-500">{spec.footnote}</p>
    </section>
  );
}
