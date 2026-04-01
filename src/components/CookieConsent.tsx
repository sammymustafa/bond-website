"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
  const { bannerVisible, acceptAll, acceptEssential, dismiss } =
    useCookieConsent();

  if (!bannerVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
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

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-bond-primary text-white text-sm font-medium rounded-lg hover:bg-bond-primary-dark transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Essential Only
                </button>
              </div>
            </div>

            <button
              onClick={dismiss}
              className="flex-shrink-0 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Dismiss cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
