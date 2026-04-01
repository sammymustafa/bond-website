"use client";

import { ReactNode } from "react";
import { DemoModalProvider } from "@/context/DemoModalContext";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsLoader from "@/components/AnalyticsLoader";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <CookieConsentProvider>
      <DemoModalProvider>
        {children}
        <CookieConsent />
        <AnalyticsLoader />
      </DemoModalProvider>
    </CookieConsentProvider>
  );
}

