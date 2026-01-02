"use client";

import { ArrowRight, Play, CheckCircle, Shield, Zap } from "lucide-react";
import Image from "next/image";

const supporters = [
  { name: "Plug and Play", logo: "/images/supporters/Logo_Plug_and_Play_New.png" },
  { name: "CEAS Investments", logo: "/images/supporters/CEAS_investments_logo.webp" },
  { name: "Harvard Innovation Lab", logo: "/images/supporters/Harvard_Innovation_Lab_logo.png" },
  { name: "MIT Sandbox", logo: "/images/supporters/MIT Sandbox-Logo-Square-300dpi-nowhitespace.webp" },
  { name: "NVIDIA Inception", logo: "/images/supporters/nvidia-inception-program-badge-rgb-for-screen.png" },
  { name: "ElevenLabs Grants", logo: "/images/supporters/8xden71nndm-ElevenLabs_Grants_Dark.webp" },
  { name: "UC Launch", logo: "/images/supporters/UC Launch logo.avif" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-hero">
      <div className="container-lg px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-bond-primary font-semibold text-sm uppercase tracking-wide mb-4 animate-fade-up">
              For research sites and health systems
            </p>

            {/* Headline */}
            <h1 className="heading-xl mb-6 animate-fade-up stagger-1">
              Enroll the right patients{" "}
              <span className="gradient-text">faster.</span>
            </h1>

            {/* Subhead */}
            <p className="body-lg mb-8 animate-fade-up stagger-2">
              Bond uses LLM-based EHR screening, voice agents, and AI-powered consent 
              to help research sites enroll patients <strong className="text-gray-900">up to 3× faster</strong> with{" "}
              <strong className="text-gray-900">90%+ matching accuracy</strong>, so coordinators 
              spend less time on chart review and screen failures.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 animate-fade-up stagger-3">
              <a
                href="https://cal.com/rishabhgoel/bond-health-demo?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#product"
                className="btn-secondary"
              >
                <Play className="w-4 h-4" />
                See 3-step workflow
              </a>
            </div>

            {/* Trust Anchors */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-up stagger-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>HIPAA-aligned workflows</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Zap className="w-4 h-4 text-bond-primary" />
                <span>Works with multiple EHR providers including Epic & Cerner via FHIR</span>
              </div>
            </div>

            {/* Stat Chips */}
            <div className="flex flex-wrap gap-3 animate-fade-up stagger-4">
              <div className="stat-chip">
                <CheckCircle className="w-4 h-4" />
                90%+ matching accuracy
              </div>
              <div className="stat-chip">
                <CheckCircle className="w-4 h-4" />
                Up to 3× faster enrollment
              </div>
            </div>
          </div>

          {/* Right - Product Visual */}
          <div className="relative animate-fade-up stagger-2">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-card-hover border border-gray-100 p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bond-primary to-bond-accent flex items-center justify-center">
                    <span className="font-display font-bold text-white text-sm">B</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Bond Platform</p>
                    <p className="text-xs text-gray-500">Example dashboard</p>
                  </div>
                </div>
                <span className="badge-success">Live</span>
              </div>

              {/* Workflow Preview */}
              <div className="space-y-4">
                {[
                  { step: "1", label: "Identify", desc: "47 patients matched", status: "complete" },
                  { step: "2", label: "Engage", desc: "32 pre-screened", status: "complete" },
                  { step: "3", label: "Consent", desc: "28 randomized", status: "active" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      item.status === "active"
                        ? "bg-bond-primary/5 border-bond-primary/20"
                        : "bg-gray-50 border-gray-100"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                        item.status === "active"
                          ? "bg-bond-primary text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {item.status === "complete" ? "✓" : item.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    {item.status === "active" && (
                      <div className="w-2 h-2 rounded-full bg-bond-primary animate-pulse" />
                    )}
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">90%+</p>
                  <p className="text-xs text-gray-500">Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">3×</p>
                  <p className="text-xs text-gray-500">Faster</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">28</p>
                  <p className="text-xs text-gray-500">Randomized</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-bond-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bond-primary/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Supporters Section */}
        <div className="mt-16 pt-8 border-t border-gray-100 animate-fade-up stagger-4">
          <p className="text-center text-sm text-gray-500 mb-8">Backed by</p>
          
          {/* Scrolling Logo Strip */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-16 items-center">
              {[...supporters, ...supporters].map((supporter, index) => (
                <div 
                  key={`${supporter.name}-${index}`}
                  className="flex-shrink-0 h-14 w-auto transition-all duration-300"
                >
                  <Image
                    src={supporter.logo}
                    alt={supporter.name}
                    width={180}
                    height={56}
                    className="h-14 w-auto object-contain"
                    style={{ maxWidth: '180px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-bond-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-bond-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
