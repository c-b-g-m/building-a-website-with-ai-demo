# Bayou Brew Coffee — Brand Kit

This file is the contract. Any HTML, CSS, or copy generated for this site must comply with what's here. If you need something this file doesn't cover, flag it before generating. Don't invent new tokens.

---

## 1. Identity

**Name:** Bayou Brew Coffee
**Short form:** Bayou Brew (acceptable in headers, never in legal/footer text)
**Tagline:** *Slow coffee. Houston pace.*
**Location:** The Heights, Houston, TX
**Founded:** 2018

**Voice in one line:** Friendly Houston neighborhood. Short sentences. No coffee snobbery, no marketing-speak.

---

## 2. Color Tokens

```css
:root {
  /* Backgrounds */
  --paper:        #F8F2E8;   /* warm cream — primary background */
  --paper-deep:   #EDE3D2;   /* slightly darker cream — alt sections */
  --ink:          #1F1A14;   /* near-black, warm — body copy */

  /* Accent */
  --bayou:        #2F5D50;   /* deep moss green — primary brand color */
  --bayou-soft:   #4A8470;   /* lighter moss — hover, secondary */
  --copper:       #B8693D;   /* warm copper — accent only, sparingly */

  /* Utility */
  --border:       rgba(31,26,20,0.12);
  --muted:        rgba(31,26,20,0.6);
}
```

### When to use what
- `--paper` — every page background, no exceptions
- `--paper-deep` — alternate sections (e.g., the menu strip on home)
- `--ink` — all body copy and headlines
- `--bayou` — primary buttons, links, the logo wordmark
- `--bayou-soft` — hover states only, never a default
- `--copper` — accent on max one element per page (a price tag, a date pill). If you're using copper twice, you're using it wrong.

### What never to do
- Never introduce a new color
- Never use pure black (`#000`) — use `--ink`
- Never use pure white (`#FFF`) — use `--paper`
- Never gradient anything

---

## 3. Typography

```css
/* Google Fonts import:
   @import url('https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap');
*/
:root {
  --font-display: 'Caudex', Georgia, serif;     /* headlines, brand wordmark */
  --font-body:    'Inter', system-ui, sans-serif;  /* everything else */
}
```

### Type scale
| Use | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| Page title (h1) | Caudex | 700 | 48px | 1.15 |
| Section headline (h2) | Caudex | 400 italic | 36px | 1.2 |
| Card / item title (h3) | Inter | 600 | 22px | 1.3 |
| Body copy | Inter | 400 | 18px | 1.55 |
| Muted / caption | Inter | 400 | 16px | 1.5 |
| Button label | Inter | 500 | 16px | 1 |

### Rules
- Headlines are sentence case, not Title Case ("Our beans" not "Our Beans")
- No all-caps headlines anywhere
- Italics are reserved for taglines and pull quotes — never for emphasis in body copy
- Never use Caudex for body copy
- Never use Inter for h1 or h2

---

## 4. Layout Primitives

### Container
- Max-width: 1140px
- Side padding: 24px on mobile, 48px on desktop
- Centered

### Vertical rhythm
- Section padding: 96px top + bottom on desktop, 64px on mobile
- 32px between major content blocks within a section
- 16px between paragraphs
- Never go below 8px for any spacing

### Buttons
- Primary: `background: var(--bayou); color: var(--paper); padding: 12px 24px; border-radius: 2px; font-family: var(--font-body); font-weight: 500;`
- Secondary: `background: transparent; color: var(--bayou); border: 1px solid var(--bayou); padding: 12px 24px; border-radius: 2px;`
- Hover: `background: var(--bayou-soft);` for primary, `background: var(--bayou); color: var(--paper);` for secondary

### Links
- Body links: `color: var(--bayou); text-decoration: underline; text-underline-offset: 3px;`
- Hover: `color: var(--bayou-soft);`
- Never use blue. Never remove the underline from inline body links.

---

## 5. Imagery & Graphics

- Photography style: warm, slightly desaturated, natural light. No filters. No people in branded apparel.
- Subjects: coffee being made, the bar, the front door, a neighborhood detail. Never stock images.
- Logo: a single moss-green wordmark — `Bayou Brew` in Caudex 700 with a small bayou-leaf glyph between the words. (Stub for now — the actual SVG lives at `images/logo-bayou-brew.svg`.)
- Never illustrate coffee with the standard "steaming cup with leaf swirl" cliché.

---

## 6. Navigation Structure (do not deviate)

Header (left to right):
- Logo (links to `/`)
- `Menu` → `/index.html#menu` (in-page anchor on home)
- `About` → `/about.html`
- `Visit` → `/contact.html`
- `Pricing` → `/pricing.html` (when added)

Footer:
- Address line — `2418 Yale St, Houston, TX 77008`
- Hours line — `Tue–Sun 6a–2p · Closed Mon`
- Phone — `(713) 555-0184` (illustrative — fictional shop)
- Social — Instagram only (`@bayoubrewhtx`)

---

## 7. Voice & Copy Rules

### Do
- Short sentences. Two clauses max.
- Mention the neighborhood by name when natural ("the Heights", "Yale Street")
- Reference the time of day or weather when describing a drink ("the kind of pour-over you want at 7 a.m. when it's already 84°")
- Use "we" not "the company"
- Be specific: "Ethiopian Yirgacheffe, single origin, washed" beats "premium beans"

### Don't
- Don't use "elevate," "curated," "artisanal," "passion," or "craft"
- Don't use exclamation points (one per page max — and only if it earns it)
- Don't write taglines that could apply to any coffee shop
- Don't capitalize coffee terms unless they're proper names ("pour-over" not "Pour-Over" except in product names)
- Don't reference competitors

### Examples

**Bad:** "Our passionately curated, artisanal coffee experience elevates your morning ritual!"
**Good:** "We pour coffee. The good kind. Come by."

**Bad:** "Located in the heart of Houston's vibrant Heights district, our shop is a community cornerstone."
**Good:** "We're on Yale Street, between the post office and the cleaners. Park out front. Bring your dog."

---

## 8. Pricing (the demo will add a /pricing page)

Three tiers. Don't change names or prices.

| Tier | Price | What it is |
|---|---|---|
| Drip | $4 | House blend. 16 oz. Refills are $1. |
| Pour-Over | $7 | Single origin, your choice. Made one cup at a time. ~6 minutes. |
| Reserve | $12 | Whatever microlot we just got in. Limited. We'll tell you what it is when you order. |

When generating the pricing page, treat each tier as a card. Each card needs a CTA — `Order in shop` (since there's no e-commerce). Link the CTA to `/contact.html`.

---

## 9. Accessibility Floor (non-negotiable)
- All images have `alt` text
- All interactive elements have visible `:focus` states (`outline: 2px solid var(--bayou); outline-offset: 2px;`)
- Color contrast: ink on paper is ~14:1 — never use the `--muted` variant for primary text
- Tap targets are at least 44×44px

---

## 10. What never changes without approval
- The color tokens
- The type stack
- The voice
- The navigation structure
- The pricing tier names + prices
- The footer address (this is the fictional location — keep it consistent across pages)
