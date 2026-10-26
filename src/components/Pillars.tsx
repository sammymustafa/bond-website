"use client";

import { Search, Phone, CalendarCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    href: "/identify",
  },
  {
    icon: Phone,
    title: "Engage",
    subtitle: "Voice and SMS/text agents, plus Meta and Google ads",
    description: "Meta and Google ad campaigns we create for your studies, with every ad lead called and texted immediately and followed up until they respond, plus outreach and pre-screening for EHR matches",
    outcomes: [
      "Every ad lead contacted immediately",
      "Follow-ups until patients respond and book",
      "New patients from Meta and Google ads",
      "Coordinator time saved",
    ],
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    href: "/engage",
  },
  {
    icon: CalendarCheck,
    title: "Book",
    subtitle: "Booked study visits",
    description: "Pre-screened patients booked straight into your site's calendar, with visit reminders by text, voice or email",
    outcomes: [
      "Visits on your calendar, not a lead list",
      "Reminders that keep patients showing up",
      "Support after enrollment, from rides to check-ins",
    ],
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
    href: "/book",
    linkLabel: "How booking works",
  },
];

export default function Pillars() {
  return (
    <section id="product" className="section bg-gray-50">
      <div className="container-lg px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="heading-lg mb-4">
            Three pillars. One complete workflow.
          </h2>
          <p className="body-lg">
            Bond covers the entire patient recruitment journey, from finding eligible 
            patients to a booked study visit.
          </p>
        </div>

        {/* Pillars Grid: one column below lg, where three columns are too narrow for the copy (and capped at md so a
            single card isn't 770px wide with its text in the left half) */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 md:max-w-2xl md:mx-auto lg:max-w-none">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group">
              {/* Column so the link sits at the bottom, level across the three cards */}
              <div className="card h-full flex flex-col">
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
                      <div className={`w-5 h-5 rounded-full ${pillar.color} flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* py-2.5 -my-2.5: a 40px tap height without moving anything */}
                <div className="mt-auto">
                  <Link
                    href={pillar.href}
                    className="-my-2.5 py-2.5 inline-flex items-center gap-1 text-sm font-medium text-bond-primary hover:underline"
                  >
                    {pillar.linkLabel ?? `How ${pillar.title.toLowerCase()} works`} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Arrows (Desktop) */}
        <div className="hidden lg:flex justify-center items-center gap-4 mt-8">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-sm font-medium">Identify</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm font-medium">Engage</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm font-medium">Book</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            See it in action
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
