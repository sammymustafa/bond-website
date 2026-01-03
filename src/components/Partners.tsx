"use client";

import Image from "next/image";

const partners = [
  { 
    name: "Canvass Clinical Research Services", 
    logo: "/images/partners/canvass_clinical_research_services_cover.jpeg",
  },
  { 
    name: "Commonwealth Pain and Spine Clinic", 
    logo: "/images/partners/commonwealth-pain-spine-clinic-logo.png",
  },
  { 
    name: "MRCT - Brigham and Women's Hospital", 
    logo: "/images/partners/MRCT-Logo.png",
  },
];

export default function Partners() {
  return (
    <section className="section-sm bg-white border-b border-gray-100">
      <div className="container-lg px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-sm font-medium text-gray-600 mb-1">Partnered with</p>
          <p className="text-xs text-gray-400">Leading research sites and organizations</p>
        </div>

        {/* Partner Logos - Grid on mobile, flex on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="group relative flex items-center justify-center"
            >
              <div className="h-12 sm:h-16 md:h-20 w-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain max-w-[140px] sm:max-w-[180px] md:max-w-[200px]"
                />
              </div>
            </div>
          ))}
          
          {/* More Partners Indicator */}
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center">
            <div className="h-12 sm:h-16 md:h-20 px-6 sm:px-8 md:px-10 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-bond-primary hover:text-bond-primary transition-colors">
              <span className="text-sm sm:text-base md:text-lg font-medium">+ more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
