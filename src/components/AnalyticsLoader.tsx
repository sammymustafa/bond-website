"use client";

import { useEffect, useRef } from "react";
import { useCookieConsent } from "@/context/CookieConsentContext";

const GA_MEASUREMENT_ID = "G-3XBD4S2Z1Q";
const CLARITY_PROJECT_ID = "w53jc3tqup";
const RB2B_KEY = "QO92DHZ7JPN7";

function loadScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
    reb2b?: { loaded: boolean };
  }
}

function initGA4() {
  window.dataLayer = window.dataLayer || [];
  // gtag.js only processes Arguments objects from the dataLayer; pushing a plain array (from rest parameters)
  // is ignored, and no data reaches Google Analytics.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
  });
}

function initClarity() {
  window.clarity =
    window.clarity ||
    function (...args: unknown[]) {
      (window.clarity as unknown as { q: unknown[][] }).q =
        (window.clarity as unknown as { q: unknown[][] }).q || [];
      (window.clarity as unknown as { q: unknown[][] }).q.push(args);
    };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  script.id = "clarity-script";
  if (!document.getElementById("clarity-script")) {
    document.head.appendChild(script);
  }
}

/**
 * RB2B visitor identification, described in section 1.3 of the privacy policy. Like the tools above it
 * loads only after "Accept All", and it is skipped when the browser sends a Global Privacy Control signal,
 * because some state laws may treat sharing visits with RB2B as a "sale" or "sharing" of personal information.
 */
function initRB2B() {
  if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) return;
  if (window.reb2b) return;
  window.reb2b = { loaded: true };
  const script = document.createElement("script");
  script.async = true;
  script.id = "rb2b-script";
  script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${RB2B_KEY}/${RB2B_KEY}.js.gz`;
  document.head.appendChild(script);
}

export default function AnalyticsLoader() {
  const { consent } = useCookieConsent();
  const initialized = useRef(false);

  useEffect(() => {
    if (consent !== "all" || initialized.current) return;
    initialized.current = true;

    loadScript(
      `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
      "ga4-script"
    ).then(initGA4);

    initClarity();
    initRB2B();
  }, [consent]);

  return null;
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}
