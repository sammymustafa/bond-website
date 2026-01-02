"use client";

import { TrendingUp, Target, Clock, Users, ArrowRight } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    value: "Up to 3×",
    label: "faster enrollment",
    description: "Compared to traditional manual recruitment",
  },
  {
    icon: Target,
    value: "90%+",
    label: "matching accuracy",
    description: "AI-powered eligibility screening",
  },
  {
    icon: Clock,
    value: "50%+",
    label: "less chart review",
    description: "Coordinator time saved on pre-screening",
  },
  {
    icon: Users,
    value: "Fewer",
    label: "screen failures",
    description: "Better matches mean fewer wasted visits",
  },
];

export default function Results() {
  return (
    <section className="section bg-gradient-section">
      <div className="container-lg px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Results</p>
          <h2 className="heading-lg mb-4">
            Measurable lift for sites.
          </h2>
          <p className="body-lg">
            Real improvements in speed and accuracy that translate to more 
            patients enrolled and faster trial completion.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result) => (
            <div
              key={result.label}
              className="card text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-bond-primary/10 flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-6 h-6 text-bond-primary" />
              </div>
              <p className="stat-number-sm mb-1">
                {result.value}
              </p>
              <p className="font-semibold text-gray-900 mb-2">
                {result.label}
              </p>
              <p className="text-sm text-gray-500">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mini Case Study */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 text-center">
            <p className="text-sm text-gray-500 mb-2">Early results</p>
            <p className="text-gray-700 italic mb-4">
              "Reduced our chart review time significantly while improving the quality 
              of patients we bring in for screening."
            </p>
            <p className="text-sm text-gray-500">
              - Research coordinator, academic medical center, oncology trial
            </p>
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
            Get similar results
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
