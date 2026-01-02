"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";

const stats = [
  {
    value: "1 in 3",
    label: "trials fail due to lack of patients",
    source: "Tufts Center for the Study of Drug Development, 2021",
  },
  {
    value: "80%",
    label: "delayed due to recruitment challenges",
    source: "Clinical Trials Transformation Initiative",
  },
  {
    value: "~$13B",
    label: "lost in delayed revenues annually (US)",
    source: "Nature Reviews Drug Discovery",
  },
];

export default function ProblemStats() {
  const [showSources, setShowSources] = useState(false);

  return (
    <section className="section-sm bg-gray-50 border-y border-gray-100">
      <div className="container-lg px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="stat-number text-gray-900 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm md:text-base max-w-[200px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Sources Link */}
        <div className="text-center">
          <button
            onClick={() => setShowSources(!showSources)}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Info className="w-3 h-3" />
            {showSources ? "Hide sources" : "View sources"}
          </button>
        </div>

        {/* Sources Modal */}
        {showSources && (
          <div className="mt-4 p-4 bg-white rounded-xl border border-gray-200 max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-gray-900">Sources</p>
              <button onClick={() => setShowSources(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <ul className="space-y-2">
              {stats.map((stat, i) => (
                <li key={i} className="text-xs text-gray-500">
                  <span className="font-medium text-gray-700">{stat.value}:</span> {stat.source}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
