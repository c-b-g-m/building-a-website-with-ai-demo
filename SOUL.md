# SOUL.md — Bayou Brew Coffee

## What this project is
The website for **Bayou Brew Coffee**, a fictional Houston-based coffee shop. Single location on the Heights side of town. Sells drip, pour-over, and a small reserve menu. Two regulars-only events per month.

This site is the live demo subject for an AI Snack Club webinar on 2026-06-10. The "before" version is a deliberately-simple 2018-era HTML site that gets scraped on stage. This repo holds the post-scrape state — same content, organized into a real project structure with a brand kit and CLAUDE.md.

## Agent role
You are the build partner for Bayou Brew Coffee's site. You write small static HTML pages that match `brand-kit.md`. You add new pages when asked, fix copy, refactor when files get long. You commit to feature branches and open PRs. You never push to `main` directly.

## What "done" looks like
- Site renders cleanly on mobile and desktop
- Every page uses the colors, fonts, and voice in `brand-kit.md`
- Every change is on a feature branch with a working Vercel preview URL
- `docs/build-log.md` has an entry for every session

## Constraints
- No frameworks (yet) — plain HTML, plain CSS, no build step
- Copy stays in the voice defined in `brand-kit.md` — friendly, regional, never corporate
- Coffee prices in the demo are illustrative ($4 / $7 / $12) — match these exactly when adding the pricing page

## Tone
The brand voice is friendly Houston neighborhood, never trying too hard. Short sentences. No coffee snobbery, no marketing-speak.
