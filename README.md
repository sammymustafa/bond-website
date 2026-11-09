# Bond Health Website

Marketing site for Bond Health. Live at **[bondtrials.com](https://bondtrials.com)**.

## Stack

- **Next.js 16** (App Router; builds with Turbopack) + **React 19**
- **TypeScript 6**. TypeScript 7 builds the site, but `typescript-eslint` (used by
  the lint config) does not support it yet.
- **Tailwind CSS 4**. The theme lives in `src/app/globals.css` (`@theme`); there is
  no `tailwind.config` file.
- `lucide-react` (icons)
- **Cloudflare Workers**, through the OpenNext adapter (`@opennextjs/cloudflare`).
  Config lives in `wrangler.jsonc` and `open-next.config.ts`.

Tailwind 4 puts its utilities in a CSS cascade layer, and any rule outside a layer
beats every layered rule. So element-level rules in `globals.css` (`*`, `html`,
`body` and the like) must stay inside `@layer base`, or they override utilities:
an unlayered `* { margin: 0; padding: 0 }` once removed every spacing class.

## Local development

Requires **Node 22** (pinned in `.node-version`; Next.js 16 needs 20.9 or later).

```bash
npm ci        # install exactly what package-lock.json specifies
npm run dev   # http://localhost:3000
```

`npm run dev` runs plain Next.js in Node. To check a change in the Cloudflare
Workers runtime (workerd) the site runs on in production, use `npm run preview`
(http://localhost:8787). It builds the Worker first, so it takes about a minute.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Next.js production build (also typechecks) |
| `npm start` | Serve an existing `next build` in Node |
| `npm run build:worker` | `next build`, then turn it into the Cloudflare Worker in `.open-next/` (what Workers Builds and CI run) |
| `npm run preview` | Build the Worker and serve it locally in workerd |
| `npm run deploy` | Build the Worker and deploy it to production; needs `wrangler login` (normally Workers Builds deploys, not a laptop) |
| `npm run upload` | Build the Worker and upload a version with a preview URL, without sending it traffic |
| `npm run lint` | ESLint with Next's core-web-vitals and TypeScript rules (`eslint.config.mjs`); CI runs it |

## Content pages

Everything under `/compare`, `/for`, `/integrations`, `/guides`, `/templates`,
`/calculators`, `/clinical-trial-recruitment`, the therapeutic-area pages, `/faq`, `/report` and
`/blog/*` is data, not JSX. Each page is one file in `src/content/pages/` that
default-exports a `SeoPage` (see `src/content/types.ts`) and is rendered by
`src/app/[...slug]/page.tsx` through `src/components/seo/SeoArticle.tsx`.
Glossary terms live in `src/content/glossary.ts`. Menus and footer links come
from `src/content/nav.ts`.

The `/calculators` pages use a `calculator` block (`{ type: "calculator", kind }`),
rendered by the client component `src/components/seo/Calculator.tsx`, which holds
each calculator's inputs, formula and labels. Write the formula into the page text
too, so it is there for search engines and before the component hydrates.

Glossary terms can carry a short `faq` list, rendered with FAQPage schema like
the content pages. Files in `src/content/pages/` whose names start with `_` are
shared helpers, not pages, and `gen:registry` skips them (for example
`compare/_deep6-sources.ts`, the Deep 6 AI and Tempus sources the "Deep 6 AI vs"
pages pick from).

Every page also gets a "Why is Bond the best clinical trial recruitment
platform?" section built from `src/content/whyBond.ts` (content pages through
`withWhyBond`, the homepage and hand-built pages through
`src/components/WhyBond.tsx`). Edit the reasons there, not on individual pages.
A page that defines its own section with id `why-bond`, as the comparison pages
do, keeps its own.

| Command | What it does |
| --- | --- |
| `npm run gen:registry` | Rebuild `src/content/registry.ts` after adding or removing a page file |
| `npm run validate` | Enforce the content rules (below); CI runs this |
| `npm run gen:docx` | Regenerate the Word downloads for template pages into `public/downloads/`; run it after editing a template page |
| `npm run gen:report-pdf` | Print `/report` to `public/downloads/state-of-trial-enrollment-2026.pdf` (run `npm run build` first; needs Google Chrome) |
| `npm run indexnow -- /path …` | Tell Bing and other IndexNow engines which live URLs changed, after a deploy (`--sitemap` sends every URL, `--since=N` sends sitemap URLs with lastmod in the last N days, `--dry-run` only lists them); the key file is `public/7deee7c933c9b7e8524da75ede32aefb.txt`. The IndexNow workflow runs `--since=1` after every production deploy and `--since=0` at 11:30 UTC, so bump `lastUpdated` when you edit a page |

Rules the validator enforces: every section heading is a question; every block
that states a number carries a `{{cite:source-id}}` that resolves to the page's
sources; comparison and pricing pages contain a table; guides and glossary
terms link to a product page; comparison pages link to `/pricing` and
`/security`; internal links resolve; `lastUpdated` is an ISO date. Inline text
supports `**bold**`, `` `code` ``, `[label](href)` and `{{cite:id}}` only.

`src/content/data/ctgov-geo.json` holds recruiting-trial counts pulled from the
ClinicalTrials.gov API (query date inside the file). Refresh it with
`python3 scripts/fetch-ctgov.py` when the location pages need current counts.

City pages (Boston, New York City, Philadelphia, Los Angeles, San Francisco Bay
Area, Seattle) use a radius search and keep their own query date. Refresh only
those with `python3 scripts/fetch-ctgov.py --only boston,seattle` (any city keys);
a full run keeps the city entries.

The sitemap is generated by `src/app/sitemap.ts` from the published pages. The
hand-built pages (`/`, `/careers`, `/newsletter`, `/privacy-policy`,
`/terms-of-service`) take their dates from `HAND_BUILT_UPDATED` in that file, so
bump the date there when you change one.

Other shared content:

- **Book a demo:** every demo button uses `demoHref` from `src/content/nav.ts`,
  which opens the Cal.com scheduler. The old `/book-a-demo` page redirects there
  (`next.config.ts`).
- **Compliance:** SOC 2 and ISO 27001 wording, certificate details and badges live
  in `src/content/compliance.ts`.
- **Testimonials:** drafted in `src/content/testimonials.ts` and hidden until the
  people quoted approve the wording.

If the repo sits in a synced folder such as Dropbox, run builds, `npm run preview`
and `gen:docx` in a copy outside it (a fresh `git clone` in `/tmp` works): sync can
leave stale `.next` or `.open-next` output, and `gen:docx` can hang.

### Scheduled blog posts

A blog post whose `blog.date` is in the future is left out of routes, the blog
index and the sitemap until a build on or after that date
(`src/content/published.ts`; dates are UTC). `.github/workflows/scheduled-publish.yml`
triggers a rebuild every morning through a Workers Builds deploy hook stored in
the `CF_WORKERS_DEPLOY_HOOK` repository secret, so each post goes live on its date.
Without the secret, scheduled posts go live on the next deploy instead. The
validator rejects a link to a post that is scheduled after the linking page goes
live.

## Analytics, consent and forms

- **Cookie consent:** `src/components/CookieConsent.tsx` and
  `src/context/CookieConsentContext.tsx`. The choice is stored in `localStorage`
  (`bond_cookie_consent`). Choosing "Essential Only" after "Accept All" clears the
  tracking cookies and reloads the page; without "Accept All", leftover tracking
  cookies are cleared on every load.
- **Tracking scripts:** `src/components/AnalyticsLoader.tsx` loads Google
  Analytics 4, Microsoft Clarity and RB2B only after "Accept All". RB2B is
  skipped when the browser sends a Global Privacy Control signal. Keep
  `window.gtag` pushing `arguments`: gtag.js ignores plain arrays, and nothing
  reaches Google Analytics.
- **Cloudflare Web Analytics:** injected by Cloudflare on every page, whatever the
  visitor's cookie choice. It is cookieless.
- **Privacy policy:** `src/app/privacy-policy/page.tsx` lists every analytics and
  visitor-identification tool. Update it whenever you add or remove one.
- **Forms:** the forms post to Formspree (Free plan: 50 submissions a month across
  all forms; past that, Formspree holds submissions and sends no email or Slack post).
  - Contact form: `mwvpokad`. Each submission emails hello@bondtrials.com and, through
    Formspree's Slack plugin (form > Workflow), posts to the private Slack channel
    `#website-demo-leads` within a second or so.
  - Newsletter: `moeeovol`, kept apart so signups don't post to the Slack lead alert.
  - Job applications: `xeeogqyz`.
  - Talent network: `mojvdqgn`.
  - The contact form requires "How did you hear about us?" (`heard_about`), and
    when "Other" is picked, a required `heard_about_other`. The options live in
    `src/content/leadSources.ts` and match the Cal.com demo event's booking question
    word for word; change both together.
- **Dialogs:** the contact form, the careers forms and the mobile menu share
  `src/components/useDialog.ts`. It closes them on Escape, moves focus in and
  back out, keeps Tab inside, and stops the page behind from scrolling.

## Search and AI-answer audit

`scripts/geo/` holds scripts that pull Search Console data, ask ChatGPT, Claude
and Gemini the questions buyers ask, and score every page for search and AI
answers (`npm run geo:check`, `geo:queries`, `geo:citations`, `geo:pages`,
`geo:match`, `geo:score`, `geo:plan`). Setup, API keys (in `.env.local`) and
Search Console access are described in `scripts/geo/README.md`. Reports go to
`reports/geo/<date>/`, which git ignores. Nothing on the site changes until a
suggestion is applied to `src/content` by hand.

## Deployment

Hosted on **Cloudflare Workers** (Worker `bond-website`), built with the OpenNext
adapter. **Workers Builds** is connected to this GitHub repo and runs
`npx opennextjs-cloudflare build`, then `npx opennextjs-cloudflare deploy`.

- **`main` is production.** Anything merged to `main` deploys to bondtrials.com,
  usually within a few minutes.
- **Other branches get a preview.** Workers Builds uploads a version for each push
  (`npx opennextjs-cloudflare upload`) and posts its preview URL on the PR.

Normally nothing deploys from a local machine; merging to `main` is what ships.

How the Worker serves the site:

- **Every page is prerendered.** The build writes each page's HTML, RSC payload and
  segment prefetches into the Worker's static assets (`open-next.config.ts` uses the
  read-only static-assets cache), and the Worker answers from there. Nothing
  revalidates at runtime, so content changes only with a rebuild.
