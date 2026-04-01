"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

export type ConsentStatus = "all" | "essential" | null;

interface CookieConsentContextType {
  consent: ConsentStatus;
  bannerVisible: boolean;
  acceptAll: () => void;
  acceptEssential: () => void;
  dismiss: () => void;
  reopenBanner: () => void;
}

const STORAGE_KEY = "bond_cookie_consent";

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

const noop = () => {};

const defaultValue: CookieConsentContextType = {
  consent: null,
  bannerVisible: false,
  acceptAll: noop,
  acceptEssential: noop,
  dismiss: noop,
  reopenBanner: noop,
};

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus;
    if (stored === "all" || stored === "essential") {
      setConsent(stored);
      setBannerVisible(false);
    } else {
      setBannerVisible(true);
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((value: ConsentStatus) => {
    if (value) localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setBannerVisible(false);
  }, []);

  const acceptAll = useCallback(() => persist("all"), [persist]);
  const acceptEssential = useCallback(() => persist("essential"), [persist]);
  const dismiss = useCallback(() => persist("essential"), [persist]);

  const reopenBanner = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConsent(null);
    setBannerVisible(true);
  }, []);

  const value = hydrated
    ? { consent, bannerVisible, acceptAll, acceptEssential, dismiss, reopenBanner }
    : defaultValue;

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
}
