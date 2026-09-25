"use client";

import { useEffect, useRef, useState } from "react";
import { calComHref } from "@/content/nav";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & { loaded?: boolean; ns?: Record<string, unknown>; q?: unknown[] };
  }
}

const CAL_LINK = "rishabhgoel/bond-health-demo";

/**
 * Embeds the Cal.com booking page inline using Cal.com's official embed
 * script. Falls back to a plain link if the script does not load.
 */
export default function CalEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const w = window;
    if (!w.Cal) {
      const q: unknown[] = [];
      const cal = ((...args: unknown[]) => {
        q.push(args);
      }) as NonNullable<Window["Cal"]>;
      cal.q = q;
      w.Cal = cal;
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onerror = () => setFailed(true);
      document.head.appendChild(script);
    }
    w.Cal!("init", { origin: "https://cal.com" });
    w.Cal!("inline", {
      elementOrSelector: el,
      calLink: CAL_LINK,
      layout: "month_view",
      config: { theme: "light" },
    });
    w.Cal!("ui", { hideEventTypeDetails: false, layout: "month_view" });
    const timer = window.setTimeout(() => {
      if (el.childElementCount === 0) setFailed(true);
    }, 8000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div>
      <div ref={ref} className="min-h-[560px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white" />
      {failed && (
        <p className="mt-4 text-sm text-gray-600">
          The calendar did not load.{" "}
          <a href={calComHref} target="_blank" rel="noopener noreferrer" className="font-medium text-bond-primary hover:underline">
            Open the booking page in a new tab
          </a>
          .
        </p>
      )}
    </div>
  );
}
