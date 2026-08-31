# JWT Design Studio — Design System

A warm-minimal brand and UI system for **JWT Design Studio** — an upscale interior
design practice led by two sisters, working across **Dubai and Beirut** with 10+ years
of delivery. The studio works across three disciplines (**Interiors, Architectural,
Lighting**) and four sectors (**Residential, Hospitality, Offices, Spa & Wellness**),
taking projects from concept to completion.

> **Consumers link one file:** `styles.css` (tokens + fonts + base). Components are
> bundled to `_ds_bundle.js` and exposed on `window.JWTDesignStudioDesignSystem_593c65`.

---

## Sources used

- **Logo:** supplied by the client — `uploads/logo-1782754154330.jpg` (white "JWT"
  wordmark with a warm taupe tittle/dot on a slate-gray ground). Exact colors were
  sampled from this file: slate `#62656A`, taupe dot `#D3B59D`, wordmark `#FFFFFF`.
  Derived variants live in `assets/`.
- **Instagram** — https://www.instagram.com/jwtdesignstudio/. **Not directly readable**
  (the domain is blocked to this build and the account is login-walled), but the public
  profile summary yielded two confirmed facts now baked into the system:
  - positioning: *"An upscale design studio, committed to delivering tailor-made
    projects and turning vision into reality"*
  - locations: **Dubai | Beirut** (an earlier draft wrongly assumed Abu Dhabi)
  - scale signal: ~7.9k followers, ~380 posts
  **The project photography itself could not be seen.** See caveats.
- **Studio website** — `jwtdesignstudio.com` exists but is client-rendered and returns
  no server-side content to a fetcher, so nothing could be read from it.
- **Structural reference: HBA** — https://hba.com/projects/ was read directly and is the
  model for this system's *architecture, script and interactions* (per the client's
  brief), specifically:
  - a **Projects index** with a "Filter By" rail of dropdown filters (HBA: Expertise +
    Region; here: Expertise + Sector + Region), a live result count, and **Load More**
    pagination rather than numbered pages.
  - the **project meta run** — a single tracked uppercase line of
    `discipline / sector / region / year` above each project title (HBA renders e.g.
    "Interiors Hotel UAE 2024").
  - an **Expertise mega-panel** in the top nav splitting *disciplines* from *sectors*.
  - a **page masthead** pattern: short title + a large light "lede" paragraph.
  - HBA's own palette (deep teal `#091D1E`) and type were **deliberately not adopted** —
    the client asked to keep JWT's existing warm-minimal theme and fonts.
- **Client brief:** warm-minimal aesthetic (cream/beige, airy, calm); cream + warm taupe
  + charcoal; high-contrast serif display + clean sans body; warm, personal tone;
  IA = Home / About / Expertise / Projects / Contact.
- **No codebase was available** — the attached `JWT/` folder mounted empty.

---

## Content fundamentals (voice & tone)

**Vibe:** warm and personal, but *upscale* — two sisters talking to you, with the
composure of a practice that delivers. Calm and unhurried. Never salesy, never loud.

- **Person:** first-person plural ("we", "our studio") talking to "you / your project".
- **Casing:** sentence case for headlines and body. UPPERCASE is reserved for the small
  tracked mono labels — eyebrows, meta runs, filter labels (`EXPERTISE`, `01 — DISCOVERY`,
  `INTERIORS / RESIDENTIAL / DUBAI / 2024`).
- **Headlines** are short, declarative, faintly poetic, set in serif display:
  - *"Turning vision into reality."* (their own line — use it as the anchor)
  - *"Three disciplines, one team."*
  - *"Two sisters, one way of seeing a space."*
- **The positioning sentence** is near-verbatim from the studio and should stay close to
  it: *"We are an upscale design studio, committed to delivering tailor-made projects."*
- **Recurring words:** tailor-made, upscale, concept to completion, in-house, considered,
  resolved, layered. **Signature nouns:** light, material, joinery, plan, scene.
- **Body** is plain and human, favouring concrete nouns over abstractions. Short
  sentences. Em-dashes for warmth.
- **Delivery language matters** (this is the HBA lesson): pair every design claim with a
  delivery claim — *"great design is meaningless without exceptional delivery."*
- **Numbers** used sparingly and only when real: *10+ years, 2 studios, 3 disciplines*.
- **Emoji:** never. **Exclamation marks:** essentially never.
- **Locale:** UAE/Levant English (British spelling), AED for budgets, "Dubai | Beirut"
  written with the pipe, as the studio writes it.

---

## Visual foundations

**Mood:** warm minimalism. Cream fields, generous negative space, editorial serif
headlines, natural-light interior photography. Restrained, never cold.

