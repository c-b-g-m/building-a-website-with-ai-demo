# CLAUDE.md — Bayou Brew Coffee

## What this project is
A static HTML site for Bayou Brew Coffee, a small Houston coffee shop. No build step, no framework — just `.html`, `.css`, and a few image files. Hosted on Vercel for the preview-deploy ergonomics.

## Tech stack and why
- **HTML + CSS** — Site has 4-6 pages, content rarely changes. Every additional dependency would be a tax we don't pay yet.
- **No JavaScript framework** — There's no app surface here. A few inline scripts for the contact form is the ceiling.
- **Vercel hosting** — Auto-deploys from `main`. Preview URLs on every PR. Free tier covers a single-location coffee shop forever.
- **GitHub for version control** — `main` is protected. Feature branches + PRs for every change.

## File and folder conventions
- Pages live at the root: `index.html`, `about.html`, `contact.html`, `pricing.html` (when added)
- Shared CSS at `styles.css` — single file, no preprocessor
- Images at `images/`
- Brand reference at `brand-kit.md` (this file's sibling)

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
- [ ] All new pages link to existing nav (don't fork the nav)
- [ ] All new copy reads in the voice from `brand-kit.md`
- [ ] No inline `style=""` on `<body>`-level elements (use `styles.css`)
- [ ] All images have `alt` text
- [ ] Page added to `sitemap.xml` if one exists
- [ ] Build-log updated at `docs/build-log.md`

## What to do when adding a page
1. Read `brand-kit.md` for tokens and voice
2. Read at least one existing page (e.g., `about.html`) for layout pattern
3. Create on a feature branch: `feat/<page-name>`
4. Add to nav in all existing pages (or extract nav into a shared partial — flag this if you do)
5. Open a PR. Do not merge without clicking the Vercel preview URL.

## Known gotchas
- An earlier version of this site used inline styles everywhere. Some legacy inline-style remnants may still exist in `index.html`, `about.html`, `contact.html` — refactor opportunistically when you touch a page, but don't refactor everything in one PR.
- The contact form posts to `mailto:` — there's no backend yet. Don't pretend there's a real form handler.
