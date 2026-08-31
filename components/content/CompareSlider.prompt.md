Before / after image comparison slider — the draggable wipe between a render and the finished room. (Common names: image comparison slider, before-after slider, image reveal slider.)

```jsx
<CompareSlider
  before={renderUrl} after={photoUrl}
  beforeLabel="Visualisation" afterLabel="As built"
  start={50} ratio="16 / 9" />
```

Drag anywhere on the image, or focus it and use the left/right arrow keys. Both images must be the **same view from the same camera position**, or the wipe reads as two unrelated photos rather than one room before and after.

Set `start` below 50 to lead with the render, above 50 to lead with the finished space.
