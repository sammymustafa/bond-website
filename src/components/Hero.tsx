"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Shield, Lock, FileCheck, Clock, Phone, CheckCircle2, XCircle, Calendar, User } from "lucide-react";
import Image from "next/image";

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);
  
  return count;
}

// Sample patients that will cycle
const patientData = [
  {
    id: "#1847",
    status: "ELIGIBLE",
    statusColor: "green",
    icon: CheckCircle2,
    a1c: "6.8%",
    details: "BMI 29.2 · Age 54 · Last visit: 3 weeks ago",
    action: { icon: Calendar, text: "Scheduled: Jan 8", color: "green" },
    bgClass: "bg-green-50/80 border-green-100",
  },
  {
    id: "#2103",
    status: "OUTREACH",
    statusColor: "blue",
    icon: Phone,
    a1c: "7.1%",
    details: "BMI 31.4 · Age 47 · Last visit: 2 weeks ago",
    action: { icon: Clock, text: "Voice call: Today 2pm", color: "blue", extra: "Attempt 2 of 3" },
    bgClass: "bg-blue-50/80 border-blue-100",
  },
  {
    id: "#1923",
    status: "CONSENTED",
    statusColor: "emerald",
    icon: CheckCircle2,
    a1c: "7.4%",
    details: "BMI 27.8 · Age 62 · Last visit: 1 week ago",
    action: { icon: CheckCircle2, text: "Consent signed", color: "emerald" },
    bgClass: "bg-emerald-50/80 border-emerald-100",
  },
  {
    id: "#1562",
    status: "EXCLUDED",
    statusColor: "gray",
    icon: XCircle,
    a1c: "5.2%",
    details: "A1c below threshold (5.7%), last visit 14 months ago",
    isExcluded: true,
    bgClass: "bg-gray-50 border-gray-200",
  },
];

const supporters = [
  { name: "Google Cloud for Startups", logo: "/images/supporters/GoogleCloudforStartups-3.webp", scale: 1.4 },
  { name: "Plug and Play", logo: "/images/supporters/Logo_Plug_and_Play_New.png" },
  { name: "CEAS Investments", logo: "/images/supporters/CEAS_investments_logo.webp" },
  { name: "Harvard Innovation Lab", logo: "/images/supporters/Harvard_Innovation_Lab_logo.png" },
  { name: "MIT Sandbox", logo: "/images/supporters/MIT-Sandbox-Logo.webp" },
  { name: "NVIDIA Inception", logo: "/images/supporters/nvidia-inception-program-badge-rgb-for-screen.png" },
  { name: "ElevenLabs Grants", logo: "/images/supporters/8xden71nndm-ElevenLabs_Grants_Dark.webp" },
  { name: "UC Launch", logo: "/images/supporters/UC-Launch-logo.avif", scale: 1.5 },
];

