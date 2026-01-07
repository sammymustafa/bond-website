"use client";

import { useState } from "react";
import { Search, Phone, FileCheck, ArrowRight, Sparkles, Zap, Target } from "lucide-react";

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
    subtitle: "Voice Outreach",
    description: "Automated calls for pre-screening and appointment scheduling",
    icon: Phone,
    color: "emerald",
    metric: "3x",
    metricLabel: "contact rate",
  },
  {
    id: "consent",
    title: "Consent",
    subtitle: "AI Support",
    description: "Plain-language consent assistance with staff escalation",
    icon: FileCheck,
    color: "violet",
    metric: "90%+",
    metricLabel: "completion",
  },
];

export default function FullFunnel() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  return (
    <section id="solutions" className="section bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-lg px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bond-primary/5 border border-bond-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-bond-primary" />
            <span className="text-bond-primary font-medium text-sm">Full-funnel solution</span>
          </div>
          <h2 className="heading-lg mb-6">
            One platform.{" "}
            <span className="gradient-text">Three stages. Zero gaps.</span>
          </h2>
          <p className="body-lg text-gray-600">
            Most tools solve one part of recruitment. Bond spans the entire funnel 
            with a unified workflow from match to consent.
          </p>
        </div>

        {/* Funnel Flow */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-violet-200 -translate-y-1/2 z-0" />
          
          {/* Stage Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {funnelStages.map((stage, index) => {
              const Icon = stage.icon;
              const isHovered = hoveredStage === stage.id;
              
              return (
                <div
                  key={stage.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Card */}
                  <div className={`
                    relative bg-white rounded-2xl p-6 lg:p-8 border transition-all duration-500
                    ${isHovered 
                      ? 'border-transparent shadow-2xl scale-[1.02]' 
                      : 'border-gray-200 shadow-lg hover:shadow-xl'
                    }
                  `}>
                    {/* Gradient border on hover */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-br transition-opacity duration-500
                      ${stage.color === 'blue' ? 'from-blue-500 to-blue-600' : ''}
                      ${stage.color === 'emerald' ? 'from-emerald-500 to-emerald-600' : ''}
                      ${stage.color === 'violet' ? 'from-violet-500 to-violet-600' : ''}
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `} style={{ padding: '2px' }}>
                      <div className="absolute inset-[2px] bg-white rounded-2xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Step Number */}
                      <div className="flex items-center justify-between mb-6">
                        <span className={`
                          text-xs font-bold uppercase tracking-wider
                          ${stage.color === 'blue' ? 'text-blue-500' : ''}
                          ${stage.color === 'emerald' ? 'text-emerald-500' : ''}
                          ${stage.color === 'violet' ? 'text-violet-500' : ''}
                        `}>
                          Step {index + 1}
                        </span>
                        <div className={`
                          w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                          ${stage.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-500' : ''}
                          ${stage.color === 'emerald' ? 'bg-emerald-100 group-hover:bg-emerald-500' : ''}
                          ${stage.color === 'violet' ? 'bg-violet-100 group-hover:bg-violet-500' : ''}
                        `}>
                          <Icon className={`
                            w-5 h-5 transition-colors duration-300
                            ${stage.color === 'blue' ? 'text-blue-600 group-hover:text-white' : ''}
                            ${stage.color === 'emerald' ? 'text-emerald-600 group-hover:text-white' : ''}
                            ${stage.color === 'violet' ? 'text-violet-600 group-hover:text-white' : ''}
                          `} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{stage.title}</h3>
                      <p className={`
                        text-sm font-medium mb-4
                        ${stage.color === 'blue' ? 'text-blue-600' : ''}
                        ${stage.color === 'emerald' ? 'text-emerald-600' : ''}
                        ${stage.color === 'violet' ? 'text-violet-600' : ''}
                      `}>{stage.subtitle}</p>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {stage.description}
                      </p>

                      {/* Metric */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-baseline gap-2">
                          <span className={`
                            text-2xl font-bold
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
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                        ${isHovered ? 'bg-bond-primary scale-110' : 'bg-gray-200'}
                      `}>
                        <ArrowRight className={`w-4 h-4 transition-colors ${isHovered ? 'text-white' : 'text-gray-500'}`} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://cal.com/rishabhgoel/bond-health-demo?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              See the full workflow
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Setup in under 2 weeks
            </span>
          </div>
        </div>

        {/* Comparison callout */}
        <div className="mt-16 p-6 lg:p-8 bg-gray-900 rounded-2xl text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-bond-accent" />
                <span className="text-bond-accent font-medium text-sm">Why it matters</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3">
                Stop juggling 3 different vendors
              </h3>
              <p className="text-gray-400">
                One integrated platform means no data silos, no manual handoffs, 
                and complete visibility from first match to signed consent.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-2xl lg:text-3xl font-bold text-white">1</p>
                <p className="text-xs text-gray-400 mt-1">Platform</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-2xl lg:text-3xl font-bold text-white">0</p>
                <p className="text-xs text-gray-400 mt-1">Data silos</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-2xl lg:text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-400 mt-1">Visibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
