Floating WhatsApp enquiry button — sits fixed at the bottom-right of every page. WhatsApp is the default business contact route in the UAE, so this carries real weight next to the enquiry form.

```jsx
<WhatsAppButton phone="971400000000" label="WhatsApp us" />
```

Icon-only circular button, `--fab-size` across, pinned `--fab-offset` from the bottom-right. `label` is its accessible name and hover tooltip, not visible text — keeping the footprint a known constant so `--fab-safe` (derived from those two tokens) always reserves the right amount of room. Any bottom-right pinned chrome must inset by `var(--fab-safe)` or this button will paint over it. Pass `message` to change the prefilled text.
