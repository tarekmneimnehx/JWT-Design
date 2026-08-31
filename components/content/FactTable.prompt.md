The project credit table — hairline label/value rows for Client, Location, Studio, Expertise, Completed, Sector, Photography.

```jsx
<FactTable rows={[
  { label: 'Client', value: 'Private' },
  { label: 'Location', value: 'Dubai, UAE' },
  { label: 'Expertise', value: ['Interiors', 'Lighting'] },
  { label: 'Completed', value: 2024 },
  { label: 'Photography', value: 'Studio credit' },
]} />
```

Arrays are joined with commas; rows with no value are dropped, so you can pass a full schema and let it self-trim. `stacked` for narrow columns.
