The projects filter rail — hairline-bounded row with "Filter By", labelled dropdowns, a live result count and a clear action. Drives the Projects index.

```jsx
<FilterBar
  count={shown.length} total={projects.length}
  onClear={() => { setDiscipline('All'); setSector('All'); }}
  filters={[
    { name: 'Expertise', value: discipline, options: ['Interiors','Architectural','Lighting'], onChange: setDiscipline },
    { name: 'Sector', value: sector, options: ['Residential','Hospitality','Offices','Spa & Wellness'], onChange: setSector },
  ]} />
```

`FilterSelect` is exported separately if you need a single dropdown. Menus close on outside click.
