"use client";

import { useEffect, useRef, useState } from "react";
import { useCookieConsent } from "@/context/CookieConsentContext";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
  const { bannerVisible, acceptAll, acceptEssential, dismiss } =
    useCookieConsent();
  const bannerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [bannerVisible]);

  if (!bannerVisible) return null;

  // z-40 keeps the banner under the contact form (z-50) and the mobile menu (z-60), so it never covers their buttons.
  return (
    <>
    {/* Space at the end of the page, so the banner never hides the footer's last row */}
    <div aria-hidden className="no-print" style={{ height }} />
    <div role="region" aria-label="Cookie consent" className="no-print fixed bottom-0 inset-x-0 z-40 pointer-events-none">
      <div ref={bannerRef} className="pointer-events-auto bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to improve your experience and analyze site
              traffic. If you choose Accept All, our visitor-identification
              partner may also link your visit to your work email or online
              profile so we can follow up. See our{" "}
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
                className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Dismiss cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