- **Color:** the **real brand palette**, sampled from the studio's own brand sheet and
  vector logo. The identity is a warm **camel/tan** family set against a **cool
  grey-charcoal** family — that warm/cool tension *is* the brand, and it is why the
  neutrals are grey-blue rather than warm charcoal.
  **Tan 600** `#C9A892` (`--tan-600`) is the primary brand colour (business card,
  envelope); **Tan 500** `#D1AD96` is the logo dot; **Tan 200** `#E9C7BC` is the blush.
  **Char 900** `#2C2E35` is the ink and the logo's mono form; **Char 700** `#494F55` is
  the brand charcoal used for dark sections; **Char 600** `#5A5C61` is the wordmark grey.
  Paper runs `#FFFFFF` → `#FAF8F6` (page) → `#F4F1ED` → `#EAE5E0`. Tan is used
  deliberately, not decoratively: eyebrows, the dot motif, the first item of a meta run,
  the `accent` button, and full tan grounds. **Do not invent additions to this palette.**
  See `tokens/colors.css`.
- **Type:** one family throughout — **Mulish**, set **Ultra Light (200)** for display.
  Hierarchy comes from size, weight and tracking rather than a second typeface.
  The brand reference is **Avenir Next Thin**, which ships with macOS and is licensed by
  Linotype/Monotype — a system install cannot legally be self-hosted. **Mulish** is the
  closest free match for its geometric-humanist proportions, ships a true 200 weight, and
  is loaded from Google Fonts, so the site now renders **identically on every device**
  (the previous Avenir-first stack showed one face to Apple visitors and another to
  everyone else). Avenir Next is kept later in the stack so a licensed local install still
  wins: `Mulish, 'Avenir Next', 'Avenir Next LT Pro', Avenir, 'Nunito Sans'`. Avenir Next
  **is** legitimately web-licensable via **Adobe Fonts** (Creative Cloud) — adding that kit
  and promoting it to the front of the stack is the optional production upgrade.
  **Weight policy:** Ultra Light (200) for large display only; 300 for the lede and large
  body; 400 for reading copy and UI; 500 for small tracked labels. **Never set body copy
  at 200** — it fails legibility and contrast. Display is set large with tight tracking
  (`--track-display: -0.025em`) and `text-wrap: balance`. No italic is used — emphasis is
  carried by weight and colour.
- **The lede** (`--lede`) is a distinct role borrowed from HBA: one large, light sans
  paragraph directly under a page title, doing the work of an intro section.
- **Spacing & layout:** soft 4px base with generous editorial jumps; section rhythm runs
  `--space-9/10` (96–128px). Content max `1440px`, narrow measure `760px`, fluid
  `--gutter`. Airy by default.
- **Backgrounds:** flat warm tones — cream / sunken cream / sand fill / ink (dark).
  **No gradients** except dark protection overlays on full-bleed hero imagery.
  No patterns or textures.
- **Imagery:** warm, natural-light interiors — calm, lived-in, never clinical. Portrait
  `4/5` for project tiles, `4/3` for discipline cards, `16/9`–`21/9` for full-bleed
  breaks. Always `object-fit: cover`. Photos carry the warmth; UI chrome stays quiet.
- **Corners:** restrained — cards/images `--radius-md` (8px); buttons `--radius-sm` (4px);
  filter chips full-round. Nothing aggressively rounded.
- **Cards:** mostly border-free; project tiles are image-first with the meta run and title
  beneath (no box). Soft **warm-tinted** shadows (`--shadow-md/lg`, alpha on `#2B2A28`)
  only where elevation is needed — dropdown menus, floating stats.
- **Borders:** hairline `1px` in sand tones (`--line`, `--line-subtle`) — the primary
  structuring device. Used for the filter rail, service lists, fact tables, section
  separators and form underlines rather than full boxes.
- **Motion:** slow and soft. `--ease-soft`; durations 180/320/600ms, with scroll reveals
  at 900ms (text) and 1400ms (image settle). Project image hover = `scale(1.05)` over
  800ms under a thin darkening veil; "View project" cue fades up; nav links wipe an
  underline; button arrows nudge `translateX(3px)`; team portraits warm from greyscale.
  **No bounce, no parallax.** Everything respects `prefers-reduced-motion`.
- **Hover/press:** hover darkens fills a step (ink→ink-800, taupe→taupe-500) or fills an
  outline; project titles warm to taupe. Press = `scale(0.992)` + 0.5px nudge.
  Focus = 2px taupe ring.
