Scroll-reveal motion. `Reveal` fades + rises any content once it enters view; `RevealImage` clips a frame while the photo settles from a slight over-scale (use for full-bleed imagery). Both respect `prefers-reduced-motion`.

```jsx
<Reveal><h2>Selected projects</h2></Reveal>

{cards.map((c, i) => (
  <Reveal key={c.id} delay={i * 110}><ProjectCard {...c} /></Reveal>
))}

<RevealImage style={{ aspectRatio: '16 / 9' }}>
  <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</RevealImage>
```

Stagger siblings with `delay={i * 110}`.

For custom reveal behaviour, use the **`InView`** render-prop component:

```jsx
<InView>{({ ref, inView }) => (
  <span ref={ref}>{inView ? <Counter to={84} /> : '0'}</span>
)}</InView>
```

The underlying `useInView()` hook is module-scope only — lowercase exports are **not** placed on `window.<Namespace>`, so from a consuming project reach it through `InView`, not the bundle namespace.

**Fails open by design.** Visibility is detected with a rAF-throttled `getBoundingClientRect` check on scroll/resize, **not** IntersectionObserver. IO proved unreliable in embedded and preview contexts: it delivers its initial non-intersecting callback and then never fires again on scroll, leaving every below-the-fold element stuck at `opacity: 0` — and because those wrappers contain `loading="lazy"` images, the imagery never downloads either. The rect check always runs once on mount and cannot fail closed. Don't swap this back to IO.
