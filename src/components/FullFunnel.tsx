"use client";

import { Check, ArrowRight } from "lucide-react";

const funnelSteps = [
  "Patient identification",
  "Voice pre-screen & scheduling",
  "Informed consent tools",
  "Multiple therapeutic areas",
  "90%+ matching accuracy",
];

export default function FullFunnel() {
  return (
    <section id="solutions" className="section bg-white">
      <div className="container-lg px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="eyebrow mb-4">Full-funnel solution</p>
            <h2 className="heading-lg mb-6">
              One platform across{" "}
              <span className="gradient-text">identification, outreach, and consent.</span>
            </h2>
            <p className="body-lg mb-8">
              Most tools solve one part of recruitment. Bond is built to span 
              the entire funnel, so you get a unified workflow from match to consent.
            </p>

            {/* Funnel Checklist */}
            <div className="space-y-4 mb-8">
              {funnelSteps.map((step) => (
                <div
                  key={step}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-bond-primary/20 hover:bg-bond-primary/5 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-900">{step}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://cal.com/rishabhgoel/bond-health-demo?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Visual - Funnel Diagram */}
          <div className="relative">
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl border border-gray-100 p-8 md:p-12">
              {/* Funnel Shape */}
              <div className="relative max-w-sm mx-auto">
                {/* Top - Widest */}
                <div className="relative mb-4">
                  <div className="h-20 bg-blue-100 rounded-t-2xl flex items-center justify-center border-2 border-blue-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-blue-700">Identify</p>
                      <p className="text-xs text-blue-500">EHR Screening</p>
                    </div>
                  </div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 badge-success">
                    <Check className="w-3 h-3" />
                  </div>
                </div>

                {/* Middle */}
                <div className="relative mb-4 mx-4">
                  <div className="h-20 bg-emerald-100 flex items-center justify-center border-2 border-emerald-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-emerald-700">Engage</p>
                      <p className="text-xs text-emerald-500">Voice Agents</p>
                    </div>
                  </div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 badge-success">
                    <Check className="w-3 h-3" />
                  </div>
                </div>

                {/* Bottom - Narrowest */}
                <div className="relative mx-8">
                  <div className="h-20 bg-purple-100 rounded-b-2xl flex items-center justify-center border-2 border-purple-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-purple-700">Consent</p>
                      <p className="text-xs text-purple-500">AI Support</p>
                    </div>
                  </div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 badge-success">
                    <Check className="w-3 h-3" />
                  </div>
                </div>

                {/* Arrow pointing down */}
                <div className="flex justify-center mt-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-bond-primary" />
                    <span className="text-sm font-semibold text-bond-primary">Enrolled Patient</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
