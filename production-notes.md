# JWT Design Studio — production notes

Handoff notes for moving this prototype into a real, editable site.

---

## Images

Renders are ~2500px / ~2 MB each. I hand-compressed the first six (12 MB → 1 MB).
That doesn't scale past a few dozen images.

**Do this instead:**

- Originals go to a media store, **never into git** (binaries make the repo grow forever).
- A CDN resizes/re-encodes on request via URL params, and caches: `?w=1600&q=75&fm=webp`.
- Browser picks its own size with `srcset` — phones don't download desktop files.
- Blurred placeholder (LQIP) while loading. Matters here: `HeroShowcase` preloads its
  frames, and empty panels fading in were exactly why the transition felt broken.

**Rule:** nothing delivered wider than ~1600px, quality 75–80. ~200 KB, not 2 MB.

---

## Admin editing

Headless CMS — log in, upload, publish. No code, no filenames.

**Recommendation: Sanity**, for one reason that matters here — **hotspot & crop**.
The editor marks the important part of a photo once, and every crop (16:9 hero, 4:5
card, square) keeps that subject centred. For interiors, where composition *is* the
work, without it `object-fit: cover` slices the feature wall out of a card. Image CDN
and placeholders come built in.

Alternatives: **Payload** (self-host, more control, more ops), **Contentful** (polished,
pricey, weaker imagery), **TinaCMS/Decap** (cheapest, but back to committing binaries —
wrong trade given the above).

**Stack:** Next.js + Sanity on Vercel.

---

## Content model

`ui_kits/website/data.js` is already shaped like a CMS document set — migration is
mechanical.

```
project
  title, slug, summary
  disciplines[]    Interiors | Architectural | Lighting | Landscape
  sector           Residential | Hospitality | Offices | Spa & Wellness
  region           Dubai | Beirut
  year, studio, isVisualisation, featured, order
  cover            image
  gallery[]        { image (hotspot), caption, isMain }
  comparisons[]    { before, after, beforeLabel, afterLabel, room }
```

Two rules the editor UI must enforce — both load-bearing, neither obvious:

1. **Each gallery needs its first frame `isMain`, then two that aren't.** That's the
   rhythm the projects stage renders: one full-bleed frame, two resting inset over it.
2. **A comparison pair must be the same camera position.** Different angles and the
   wipe reads as two unrelated rooms, not one space before and after.

---

## Replace before launch

- **All imagery is 3D visualisation**, and only RONALDO MUCHAWAR has any — the other
  21 projects show as tiles marked "Imagery in preparation".
- **Cover comparisons pair two renders**, labelled "Concept"/"Developed". Swap the
  `after` for real photography and relabel "As built".
- **Contact details are invented** — `studio@jwtdesignstudio.com`, `+971 4 000 0000`,
  WhatsApp number. Real domain from the stationery: **jwtdesign.studio**.
- **Year / area / duration unknown** for every project except RONALDO.
- **No awards or testimonials** — sections removed rather than faked; reinstate when real.
- **Mulish stands in for Avenir Next Thin** (can't be legally self-hosted from macOS).
  Optional: Adobe Fonts kit for the real face.

---

## Three traps

Documented in the components' `.prompt.md` files:

- **`useInView` deliberately avoids IntersectionObserver.** IO fired its initial
  non-intersecting callback then never fired again in preview contexts, leaving
  everything below the fold at `opacity: 0` — and since those wrappers hold
  `loading="lazy"` images, the imagery never downloaded. Uses a rAF rect check. Don't
  revert it.
- **`inset: n%` resolves against width horizontally, height vertically.** Split the
  axes and inset frames stop matching the stage ratio. `HeroShowcase` takes one value
  for both, on purpose.
- **`--fab-safe` is derived**, not hard-coded. Bottom-right pinned chrome must inset by
  it or the WhatsApp button covers it. The button is icon-only so its footprint stays
  constant.
