"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 40px round buttons on phones (32px from sm), like the site's other buttons
const arrow =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-xs hover:bg-gray-50 disabled:opacity-40 sm:h-8 sm:w-8";

/**
 * Horizontal scroller for content tables. When the table is wider than the column, it says so above the table,
 * adds arrow buttons, and fades the edge that has more columns, so a table cut off at a column boundary does not
 * look complete. Narrow tables render as a plain bordered box. `stacked` tables are cards on phones, so the box
 * goes away there; `pinned` tables keep their first column in place, so there is no left fade to draw over it.
 */
export default function ScrollTable({
  columns,
  label,
  stacked = false,
  pinned = false,
  children,
}: {
  columns: number;
  label?: string;
  stacked?: boolean;
  pinned?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ overflow: false, atStart: true, atEnd: true });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setState({
        // A stacked table on a phone is visible-overflow cards, never a scroller
        overflow: getComputedStyle(el).overflowX !== "visible" && el.scrollWidth > el.clientWidth + 1,
        atStart: el.scrollLeft <= 1,
        atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
      });
    update();
    el.addEventListener("scroll", update, { passive: true });
    // The table too: it can widen after layout (a late font swap) without the scroller changing size
    const observer = new ResizeObserver(update);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);
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
              className={arrow}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={state.atEnd}
              aria-label="Scroll table right"
              className={arrow}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </span>
        </div>
      )}
      <div className="relative">
        <div
          ref={ref}
          className={`overflow-x-auto rounded-2xl border border-gray-200 bg-white ${
            stacked ? "max-sm:overflow-visible max-sm:rounded-none max-sm:border-0 max-sm:bg-transparent" : ""
          }`}
          {...(state.overflow ? { tabIndex: 0, role: "region", "aria-label": `${label ?? "Table"} (scrolls sideways)` } : {})}
        >
          {children}
        </div>
        {state.overflow && !state.atStart && !pinned && (
          <div aria-hidden className="pointer-events-none absolute inset-y-px left-px w-10 rounded-l-2xl bg-linear-to-r from-white to-transparent" />
        )}
        {state.overflow && !state.atEnd && (
          <div aria-hidden className="pointer-events-none absolute inset-y-px right-px w-10 rounded-r-2xl bg-linear-to-l from-white to-transparent" />
        )}
      </div>
    </>
  );
}
