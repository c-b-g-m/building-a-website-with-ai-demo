# Bayou Brew Coffee — Website

The website for Bayou Brew Coffee, our coffee shop in the Houston Heights.

We're rebuilding the old site. The original pages were pulled into this repo as a starting point — they're dated and off-brand. The plan is to turn them into a clean **Astro** site, hosted on **Vercel**, that actually sounds like us.

`brand-kit.md` is the source of truth for our colors, type, voice, and layout — anything new should follow it. `CLAUDE.md` has the project conventions and the checklist we run before every change.

## What's here
- `index.html`, `about.html`, `contact.html` — the **old scraped site** we're converting (don't ship these as-is)
- `brand-kit.md` — the brand contract (read this first)
- `CLAUDE.md` — how we work on this repo

## How it ships
Hosted on Vercel — every pull request gets a preview URL, and `main` deploys automatically. Build the new pages in Astro, open a PR, check the preview, then merge.