export default function Hero() {
  const [activePatient, setActivePatient] = useState(0);
  
  // Animated counters
  const preScreened = useCountUp(17, 1500, 800);
  const scheduled = useCountUp(18, 1500, 1000);
  const consented = useCountUp(12, 1500, 1200);
  const matched = useCountUp(47, 2000, 500);
  
  // Cycle through patients
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePatient((prev) => (prev + 1) % patientData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-hero">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="w-full lg:max-w-xl">
            {/* Eyebrow with subtle animation */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bond-primary/5 border border-bond-primary/20 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-bond-primary rounded-full animate-pulse" />
              <span className="text-bond-primary font-medium text-sm">For research sites and health systems</span>
            </div>

            {/* Headline - Cleaner, more impactful */}
            <h1 className="font-display font-bold text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] text-gray-900 mb-6 animate-fade-up stagger-1">
              Enroll the right patients{" "}
              <span className="gradient-text inline-block">in weeks, not months.</span>
            </h1>

            {/* Single clear value prop - consolidated */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 animate-fade-up stagger-2 pr-4 leading-relaxed">
              Automate <span className="text-gray-900 font-medium">EHR screening</span>, <span className="text-gray-900 font-medium">patient outreach</span>, and <span className="text-gray-900 font-medium">consent tracking</span> in one workflow.
            </p>

            {/* CTAs - More prominent */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 animate-fade-up stagger-3">
              <a
                href="https://cal.com/rishabhgoel/bond-health-demo?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Request a pilot
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#product"
                className="btn-secondary group"
              >
                <Play className="w-4 h-4 transition-transform group-hover:scale-110" />
                See 3-step workflow
              </a>
            </div>

            {/* Combined proof + trust in a cleaner card */}
            <div className="p-4 bg-gray-50/80 rounded-xl border border-gray-100 animate-fade-up stagger-4">
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold text-gray-900">2-3x faster enrollment</span> · <span className="font-semibold text-gray-900">&gt;90% matching accuracy</span>
                <span className="text-gray-400 ml-1">(independent testing)</span>
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <Shield className="w-3.5 h-3.5 text-green-600" />
                  <span>HIPAA-aligned</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <Lock className="w-3.5 h-3.5 text-green-600" />
                  <span>BAA available</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <FileCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>Audit logs</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="text-bond-primary font-medium">FHIR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Product Visual: Dynamic Workflow Artifact */}
          <div className="relative animate-fade-up stagger-2 w-full max-w-md mx-auto lg:max-w-none">
            {/* Main Card - Realistic Dashboard */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden">
              {/* App Header */}
              <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-bond-primary to-bond-accent flex items-center justify-center">
                    <span className="font-display font-bold text-white text-xs">B</span>
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">Bond</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 hidden sm:inline">Connected via FHIR</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-600 font-medium">Live</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-5">
                {/* Section Header with animated counter */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Eligibility Screening</h3>
                  <span className="px-3 py-1.5 text-sm font-bold text-bond-primary bg-bond-primary/10 rounded-full tabular-nums">
                    {matched} matched
                  </span>
                </div>

                {/* Cycling Patient Card with transition */}
                <div className="relative h-[140px] mb-4 overflow-hidden">
                  {patientData.map((patient, index) => {
                    const PatientIcon = patient.icon;
                    const ActionIcon = patient.action?.icon;
                    return (
                      <div
                        key={patient.id}
                        className={`absolute inset-0 p-4 rounded-xl border transition-all duration-500 ease-out ${patient.bgClass} ${
                          index === activePatient 
                            ? "opacity-100 translate-y-0 scale-100" 
                            : "opacity-0 translate-y-4 scale-95"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <PatientIcon className={`w-4 h-4 ${
                              patient.statusColor === 'green' ? 'text-green-600' :
                              patient.statusColor === 'blue' ? 'text-blue-600' :
                              patient.statusColor === 'emerald' ? 'text-emerald-600' :
                              'text-gray-500'
                            }`} />
                            <span className="font-semibold text-gray-900 text-sm">Patient {patient.id}</span>
                            <span className={`px-1.5 py-0.5 text-[11px] font-semibold rounded ${
                              patient.statusColor === 'green' ? 'bg-green-100 text-green-700' :
                              patient.statusColor === 'blue' ? 'bg-blue-100 text-blue-700' :
                              patient.statusColor === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                              'bg-gray-200 text-gray-600'
                            }`}>{patient.status}</span>
                          </div>
                          <span className="text-sm text-gray-600 font-medium">A1c: {patient.a1c}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{patient.details}</p>
                        {patient.action && ActionIcon && (
                          <div className="flex items-center gap-3">
                            <span className={`flex items-center gap-1.5 text-sm font-medium ${
                              patient.action.color === 'green' ? 'text-green-700' :
                              patient.action.color === 'blue' ? 'text-blue-700' :
                              'text-emerald-700'
                            }`}>
                              <ActionIcon className="w-3.5 h-3.5" />
                              {patient.action.text}
                            </span>
                            {patient.action.extra && (
                              <span className="text-sm text-gray-500">{patient.action.extra}</span>
                            )}
                          </div>
                        )}
                        {patient.isExcluded && (
                          <p className="text-sm">
                            <span className="text-red-600 font-medium">Reason:</span>{" "}
                            <span className="text-gray-600">{patient.details}</span>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Patient indicator dots */}
                <div className="flex justify-center gap-1.5 mb-4">
                  {patientData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePatient(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activePatient 
                          ? "bg-bond-primary w-4" 
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Stats Summary with animated numbers */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900 tabular-nums">{preScreened}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">Pre-screened</p>
                  </div>
                  <div className="text-center border-x border-gray-100">
                    <p className="text-xl font-bold text-bond-primary tabular-nums">{scheduled}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">Scheduled</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-green-600 tabular-nums">{consented}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">Consented</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating accents - toned down, hidden on mobile */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-bond-accent/10 rounded-full blur-2xl hidden sm:block animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-bond-primary/10 rounded-full blur-2xl hidden sm:block" />
          </div>
        </div>

        {/* Supporters Section - Renamed and normalized */}
        <div className="mt-12 lg:mt-20 pt-8 border-t border-gray-100 animate-fade-up stagger-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-6 lg:mb-8">Supported by</p>
          
          {/* Mobile: Static grid */}
          <div className="grid grid-cols-3 gap-4 sm:hidden">
            {supporters.slice(0, 6).map((supporter) => {
              const scale = supporter.scale || 1;
              return (
                <div 
                  key={supporter.name}
                  className="flex items-center justify-center h-8 opacity-50 grayscale"
                >
                  <Image
                    src={supporter.logo}
                    alt={supporter.name}
                    width={Math.round(80 * scale)}
                    height={Math.round(24 * scale)}
                    className="w-auto object-contain"
                    style={{ 
                      maxWidth: `${Math.round(80 * scale)}px`,
                      height: `${Math.round(24 * scale)}px`
                    }}
                  />
                </div>
              );
            })}
          </div>
          
          {/* Desktop: Scrolling Logo Strip */}
          <div className="relative overflow-hidden hidden sm:block">
            <div className="flex animate-scroll gap-20 items-center">
              {[...supporters, ...supporters].map((supporter, index) => {
                const scale = supporter.scale || 1;
                return (
                  <div 
                    key={`${supporter.name}-${index}`}
                    className="flex-shrink-0 w-auto transition-all duration-300 opacity-50 hover:opacity-80 grayscale hover:grayscale-0"
                  >
                    <Image
                      src={supporter.logo}
                      alt={supporter.name}
                      width={Math.round(140 * scale)}
                      height={Math.round(40 * scale)}
                      className="w-auto object-contain"
                      style={{ 
                        maxWidth: `${Math.round(140 * scale)}px`,
                        height: `${Math.round(40 * scale)}px`
                      }}
                    />
                  </div>
                );
              })}
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
