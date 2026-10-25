import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  async redirects() {
    return [
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
