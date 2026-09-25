"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import { BRAND, homeFaqs as faqs } from "@/content/homeFaq";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FAQ() {
  const { openDemoModal } = useDemoModal();

  return (
    <section id="faq" className="section bg-gradient-section">

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
          <p className="text-gray-600 mb-4">
            Still have questions about {BRAND}? Read the{" "}
            <Link href="/faq" className="text-bond-primary font-medium hover:underline">full FAQ</Link> or ask us.
          </p>
          <button onClick={openDemoModal} className="btn-secondary">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
