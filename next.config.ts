import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  async redirects() {
    return [
      // Old landing page that Google still requests; ads and lead follow-up now live on /engage.
      { source: "/landing/lead-generation", destination: "/engage", permanent: true },
      // Every "Book a demo" button opens the Cal.com scheduler directly (demoHref in src/content/nav.ts),
      // so the old booking page sends visitors and search results there too.
      { source: "/book-a-demo", destination: "https://bond-health.cal.com/rishabh-goel/bond-health-demo?overlayCalendar=true", permanent: true },
    ];
  },
};

export default nextConfig;
