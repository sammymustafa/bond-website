import type { Source } from "./types";
import { trustCenterHref } from "./nav";

/**
 * Bond's third-party security attestations, and the rules for describing them.
 *
 * ISO/IEC 27001 (Advantage Partners' "Reference to Certification Body Name & Use of Mark" policy):
 * - The certification covers Bond Health's information security management system (ISMS), never the
 *   product or service. Do not write "the Bond platform is ISO 27001 certified".
 * - A full reference names the client (Bond / Bond Health), the management system and standard
 *   (ISMS, ISO/IEC 27001:2022) and the certification body (Advantage Partners). Use ISO_27001_CLAUSE.
 * - Use the Advantage Partners badge unmodified (no recoloring, cropping or redrawing), only while the
 *   certificate is valid. Do not use the IAS or IAF accreditation marks.
 *
 * SOC 2 (Advantage Partners' announcement guidance): "SOC 2 Type I compliant" or "has an issued SOC 2
 * Type I report", never "certified" or "certification". The report itself is restricted to customers
 * and prospective customers, so it is never published on the site.
 */
export const ISO_27001_CLAUSE =
  "its information security management system is certified to ISO/IEC 27001:2022 by Advantage Partners";

export const ISO_27001_CERTIFICATE = {
  number: "ISMS-BO-101926",
  issued: "October 19, 2026",
  expires: "October 19, 2029",
  verifyEmail: "isocompliance@advantage-partners.com",
};

export const iso27001Source: Source = {
  id: "bond-iso-27001",
  title: `Certificate of Registration, Information Security Management System, ISO/IEC 27001:2022 (certificate ${ISO_27001_CERTIFICATE.number})`,
  publisher: "Advantage Partners (Montlake Partner Group LLC)",
  year: "2026",
  note: `Issued ${ISO_27001_CERTIFICATE.issued}; expires ${ISO_27001_CERTIFICATE.expires}, subject to annual surveillance audits. Scope: "the assets, technologies and processes for the secure provision of Bond Health's clinical trial patient recruitment platform, including its web applications, APIs, cloud infrastructure, integrations, and supporting business operations." The certificate can be validated with Advantage Partners at ${ISO_27001_CERTIFICATE.verifyEmail}.`,
};

export interface ComplianceBadge {
  name: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  href: string;
}

export const complianceBadges: ComplianceBadge[] = [
  {
    name: "HIPAA",
    src: "/images/hipaa-compliant-badge.svg",
    width: 101,
    height: 100,
    alt: "HIPAA Compliant",
    label: "HIPAA compliant",
    href: trustCenterHref,
  },
  {
    name: "SOC 2",
    src: "/images/compliance/advantage-partners-soc-2-badge.png",
    width: 574,
    height: 639,
    alt: "Advantage Partners SOC 2 Compliant badge",
    label: "SOC 2 Type I compliant",
    href: "/security#certifications",
  },
  {
    name: "ISO/IEC 27001",
    src: "/images/compliance/advantage-partners-iso-27001-badge.png",
    width: 575,
    height: 639,
    alt: "Advantage Partners ISO/IEC 27001:2022 Certification badge",
    label: "ISO/IEC 27001:2022 certified ISMS",
    href: "/security#certifications",
  },
];
