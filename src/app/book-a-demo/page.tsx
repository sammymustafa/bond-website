import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/seo/CalEmbed";
import ContactButton from "@/components/seo/ContactButton";
import { staticPageMetadata } from "@/content/seo";
import { calComHref } from "@/content/nav";

export const metadata: Metadata = staticPageMetadata({
  path: "/book-a-demo",
  title: "Book a demo",
  description:
    "Pick a 15-minute Zoom slot to see how Bond Health screens EHR records against a protocol, runs pre-screening outreach, and supports informed consent.",
});

const expectations = [
  "Bring a protocol if you have one, and see how Bond would screen its inclusion and exclusion criteria.",
  "Hear how the voice agent handles a pre-screening call and hands off to scheduling.",
  "See the dashboard coordinators use, including the audit trail.",
  "Talk through implementation and pricing for your site.",
];

export default function BookADemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <header className="border-b border-gray-100 bg-gradient-hero pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className="container-lg px-4 sm:px-6">
          <p className="eyebrow mb-3">Book a demo</p>
          <h1 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
            See Bond on your own protocol
          </h1>
          <p className="body-lg mt-5 max-w-3xl">
            A 15-minute Zoom call with the Bond team. Pick a time below or{" "}
            <a href={calComHref} target="_blank" rel="noopener noreferrer" className="font-medium text-bond-primary hover:underline">
              open the calendar in a new tab
            </a>
            .
          </p>
        </div>
      </header>

      <div className="container-lg px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <CalEmbed />
          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <p className="font-semibold text-gray-900">What happens in the call</p>
              <ul className="mt-4 space-y-3">
                {expectations.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Clock className="h-4 w-4 text-gray-400" />
                15 minutes, on Zoom
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-gray-700">
                <ShieldCheck className="h-4 w-4 text-gray-400" />
                No patient data needed for a demo.
              </div>
              <p className="mt-5 text-sm text-gray-600">Prefer email? Send a note and we reply within one business day.</p>
              <div className="mt-3">
                <ContactButton />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Want to read first? Start with{" "}
              <Link href="/implementation" className="font-medium text-bond-primary hover:underline">
                what implementation involves
              </Link>{" "}
              or{" "}
              <Link href="/pricing" className="font-medium text-bond-primary hover:underline">
                how pricing works
              </Link>
              .
            </p>
          </aside>
        </div>
      </div>
      <Footer />
    </main>
  );
}
