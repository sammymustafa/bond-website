"use client";

import { ReactNode } from "react";
import { DemoModalProvider } from "@/context/DemoModalContext";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import LeadSourceTracker from "@/components/LeadSourceTracker";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <CookieConsentProvider>
      <DemoModalProvider>
        {children}
        <CookieConsent />
        <AnalyticsLoader />
        {/* Not tied to the cookie banner: it keeps no identifier, and its fields leave the browser only with a lead */}
        <LeadSourceTracker />
      </DemoModalProvider>
    </CookieConsentProvider>
  );
}

