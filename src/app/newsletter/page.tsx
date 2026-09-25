import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/seo/NewsletterForm";
import BarChart from "@/components/seo/BarChart";
import { conditionLabel, datasetAsOf, usCounts } from "@/components/seo/TrialData";
import { staticPageMetadata, formatDate } from "@/content/seo";

export const metadata: Metadata = staticPageMetadata({
  path: "/newsletter",
  title: "Newsletter: one number and one chart a month",
  description:
    "A monthly email for research sites and sponsors. One enrollment number, one chart, and the source for both. No product news unless it changes your workflow.",
});

export default function NewsletterPage() {
  const asOf = datasetAsOf();
  const us = usCounts();
  const areas = ["oncology", "cardiology", "psychiatry", "neurology", "obesity", "pain", "gastroenterology", "dermatology"];
  const chartData = areas
    .map((k) => ({ label: conditionLabel(k), value: us[k] ?? 0 }))
    .sort((a, b) => b.value - a.value);
  const cites = new Map<string, number>([["ctgov", 1]]);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <header className="border-b border-gray-100 bg-gradient-hero pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className="container-lg px-4 sm:px-6">
          <p className="eyebrow mb-3">Newsletter</p>
          <h1 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
            One number and one chart a month
          </h1>
          <p className="body-lg mt-5 max-w-3xl">
            Enrollment data for people who run sites and studies. Each issue is one figure worth knowing, one chart that
            explains it, and the source for both. It takes two minutes to read.
          </p>
          <div className="mt-8 max-w-xl">
            <NewsletterForm />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            One email a month. Unsubscribe with one click. See our{" "}
            <Link href="/privacy-policy" className="underline hover:text-gray-900">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </header>

      <div className="container-lg px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Sample issue · {formatDate(asOf)}</p>
          <h2 className="heading-md mt-2">How many US trials are recruiting right now?</h2>
          <p className="mt-6 font-display text-5xl font-bold text-gray-900 sm:text-6xl">
            {(us.all ?? 0).toLocaleString("en-US")}
            <sup className="ml-1 text-base font-medium text-bond-primary">[1]</sup>
          </p>
          <p className="mt-2 text-gray-600">
            Studies with overall status Recruiting and at least one US location on ClinicalTrials.gov, as of{" "}
            {formatDate(asOf)}.
          </p>
          <BarChart
            title="Recruiting US studies by area, keyword search on the condition field"
            data={chartData}
            cite="ctgov"
            cites={cites}
          />
          <p className="text-sm leading-relaxed text-gray-600">
            Oncology alone accounts for roughly a third of recruiting studies, which is why oncology sites see the most
            competition for the same patients and the strongest case for screening the whole chart rather than a
            diagnosis list. Area counts overlap because a study can list more than one condition.
          </p>
          <ol className="mt-8 space-y-2 text-sm text-gray-600">
            <li id="src-ctgov" className="flex gap-3">
              <span className="w-6 text-right font-medium text-gray-400">1.</span>
              <span>
                <a
                  href="https://clinicaltrials.gov/data-api/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 hover:text-bond-primary"
                >
                  ClinicalTrials.gov API v2
                </a>{" "}
                · U.S. National Library of Medicine, queried {formatDate(asOf)}.
              </span>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </main>
  );
}
