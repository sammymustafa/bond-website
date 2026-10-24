"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useSyncExternalStore,
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

// The saved choice lives in localStorage, read through useSyncExternalStore. On the server, and while the page
// hydrates, the snapshot is "server", so the first render matches the server HTML (no banner).
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readStored(): ConsentStatus {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "all" || value === "essential" ? value : null;
  } catch {
    return null;
  }
}

function writeStored(value: ConsentStatus) {
  try {
    if (value) localStorage.setItem(STORAGE_KEY, value);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage blocked: the choice lasts for this page only.
  }
  listeners.forEach((listener) => listener());
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribe, readStored, () => "server" as const);
  // Whether analytics may have loaded on this page, either from an earlier "Accept All" or one made here.
  const analyticsMayBeLoaded = useRef(false);
  const checkedOnLoad = useRef(false);

  useEffect(() => {
    if (stored === "server" || checkedOnLoad.current) return;
    checkedOnLoad.current = true;
    if (stored === "all") analyticsMayBeLoaded.current = true;
    // Without "Accept All", remove any tracking cookies, including ones a script rewrote as the page unloaded after
    // consent was withdrawn, or ones left from an earlier visit.
    else clearTrackingCookies();
  }, [stored]);

  const persist = useCallback((value: ConsentStatus) => {
    // Scripts that already ran cannot be unloaded, so withdrawing consent clears their cookies and reloads the page
    // without them.
    if (value !== "all" && analyticsMayBeLoaded.current) {
      writeStored(value);
      clearTrackingCookies();
      window.location.reload();
      return;
    }
    if (value === "all") analyticsMayBeLoaded.current = true;
    writeStored(value);
  }, []);

  const acceptAll = useCallback(() => persist("all"), [persist]);
  const acceptEssential = useCallback(() => persist("essential"), [persist]);
  const dismiss = useCallback(() => persist("essential"), [persist]);

  const reopenBanner = useCallback(() => writeStored(null), []);

  const value: CookieConsentContextType = {
    consent: stored === "server" ? null : stored,
    bannerVisible: stored === null,
    acceptAll,
    acceptEssential,
    dismiss,
    reopenBanner,
  };

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
