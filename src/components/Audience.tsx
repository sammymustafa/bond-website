"use client";

import { Building2, Users, Pill, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Sites & Health Systems",
    description: "Research hospitals and health systems running clinical trials.",
    benefits: [
      "Fewer screen failures",
      "Less manual chart review",
      "Higher show rates",
    ],
    cta: { label: "See site workflow", href: "#product" },
  },
  {
    icon: Users,
    title: "CROs",
    description: "Contract research organizations managing multi-site trials.",
    benefits: [
      "Network-wide standardization",
      "Faster feasibility assessments",
      "Consistent metrics across sites",
    ],
    cta: null,
  },
  {
    icon: Pill,
    title: "Sponsors",
    description: "Pharmaceutical companies funding clinical research.",
    benefits: [
      "Faster enrollment timelines",
      "Better diversity reach",
      "Fewer protocol amendments",
    ],
    cta: null,
  },
];

export default function Audience() {
  return (
    <section className="section bg-white">
      <div className="container-lg px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Who it's for</p>
          <h2 className="heading-lg mb-4">
            Built for clinical research teams.
          </h2>
          <p className="body-lg">
            Whether you're a site, CRO, or sponsor, Bond helps you enroll the 
            right patients faster.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="card hover:border-bond-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-bond-primary/10 mb-6 flex items-center justify-center">
                <audience.icon className="w-7 h-7 text-bond-primary" />
              </div>
              <h3 className="heading-sm mb-2">{audience.title}</h3>
              <p className="text-gray-600 mb-4">{audience.description}</p>
              
              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {audience.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-bond-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {audience.cta && (
                <a 
                  href={audience.cta.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-bond-primary hover:underline"
                >
                  {audience.cta.label} <ArrowRight className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
