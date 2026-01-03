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
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-hero">
      <div className="container-lg px-4 sm:px-6 relative z-10 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-bond-primary font-semibold text-sm uppercase tracking-wide mb-4 animate-fade-up">
              For research sites and health systems
            </p>

            {/* Headline - More distinctive and ownable */}
            <h1 className="font-display font-bold text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-gray-900 mb-4 sm:mb-6 animate-fade-up stagger-1 pr-2">
              Enroll the right patients
              <br />
              <span className="gradient-text">in weeks, not months.</span>
            </h1>

            {/* Subhead - What we do */}
            <p className="text-sm sm:text-base text-gray-500 mb-3 animate-fade-up stagger-2 pr-2">
              EHR screening → patient outreach & scheduling → consent, in one workflow.
            </p>
            
            {/* Value prop */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 animate-fade-up stagger-2 pr-2">
              <strong className="text-gray-900">Less chart review. Fewer screen failures. Faster enrollment.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-5 sm:mb-6 animate-fade-up stagger-3">
              <a
                href="https://cal.com/rishabhgoel/bond-health-demo?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Request a pilot
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

            {/* Social Proof - Independent Testing */}
            <div className="mb-3 animate-fade-up stagger-4">
              <p className="text-sm sm:text-base text-gray-700 pr-2">
                Independent testing shows <strong className="text-gray-900">2-3x faster enrollment</strong> and <strong className="text-gray-900">&gt;90% matching accuracy</strong>.
              </p>
            </div>

            {/* Security Micro-Row - Lighter, smaller */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 animate-fade-up stagger-4">
              <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-400">
                <Shield className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <span>HIPAA-aligned</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-gray-200" />
              <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-400">
                <Lock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <span>BAA available</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-gray-200" />
              <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-400">
                <FileCheck className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <span>Audit logs</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-gray-200" />
              <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-400">
                <span>FHIR integration</span>
              </div>
            </div>
          </div>

          {/* Right - Product Visual: Real Workflow Artifact */}
          <div className="relative animate-fade-up stagger-2 mt-8 lg:mt-0 w-full max-w-full">
            {/* Main Card - Realistic Dashboard */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200/60 overflow-hidden mx-auto max-w-sm sm:max-w-none">
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
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wide">Eligibility Screening</h3>
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-sm sm:text-base font-bold text-bond-primary bg-bond-primary/15 rounded-full">47 matched</span>
                  </div>

                  {/* Patient Cards with Real Data */}
                  <div className="space-y-2.5">
                    {/* Eligible Patient */}
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-green-50 border border-green-200">
                      <div className="flex items-start sm:items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">Patient #1847</span>
                          <span className="px-1.5 py-0.5 sm:px-2 text-[10px] sm:text-xs font-bold bg-green-200 text-green-800 rounded">ELIGIBLE</span>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 font-semibold ml-2">A1c: 6.8%</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 mb-2">BMI 29.2 · Age 54 · Last visit: 3 weeks ago</p>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1.5 text-sm sm:text-base font-semibold text-green-700">
                          <Calendar className="w-4 h-4" />
                          Scheduled: Jan 8
                        </span>
                      </div>
                    </div>

                    {/* In Outreach Patient */}
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200">
                      <div className="flex items-start sm:items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-bond-primary flex-shrink-0" />
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">Patient #2103</span>
                          <span className="px-1.5 py-0.5 sm:px-2 text-[10px] sm:text-xs font-bold bg-blue-200 text-blue-800 rounded">OUTREACH</span>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 font-semibold ml-2">A1c: 7.1%</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 mb-2">BMI 31.4 · Age 47 · Last visit: 2 weeks ago</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="flex items-center gap-1.5 text-sm sm:text-base font-semibold text-blue-700">
                          <Clock className="w-4 h-4" />
                          Voice call: Today 2pm
                        </span>
                        <span className="text-sm text-gray-600">Attempt 2 of 3</span>
                      </div>
                    </div>

                    {/* Excluded Patient - Hide on very small screens to reduce clutter */}
                    <div className="hidden xs:block p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-100 border border-gray-300">
                      <div className="flex items-start sm:items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                          <span className="font-semibold text-gray-800 text-sm sm:text-base">Patient #1562</span>
                          <span className="px-1.5 py-0.5 sm:px-2 text-[10px] sm:text-xs font-bold bg-gray-300 text-gray-700 rounded">EXCLUDED</span>
                        </div>
                        <span className="text-sm sm:text-base text-gray-600 font-semibold ml-2">A1c: 5.2%</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700">
                        <span className="text-red-700 font-semibold">Reason:</span> A1c below threshold (5.7%)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 sm:pt-5 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-lg sm:text-xl font-bold text-gray-900">32</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide font-medium">Pre-screened</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-lg sm:text-xl font-bold text-bond-primary">18</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide font-medium">Scheduled</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg sm:text-xl font-bold text-green-600">12</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide font-medium">Consented</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating accents - toned down, hidden on mobile */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-20 h-20 bg-bond-accent/8 rounded-full blur-2xl" />
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 bg-bond-primary/8 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Supporters Section - Renamed and normalized */}
        <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-100 animate-fade-up stagger-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-6 sm:mb-8">Supported by</p>
          
          {/* Mobile: Grid layout, Desktop: Scrolling */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:hidden gap-4 sm:gap-6 items-center justify-items-center px-2">
            {supporters.slice(0, 6).map((supporter) => (
              <div 
                key={supporter.name}
                className="h-8 w-full flex items-center justify-center opacity-60 grayscale"
              >
                <Image
                  src={supporter.logo}
                  alt={supporter.name}
                  width={100}
                  height={32}
                  className="h-6 sm:h-8 w-auto object-contain max-w-[80px] sm:max-w-[100px]"
                />
              </div>
            ))}
          </div>
          
          {/* Desktop: Scrolling Logo Strip */}
          <div className="hidden md:block relative overflow-hidden">
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
      <div className="absolute top-1/4 right-0 w-40 sm:w-80 h-40 sm:h-80 bg-bond-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-32 sm:w-56 h-32 sm:h-56 bg-bond-accent/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
