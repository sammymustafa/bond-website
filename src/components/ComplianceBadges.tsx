import Image from "next/image";
import SmartLink from "@/components/seo/SmartLink";
import { complianceBadges } from "@/content/compliance";

// On phones the md badges shrink into one row of three; at full size they wrapped two and one, or stacked.
const SIZES = {
  sm: { img: "h-12 w-auto", label: "max-w-20 text-xs", list: "flex flex-wrap gap-x-3" },
  md: {
    img: "h-14 w-auto sm:h-20",
    label: "max-w-24 text-xs sm:max-w-32",
    list: "grid grid-cols-3 gap-x-3 sm:flex sm:flex-wrap sm:gap-x-8",
  },
};

/**
 * HIPAA, SOC 2 and ISO/IEC 27001 badges, each linking to its evidence. The Advantage Partners
 * badges are shown unmodified, as their mark-use policy requires (see src/content/compliance.ts).
 */
export default function ComplianceBadges({
  size = "md",
  title,
  className = "",
}: {
  size?: keyof typeof SIZES;
  title?: string;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <div className={className}>
      {title && <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">{title}</p>}
      <ul className={`items-start gap-y-4 ${s.list}`}>
        {complianceBadges.map((b) => (
          <li key={b.name}>
            <SmartLink href={b.href} className="group flex flex-col items-center gap-2 text-center">
              <Image src={b.src} alt={b.alt} width={b.width} height={b.height} className={s.img} />
              <span className={`${s.label} font-medium leading-snug text-gray-600 group-hover:text-gray-900`}>
                {b.label}
              </span>
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
