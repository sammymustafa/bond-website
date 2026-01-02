"use client";

import Image from "next/image";

const partners = [
  { 
    name: "Canvass Clinical Research Services", 
    logo: "/images/partners/canvass_clinical_research_services_cover.jpeg",
  },
  { 
    name: "Commonwealth Pain and Spine Clinic", 
    logo: "/images/partners/commonwealth pain and spine clinic logo.png",
  },
  { 
    name: "MRCT - Brigham and Women's Hospital", 
    logo: "/images/partners/MRCT Logo.png",
  },
];

export default function Partners() {
  return (
    <section className="section-sm bg-white border-b border-gray-100">
      <div className="container-lg px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-gray-600 mb-1">Partnered with</p>
          <p className="text-xs text-gray-400">Leading research sites and organizations</p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-24">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="group relative"
            >
              <div className="h-20 md:h-24 w-auto flex items-center justify-center hover:scale-105 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={240}
                  height={96}
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                  style={{ maxWidth: '240px' }}
                />
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <span className="text-sm text-gray-700 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
          
          {/* More Partners Indicator */}
          <div className="flex items-center justify-center">
            <div className="h-20 md:h-24 px-10 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-bond-primary hover:text-bond-primary transition-colors">
              <span className="text-lg font-medium">+ more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
