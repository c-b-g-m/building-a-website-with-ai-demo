# Bayou Brew Coffee — Website

The website for Bayou Brew Coffee, our coffee shop in the Houston Heights.

Rebuilt as a clean **Astro** site, hosted on **Vercel**, that actually sounds like us.
`brand-kit.md` is the source of truth for our colors, type, voice, and layout —
anything new follows it. `CLAUDE.md` has the project conventions and the checklist
we run before every change.

## What's here
- `src/pages/` — the live site: `index.astro`, `about.astro`, `contact.astro`, `pricing.astro`
- `src/layouts/Layout.astro` — shared page shell (head, skip link, header, footer)
- `src/components/` — shared `Header.astro` and `Footer.astro` (nav lives here, not per page)
- `src/styles/global.css` — every value traced to `brand-kit.md`; no new tokens
- `brand-kit.md` — the brand contract (read this first)
- `CLAUDE.md` — how we work on this repo
- `index.html`, `about.html`, `contact.html` — the **old scraped site**, kept as
  before-state reference only. Not part of the build; Astro never serves them.

## Run it locally
```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # serve the production build
```
Prerequisite: Node.js 18+ (built and tested on Node 24).

## How it ships
Hosted on Vercel — Vercel auto-detects Astro, builds to static output, and serves
`dist/`. Every pull request gets a preview URL, and `main` deploys automatically.
Build the new pages in Astro, open a PR, check the preview, then merge.
