"use client";

import { Database, FileText, Brain, Search, Phone, FileCheck, ArrowRight } from "lucide-react";

export default function Moat() {
  return (
    <section id="about" className="section bg-gray-900 text-white overflow-hidden">
      <div className="container-lg px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-bond-accent font-semibold text-sm uppercase tracking-wide mb-4">
            How it works
          </p>
          <h2 className="heading-lg mb-6" style={{ color: 'white' }}>
            A clinical knowledge graph that compounds.
          </h2>
          <p className="text-gray-400 text-lg">
            Our AI is powered by a text-enriched biomedical knowledge graph built from 
            real clinical data, enabling traceable, retrieval-augmented inference.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Flow Container */}
          <div className="grid md:grid-cols-[1fr_auto_1.5fr_auto_1fr] gap-4 md:gap-6 items-center">
            
            {/* Left: Inputs */}
            <div className="space-y-4">
              {/* Unstructured EHR Data */}
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl border border-gray-700/50 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">Unstructured EHR Data</span>
                </div>
                <p className="text-xs text-gray-500">Clinical notes, prescriptions, lab results</p>
              </div>

              {/* Structured Ontologies */}
              <div className="bg-gray-800/50 backdrop-blur rounded-2xl border border-gray-700/50 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Database className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">Biomedical Ontologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Diseases", "Drugs", "Procedures", "Tissues"].map((item) => (
                    <span key={item} className="text-[10px] px-2 py-0.5 bg-gray-700/50 text-gray-400 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </div>

            {/* Center: Knowledge Graph */}
            <div className="relative">
              <div className="aspect-square max-w-xs mx-auto relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-full border border-gray-700/50 p-8">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bond-primary to-bond-accent flex items-center justify-center shadow-lg shadow-bond-accent/20">
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">1.6M</p>
                      <p className="text-[10px] text-white/80">nodes</p>
                    </div>
                  </div>
                </div>

                {/* Concept Nodes */}
                {[
                  { label: "Disease", color: "bg-purple-500", angle: -60, distance: 85 },
                  { label: "Drug", color: "bg-orange-500", angle: 60, distance: 85 },
                  { label: "Symptom", color: "bg-purple-400", angle: 180, distance: 85 },
                ].map((node) => {
                  const x = Math.cos((node.angle * Math.PI) / 180) * node.distance;
                  const y = Math.sin((node.angle * Math.PI) / 180) * node.distance;
                  return (
                    <div
                      key={node.label}
                      className="absolute top-1/2 left-1/2 z-10"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <div className={`w-3 h-3 rounded-full ${node.color}`} />
                    </div>
                  );
                })}

                {/* Evidence Fragments */}
                {[
                  { angle: -30, distance: 110 },
                  { angle: 30, distance: 100 },
                  { angle: 120, distance: 105 },
                  { angle: 210, distance: 100 },
                ].map((frag, i) => {
                  const x = Math.cos((frag.angle * Math.PI) / 180) * frag.distance;
                  const y = Math.sin((frag.angle * Math.PI) / 180) * frag.distance;
                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 z-10"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <div className="w-12 h-3 bg-gray-700/80 rounded-sm border border-gray-600/50" />
                    </div>
                  );
                })}

                {/* Connection Lines SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  {[-60, 60, 180].map((angle, i) => {
                    const x2 = 100 + Math.cos((angle * Math.PI) / 180) * 42;
                    const y2 = 100 + Math.sin((angle * Math.PI) / 180) * 42;
                    return (
                      <line
                        key={i}
                        x1="100"
                        y1="100"
                        x2={x2}
                        y2={y2}
                        stroke="url(#gradient-line)"
                        strokeWidth="1.5"
                        opacity="0.5"
                      />
                    );
                  })}
                  <line x1="75" y1="57" x2="125" y2="57" stroke="#6b7280" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <line x1="75" y1="57" x2="57" y2="100" stroke="#6b7280" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <line x1="125" y1="57" x2="57" y2="100" stroke="#f97316" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066FF" />
                      <stop offset="100%" stopColor="#00D4AA" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 rounded-full bg-bond-accent/5 blur-2xl" />
              </div>

              {/* Label */}
              <div className="text-center mt-4">
                <p className="text-sm font-semibold text-white">ClinText Graph</p>
                <p className="text-xs text-gray-500">Text-Enriched Biomedical Knowledge Graph</p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </div>

            {/* Right: Outputs */}
            <div className="space-y-3">
              {/* Inference Engine Label */}
              <div className="bg-gradient-to-r from-bond-primary/20 to-bond-accent/20 rounded-xl border border-bond-accent/30 p-4 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Brain className="w-4 h-4 text-bond-accent" />
                  <span className="text-xs font-semibold text-white">Inference Engine</span>
                </div>
                <p className="text-[10px] text-gray-400">Traceable Retrieval-Augmented Inference</p>
              </div>

              {/* Apps */}
              {[
                { icon: Search, label: "Patient-to-Trial Matching", color: "text-blue-400" },
                { icon: Phone, label: "Conversational Pre-screening", color: "text-emerald-400" },
                { icon: FileCheck, label: "Informed Consent Support", color: "text-purple-400" },
              ].map((app) => (
                <div key={app.label} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30">
                  <app.icon className={`w-4 h-4 ${app.color}`} />
                  <span className="text-xs text-gray-300">{app.label}</span>
                </div>
              ))}

              {/* Outcome */}
              <div className="mt-4 p-3 bg-bond-accent/10 rounded-xl border border-bond-accent/20">
                <p className="text-[10px] text-bond-accent font-semibold uppercase tracking-wide mb-1">Outcome</p>
                <p className="text-xs text-white">90%+ Accuracy</p>
                <p className="text-[10px] text-gray-400">Scalable automation & reduced manual burden</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
