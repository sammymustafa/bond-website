"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Horizontal scroller for content tables. When the table is wider than the column, it says so above the table,
 * adds arrow buttons, and fades the edge that has more columns, so a table cut off at a column boundary does not
 * look complete. Narrow tables render as a plain bordered box.
 */
export default function ScrollTable({ columns, label, children }: { columns: number; label?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ overflow: false, atStart: true, atEnd: true });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setState({
        overflow: el.scrollWidth > el.clientWidth + 1,
        atStart: el.scrollLeft <= 1,
        atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
      });
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: direction * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <>
      {state.overflow && (
        <div className="no-print mb-2 flex items-center justify-between gap-3 text-xs text-gray-500">
          <span>This table has {columns} columns. Scroll sideways to see them all.</span>
          <span className="flex gap-1">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={state.atStart}
              aria-label="Scroll table left"
              className="rounded-lg border border-gray-200 p-1.5 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={state.atEnd}
              aria-label="Scroll table right"
              className="rounded-lg border border-gray-200 p-1.5 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </span>
        </div>
      )}
      <div className="relative">
        <div
          ref={ref}
          className="overflow-x-auto rounded-2xl border border-gray-200"
          {...(state.overflow ? { tabIndex: 0, role: "region", "aria-label": `${label ?? "Table"} (scrolls sideways)` } : {})}
        >
          {children}
        </div>
        {state.overflow && !state.atStart && (
          <div aria-hidden className="pointer-events-none absolute inset-y-px left-px w-10 rounded-l-2xl bg-gradient-to-r from-white to-transparent" />
        )}
        {state.overflow && !state.atEnd && (
          <div aria-hidden className="pointer-events-none absolute inset-y-px right-px w-10 rounded-r-2xl bg-gradient-to-l from-white to-transparent" />
        )}
      </div>
    </>
  );
}
