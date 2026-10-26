"use client";

import { MessageCircle, Calendar } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function CTA() {
  const { openDemoModal } = useDemoModal();
  
  return (
    <section id="contact" className="section bg-gray-900">
      <div className="container-md px-4 sm:px-6 text-center">
        {/* Content */}
        <p className="eyebrow text-bond-accent mb-4">Ready to get started?</p>
        <h2 className="heading-lg mb-4 sm:mb-6" style={{ color: 'white' }}>
          Enroll patients faster.
        </h2>
        <p className="body-lg text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10">
          See how Bond can accelerate enrollment for your clinical trials 
          with a personalized demo.
        </p>

        {/* CTAs: side by side even at 360px, so they never stack at two different widths */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href="https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-gray-900 hover:bg-gray-100"
          >
            <Calendar className="w-4 h-4" />
            Book a demo
          </a>
          <button
            onClick={openDemoModal}
            className="btn-secondary border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800 hover:border-gray-600"
          >
            <MessageCircle className="w-4 h-4" />
            Contact us
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="font-display text-lg sm:text-2xl font-bold text-white">Up to 3×</p>
            <p className="text-xs sm:text-sm text-gray-400">faster enrollment</p>
          </div>
          <div className="text-center">
            <p className="font-display text-lg sm:text-2xl font-bold text-white">90%+</p>
            <p className="text-xs sm:text-sm text-gray-400">matching accuracy</p>
          </div>
          <div className="text-center">
            <p className="font-display text-lg sm:text-2xl font-bold text-white">48 hrs</p>
            <p className="text-xs sm:text-sm text-gray-400">to EHR integration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