- **Static files** in `public/` and `/_next/static` are served without running the
  Worker. Their headers (HSTS, a one-year immutable cache for `/_next/static`) come
  from `public/_headers`, which Workers reads and does not serve. Pages, redirects
  and 404s come from the Worker and get their headers from `next.config.ts`.
- **Redirects** live in `next.config.ts`. www to the bare domain is also a Cloudflare
  redirect rule on the zone, which runs before the Worker, so static files on www
  redirect too.
- **`next/image`** resizes and converts to WebP through the Cloudflare Images binding
  (`IMAGES` in `wrangler.jsonc`). It is billed per unique transformation (5,000 a month
  free; the site uses about 35). Without the binding, OpenNext serves the original file.
- **Custom domains** `bondtrials.com` and `www.bondtrials.com` are attached to the
  Worker in the dashboard (Worker > Domains), not in `wrangler.jsonc`.

The Worker bundle (the Next.js server plus every content page) is about 3 MB
gzipped; `wrangler deploy --dry-run` prints the exact size, and CI runs it.

## Branching

`main` is the single source of truth, and work reaches it only through pull requests.

- **One personal branch (the current setup).** Rishabh works on `rishabh/dev` and
  opens a PR from it whenever a batch of work is ready. Everything on the branch
  ships together, so open the PR only when nothing on it is unfinished. After the
  PR merges, keep working on the same branch. If someone else's work has landed
  on `main`, bring it in with `git pull origin main` before the next PR.
- **A branch per change** also works: start from current `main`
  (`git checkout main && git pull && git checkout -b your-branch-name`), commit,
  push and open a PR.

Either way, **never merge into `main` locally.** Let the PR do it. Merging locally
*and* via PR creates two merge commits for the same work and permanently diverges
history.

## CI

`.github/workflows/ci.yml` runs on every PR and every push to `main`:
`npm ci` → `tsc --noEmit` → `npm run lint` → `npm run validate` →
`npm run build:worker` → `wrangler deploy --dry-run` (bundles the Worker without
uploading it).

A dependency conflict, type error, lint error, content-rule violation or a Worker
that no longer bundles fails the PR instead of the deploy.
