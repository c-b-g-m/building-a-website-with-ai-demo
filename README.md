# Bayou Brew Coffee — Demo Repo

This is the live-demo subject for the AI Snack Club webinar on 2026-06-10.

## What this is
A pre-populated repo representing the *post-scrape state* of Bayou Brew's old 2018 HTML site. It already has:
- Scraped HTML pages: `index.html`, `about.html`, `contact.html`
- A real `brand-kit.md` capturing the brand
- A `CLAUDE.md` with project conventions
- A `SOUL.md` defining the agent's role

During the webinar, the audience watches a live scrape demo (~3 minutes). The scrape *output* isn't actually used — this repo is the demo subject. That's the trick: the demo doesn't depend on the live scrape succeeding.

## What gets built live
The audience watches Christen run a single Claude Code command:

> *"Add a /pricing page to this site using the existing brand-kit.md. Three tiers: Drip ($4), Pour-Over ($7), Reserve ($12). Match the navigation pattern used on the existing pages. Include a CTA on each tier that links to the contact form. Don't introduce any new fonts, colors, or layout primitives — only what's already in brand-kit.md."*

That generates `pricing.html` on the `feat/pricing` branch. Christen pushes, the PR opens, the Vercel preview URL appears. Click. Live.

## Deploy notes (for Christen — pre-talk setup)
1. Push this folder to a public GitHub repo (e.g., `building-a-website-with-ai-demo`)
2. Connect the repo to Vercel (free tier is fine)
3. Confirm the production URL works on `main`
4. Confirm preview URLs work — push a throwaway branch and check
5. Pre-stage `feat/pricing-prebuilt` as a backup — see `../docs/live-demo-script.md`

## File structure
```
building-a-website-with-ai-demo/
├── README.md          # this file
├── SOUL.md            # agent role
├── CLAUDE.md          # project conventions
├── brand-kit.md       # color, type, voice contract
├── index.html         # home (scraped + lightly cleaned)
├── about.html         # about page (scraped)
├── contact.html       # contact page (scraped)
└── styles.css         # shared CSS, brand tokens
```

## Backup branch (pre-stage before talk)
After confirming `feat/pricing` builds correctly via Claude Code in rehearsal, save the working `pricing.html` and push it to `feat/pricing-prebuilt`. If the live build fails on stage, switch to that branch and continue from "open the PR" step.
