The project-page gallery — cross-fading images with an italic caption and an "n / N" counter beneath. Arrow keys work when focused.

```jsx
<Carousel ratio="16 / 10" slides={[
  { src: a, caption: 'Suite Living' },
  { src: b, caption: 'Suite Dining' },
  { src: c, caption: 'Terrace' },
]} />
```

Use one carousel per room group on a case study rather than one long grid. `showDots={false}` to rely on the counter alone.
