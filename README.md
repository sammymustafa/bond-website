# Bond Health Website

Marketing site for Bond Health. Live at **[bondtrials.com](https://bondtrials.com)**.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS**
- `framer-motion` (animation), `lucide-react` (icons), `@fontsource/space-grotesk` (type)

## Local development

Requires **Node 22**.

```bash
npm ci        # install exactly what package-lock.json specifies
npm run dev   # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (also typechecks) |
| `npm start` | Serve an existing production build |
| `npm run lint` | ⚠️ Not usable yet, see below |

`npm run lint` runs `next lint`, which is **deprecated and removed in Next.js 16**.
There is also no ESLint config file in the repo, so it prompts interactively to
create one and cannot run unattended. Migrate with:

```bash
npx @next/codemod@canary next-lint-to-eslint-cli .
```

Until then CI runs `tsc --noEmit` and `next build` instead, which is why linting
is absent from the pipeline.

## Deployment

Hosted on **Vercel**.

- **`main` is production.** Anything merged to `main` deploys to bondtrials.com.
- **Pull requests get their own preview URL.** Use it to review before merging.

Nothing deploys from a local machine; pushing to `main` is what ships.

## Branching

`main` is the single source of truth. Work happens on a branch and lands via PR:

```bash
git checkout main
git pull                          # always start from current main
git checkout -b your-branch-name
# ...commit your work...
git push -u origin your-branch-name
```

Then open a PR into `main`. Two rules that prevent most pain:

- **Never merge into `main` locally.** Let the PR do it, then `git checkout main && git pull`.
  Merging locally *and* via PR creates two merge commits for the same work and
  permanently diverges history.
- **Don't reuse one long-lived branch for unrelated work.** Everything on a branch
  ships together, so unfinished work blocks anything urgent sitting next to it.

## CI

`.github/workflows/ci.yml` runs on every PR and every push to `main`:
`npm ci` → `tsc --noEmit` → `npm run build`.

A dependency conflict or type error fails the PR instead of the deploy.
