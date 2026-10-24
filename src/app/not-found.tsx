import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

// Shown for any URL without a page, and wherever a route calls notFound(). flex-1 on the header keeps the
// footer at the bottom of the screen on tall viewports.
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <header className="flex-1 bg-gradient-hero pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="container-lg px-4 sm:px-6">
          <p className="eyebrow mb-3">404</p>
          <h1 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
            Page not found
          </h1>
          <p className="body-lg mt-5 max-w-3xl">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Home
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/blog" className="btn-secondary">
              Blog
            </Link>
            <Link href="/glossary" className="btn-secondary">
              Glossary
            </Link>
          </div>
        </div>
      </header>
      <Footer />
    </main>
  );
}
