import Image from "next/image";
import { partners } from "@/content/partners";

/** Compact partner logo row for comparison pages, matching the homepage "Partnered with" section. */
export default function PartnerStrip() {
  return (
    <div className="no-print mt-8">
      <p className="overline-label mb-3">Partnered with</p>
      {/* Two even columns on phones; a free-wrapping row left wide logos and small ones on uneven rows */}
      <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8">
        {partners.map((p) => (
          <li key={p.name}>
            <Image
              src={p.logo}
              alt={p.name}
              width={p.width}
              height={p.height}
              className="h-10 w-auto max-w-[150px] object-contain object-left sm:max-w-[160px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