- **Transparency/blur:** only hero protection gradients over photos. No glassmorphism.
- **The dot motif:** the taupe tittle from the logo recurs as a quiet full-stop / eyebrow
  lead / list bullet. One per cluster.

### Interaction patterns (the HBA layer)

- **Filter rail** (`FilterBar`) — hairline-bounded row: `Filter By` legend, labelled
  dropdowns whose *value* is set in serif display, live `n of N Projects` count, and a
  taupe `Clear` that only appears when filters are dirty. Menus close on outside click.
- **Load More** — the projects grid reveals 6 at a time; changing any filter resets the
  page. No numbered pagination.
- **Expertise panel** — the nav's Expertise item opens a two-column panel (Disciplines /
  Sectors) whose sector links deep-link into the pre-filtered Projects index
  (`#projects/hospitality`).
- **Deep links** — `#expertise/lighting` focuses a single discipline;
  `#projects/<sector>` presets the sector filter.

---

## Iconography

JWT is a **near-iconless** brand by design — the warmth comes from photography and serif
type, not UI icons. Where a glyph is needed it is a **thin (1.2–1.4px) inline SVG** drawn
to match the geometric sans: the button arrow (`Button.jsx`), the select chevron
(`Input.jsx`), the filter and nav chevrons (`FilterBar.jsx`, `Navbar.jsx`), the
"View project" arrow (`ProjectCard.jsx`), the nav hamburger. All hand-authored, minimal,
single-stroke, `currentColor`.

- **No icon font / sprite** is used or required.
- **No emoji**, ever.
- **The taupe dot** (a filled `border-radius:999px` span) is the one recurring "icon" —
  see `foundations/brand-dot.html`.
- If a broader set is ever needed, use a **thin-stroke** line set (Lucide / Feather at
  1.4–1.5px) to match the existing SVGs — and flag the addition. None is bundled today.

---

## Index / manifest

**Root**
- `styles.css` — entry point (consumers link this). `@import`s the token files below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — the **real vector logo**, extracted from the studio's `JWT-FINAL LOGO.pdf`:
  `logo.svg` (primary: grey wordmark + tan dot), `logo-charcoal.svg` (mono),
  `logo-white.svg` (reversed, tan dot), `logo-white-solid.svg`, `logo-tan.svg`.
  Source brand files are kept in `uploads/` (logo, business card, stationery PDFs and
  the brand colour sheet).
- `assets/projects/ronaldo-muchawar/` — the studio's six RONALDO MUCHAWAR visualisations.
- `readme.md` (this file), `SKILL.md`, `thumbnail.html`.

**Components** → `window.JWTDesignStudioDesignSystem_593c65` (each: `.jsx` + `.d.ts` + `.prompt.md`)
- `components/forms/` — `Button`, `Input`, `Textarea`, `Select`
- `components/core/` — `Eyebrow`, `MetaList`, `FilterBar`, `FilterSelect`, `Tag`, `Badge`, `Divider`
- `components/content/` — `Figure`, `ProjectCard`, `CompareSlider`, `HeroShowcase`, `Carousel`,
  `FactTable`, `ShareRow`, `PersonCard`, `AwardList`, `StatBlock`, `Quote`, `ServiceCard`
- `components/navigation/` — `Navbar`, `Footer`, `BackToTop`, `WhatsAppButton`
- `components/motion/` — `Reveal`, `RevealImage`, `InView`
  (the underlying `useInView()` hook is module-scope only — lowercase names are not
  exposed on `window.<Namespace>`; consumers use `InView` instead)

### Motion & layout patterns (the HBA layer)

- **Scroll reveal** — `Reveal` fades and rises content into view once (stagger siblings
  with `delay={i * 110}`); `RevealImage` clips a frame while the photograph settles from
  `scale(1.08)`. Both honour `prefers-reduced-motion`.
- **Sticky condensing nav** — `<Navbar sticky>` fixes to the viewport and, after 80px,
  shrinks its padding and logo; over a hero it swaps from cream-on-photo to a solid cream
  bar (pass `logoSrcCondensed`). Inner pages need `NavSpacer` beneath it.
- **Back to top** — `BackToTop` fades in past the fold and smooth-scrolls home.
- **Full-bleed image bands** — images break out of the container at `16/9` and `21/9`
  between sections, entering via `RevealImage`.
