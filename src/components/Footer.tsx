"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "./LinkedInIcon";
import { G2Icon } from "./G2Icon";
import Link from "next/link";
import Image from "next/image";
import ComplianceBadges from "@/components/ComplianceBadges";
import { useDemoModal } from "@/context/DemoModalContext";
import { useCookieConsent } from "@/context/CookieConsentContext";
import {
  audienceLinks,
  compareLinks,
  demoHref,
  g2ProfileHref,
  preferredSourceHref,
  productLinks,
  resourceLinks,
  trustCenterHref,
  type NavItem,
} from "@/content/nav";

/*
 * Layout. The footer used to be one row of five link columns, and Compare (23 links) ran
 * about three times longer than the others while Company had four. Now:
 *
 * 1. The brand block and four link columns of 8 or 9 links each.
 * 2. A full-width Compare band: every comparison page, flowing into short columns, with
 *    the compliance badges beside it. Every comparison page stays linked from the footer
 *    (see the note on navMenus in src/content/nav.ts).
 * 3. The bottom bar.
 *
 * Rows are 48px apart throughout.
 */

// Two links move from Resources to Company to even the columns; "How Bond compares" is the
// Compare band's "All comparisons" link, so it isn't listed twice.
const TO_COMPANY = ["/what-is-bond-health", "/newsletter"];
const pick = (href: string) => resourceLinks.find((l) => l.href === href) as NavItem;

const columns: { title: string; links: NavItem[] }[] = [
  { title: "Product", links: productLinks },
  {
    title: "Solutions",
    links: [
      ...audienceLinks,
      { name: "Therapeutic areas", href: "/therapeutic-areas" },
      { name: "By location", href: "/clinical-trial-recruitment" },
    ],
  },
  { title: "Resources", links: resourceLinks.filter((l) => l.href !== "/compare" && !TO_COMPANY.includes(l.href)) },
  {
    title: "Company",
    links: [
      { name: "About", href: "/#product" },
      pick("/what-is-bond-health"),
      { name: "Careers", href: "/careers" },
      pick("/newsletter"),
      { name: "Trust Center", href: trustCenterHref },
      { name: "Preferred source on Google", href: preferredSourceHref },
      { name: "Book a demo", href: demoHref },
      { name: "Contact", href: "/#contact" },
    ],
  },
];

// Block links with py-2 on phones (a ~36px tap target); a wrapped name keeps its lines close (leading-snug)
const linkClass = "inline-block py-2 sm:py-1 text-sm leading-snug text-gray-600 hover:text-gray-900 transition-colors";

function FooterLink({ link }: { link: NavItem }) {
  return link.href.startsWith("http") ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {link.name}
    </a>
  ) : (
    <Link href={link.href} className={linkClass}>
      {link.name}
    </Link>
  );
}

function LinkList({ links, className = "" }: { links: NavItem[]; className?: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href + link.name} className="sm:mb-1.5 break-inside-avoid">
          <FooterLink link={link} />
        </li>
      ))}
    </ul>
  );
}

const headingClass = "font-semibold text-gray-900 text-sm";

export default function Footer() {
  const { openDemoModal } = useDemoModal();
  const { reopenBanner } = useCookieConsent();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* 1. Brand and the four link columns. Below xl the brand block takes its own row, laid out across it. */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-2 md:col-span-4 xl:col-span-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between xl:flex-col xl:justify-start xl:pr-8">
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/images/logo/bond-health-mark.svg"
                  alt="Bond Health"
                  width={44}
                  height={44}
                  className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
                  unoptimized
                />
                <span className="font-display font-bold text-2xl text-gray-900">Bond Health</span>
              </Link>
              <p className="text-gray-600 max-w-xs text-sm leading-relaxed">
                Bond Health accelerates clinical trial patient recruitment using AI.
              </p>
            </div>
            {/* Contact and social links stay together: on the right of the brand row below xl, under the tagline from xl */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12 xl:flex-col xl:gap-6">
              <div className="flex flex-col gap-3">
                {/* Wrapped so the button's larger tap area (-my-2 py-2) doesn't change the list spacing */}
                <div>
                  <button
                    type="button"
                    onClick={openDemoModal}
                    className="flex items-center gap-2 -my-2 py-2 text-bond-primary hover:text-bond-primary/80 transition-colors text-sm font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    Contact us
                  </button>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  Boston, MA
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/bondtrials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bond Health on LinkedIn"
                  className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={g2ProfileHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bond Health on G2"
                  className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-all"
                >
                  <G2Icon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="xl:col-span-2">
              <h4 className={`${headingClass} mb-3 sm:mb-4`}>{col.title}</h4>
              <LinkList links={col.links} />
            </div>
          ))}
        </div>

        {/* 2. Every comparison page, in short columns, with the compliance badges beside them */}
        <div className="mt-12 pt-10 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="flex items-baseline justify-between gap-4 mb-3 sm:mb-4">
              <h4 className={headingClass}>Compare</h4>
              <Link
                href="/compare"
                className="group inline-flex items-center gap-1 py-1 text-sm font-medium text-bond-primary hover:text-bond-primary/80 transition-colors"
              >
                All comparisons
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <LinkList links={compareLinks} className="columns-2 md:columns-3 xl:columns-4 gap-8" />
          </div>
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-4 max-w-xs lg:max-w-none">
              <ComplianceBadges size="sm" className="[&_ul]:flex-nowrap [&_ul]:justify-between" />
              <a
                href={trustCenterHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block py-1 text-xs font-medium text-bond-primary hover:underline"
              >
                View Vanta Trust Center
              </a>
            </div>
          </div>
        </div>

        {/* 3. Bottom bar */}
        <div className="mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Bond Health, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 text-xs sm:text-sm text-gray-500">
            <Link href="/privacy-policy" className="whitespace-nowrap py-1 hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="whitespace-nowrap py-1 hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <button type="button" onClick={reopenBanner} className="-my-3 py-3 whitespace-nowrap hover:text-gray-900 transition-colors">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
