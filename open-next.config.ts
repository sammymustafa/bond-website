import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every page is prerendered at build time (generateStaticParams with dynamicParams = false)
// and nothing revalidates, so the prerendered HTML, RSC payloads and segment prefetches are
// read straight from the Worker's static assets. A rebuild is the only way content changes;
// the scheduled-publish workflow triggers one each morning.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  // Answer prerendered pages from the cache before loading the Next.js server.
  enableCacheInterception: true,
});
