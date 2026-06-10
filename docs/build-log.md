# Build log — Bayou Brew Coffee

## 2026-06-10 — Astro rebuild (initial)

Converted the off-brand scraped HTML into a clean, brand-kit-compliant Astro site.

**Added**
- Astro project: `package.json`, `astro.config.mjs` (static output, no adapter — Vercel auto-detects), `tsconfig.json` (strict).
- Shared shell: `src/layouts/Layout.astro` + `src/components/Header.astro` + `src/components/Footer.astro`. Nav and footer defined once (brand-kit §6), reused across pages — no forked nav.
- Global styles `src/styles/global.css` — every color, font, and layout primitive traced to `brand-kit.md`. No new tokens introduced.
- Pages: `index.astro` (hero + `#menu` strip + hours), `about.astro`, `contact.astro` (mailto form — no backend, per the known gotcha), `pricing.astro` (three tiers, copper accent used once on the Reserve price per §2).

**Rewrote copy** in the brand voice — short Houston-neighborhood sentences. Dropped every "passion / artisanal / curated / elevate / premium." Verified clean in the built output.

**Pre-commit checklist**
- [x] All pages use the shared layout/nav (nav not forked)
- [x] All copy reads in the brand voice
- [x] No inline `style=""` — global + component-scoped styles only
- [x] No images yet; inline SVGs are `aria-hidden` decorative, no bare `<img>` tags
- [x] Accessibility floor: focus states, skip link, 44px tap targets, ink-on-paper contrast
- [x] Build green: `npm run build` → 4 static routes

**Known item**
- `npm audit` flags one moderate Astro advisory (`define:vars` XSS / server-island replay). Neither feature is used in this static site, so it's not exploitable here. Fix requires the Astro 6 major upgrade — deferred to keep the build stable.
