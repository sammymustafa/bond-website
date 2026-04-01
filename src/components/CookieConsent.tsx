"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
  const { bannerVisible, acceptAll, acceptEssential, dismiss } =
    useCookieConsent();

  if (!bannerVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] pointer-events-none">
      <div className="pointer-events-auto bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to improve your experience and analyze site
              traffic. See our{" "}
              <Link
                href="/privacy-policy"
                className="text-bond-primary hover:underline font-medium"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={acceptAll}
                className="px-5 py-2 bg-bond-primary text-white text-sm font-medium rounded-lg hover:bg-bond-primary-dark transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={acceptEssential}
                className="px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={dismiss}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Dismiss cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
