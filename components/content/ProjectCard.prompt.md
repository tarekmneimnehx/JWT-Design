Project tile for the Projects index and "selected work" rows. Composes `MetaList` for the discipline / sector / region / year run.

```jsx
<ProjectCard
  src={url} title="Marsa Villa"
  discipline="Interiors" sector="Residential" region="Dubai" year={2024}
  badge={<Badge tone="ink">Featured</Badge>}
  href="#project/marsa-villa" />
```

Image zooms under a thin veil, the title warms to taupe, and a "View project" cue fades in on hover. Set `ratio` to vary grid rhythm (`3/4`, `1/1`, `4/5`).
