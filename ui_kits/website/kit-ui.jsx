/* JWT website kit — shared layout primitives. Exposed on window.JWT_KIT. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65;
  const { Eyebrow } = NS;

  /* Responsive grids.
     The screens set their column tracks in inline styles, which cannot carry
     media queries — so every multi-column grid in this kit also gets the
     `jwt-rg` class and these breakpoints collapse it. `!important` is required
     precisely because an inline style otherwise beats a class rule.

     `jwt-rg` only ever collapses to ONE column, so it is safe on a grid whose
     authored track list is already single (e.g. ProjectPage's statement block,
     which is one column for projects without imagery). The intermediate
     two-column step is opt-in via `jwt-rg-multi` and belongs only on grids that
     are genuinely 3- or 4-up — a blanket rule there would silently rewrite
     single-track grids into two columns and leave half the row empty. */
  (function injectGrid() {
    if (typeof document === 'undefined' || document.getElementById('jwt-kit-grid')) return;
    const s = document.createElement('style');
    s.id = 'jwt-kit-grid';
    s.textContent = `
@media (max-width: 1024px) {
  .jwt-rg-multi { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
}
@media (max-width: 720px) {
  .jwt-rg { grid-template-columns: minmax(0, 1fr) !important; gap: var(--space-6) !important; }
}
/* Long uppercase meta rows wrap rather than force horizontal scroll. */
@media (max-width: 720px) {
  .jwt-hero__meta, .jwt-metastack { flex-wrap: wrap !important; }
}
/* "How we work" process cards — image warms from grayscale to colour, gently
   zooms and lifts on hover; the title shifts to the accent. */
.jwt-process { display: block; transition: transform var(--dur-med) var(--ease-soft); }
.jwt-process__media {
  position: relative; aspect-ratio: 4 / 3; overflow: hidden;
  border-radius: var(--radius-md); background: var(--bg-fill);
  box-shadow: none; transition: box-shadow var(--dur-med) var(--ease-soft);
}
.jwt-process__media img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: grayscale(1) contrast(1.02);
  transition: transform 800ms var(--ease-soft), filter 600ms var(--ease-soft);
}
.jwt-process__title { transition: color var(--dur-fast) var(--ease-soft); }
.jwt-process:hover { transform: translateY(-4px); }
.jwt-process:hover .jwt-process__media { box-shadow: var(--shadow-image); }
.jwt-process:hover .jwt-process__media img { filter: grayscale(0) contrast(1.02); transform: scale(1.06); }
.jwt-process:hover .jwt-process__title { color: var(--text-accent); }
@media (hover: none) {
  /* Touch devices: show colour by default, no hover lift. */
  .jwt-process__media img { filter: none; }
  .jwt-process:hover { transform: none; }
}`;
    document.head.appendChild(s);
  })();

  const Container = ({ children, narrow, style }) => (
    <div style={{
      maxWidth: narrow ? 'var(--content-narrow)' : 'var(--content-max)',
      margin: '0 auto', padding: '0 var(--gutter)', ...style,
    }}>{children}</div>
  );

  const BG = {
    page: 'var(--bg-page)', sunken: 'var(--bg-sunken)', fill: 'var(--bg-fill)',
    elevated: 'var(--bg-elevated)', contrast: 'var(--bg-contrast)', slate: 'var(--bg-slate)',
  };

  const Section = ({ children, bg = 'page', pad = 'lg', id, style }) => {
    const padY = pad === 'xs' ? 'var(--space-6)'
      : pad === 'sm' ? 'var(--space-7)'
      : pad === 'md' ? 'var(--space-8)' : 'var(--space-10)';
    return (
      <section id={id} style={{ background: BG[bg] || bg, padding: `${padY} 0`, ...style }}>
        <Container>{children}</Container>
      </section>
    );
  };

  /* The large light intro paragraph that follows a page title (HBA's subhead device). */
  const Lede = ({ children, tone = 'default', max = '56ch', style }) => (
    <p style={{
      font: 'var(--lede)',
      color: tone === 'inverse' ? 'rgba(255,255,255,0.84)' : 'var(--text-secondary)',
      maxWidth: max, textWrap: 'pretty', margin: 0, ...style,
    }}>{children}</p>
  );

  /* Page masthead: eyebrow + serif title + lede, used at the top of inner pages. */
  const PageHead = ({ eyebrow, title, lede, tone = 'default', children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {eyebrow && <Eyebrow dot tone={tone === 'inverse' ? 'inverse' : 'accent'}>{eyebrow}</Eyebrow>}
      {title && <h1 style={{
        font: 'var(--display-2xl)', letterSpacing: 'var(--track-tight)',
        color: tone === 'inverse' ? 'var(--paper)' : 'var(--text-primary)',
        maxWidth: '16ch', textWrap: 'balance', margin: 0,
      }}>{title}</h1>}
      {lede && <Lede tone={tone}>{lede}</Lede>}
      {children}
    </div>
  );

  const SectionHead = ({ eyebrow, title, intro, align = 'left', tone = 'default', max = '22ch', actions }) => {
    const inverse = tone === 'inverse';
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '1.1rem',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align, marginBottom: 'var(--space-7)',
      }}>
        {eyebrow && <Eyebrow dot tone={inverse ? 'inverse' : 'accent'}>{eyebrow}</Eyebrow>}
        {title && <h2 style={{
          font: 'var(--display-xl)', letterSpacing: 'var(--track-tight)',
          color: inverse ? 'var(--paper)' : 'var(--text-primary)',
          maxWidth: max, textWrap: 'balance', margin: 0,
        }}>{title}</h2>}
        {intro && <p style={{
          font: 'var(--text-lg)', color: inverse ? 'rgba(255,255,255,0.78)' : 'var(--text-secondary)',
          maxWidth: '52ch', margin: 0,
        }}>{intro}</p>}
        {actions && <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>{actions}</div>}
      </div>
    );
  };

  /* Sticky navbars are position:fixed — inner pages need this spacer so content
     starts below the bar. Hero pages use the overlay variant and don't. */
  const NavSpacer = () => <div style={{ height: '72px' }} />;

  window.JWT_KIT = {
    Container, Section, SectionHead, Lede, PageHead, NavSpacer,
    navLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Expertise', href: '#expertise', panel: true },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    logoWhite: '../../assets/logo-white.svg',
    logoCharcoal: '../../assets/logo-charcoal.svg',
  };
})();
