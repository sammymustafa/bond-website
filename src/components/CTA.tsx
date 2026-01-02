"use client";

import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function CTA() {
  const { openDemoModal } = useDemoModal();
  
  return (
    <section id="contact" className="section bg-gray-900">
      <div className="container-md px-6 text-center">
        {/* Content */}
        <p className="text-bond-accent font-semibold mb-4">Ready to get started?</p>
        <h2 className="heading-lg text-white mb-6">
          Enroll patients faster.
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
          See how Bond can accelerate enrollment for your clinical trials 
          with a personalized demo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://cal.com/rishabhgoel/bond-health-demo?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-gray-900 hover:bg-gray-100"
          >
            <Calendar className="w-4 h-4" />
            Book a demo
          </a>
          <button
            onClick={openDemoModal}
            className="btn-secondary border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600"
          >
            <MessageCircle className="w-4 h-4" />
            Contact us
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">Up to 3×</p>
            <p className="text-sm text-gray-500">faster enrollment</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">90%+</p>
            <p className="text-sm text-gray-500">matching accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">4-6 wks</p>
            <p className="text-sm text-gray-500">implementation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
