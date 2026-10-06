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
    ];
  },
};

export default nextConfig;
