"use client";

import { Search, Phone, FileCheck, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Identify",
    subtitle: "LLM-based EHR screening",
    description: "Ranked patient matches with evidence and traceability",
    outcomes: [
      "Find eligible patients faster",
      "Reduce manual chart review",
    ],
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Engage",
    subtitle: "Voice agents for pre-screening & scheduling",
    description: "Automated outreach, pre-screen scripts, and scheduling handoff",
    outcomes: [
      "Higher contact and show rates",
      "Coordinator time saved",
    ],
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    icon: FileCheck,
    title: "Consent",
    subtitle: "AI-powered informed consent",
    description: "Plain-language consent support with escalation to staff",
    outcomes: [
      "Faster consent completion",
      "Clearer understanding, fewer drop-offs",
    ],
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
];

export default function Pillars() {
  return (
    <section id="product" className="section bg-gradient-section">
      <div className="container-lg px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="heading-lg mb-4">
            Three pillars. One complete workflow.
          </h2>
          <p className="body-lg">
            Bond covers the entire patient recruitment journey, from finding eligible 
            patients to completing informed consent.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group">
              <div className="card h-full hover:border-gray-200 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${pillar.lightColor} flex items-center justify-center mb-6`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.textColor}`} />
                </div>

                {/* Title */}
                <h3 className="heading-sm mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{pillar.subtitle}</p>
                <p className="text-sm text-gray-600 mb-6">{pillar.description}</p>

                {/* Outcomes */}
                <div className="space-y-3 mb-6">
                  {pillar.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${pillar.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-bond-primary hover:underline">
                  Learn more <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Arrows (Desktop) */}
        <div className="hidden md:flex justify-center items-center gap-4 mt-8">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Identify</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm font-medium">Engage</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm font-medium">Consent</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://cal.com/rishabhgoel/bond-health-demo?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            See it in action
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