- **Case-study order** (mirrors HBA's project page): title-first on cream with stacked
  meta lines → full-bleed lead image → portrait + large statement paragraphs →
  `FactTable` credits + `ShareRow` → captioned `Carousel` with an "n / N" counter →
  `Team` (`PersonCard`) → `Awards & accolades` (`AwardList`) → related projects.
  Note the title is **not** overlaid on the hero — HBA sets it on the light ground first.

**Foundation cards** (Design System tab) — `foundations/*.html`
- Colors: neutrals, accent, ink & slate, semantic roles
- Type: display, weight ladder, body, eyebrow/label/meta, type-in-use
- Spacing: scale, radii & shadows
- Brand: logo lockups, the dot motif, photography treatment
- Components: forms, core labels & filters, content, case-study blocks, motion, navigation

**UI kit** — `ui_kits/website/`
- `index.html` — the interactive marketing site (hash-routed):
  **Home · About · Expertise · Projects · Project · Contact**
- Screens: `HomePage.jsx`, `AboutPage.jsx`, `ExpertisePage.jsx`, `ProjectsPage.jsx`,
  `ProjectPage.jsx`, `ContactPage.jsx`; shared `kit-ui.jsx`, sample content `data.js`.
- **RONALDO MUCHAWAR is the only project with real imagery** (6 studio visualisations in
  `assets/projects/ronaldo-muchawar/`). The other 21 real project names render as index
  tiles reading "Imagery in preparation" rather than being filled with stock — see caveats.

**Templates** (what consuming projects pick from)
- `templates/landing-page/LandingPage.dc.html` — marketing landing page (hero, disciplines,
  project grid, CTA, footer).
- `templates/projects-index/ProjectsIndex.dc.html` — the filterable Projects index:
  Expertise / Sector / Region dropdowns, live result count, Clear and Load More, driven by
  a real logic class. The signature JWT portfolio screen.

Each template folder carries its own `ds-base.js`; edit the `base` path in it when copying
into a consuming project.

---

## Known substitutions / caveats

**Confirmed real** (from the studio, Aug 2026): founders **Jinane and Joelle Touma**;
founded **2017**; studios **Dubai | Beirut**; the studio is **just the two sisters**, with
no wider team; character **"calm, modern, studied"**; clients are private homeowners,
property developers and café/restaurant owners; **English only** (no Arabic/RTL); the
**22 project names** in `data.js`; and the **RONALDO MUCHAWAR** imagery.

- **All imagery is 3D visualisation, not photography** — the studio's explicit instruction
  was to label it honestly, so `ProjectCard`, the project lead image and the gallery all
  carry a "Visualisation" stamp, and `data.js` sets `visualisation: true`.
- **Only one project has imagery.** The other 21 render as index tiles marked "Imagery in
  preparation". This is deliberate: filling real project names with stock interiors would
  misrepresent the studio's work. **Send images per project and they drop straight in.**
- **Two palettes ship, pending a decision.** The default is the higher-contrast cream +
  charcoal; `[data-palette="travertine"]` (`tokens/palette-travertine.css`) is sampled from
  the RONALDO renders — paler, warmer, softer ink. The UI kit has a **Palette switch**
  (bottom-left) to compare them. Once chosen, fold the winner into `tokens/colors.css`
  and delete the other.
- **Fonts: resolved.** **Mulish** is now the primary face — the closest free match to the
  studio's chosen **Avenir Next Thin**, which cannot legally be self-hosted from a macOS
  install. Every visitor now sees the same typeface. Avenir Next remains later in the
  stack for licensed local installs. Optional upgrade: add an **Adobe Fonts** kit `<link>`
  in `tokens/fonts.css` and move Avenir Next to the front.
- **The cover comparison pairs are placeholders.** A before/after slider only works when
  both frames are the **same view from the same camera position**. We hold six RONALDO
  MUCHAWAR renders and **no site photography**, so the three cover sliders pair related
  views of that one project and label both sides honestly ("Concept" / "Developed").
  Replace each `after` in `data.js → comparisons` with the real photograph of the matching
  angle, relabel to "As built", and point the other two at different projects.
- **Still placeholder in `data.js`:** every project's **year, area, duration and summary**
  (except RONALDO), and **contact details** (`studio@jwtdesignstudio.com`,
  `+971 4 000 0000`, and the WhatsApp number driving the floating button).
- **Project classification is partly inferred.** Ten projects are classified from their own
  names (majlis, mall, landscape, experience centre); the twelve coded ones
  (BS, GG, MR, NA, NR, VK, ZBM…) default to Interiors / Residential and carry
  `classified: false`, so the Sector row is hidden on their case studies rather than
  asserting a guess.
- **No testimonials and no awards.** Both arrays are empty and every section that consumed
  them is hidden, rather than running invented quotes or accolades. The Home page uses the
  studio's own positioning line in that slot.
- **Sisters' division of labour is not stated** anywhere on the site — that question came
  back blank, so the About page avoids claiming who leads what.
