"use client";

import { ArrowRight, Play, Shield, Lock, FileCheck, Clock, Phone, CheckCircle2, XCircle, Calendar } from "lucide-react";
import Image from "next/image";

const supporters = [
  { name: "Plug and Play", logo: "/images/supporters/Logo_Plug_and_Play_New.png" },
  { name: "CEAS Investments", logo: "/images/supporters/CEAS_investments_logo.webp" },
  { name: "Harvard Innovation Lab", logo: "/images/supporters/Harvard_Innovation_Lab_logo.png" },
  { name: "MIT Sandbox", logo: "/images/supporters/MIT-Sandbox-Logo.webp" },
  { name: "NVIDIA Inception", logo: "/images/supporters/nvidia-inception-program-badge-rgb-for-screen.png" },
  { name: "ElevenLabs Grants", logo: "/images/supporters/8xden71nndm-ElevenLabs_Grants_Dark.webp" },
  { name: "UC Launch", logo: "/images/supporters/UC-Launch-logo.avif" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-hero">
      <div className="container-lg px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-bond-primary font-semibold text-sm uppercase tracking-wide mb-4 animate-fade-up">
              For research sites and health systems
            </p>

            {/* Headline - More distinctive and ownable */}
            <h1 className="font-display font-bold text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-gray-900 mb-6 animate-fade-up stagger-1">
              Enroll the right patients
              <br />
              <span className="gradient-text">in weeks, not months.</span>
            </h1>

            {/* Subhead - Clean and decisive */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up stagger-2">
              <strong className="text-gray-900">Less chart review. Fewer screen failures. Faster enrollment.</strong>
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

            {/* Security Micro-Row - Credibility anchor */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-4 animate-fade-up stagger-4">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                <Shield className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                <span>HIPAA-aligned</span>
              </div>
              <div className="hidden sm:block w-px h-3.5 bg-gray-200" />
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                <Lock className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                <span>BAA available</span>
              </div>
              <div className="hidden sm:block w-px h-3.5 bg-gray-200" />
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                <FileCheck className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                <span>Audit logs</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 animate-fade-up stagger-4">
              <span className="font-medium text-gray-600">EHR integration via FHIR</span>
            </div>

            {/* Social Proof - Independent Testing */}
            <div className="mt-6 pt-6 border-t border-gray-100 animate-fade-up stagger-4">
              <p className="text-gray-700">
                Independent testing shows <strong className="text-gray-900">2-3x faster enrollment</strong> and <strong className="text-gray-900">&gt;90% matching accuracy</strong>.
              </p>
            </div>
          </div>

          {/* Right - Product Visual: Real Workflow Artifact */}
          <div className="relative animate-fade-up stagger-2 mt-8 lg:mt-0">
            {/* Main Card - Realistic Dashboard */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden">
              {/* App Header */}
              <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-bond-primary to-bond-accent flex items-center justify-center">
                    <span className="font-display font-bold text-white text-[10px] sm:text-xs">B</span>
                  </div>
                  <span className="font-semibold text-gray-800 text-xs sm:text-sm">Bond</span>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-xs text-gray-500">Connected via FHIR</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-400">Synced 2h ago</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="flex sm:hidden items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-gray-400">Connected</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-3 sm:p-5">
                {/* Section: Patient Eligibility Review */}
                <div className="mb-4 sm:mb-5">
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <h3 className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide">Eligibility Screening</h3>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-semibold text-bond-primary bg-bond-primary/10 rounded-full">47 matched</span>
                  </div>

                  {/* Patient Cards with Real Data */}
                  <div className="space-y-2">
                    {/* Eligible Patient */}
                    <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-green-50/80 border border-green-100">
                      <div className="flex items-start sm:items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                          <span className="font-semibold text-gray-900 text-xs sm:text-sm">Patient #1847</span>
                          <span className="px-1 py-0.5 sm:px-1.5 text-[9px] sm:text-[11px] font-semibold bg-green-100 text-green-700 rounded">ELIGIBLE</span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-600 font-medium ml-2">A1c: 6.8%</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">BMI 29.2 · Age 54 · Last visit: 3 weeks ago</p>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-green-700">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          Scheduled: Jan 8
                        </span>
                      </div>
                    </div>

                    {/* In Outreach Patient */}
                    <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-blue-50/80 border border-blue-100">
                      <div className="flex items-start sm:items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-bond-primary flex-shrink-0" />
                          <span className="font-semibold text-gray-900 text-xs sm:text-sm">Patient #2103</span>
                          <span className="px-1 py-0.5 sm:px-1.5 text-[9px] sm:text-[11px] font-semibold bg-blue-100 text-blue-700 rounded">OUTREACH</span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-600 font-medium ml-2">A1c: 7.1%</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">BMI 31.4 · Age 47 · Last visit: 2 weeks ago</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-blue-700">
                          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          Voice call: Today 2pm
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500">Attempt 2 of 3</span>
                      </div>
                    </div>

                    {/* Excluded Patient - Hide on very small screens to reduce clutter */}
                    <div className="hidden xs:block p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-start sm:items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                          <span className="font-semibold text-gray-700 text-xs sm:text-sm">Patient #1562</span>
                          <span className="px-1 py-0.5 sm:px-1.5 text-[9px] sm:text-[11px] font-semibold bg-gray-200 text-gray-600 rounded">EXCLUDED</span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500 font-medium ml-2">A1c: 5.2%</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">
                        <span className="text-red-600 font-medium">Reason:</span> A1c below threshold (5.7%)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-base sm:text-lg font-bold text-gray-900">32</p>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-wide">Pre-screened</p>
                  </div>
                  <div className="text-center border-x border-gray-100">
                    <p className="text-base sm:text-lg font-bold text-bond-primary">18</p>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-wide">Scheduled</p>
                  </div>
                  <div className="text-center">
                    <p className="text-base sm:text-lg font-bold text-green-600">12</p>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-wide">Consented</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating accents - toned down */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-bond-accent/8 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-bond-primary/8 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Supporters Section - Renamed and normalized */}
        <div className="mt-20 pt-8 border-t border-gray-100 animate-fade-up stagger-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-8">Supported by</p>
          
          {/* Scrolling Logo Strip - Grayscale, normalized sizing */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-20 items-center">
              {[...supporters, ...supporters].map((supporter, index) => (
                <div 
                  key={`${supporter.name}-${index}`}
                  className="flex-shrink-0 h-10 w-auto transition-all duration-300 opacity-50 hover:opacity-80 grayscale hover:grayscale-0"
                >
                  <Image
                    src={supporter.logo}
                    alt={supporter.name}
                    width={140}
                    height={40}
                    className="h-10 w-auto object-contain"
                    style={{ maxWidth: '140px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations - More subtle */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-bond-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-bond-accent/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
