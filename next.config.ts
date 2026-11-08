import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  async headers() {
    return [
      // HSTS: browsers always use HTTPS for bondtrials.com. No includeSubDomains, so other
      // subdomains (api, platform) keep their own settings.
      { source: "/:path*", headers: [{ key: "Strict-Transport-Security", value: "max-age=31536000" }] },
    ];
  },
  async redirects() {
    return [
      // www serves the same pages as the bare domain; send it to the canonical host.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bondtrials.com" }],
        destination: "https://bondtrials.com/:path*",
        permanent: true,
      },
      // Old template-era legal URLs that Google still shows; the pages moved.
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      // Glossary entries merged into the full guides, which rank for the same searches.
      { source: "/glossary/ctms", destination: "/guides/what-is-a-ctms", permanent: true },
      { source: "/glossary/site-feasibility", destination: "/guides/site-feasibility", permanent: true },
      // Old landing page that Google still requests; ads and lead follow-up now live on /clinical-trial-ads.
      { source: "/landing/lead-generation", destination: "/clinical-trial-ads", permanent: true },
      // Every "Book a demo" button opens the Cal.com scheduler directly (demoHref in src/content/nav.ts),
      // so the old booking page sends visitors and search results there too.
      { source: "/book-a-demo", destination: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", permanent: true },
      // Old contact page that AI search indexes still return; the contact form is on the homepage.
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
