"use client";

import { Database, FileText, Brain, Search, Phone, ArrowRight, Calendar } from "lucide-react";

// Knowledge-graph picture. Positions are % of the square circle box and the connectors are drawn in an SVG
// with a matching 0-100 viewBox, so the lines meet the nodes at every size.
const polar = (angle: number, radius: number) => ({
  x: 50 + Math.cos((angle * Math.PI) / 180) * radius,
  y: 50 + Math.sin((angle * Math.PI) / 180) * radius,
});

const conceptNodes = [
  { label: "Disease", color: "bg-purple-500", ...polar(-60, 30) },
  { label: "Drug", color: "bg-orange-500", ...polar(60, 30) },
  { label: "Symptom", color: "bg-purple-400", ...polar(180, 30) },
];

// Text evidence attached to a concept (index into conceptNodes)
const evidenceFragments = [
  { ...polar(-25, 41), concept: 0 },
  { ...polar(25, 41), concept: 1 },
  { ...polar(125, 40), concept: 1 },
  { ...polar(215, 40), concept: 2 },
];

// Dashed concept-to-concept relations; the Disease-Drug one is highlighted
const relations = [
  { from: 0, to: 1, color: "#f97316" },
  { from: 0, to: 2, color: "#6b7280" },
  { from: 1, to: 2, color: "#6b7280" },
];

