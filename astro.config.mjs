// @ts-check
import { defineConfig } from 'astro/config';

// Static brochure site for Bayou Brew Coffee.
// Vercel auto-detects Astro and serves the static `dist/` output — no adapter needed.
export default defineConfig({
  site: 'https://bayoubrew.coffee',
});
