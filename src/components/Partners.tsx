"use client";

import Image from "next/image";
import { partners } from "@/content/partners";

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
                  className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain max-w-[min(140px,100%)] sm:max-w-[180px] md:max-w-[200px]"
                />
              </div>
            </div>
          ))}
          
          {/* More Partners Indicator: plain text, so it doesn't look tappable */}
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:h-16 md:h-20">
            <span className="text-sm sm:text-base md:text-lg font-medium text-gray-400">+ more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