export default function Moat() {
  return (
    <section id="about" className="section bg-gray-900 text-white overflow-hidden">
      <div className="container-lg px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="eyebrow text-bond-accent mb-4">
            How it works
          </p>
          <h2 className="heading-lg mb-4 sm:mb-6" style={{ color: 'white' }}>
            A clinical knowledge graph that compounds.
          </h2>
          <p className="body-lg text-gray-400">
            Our AI is powered by a text-enriched biomedical knowledge graph built from 
            real clinical data, enabling traceable, retrieval-augmented inference.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Flow Container */}
          {/* Side by side only from lg; below that the graph comes first and the inputs and outputs stack under it */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.5fr_auto_1fr] gap-6 items-center">
            
            {/* Left: Inputs */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4">
              {/* Unstructured EHR Data */}
              <div className="bg-gray-800/50 backdrop-blur rounded-xl sm:rounded-2xl border border-gray-700/50 p-2.5 sm:p-5">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white">EHR Data</span>
                </div>
                <p className="text-xs text-gray-400 hidden sm:block">Clinical notes, prescriptions, lab results</p>
              </div>

              {/* Structured Ontologies */}
              <div className="bg-gray-800/50 backdrop-blur rounded-xl sm:rounded-2xl border border-gray-700/50 p-2.5 sm:p-5">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white">Ontologies</span>
                </div>
                <div className="hidden sm:flex flex-wrap gap-1.5">
                  {["Diseases", "Drugs", "Procedures", "Tissues"].map((item) => (
                    <span key={item} className="text-xs px-2 py-0.5 bg-gray-700/50 text-gray-300 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </div>

            {/* Center: Knowledge Graph */}
            <div className="relative order-first lg:order-0">
              <div className="aspect-square w-[240px] sm:w-80 max-w-full mx-auto relative bg-linear-to-br from-gray-800/80 to-gray-900/80 rounded-full border border-gray-700/50">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-bond-primary to-bond-accent flex items-center justify-center shadow-lg shadow-bond-accent/20">
                    <div className="text-center">
                      <p className="text-base sm:text-lg font-bold text-white leading-tight">1.6M</p>
                      <p className="text-xs text-white/80">nodes</p>
                    </div>
                  </div>
                </div>

                {/* Concept Nodes */}
                {conceptNodes.map((node) => (
                  <div
                    key={node.label}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <div className={`w-3 h-3 rounded-full ${node.color}`} />
                  </div>
                ))}

                {/* Evidence Fragments */}
                {evidenceFragments.map((frag, i) => (
                  <div
                    key={i}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${frag.x}%`, top: `${frag.y}%` }}
                  >
                    <div className="w-10 sm:w-12 h-2.5 sm:h-3 bg-gray-700 rounded-sm border border-gray-600/50" />
                  </div>
                ))}

                {/* Connection Lines SVG, same 0-100 space as the nodes; strokes stay in screen pixels */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id="moat-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
                      <stop offset="0%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#00D4AA" />
                    </linearGradient>
                  </defs>
                  {conceptNodes.map((node) => (
                    <line key={node.label} x1="50" y1="50" x2={node.x} y2={node.y} stroke="url(#moat-line)" strokeWidth="1.5" opacity="0.6" vectorEffect="non-scaling-stroke" />
                  ))}
                  {relations.map(({ from, to, color }) => (
                    <line
                      key={`${from}-${to}`}
                      x1={conceptNodes[from].x}
                      y1={conceptNodes[from].y}
                      x2={conceptNodes[to].x}
                      y2={conceptNodes[to].y}
                      stroke={color}
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      opacity="0.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                  {evidenceFragments.map((frag, i) => (
                    <line
                      key={i}
                      x1={conceptNodes[frag.concept].x}
                      y1={conceptNodes[frag.concept].y}
                      x2={frag.x}
                      y2={frag.y}
                      stroke="#6b7280"
                      strokeWidth="1"
                      strokeDasharray="2 3"
                      opacity="0.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>

                <div className="absolute inset-0 rounded-full bg-bond-accent/5 blur-2xl" />
              </div>

              {/* Label */}
              <div className="text-center mt-4">
                <p className="text-sm font-semibold text-white">ClinText Graph</p>
                <p className="text-xs text-gray-400">Text-Enriched Biomedical Knowledge Graph</p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </div>

            {/* Right: Outputs */}
            <div className="space-y-2 sm:space-y-3">
              {/* Inference Engine Label */}
              <div className="bg-linear-to-r from-bond-primary/20 to-bond-accent/20 rounded-lg sm:rounded-xl border border-bond-accent/30 p-3 sm:p-4 mb-2 sm:mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Brain className="w-4 h-4 text-bond-accent" />
                  <span className="text-xs font-semibold text-white">Inference Engine</span>
                </div>
                <p className="text-xs text-gray-400 hidden sm:block">Traceable Retrieval-Augmented Inference</p>
              </div>

              {/* Apps */}
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3">
                {[
                  { icon: Search, label: "Patient Matching", fullLabel: "Patient-to-Trial Matching", color: "text-blue-400" },
                  { icon: Phone, label: "Pre-screening", fullLabel: "Conversational Pre-screening", color: "text-emerald-400" },
                  { icon: Calendar, label: "Booking", fullLabel: "Visit Booking", color: "text-purple-400" },
                ].map((app) => (
                  <div key={app.fullLabel} className="flex flex-col lg:flex-row items-center gap-1.5 sm:gap-3 p-2 sm:p-3 bg-gray-800/30 rounded-lg sm:rounded-xl border border-gray-700/30 text-center lg:text-left">
                    <app.icon className={`w-4 h-4 ${app.color} shrink-0`} />
                    <span className="text-xs text-gray-300 hidden sm:block">{app.fullLabel}</span>
                    <span className="text-xs leading-tight text-gray-300 sm:hidden">{app.label}</span>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div className="mt-2 sm:mt-4 p-2.5 sm:p-3 bg-bond-accent/10 rounded-lg sm:rounded-xl border border-bond-accent/20">
                <p className="text-xs text-bond-accent font-semibold uppercase tracking-wide mb-1">Outcome</p>
                <p className="text-xs text-white">90%+ Accuracy</p>
                <p className="text-xs text-gray-400 hidden sm:block">Scalable automation & reduced manual burden</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-gray-900 hover:bg-gray-100"
            >
              <Calendar className="w-4 h-4" />
              Schedule a technical deep-dive
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
