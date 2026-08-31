# JWT Design Studio

Brand design system + marketing-site prototype for JWT Design Studio (Jinane & Joelle
Touma) — interiors, architectural, lighting and landscape, Dubai | Beirut.

## Read these first

- `production-notes.md` — image pipeline, CMS recommendation, content model, and the
  list of what is still placeholder. **Start here** if you are taking this to production.
- `readme.md` — the design guide: voice, visual foundations, iconography, file index.
- `components/**/*.prompt.md` — per-component usage and constraints.

## Layout

```
styles.css              entry point — @imports the token files
tokens/                 colors, typography, spacing, fonts, base
assets/                 logos (SVG), project renders, founder portraits
components/<group>/     React primitives (.jsx + .d.ts + .prompt.md + card html)
ui_kits/website/        the site: index.html + one .jsx per screen + data.js
foundations/            specimen cards for the Design System tab
templates/              starting-point templates
```

`_ds_bundle.js`, `_ds_manifest.json` and `_adherence.oxlintrc.json` are **generated** —
never edit them by hand.

## Conventions

- All content lives in `ui_kits/website/data.js`. Screens read from it; nothing is
  hardcoded in a screen. It is deliberately shaped like a CMS document set.
- Styling is via CSS custom properties from `tokens/`. Do not introduce raw hex values
  or invent palette entries.
- Components inject their own CSS once via an `injectOnce(id, css)` helper.
- Screens use inline styles, which cannot hold media queries — every multi-column grid
  therefore also carries the `jwt-rg` class, collapsed by breakpoints in `kit-ui.jsx`.
  `jwt-rg` only ever collapses to ONE column (≤720px), so it is safe on a grid whose
  authored track list is already single. The intermediate two-column step (≤1024px) is
  opt-in via `jwt-rg-multi` and belongs only on genuinely 3- or 4-up grids — applying it
  blanket rewrites single-track grids into two columns and leaves half the row empty.

## Three things not to "fix"

1. **`useInView` avoids IntersectionObserver on purpose.** IO fired its initial
   non-intersecting callback then never fired again in embedded/preview contexts,
   leaving everything below the fold at `opacity: 0` — and since those wrappers hold
   `loading="lazy"` images, the imagery never downloaded either. It uses a
   rAF-throttled rect check.
2. **`inset: n%` resolves against width horizontally and height vertically.** Split the
   axes and inset frames stop matching the stage's aspect ratio. `HeroShowcase` takes a
   single value for both.
3. **`--fab-safe` is derived** (`--fab-offset + --fab-size + --space-4`), not hardcoded.
   Bottom-right pinned chrome must inset by it or the WhatsApp button covers it.

## Honesty rules that shaped this build

All current imagery is **3D visualisation**, labelled as such site-wide. Projects
without imagery show as tiles marked "Imagery in preparation" rather than borrowing
another project's renders. Awards and testimonial sections were removed rather than
filled with invented content. Keep that standard.
