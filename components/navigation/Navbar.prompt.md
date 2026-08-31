Marketing top navigation. Composes `Button` for the CTA. Use `overlay` over a dark hero image, `solid` on inner pages. The Expertise item opens a two-column panel listing disciplines (Interiors / Architectural / Lighting) and sectors (Residential / Hospitality / Offices / Spa & Wellness).

```jsx
{/* Over a hero: transparent, then condenses onto cream on scroll */}
<Navbar variant="overlay" sticky
        logoSrc="assets/logo-white.svg"
        logoSrcCondensed="assets/logo-charcoal.svg"
        activeHref="#projects" onNavigate={navigate}
        cta="Start a project" ctaHref="#contact" />

{/* Inner pages — follow with a 72px spacer, since `sticky` is position:fixed */}
<Navbar variant="solid" sticky logoSrc="assets/logo-charcoal.svg" />
```

With `sticky` the bar fixes to the viewport, shrinks its padding and logo after 80px, and — for `overlay` — swaps from cream-on-photo to a solid cream bar (pass `logoSrcCondensed` so the lockup stays legible).

**Below 1000px** the inline links and CTA hide and the hamburger opens a built-in full-screen menu carrying all five nav links, the Expertise disciplines/sectors and the CTA. It locks page scroll, closes on Escape, and routes through `onNavigate` — so no extra wiring is needed (`onMenu` is just an optional side-effect hook).

**Layout note:** because `sticky` is `position: fixed` it takes no space in flow. Inner pages need a ~72px spacer beneath it; a full-height overlay hero needs `paddingTop` on its wrapper, or content will render inside the nav band on short viewports.

Pass `links` / `panel` to override the default IA.
