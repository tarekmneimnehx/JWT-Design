Full-viewport project stage. Each project contributes a **main** frame that sits full bleed, followed by frames marked `inset` that rest centred over it at the same aspect ratio. Scrolling eases each next frame in; when the next slide is a main frame it grows to full bleed and the next project's sequence begins. Title, CTA and meta stay pinned.

```jsx
<HeroShowcase
  onSelect={navigate}
  slides={[
    { src: a1, title: 'Ronaldo Muchawar', meta: ['JWT Dubai', 'Interiors'], href: '#project/ronaldo-muchawar' },
    { src: a2, title: 'Ronaldo Muchawar', meta: ['JWT Dubai', 'Stair atrium'], href: '#…', inset: true },
    { src: a3, title: 'Ronaldo Muchawar', meta: ['JWT Dubai', 'Dining'], href: '#…', inset: true },
    { src: b1, title: 'Next Project', meta: ['JWT Beirut', 'Architectural'], href: '#…' },
  ]} />
```

Leave `inset` off each project's first slide. Every frame is preloaded on mount and a cross-fade is gated on the incoming image having decoded, so a panel never animates in empty. The component reserves `slides.length × 100vh` of scroll and sticks the viewport for that distance — don't wrap it in a container with `overflow: hidden` or the sticky breaks. `rest` sets how far inset the resting frames sit and `edge` the extra distance they ease in from; each is a **single** value applied to both axes, because `inset: n%` resolves horizontally against the parent's width and vertically against its height — split them and the inset frames stop matching the stage's aspect ratio. Dots on the right jump between slides.

Keep source images near the stage's rendered size (~1600px wide). The component preloads *all* slides, so oversized originals multiply into a heavy first paint.
