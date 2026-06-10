# CLAUDE.md — Bayou Brew Coffee

## What this project is
The website for Bayou Brew Coffee, a small Houston coffee shop. The repo currently holds the **raw scraped pages** from the old site (`index.html`, `about.html`, `contact.html` — off-brand copy, inline styles). The goal is to **rebuild it as an Astro site, deployed on Vercel**, fully compliant with `brand-kit.md`.

## Tech stack and why
- **Astro** — A content-driven brochure site with a handful of pages. Astro gives fast static output, component reuse (shared nav/footer/layout), and low complexity — no heavy framework runtime.
- **Static output** — There's no app surface here; render to static HTML at build time. A few inline scripts for the contact form is the ceiling.
- **Vercel hosting** — Auto-detects Astro, auto-deploys from `main`, preview URLs on every PR. Free tier covers a single-location coffee shop forever.
- **GitHub for version control** — `main` is protected. Feature branches + PRs for every change.

## File and folder conventions
- Astro pages live in `src/pages/` — `index.astro`, `about.astro`, `contact.astro`, `pricing.astro` (when added). One route per file.
- Shared chrome (nav, footer) lives in a layout under `src/layouts/` — don't duplicate the nav across pages.
- Global styles under `src/styles/`, driven by the `brand-kit.md` tokens; component-scoped styles where local.
- Brand reference at `brand-kit.md` (this file's sibling).
- The raw scraped `*.html` at the repo root are the **source material** being converted — not the final pages.

## Brand rules (do not violate)
- Colors, fonts, and voice are defined in `brand-kit.md` — read it before generating any new page
- Never introduce a new font, a new accent color, or a new layout primitive without explicit approval
- Coffee tier names: `Drip`, `Pour-Over`, `Reserve` — exact capitalization
- Coffee tier prices: $4 / $7 / $12 — never change

## What never changes without approval
- Color tokens in `brand-kit.md`
- Type stack (font families and weights) in `brand-kit.md`
- The header navigation structure
- The footer structure (address, hours, social)
- The voice — friendly Houston neighborhood, never corporate

## Pre-commit checklist
- [ ] All new pages use the shared layout/nav (don't fork the nav)
- [ ] All new copy reads in the voice from `brand-kit.md`
- [ ] No inline `style=""` — use global or component-scoped styles
- [ ] All images have `alt` text
- [ ] Page added to `sitemap.xml` if one exists
- [ ] Build-log updated at `docs/build-log.md`

## What to do when adding a page
1. Read `brand-kit.md` for tokens and voice
2. Reuse the shared layout in `src/layouts/` (and an existing page in `src/pages/` for structure)
3. Create on a feature branch: `feat/<page-name>`
4. Add the route to the shared nav (in the layout — don't fork the nav per page)
5. Open a PR. Do not merge without clicking the Vercel preview URL.

## Known gotchas
- The scraped source pages (`index.html`, `about.html`, `contact.html`) use inline styles and off-brand copy throughout — that's the raw "before" state. The Astro rebuild replaces them with brand-kit-compliant components; don't carry the inline styles or the old copy forward.
- The contact form posts to `mailto:` — there's no backend yet. Don't pretend there's a real form handler.
