"use client";

import { Search, Phone, CalendarCheck, ArrowRight, Sparkles, Zap, Target } from "lucide-react";

const funnelStages = [
  {
    id: "identify",
    title: "Identify",
    subtitle: "EHR Screening",
    description: "AI scans patient records against trial criteria in seconds",
    icon: Search,
    color: "blue",
    metric: "10,000+",
    metricLabel: "charts/hour",
  },
  {
    id: "engage",
    title: "Engage",
    subtitle: "Ads, Voice & SMS/Text Outreach",
    description: "Meta and Google ad campaigns created for your studies, every lead called and texted immediately and followed up until they respond, plus pre-screening",
    icon: Phone,
    color: "emerald",
    metric: "3x",
    metricLabel: "contact rate",
  },
  {
    id: "book",
    title: "Book",
    subtitle: "Booked Study Visits",
    description: "Pre-screened patients booked straight into your site's calendar, with reminders by text, voice or email",
    icon: CalendarCheck,
    color: "violet",
    metric: "1 call",
    metricLabel: "to pre-screen and book",
  },
];

export default function FullFunnel() {
  return (
    <section id="solutions" className="section bg-white overflow-hidden">
      <div className="container-lg px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="eyebrow mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Full-funnel solution
          </p>
          <h2 className="heading-lg mb-4">
            One platform.{" "}
            <span className="gradient-text">Three stages. Zero gaps.</span>
          </h2>
          <p className="body-lg text-gray-600">
            Most tools solve one part of recruitment. Bond spans the entire funnel 
            with a unified workflow from ad click or chart match to a booked study visit.
          </p>
        </div>

        {/* Funnel Flow */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-blue-200 via-emerald-200 to-violet-200 -translate-y-1/2 z-0" />
          
          {/* Stage Cards: one column below lg, where three columns are too narrow for the copy (capped at md, as in
              Pillars) */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 md:max-w-2xl md:mx-auto lg:max-w-none">
            {funnelStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.id} className="relative h-full">
                  {/* Card: static, like the Pillars cards above (it isn't a link, so it doesn't react to hover) */}
                  <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-card">
                    {/* Content; the metric sits at the bottom so it lines up across the equal-height cards */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Step Number */}
                      <div className="flex items-center justify-between mb-6">
                        <span className={`
                          text-xs font-bold uppercase tracking-wider
                          ${stage.color === 'blue' ? 'text-blue-600' : ''}
                          ${stage.color === 'emerald' ? 'text-emerald-700' : ''}
                          ${stage.color === 'violet' ? 'text-violet-600' : ''}
                        `}>
                          Step {index + 1}
                        </span>
                        <div className={`
                          w-10 h-10 rounded-xl flex items-center justify-center
                          ${stage.color === 'blue' ? 'bg-blue-100' : ''}
                          ${stage.color === 'emerald' ? 'bg-emerald-100' : ''}
                          ${stage.color === 'violet' ? 'bg-violet-100' : ''}
                        `}>
                          <Icon className={`
                            w-5 h-5
                            ${stage.color === 'blue' ? 'text-blue-600' : ''}
                            ${stage.color === 'emerald' ? 'text-emerald-600' : ''}
                            ${stage.color === 'violet' ? 'text-violet-600' : ''}
                          `} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-1">{stage.title}</h3>
                      <p className={`
                        text-sm font-medium mb-4
                        ${stage.color === 'blue' ? 'text-blue-600' : ''}
                        ${stage.color === 'emerald' ? 'text-emerald-700' : ''}
                        ${stage.color === 'violet' ? 'text-violet-600' : ''}
                      `}>{stage.subtitle}</p>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {stage.description}
                      </p>

                      {/* Metric */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span className={`
                            whitespace-nowrap text-xl lg:text-2xl font-bold
                            ${stage.color === 'blue' ? 'text-blue-600' : ''}
                            ${stage.color === 'emerald' ? 'text-emerald-600' : ''}
                            ${stage.color === 'violet' ? 'text-violet-600' : ''}
                          `}>{stage.metric}</span>
                          <span className="text-sm text-gray-500">{stage.metricLabel}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector - Desktop only */}
                  {index < funnelStages.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-xs">
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              See the full workflow
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Setup in 48 hours
            </span>
          </div>
        </div>

        {/* Comparison callout: light, because the dark "How it works" section follows right after it */}
        <div className="mt-12 p-6 lg:p-8 bg-gray-50 border border-gray-200 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-bond-primary" />
                <span className="text-bond-primary font-medium text-sm">Why it matters</span>
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-balance text-gray-900 mb-3">
                Stop juggling 3 different vendors
              </h3>
              <p className="text-gray-600">
                One integrated platform means no data silos, no manual handoffs,
                and complete visibility from first ad click or chart match to a booked visit and signed consent.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center px-1 py-3 sm:p-4 bg-white border border-gray-200 rounded-xl">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">1</p>
                <p className="text-xs text-gray-600 mt-1">Platform</p>
              </div>
              <div className="text-center px-1 py-3 sm:p-4 bg-white border border-gray-200 rounded-xl">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-600 mt-1">Data silos</p>
              </div>
              <div className="text-center px-1 py-3 sm:p-4 bg-white border border-gray-200 rounded-xl">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">100%</p>
                <p className="text-xs text-gray-600 mt-1">Visibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
