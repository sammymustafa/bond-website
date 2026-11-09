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
      // There is no separate about page; "What is Bond Health?" covers the company and the product.
      { source: "/about", destination: "/what-is-bond-health", permanent: true },
      { source: "/about-us", destination: "/what-is-bond-health", permanent: true },
      // Sitemap names from the old Astro site, which crawlers still request; the sitemap is /sitemap.xml.
      { source: "/sitemap-index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap-0.xml", destination: "/sitemap.xml", permanent: true },
      // No news or press page; the blog is where announcements go.
      { source: "/news", destination: "/blog", permanent: true },
      { source: "/press", destination: "/blog", permanent: true },
      // Icons and the share image from the old Astro site, which Meta's crawler still requests.
      // The old section images have no counterpart, so they stay 404.
      { source: "/_astro/:file(favicon\\..+)", destination: "/favicon.ico", permanent: true },
      { source: "/_astro/:file(apple-touch-icon\\..+)", destination: "/apple-touch-icon.png", permanent: true },
      { source: "/_astro/:file(preview\\..+)", destination: "/images/og-image.png", permanent: true },
    ];
  },
};

export default nextConfig;
