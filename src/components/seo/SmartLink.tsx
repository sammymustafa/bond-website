import Link from "next/link";
import type { ReactNode } from "react";

const FILE_RE = /\.(pdf|docx?|xlsx?|csv|zip)(\?.*)?$/i;

/**
 * Internal page links use next/link. Downloadable files and external URLs use a
 * plain anchor, so the browser fetches the file instead of attempting a
 * client-side page transition.
 */
export default function SmartLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  if (FILE_RE.test(href)) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
