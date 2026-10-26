"use client";

import { useEffect } from "react";

/**
 * Marks the table-of-contents links (`a[data-toc="<id>"]`, in the desktop sidebar and the phone contents list) for
 * the section being read with `data-active`, and keeps the active link in view inside the sidebar's scrolling list
 * (`[data-toc-scroll]`). The section being read is the last one whose top has passed just under the fixed nav.
 */
export default function TocSpy({ ids }: { ids: string[] }) {
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let active: string | null = null;
    const setActive = (id: string | null) => {
      if (id === active) return;
      document.querySelectorAll("a[data-toc][data-active]").forEach((a) => a.removeAttribute("data-active"));
      active = id;
      if (!id) return;
      document.querySelectorAll<HTMLElement>(`a[data-toc="${id}"]`).forEach((a) => {
        a.setAttribute("data-active", "");
        // Scroll only the list, never the page, and only while the list is showing
        const list = a.closest<HTMLElement>("[data-toc-scroll]");
        if (!list || list.getClientRects().length === 0) return;
        const l = list.getBoundingClientRect();
        const r = a.getBoundingClientRect();
        if (r.top < l.top) list.scrollTop -= l.top - r.top + 8;
        else if (r.bottom > l.bottom - 24) list.scrollTop += r.bottom - l.bottom + 24;
      });
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      let id: string | null = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top > 140) break;
        id = s.id;
      }
      setActive(id);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  return null;
}
