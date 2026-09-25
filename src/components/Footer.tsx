"use client";

import { Mail, MapPin, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useDemoModal } from "@/context/DemoModalContext";
import { useCookieConsent } from "@/context/CookieConsentContext";
import {
  audienceLinks,
  compareLinks,
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
  { title: "Compare", links: [...compareLinks, { name: "All comparisons", href: "/compare" }] },
  {
    title: "Resources",
    links: [
      ...resourceLinks,
      { name: "Trust Center", href: trustCenterHref },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/#about" },
      { name: "Careers", href: "/careers" },
      { name: "Book a demo", href: "/book-a-demo" },
      { name: "Contact", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  const { openDemoModal } = useDemoModal();
  const { reopenBanner } = useCookieConsent();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
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
              Bond Health enables hyper-accurate clinical trial patient recruitment using AI.
            </p>
            <div className="space-y-3">
              <button
                onClick={openDemoModal}
                className="flex items-center gap-2 text-bond-primary hover:text-bond-primary/80 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Contact us
              </button>
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
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href={trustCenterHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 px-4 py-3 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <Image
                src="/images/hipaa-compliant-badge.svg"
                alt="HIPAA Compliant"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-left">
                <span className="block text-sm font-semibold text-gray-900">HIPAA Compliant</span>
                <span className="block text-xs text-gray-500">View Vanta Trust Center</span>
              </span>
            </a>
          </div>

          {/* Links Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
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
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <button onClick={reopenBanner} className="hover:text-gray-900 transition-colors">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
