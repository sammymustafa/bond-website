"use client";

import { useEffect, useRef } from "react";
import { useCookieConsent } from "@/context/CookieConsentContext";

const GA_MEASUREMENT_ID = "G-3XBD4S2Z1Q";
const CLARITY_PROJECT_ID = "w53jc3tqup";

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
  }
}

function initGA4() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
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
