Dark site footer on the ink ground. Columns default to Expertise / Sectors / Studio, matching the site IA.

```jsx
<Footer logoSrc="assets/logo-white.svg"
        email="studio@jwtdesignstudio.com" location="Dubai | Beirut"
        onNavigate={navigate}
        social={[{ label: 'Instagram', href: 'https://instagram.com/jwtdesignstudio/' }]} />
```

Pass `onNavigate` so `#` links route client-side. Link entries accept a plain string or `{label, href}`.
