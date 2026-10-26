"use client";

import { Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "./LinkedInIcon";
import Link from "next/link";
import Image from "next/image";
import ComplianceBadges from "@/components/ComplianceBadges";
import { useDemoModal } from "@/context/DemoModalContext";
import { useCookieConsent } from "@/context/CookieConsentContext";
import {
  audienceLinks,
  compareLinks,
  demoHref,
  preferredSourceHref,
  productLinks,
  resourceLinks,
  trustCenterHref,
} from "@/content/nav";

const columns = [
  { title: "Product", links: productLinks },
  {
    title: "Solutions",
    links: [
      ...audienceLinks,
      { name: "Therapeutic areas", href: "/therapeutic-areas" },
      { name: "By location", href: "/clinical-trial-recruitment" },
    ],
  },
  // The longest column: on phones it goes last, full width, in two columns, instead of leaving gaps beside it
  { title: "Compare", links: [...compareLinks, { name: "All comparisons", href: "/compare" }], wide: true },
  {
    title: "Resources",
    links: [
      ...resourceLinks,
      { name: "Trust Center", href: trustCenterHref },
      { name: "Preferred source on Google", href: preferredSourceHref },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/#product" },
      { name: "Careers", href: "/careers" },
      { name: "Book a demo", href: demoHref },
      { name: "Contact", href: "/#contact" },
    ],
  },
];

// Block links with py-2 on phones (a ~36px tap target); a wrapped name keeps its lines close (leading-snug)
const linkClass = "inline-block py-2 sm:py-1 text-sm leading-snug text-gray-600 hover:text-gray-900 transition-colors";

export default function Footer() {
  const { openDemoModal } = useDemoModal();
  const { reopenBanner } = useCookieConsent();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Seven columns only from xl: at 1024-1279 they were ~115px wide and links wrapped to three lines, so there
            the brand block takes its own row and the five link columns share the width */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="relative col-span-2 md:col-span-3 lg:col-span-5 xl:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <Image
                src="/images/logo/bond-health-icon.png"
                alt="Bond Health"
                width={637}
                height={626}
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
              />
              <span className="font-display font-bold text-2xl text-gray-900">Bond Health</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm text-sm">
              Bond Health accelerates clinical trial patient recruitment using AI.
            </p>
            <div className="space-y-3">
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

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/bondtrials/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bond Health on LinkedIn"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 max-w-xs rounded-xl border border-gray-200 bg-white px-4 py-4 lg:absolute lg:top-0 lg:right-0 lg:mt-0 xl:static xl:mt-6">
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

          {/* Links Columns */}
          {columns.map((col) => (
            <div key={col.title} className={col.wide ? "col-span-2 order-last md:col-span-1 md:order-none" : undefined}>
              <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm">{col.title}</h4>
              <ul className={col.wide ? "columns-2 gap-8 md:columns-1" : undefined}>
                {col.links.map((link) => (
                  <li key={link.href + link.name} className="sm:mb-1.5 break-inside-avoid">
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
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
