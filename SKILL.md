---
name: jwt-design
description: Use this skill to generate well-branded interfaces and assets for JWT Design Studio (an upscale interior, architectural and lighting design studio in Dubai and Beirut), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** JWT Design Studio — an upscale design studio led by two sisters, **Dubai | Beirut**, 10+ years. Concept to completion, entirely in-house.
- **Disciplines:** Interiors · Architectural · Lighting. **Sectors:** Residential · Hospitality · Offices · Spa & Wellness.
- **IA:** Home / About / Expertise / Projects / Contact.
- **Voice:** warm and personal but upscale ("we" → "your project"), sentence case, short Ultra-Light-set headlines, no emoji. Anchor line: *"Turning vision into reality."* Positioning: *"an upscale design studio, committed to delivering tailor-made projects."* Always pair a design claim with a delivery claim.
- **Color:** cream page `#F7F3EC`, warm-charcoal ink `#2B2A28`, taupe accent `#D3B59D` (the logo dot — used sparingly), slate `#62656A`. Dark sections = ink ground + cream text.
- **Type:** one family — **Avenir Next**, **Ultra Light (200)** for display. Stack: `'Avenir Next', 'Avenir Next LT Pro', Avenir, Mulish, 'Nunito Sans', sans-serif` (Avenir Next is a macOS/licensed face that can't be self-hosted; **Mulish** is the closest free fallback and what non-Apple visitors see — web-license the real thing via **Adobe Fonts** for production). Weight policy: 200 display only → 300 lede & large body → 400 reading copy & UI → 500 small tracked labels. **Never body copy at 200.** No italic — emphasis via weight and colour.
- **Feel:** airy spacing, hairline sand borders as the main structuring device, soft warm-tinted shadows, restrained radii (4–8px), slow soft motion, photography-led. No gradients (except hero protection overlays), no patterns, no glassmorphism, near-iconless (thin inline SVGs only).
- **Signature patterns:** the taupe dot motif; the tracked **meta run** (`INTERIORS / RESIDENTIAL / DUBAI / 2024`) above project titles; the **filter rail** with dropdowns + live count + Load More; the **Expertise mega-panel**; a page title followed by one large light **lede** paragraph; **scroll reveals** (`Reveal` / `RevealImage`) and a **sticky condensing nav**; full-bleed `16/9`–`21/9` image bands between sections.
- **Case-study order:** title-first on cream with stacked meta → full-bleed lead image → portrait + large statement paragraphs → `FactTable` + `ShareRow` → captioned `Carousel` with "n / N" counter → Team → Awards → related projects.

## Files

- `styles.css` — link this one file for all tokens, fonts and base resets.
- `tokens/` — colors, typography, spacing, fonts, base.
- `assets/` — logo lockups (white / charcoal / slate).
- `components/` — React primitives. Forms: `Button`, `Input`, `Textarea`, `Select`. Core: `Eyebrow`, `MetaList`, `FilterBar`, `FilterSelect`, `Tag`, `Badge`, `Divider`. Content: `Figure`, `ProjectCard`, `Carousel`, `FactTable`, `ShareRow`, `PersonCard`, `AwardList`, `StatBlock`, `Quote`, `ServiceCard`. Navigation: `Navbar`, `Footer`, `BackToTop`. Motion: `Reveal`, `RevealImage`, `InView` (the `useInView()` hook itself is module-scope only — lowercase names never reach `window.<Namespace>`). Each has a `.prompt.md` with usage. Loaded via `_ds_bundle.js` → `window.JWTDesignStudioDesignSystem_593c65`.
- `foundations/` — specimen cards (colors, type, spacing, brand).
- `ui_kits/website/` — full interactive marketing site to copy patterns from.
- `templates/landing-page/` and `templates/projects-index/` — ready starting points (marketing landing page; filterable projects index).

## Caveats (read before production)

- **No real JWT project photography was ever available** (Instagram blocked, studio site client-rendered) — all imagery is Unsplash stand-ins. Founder names, project names/details and contact details are placeholders. Fonts are Google Fonts stand-ins. See `readme.md` → "Known substitutions / caveats".
