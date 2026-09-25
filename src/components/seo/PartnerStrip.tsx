import Image from "next/image";
import { partners } from "@/content/partners";

/** Compact partner logo row for comparison pages, matching the homepage "Partnered with" section. */
export default function PartnerStrip() {
  return (
    <div className="no-print mt-8">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">Partnered with</p>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
        {partners.map((p) => (
          <li key={p.name}>
            <Image
              src={p.logo}
              alt={p.name}
              width={200}
              height={80}
              className="h-8 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[160px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
