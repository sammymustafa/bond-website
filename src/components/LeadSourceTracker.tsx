"use client";

import { useEffect } from "react";
import { getLeadSource, isCalComLink, recordLanding, withCalComMetadata } from "./leadSource";

// Events that come before a link is followed, opened in a new tab or copied: mouse, touch, keyboard (Enter
// fires click), middle click and the context menu.
const LINK_EVENTS = ["pointerdown", "click", "auxclick", "contextmenu"] as const;

/**
 * Mounted once for the whole site (ClientWrapper). Records the landing page and referrer on the first page
 * view of the session, and adds the lead-source fields to a Cal.com booking link the moment it is used, so
 * bookings say which page they came from. The links are rewritten on use rather than at render because
 * they appear on hundreds of pages, many as plain text links in page content. Renders nothing.
 */
export default function LeadSourceTracker() {
  useEffect(() => {
    recordLanding();

    const decorateCalComLink = (event: Event) => {
      try {
        const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
        if (!(link instanceof HTMLAnchorElement)) return;
        const url = new URL(link.href);
        if (!isCalComLink(url)) return;
        // The browser follows the href as it is once the event finishes, so this changes where it goes.
        link.href = withCalComMetadata(url, getLeadSource());
      } catch {
        // Leave the link as it was; the booking still works without the fields.
      }
    };

    for (const type of LINK_EVENTS) document.addEventListener(type, decorateCalComLink, { capture: true });
    return () => {
      for (const type of LINK_EVENTS) document.removeEventListener(type, decorateCalComLink, { capture: true });
    };
  }, []);

  return null;
}
