"use client";

import { Check, ArrowRight, Users, Settings, Clock } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Pricing() {
  const { openDemoModal } = useDemoModal();
  
  return (
    <section id="pricing" className="section bg-gradient-section">
      <div className="container-md px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="heading-lg mb-4">
            Two-part pricing, aligned with enrollment.
          </h2>
          <p className="body-lg">
            Bond combines a fixed platform and integration fee with a performance-based 
            success fee, so we only win when you enroll patients.
          </p>
        </div>

        {/* Pricing Model */}
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Per Patient - Original style */}
            <div className="card-elevated text-center">
              <div className="w-14 h-14 rounded-2xl bg-bond-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-bond-primary" />
              </div>
              <h3 className="heading-sm mb-2">Per Enrolled Patient</h3>
              <p className="text-gray-600 mb-6">
                You pay based on successful patient enrollment. 
                Our incentives are aligned with your trial outcomes.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-bond-primary/5 rounded-full">
                <Check className="w-4 h-4 text-bond-primary" />
                <span className="text-sm font-medium text-bond-primary">Performance-based</span>
              </div>
            </div>

            {/* Platform + Integration Fee - New detailed style */}
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Fixed</span>
                </div>
              </div>
              <h3 className="heading-sm mb-3">Platform + Integration Fee</h3>
              <p className="text-gray-600 mb-4">
                Covers EHR integration, implementation, and the ongoing operating costs required to run screening, outreach, consent support, analytics, and audit logs.
              </p>
              <div className="space-y-2 pt-4 border-t border-gray-100">
                {[
                  "EHR connection (FHIR/HL7 or via aggregator)",
                  "Security review + audit logging setup",
                  "Workflow configuration (site scripts, scheduling rules)",
                  "Ongoing compute, monitoring, and support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How we define enrolled */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">How we define "enrolled"</p>
                <p className="text-gray-600">
                  Successfully randomized. Additional milestones for each visit can be added as needed.
                </p>
              </div>
            </div>
          </div>

          {/* Typical implementation */}
          <div className="mt-4 bg-gray-50 rounded-xl border border-gray-100 p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Typical implementation</p>
              <p className="text-sm text-gray-600">4-6 weeks for full EHR integration (timing depends on EHR, IT review, and interface method)</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-8">
            <p className="text-center font-semibold text-gray-900 mb-6">Included in every engagement</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "LLM-based EHR screening",
                "Voice agent outreach and scheduling",
                "AI consent support",
                "Real-time dashboard and audit trail",
                "EHR vendor integration via FHIR",
                "Dedicated support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button
              onClick={openDemoModal}
              className="btn-primary"
            >
              Get custom pricing
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
