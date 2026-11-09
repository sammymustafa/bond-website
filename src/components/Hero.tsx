import { ArrowRight, Play, Lock, FileCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroFlows from "./HeroFlows";

// Real intrinsic dimensions per logo so each renders at a uniform height with
// its natural width (no distortion), on both the desktop strip and mobile grid.
const supporters = [
  { name: "Google Cloud for Startups", logo: "/images/supporters/GoogleCloudforStartups-3.webp", w: 607, h: 132, boost: 1.35 },
  { name: "AWS Startups", logo: "/images/supporters/aws-startups.png", w: 851, h: 246 },
  { name: "Plug and Play", logo: "/images/supporters/Logo_Plug_and_Play_New.png", w: 3602, h: 680 },
  { name: "CEAS Investments", logo: "/images/supporters/CEAS_investments_logo.webp", w: 1000, h: 400 },
  { name: "Leo Capital", logo: "/images/supporters/leo-capital.png", w: 747, h: 192 },
  { name: "Switch VC", logo: "/images/supporters/switch-vc.avif", w: 2048, h: 312 },
  { name: "Harvard Innovation Lab", logo: "/images/supporters/Harvard_Innovation_Lab_logo.png", w: 673, h: 169 },
  { name: "MIT Sandbox", logo: "/images/supporters/MIT-Sandbox-Logo.webp", w: 249, h: 142, boost: 1.2 },
  { name: "NVIDIA Inception", logo: "/images/supporters/nvidia-inception-program-badge-rgb-for-screen.png", w: 573, h: 217, boost: 1.35 },
  { name: "ElevenLabs Grants", logo: "/images/supporters/8xden71nndm-ElevenLabs_Grants_Dark.webp", w: 2324, h: 312 },
  { name: "UC Launch", logo: "/images/supporters/uc-launch-logo.png", w: 338, h: 130, boost: 1.3 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-hero">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="w-full lg:max-w-xl">
            {/* Eyebrow with subtle animation */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bond-primary/5 border border-bond-primary/20 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-bond-primary rounded-full motion-safe:animate-pulse" />
              <span className="text-bond-primary-dark font-medium text-[13px] sm:text-sm">For research sites and health systems</span>
            </div>

            {/* Headline: not faded in, since it is the largest element on first paint. Balanced so no word sits alone. */}
            <h1 className="font-display font-bold text-[clamp(2.125rem,4.2vw,3.375rem)] leading-[1.05] tracking-[-0.025em] [word-spacing:0.05em] text-balance text-gray-900 mb-6">
              Enroll the right patients for trials{" "}
              <span className="gradient-text inline-block">in weeks, not months.</span>
            </h1>

            {/* Single clear value prop - consolidated */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 animate-fade-up stagger-2 pr-4 leading-relaxed sm:leading-7">
              Bond Health is <span className="text-gray-900 font-medium">AI patient recruitment software</span> for clinical trials: it finds eligible patients in your <span className="text-gray-900 font-medium">EHR</span> and through <span className="text-gray-900 font-medium">Meta and Google ads</span>, then calls and texts each one through to a <span className="text-gray-900 font-medium">booked study visit</span>.
            </p>

            {/* CTAs: full width and equal on phones, side by side from sm */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-8 animate-fade-up stagger-3">
              <a
                href="https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full sm:w-auto"
              >
                Request a pilot
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#product"
                className="btn-secondary group w-full sm:w-auto"
              >
                <Play className="w-4 h-4 transition-transform group-hover:scale-110" />
                See 3-step workflow
              </a>
            </div>

            {/* Combined proof + trust in a cleaner card */}
            <div className="p-4 bg-gray-50/80 rounded-xl border border-gray-100 animate-fade-up stagger-4">
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold text-gray-900 whitespace-nowrap">Up to 3x faster enrollment</span> · <span className="font-semibold text-gray-900 whitespace-nowrap">90%+ matching accuracy</span>
              </p>
              {/* py-1 on the links gives them a 24px tap height */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href="https://app.vanta.com/bondtrials.com/trust/xlbm8nojavvhspm2l3q3pj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 py-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Image
                    src="/images/hipaa-compliant-badge.svg"
                    alt="HIPAA Compliant"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span>HIPAA Compliant</span>
                </a>
                <Link
                  href="/security#certifications"
                  className="flex items-center gap-1.5 py-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>ISO 27001 certified</span>
                </Link>
                <Link
                  href="/security#certifications"
                  className="flex items-center gap-1.5 py-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>SOC 2 Type I</span>
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <Lock className="w-3.5 h-3.5 text-green-600" />
                  <span>BAA available</span>
                </div>
                {/* Wraps as one unit so "FHIR" never ends up alone on its own line */}
                <div className="flex items-center gap-x-4">
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
          </div>

          {/* Right: Bond's two recruitment paths, animated (sample data) */}
          <div className="relative animate-fade-up stagger-2 w-full max-w-xl mx-auto lg:max-w-none">
            <HeroFlows />

            {/* Subtle floating accents - toned down, hidden on mobile. They overlap the graphic's corners, so they let clicks through to its pause button. */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-bond-accent/10 rounded-full blur-2xl hidden sm:block motion-safe:animate-pulse pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-bond-primary/10 rounded-full blur-2xl hidden sm:block pointer-events-none" />
          </div>
        </div>

        {/* Supporters Section - Renamed and normalized. From lg the hero graphic is the tallest thing above,
            and its shadow reaches about 50px down, so the divider sits 80px below it instead of 48px. */}
        <div className="mt-12 lg:mt-20 pt-8 border-t border-gray-100 animate-fade-up stagger-4">
          <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Supported by</p>
          
          {/* Mobile: even grid; each logo is optically sized (wider marks are scaled
              down) so they carry similar visual weight, and all are visible at once */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 motion-safe:sm:hidden">
            {supporters.map((supporter) => {
              const aspect = supporter.w / supporter.h;
              const opticalHeight = Math.round((34 / Math.pow(aspect, 0.42)) * (supporter.boost ?? 1));
              return (
                <div
                  key={supporter.name}
                  className="flex h-12 w-[28%] items-center justify-center opacity-50 grayscale"
                >
                  <Image
                    src={supporter.logo}
                    alt={supporter.name}
                    width={supporter.w}
                    height={supporter.h}
                    className="w-auto max-w-full object-contain"
                    style={{ height: `${opticalHeight}px` }}
                  />
                </div>
              );
            })}
          </div>

          {/* Desktop: scrolling logo strip. The track is as wide as its two copies (w-max), so translating it by -50%
              moves exactly one copy and the loop is seamless; spacing is padding, not gap, for the same reason. */}
          <div className="relative overflow-hidden hidden motion-safe:sm:block [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max animate-scroll items-center">
              {[...supporters, ...supporters].map((supporter, index) => (
                <div
                  key={`${supporter.name}-${index}`}
                  aria-hidden={index >= supporters.length || undefined}
                  className="shrink-0 pr-16 transition-all duration-300 opacity-50 hover:opacity-80 grayscale hover:grayscale-0"
                >
                  <Image
                    src={supporter.logo}
                    alt={supporter.name}
                    width={supporter.w}
                    height={supporter.h}
                    className="w-auto object-contain"
                    style={{ height: `${Math.round((44 / Math.pow(supporter.w / supporter.h, 0.42)) * (supporter.boost ?? 1))}px` }}
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
