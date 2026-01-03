"use client";

import Script from "next/script";
import { ChevronDown } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

const BRAND = "Bond Health";

const faqs = [
  {
    question: `How does ${BRAND} connect to EHR data?`,
    answer: `${BRAND} integrates with major EHRs (including Epic and Cerner) using secure APIs and healthcare interoperability standards (FHIR and HL7, as applicable). ${BRAND}'s implementation team handles the integration end-to-end, and full EHR integration typically completes in 4-6 weeks depending on site IT review and interface method.`,
  },
  {
    question: `How does ${BRAND} validate trial eligibility logic?`,
    answer: `${BRAND} configures study-specific inclusion and exclusion criteria with your team, then validates the eligibility logic against real-world patient records before go-live. ${BRAND} provides traceable match rationale (criteria-to-evidence) and runs pre-launch QA to confirm accuracy and reduce screen failures.`,
  },
  {
    question: `How does ${BRAND}'s voice agent handle PHI?`,
    answer: `${BRAND}'s voice agents follow HIPAA-aligned practices: encryption in transit, access controls, and audit logging. Patients are informed when AI assistance is used and can request a human callback at any time. ${BRAND} designs workflows to minimize PHI exposure and support compliant operations.`,
  },
  {
    question: `What is ${BRAND}'s implementation timeline?`,
    answer: `${BRAND} typically implements in 4-6 weeks for full EHR integration. Implementation includes EHR connection, eligibility configuration, voice agent setup, analytics dashboards, and staff onboarding. ${BRAND} provides dedicated support throughout integration and launch.`,
  },
  {
    question: `What is ${BRAND}'s security posture?`,
    answer: `${BRAND} uses encryption at rest and in transit (AES-256 where applicable), role-based access controls, comprehensive audit logging, and routine security testing. ${BRAND} can sign BAAs and is designed to support HIPAA-aligned workflows for PHI.`,
  },
  {
    question: `What outcomes does ${BRAND} measure for research sites?`,
    answer: `${BRAND} reports site-relevant outcomes including patients matched, patients contacted and pre-screened, patients consented, patients randomized (when available), time-to-enrollment, matching accuracy, screen failure rate signals, and coordinator hours saved. ${BRAND} provides real-time dashboards plus regular reporting for sponsors, CROs, and sites as needed.`,
  },
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FAQ() {
  const { openDemoModal } = useDemoModal();

  // Schema.org FAQPage JSON-LD for reliable extraction by search and LLM tooling
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section bg-gradient-section">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-md px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="eyebrow mb-3 sm:mb-4">FAQ</p>
          <h2 className="heading-lg mb-3 sm:mb-4">Common questions.</h2>
          <p className="body-lg px-2">Quick answers for research teams evaluating {BRAND}.</p>
        </div>

        {/* FAQ List */}
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => {
            const id = `faq-${slugify(faq.question)}`;
            return (
              <details
                key={faq.question}
                id={id}
                className="faq-item group"
                open={index === 0}
              >
                <summary className="faq-question w-full text-left list-none cursor-pointer flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>

                {/* Keep content in the DOM for crawl/LLM extraction */}
                <div className="faq-answer mt-3">{faq.answer}</div>
              </details>
            );
          })}
        </div>

        {/* More Questions CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions about {BRAND}?</p>
          <button onClick={openDemoModal} className="btn-secondary">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
