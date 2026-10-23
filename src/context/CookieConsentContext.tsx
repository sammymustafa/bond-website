"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
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

/** First-party cookies set by Google Analytics, Microsoft Clarity, RB2B and the LiveIntent script RB2B loads. */
const TRACKING_COOKIE_PREFIXES = ["_ga", "_gid", "_gat", "_clck", "_clsk", "_reb2b", "_li_", "_lc2_"];

function clearTrackingCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!TRACKING_COOKIE_PREFIXES.some((prefix) => name.startsWith(prefix))) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

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
  // Whether analytics may have loaded on this page, either from an earlier "Accept All" or one made here.
  const analyticsMayBeLoaded = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus;
    if (stored === "all") analyticsMayBeLoaded.current = true;
    // Without "Accept All", remove any tracking cookies, including ones a script rewrote as the page unloaded after
    // consent was withdrawn, or ones left from an earlier visit.
    else clearTrackingCookies();
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
    // Scripts that already ran cannot be unloaded, so withdrawing consent clears their cookies and reloads the page
    // without them.
    if (value !== "all" && analyticsMayBeLoaded.current) {
      clearTrackingCookies();
      window.location.reload();
      return;
    }
    if (value === "all") analyticsMayBeLoaded.current = true;
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
