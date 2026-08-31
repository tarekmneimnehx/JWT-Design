import React from 'react';
import { Button } from '../forms/Button.jsx';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-navbar-css', `
.jwt-nav {
  position: relative; z-index: 30; width: 100%;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.4rem var(--gutter); gap: 2rem;
  font-family: var(--font-sans);
}
.jwt-nav--overlay { position: absolute; top: 0; left: 0; }
.jwt-nav--solid { background: var(--bg-page); border-bottom: 1px solid var(--line); }
/* Sticky + condense-on-scroll */
.jwt-nav--fixed {
  position: fixed; top: 0; left: 0;
  transition: padding var(--dur-med) var(--ease-soft),
              background var(--dur-med) var(--ease-soft),
              border-color var(--dur-med) var(--ease-soft),
              color var(--dur-med) var(--ease-soft);
}
.jwt-nav--condensed {
  padding-top: 0.7rem; padding-bottom: 0.7rem;
  background: var(--bg-page); border-bottom: 1px solid var(--line);
}
.jwt-nav__logo { transition: height var(--dur-med) var(--ease-soft); }
.jwt-nav--condensed .jwt-nav__logo { height: 21px; }
.jwt-nav__brand { display: inline-flex; align-items: center; gap: 0.7rem; text-decoration: none; }
.jwt-nav__logo { height: 26px; width: auto; display: block; }
.jwt-nav__wordmark {
  display: inline-flex; align-items: center; gap: 0.28em;
  font-weight: var(--fw-semibold); font-size: 1.4rem; letter-spacing: 0.02em;
}
.jwt-nav__dot { width: 7px; height: 7px; border-radius: 999px; background: var(--tan-600); }
.jwt-nav__links { display: flex; align-items: stretch; gap: 2rem; }
.jwt-nav__item { position: relative; display: flex; align-items: center; }
.jwt-nav__link {
  font-size: 0.8125rem; font-weight: var(--fw-medium); letter-spacing: var(--track-label);
  text-transform: uppercase; color: inherit; text-decoration: none;
  position: relative; padding: 0.5rem 0; background: none; border: none; cursor: pointer;
  font-family: var(--font-sans); display: inline-flex; align-items: center; gap: 0.45rem;
  opacity: 0.82; transition: opacity var(--dur-fast) var(--ease-soft);
}
.jwt-nav__link::after {
  content: ''; position: absolute; left: 0; bottom: 0.15rem; height: 1px; width: 0;
  background: currentColor; transition: width var(--dur-med) var(--ease-soft);
}
.jwt-nav__link:hover { opacity: 1; color: inherit; }
.jwt-nav__link:hover::after, .jwt-nav__link--active::after { width: 100%; }
.jwt-nav__link--active { opacity: 1; }
.jwt-nav__chev { transition: transform var(--dur-fast) var(--ease-soft); }
.jwt-nav__item--open .jwt-nav__chev { transform: rotate(180deg); }

/* Expertise mega panel */
.jwt-nav__panel {
  position: absolute; top: calc(100% + 0.6rem); left: 50%; transform: translateX(-50%);
  background: var(--bg-elevated); border: 1px solid var(--line);
  border-radius: var(--radius-sm); box-shadow: var(--shadow-lg);
  padding: var(--space-5) var(--space-6); display: flex; gap: var(--space-7);
  z-index: 50; color: var(--char-900);
}
.jwt-nav__col { min-width: 160px; }
.jwt-nav__col h5 {
  margin: 0 0 0.9rem; font: var(--label-sm); letter-spacing: var(--track-eyebrow);
  text-transform: uppercase; color: var(--text-accent); font-weight: var(--fw-medium);
}
.jwt-nav__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.55rem; }
.jwt-nav__col a {
  font-family: var(--font-display); font-size: 1.125rem; font-weight: var(--fw-light);
  color: var(--text-primary); letter-spacing: var(--track-tight); text-decoration: none;
  transition: color var(--dur-fast) var(--ease-soft);
}
.jwt-nav__col a:hover { color: var(--text-accent); }

.jwt-nav__right { display: flex; align-items: center; gap: 1.5rem; }
.jwt-nav--light, .jwt-nav--solid { color: var(--char-900); }
.jwt-nav--overlay-tone { color: var(--paper); }
.jwt-nav__menu { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; color: inherit; }
.jwt-nav__menu svg { display: block; }

/* Mobile menu overlay */
.jwt-navmenu {
  position: fixed; inset: 0; z-index: 90; background: var(--bg-page); color: var(--char-900);
  display: flex; flex-direction: column; padding: 1.4rem var(--gutter) var(--space-7);
  opacity: 0; visibility: hidden;
  transition: opacity var(--dur-med) var(--ease-soft), visibility var(--dur-med) var(--ease-soft);
}
.jwt-navmenu--on { opacity: 1; visibility: visible; }
.jwt-navmenu__top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.jwt-navmenu__logo { height: 26px; width: auto; display: block; }
.jwt-navmenu__close {
  background: none; border: none; cursor: pointer; padding: 0.5rem; color: var(--char-900);
  display: inline-flex;
}
.jwt-navmenu__body {
  margin-top: var(--space-6); display: flex; flex-direction: column; gap: var(--space-6);
  overflow-y: auto; flex: 1;
}
.jwt-navmenu__links { display: flex; flex-direction: column; }
.jwt-navmenu__link {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 7vw, 2.5rem); line-height: 1.2; font-weight: var(--fw-extralight);
  letter-spacing: var(--track-tight); color: var(--text-primary);
  background: none; border: none; border-bottom: 1px solid var(--line-subtle);
  padding: 0.7rem 0; text-align: left; cursor: pointer; width: 100%;
  font-family: var(--font-display);
}
.jwt-navmenu__link:hover, .jwt-navmenu__link--active { color: var(--text-accent); }
.jwt-navmenu__cols { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); }
.jwt-navmenu__col h5 {
  margin: 0 0 0.9rem; font: var(--label-sm); letter-spacing: var(--track-eyebrow);
  text-transform: uppercase; color: var(--text-accent); font-weight: var(--fw-medium);
}
.jwt-navmenu__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
.jwt-navmenu__col a { font: var(--text-base); color: var(--text-secondary); text-decoration: none; }
.jwt-navmenu__col a:hover { color: var(--text-accent); }
.jwt-navmenu__foot { margin-top: auto; padding-top: var(--space-5); display: flex; flex-direction: column; gap: 1rem; }
.jwt-navmenu__meta { font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase; color: var(--text-muted); }
@media (min-width: 1001px) { .jwt-navmenu { display: none; } }
@media (max-width: 1000px) {
  .jwt-nav__links { display: none; }
  .jwt-nav__menu { display: inline-flex; }
  .jwt-nav__right .jwt-btn { display: none; }
}
`);

const DEFAULT_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise', panel: true },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const DEFAULT_PANEL = [
  { title: 'Disciplines', links: [
    { label: 'Interiors', href: '#expertise/interiors' },
    { label: 'Architectural', href: '#expertise/architectural' },
    { label: 'Lighting', href: '#expertise/lighting' },
    { label: 'Landscape', href: '#expertise/landscape' },
  ]},
  { title: 'Sectors', links: [
    { label: 'Residential', href: '#projects/residential' },
    { label: 'Hospitality', href: '#projects/hospitality' },
    { label: 'Offices', href: '#projects/offices' },
    { label: 'Spa & Wellness', href: '#projects/spa-wellness' },
  ]},
];

const Chev = () => (
  <svg className="jwt-nav__chev" width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
    <path d="M1 1l3.5 3L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Marketing top bar. `overlay` for transparent-over-hero (cream text),
 * `solid` for a bordered cream bar on inner pages. The Expertise item opens a
 * two-column panel of disciplines and sectors.
 */
export function Navbar({
  logoSrc, logoSrcCondensed, brand = 'JWT', links = DEFAULT_LINKS, panel = DEFAULT_PANEL, activeHref,
  variant = 'solid', cta = 'Enquire', ctaHref = '#contact', sticky = false,
  onMenu, onNavigate, className = '', ...rest
}) {
  const [openPanel, setOpenPanel] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const itemRef = React.useRef(null);

  React.useEffect(() => {
    if (!sticky) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sticky]);

  React.useEffect(() => {
    if (!openPanel) return;
    const onDoc = (e) => { if (itemRef.current && !itemRef.current.contains(e.target)) setOpenPanel(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [openPanel]);

  /* Lock page scroll and allow Escape while the mobile menu is open. */
  React.useEffect(() => {
    if (!openMenu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setOpenMenu(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [openMenu]);

  /* Over a hero the bar is cream-on-photo; once condensed it becomes a solid cream bar. */
  const onPhoto = variant === 'overlay' && !(sticky && scrolled);
  const tone = onPhoto ? 'jwt-nav--overlay-tone' : 'jwt-nav--light';
  const pos = sticky ? 'jwt-nav--fixed' : (variant === 'overlay' ? 'jwt-nav--overlay' : 'jwt-nav--solid');
  const condensed = sticky && scrolled ? 'jwt-nav--condensed' : '';
  const shownLogo = (!onPhoto && logoSrcCondensed) ? logoSrcCondensed : logoSrc;
  const go = (href) => (e) => {
    if (onNavigate) { e.preventDefault(); setOpenPanel(false); setOpenMenu(false); onNavigate(href); }
    else setOpenMenu(false);
  };

  const panelLinks = panel.reduce((acc, c) => acc.concat(c.links), []);

  return (
    <>
    <nav className={`jwt-nav ${pos} ${tone} ${condensed} ${className}`.trim()} {...rest}>
      <a className="jwt-nav__brand" href="#home" aria-label={brand} onClick={go('#home')}>
        {shownLogo
          ? <img className="jwt-nav__logo" src={shownLogo} alt={brand} />
          : <span className="jwt-nav__wordmark"><span className="jwt-nav__dot" />{brand}</span>}
      </a>

      <div className="jwt-nav__links">
        {links.map((l) => {
          const active = activeHref === l.href;
          if (!l.panel) {
            return (
              <div className="jwt-nav__item" key={l.href}>
                <a href={l.href} onClick={go(l.href)}
                   className={`jwt-nav__link ${active ? 'jwt-nav__link--active' : ''}`.trim()}>{l.label}</a>
              </div>
            );
          }
          return (
            <div className={`jwt-nav__item ${openPanel ? 'jwt-nav__item--open' : ''}`} key={l.href} ref={itemRef}>
              <button type="button" aria-expanded={openPanel}
                className={`jwt-nav__link ${active ? 'jwt-nav__link--active' : ''}`.trim()}
                onClick={() => setOpenPanel((o) => !o)}>
                {l.label}<Chev />
              </button>
              {openPanel && (
                <div className="jwt-nav__panel">
                  {panel.map((col) => (
                    <div className="jwt-nav__col" key={col.title}>
                      <h5>{col.title}</h5>
                      <ul>
                        {col.links.map((cl) => (
                          <li key={cl.href}><a href={cl.href} onClick={go(cl.href)}>{cl.label}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="jwt-nav__right">
        <Button href={ctaHref} onClick={go(ctaHref)}
          variant={onPhoto ? 'accent' : 'primary'} size="sm" uppercase>
          {cta}
        </Button>
        <button className="jwt-nav__menu" aria-label="Open menu" aria-expanded={openMenu}
          onClick={() => { setOpenMenu(true); if (onMenu) onMenu(); }}>
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <path d="M0 1h22M0 7h22M0 13h14" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
    </nav>

    {/* Mobile menu — the only navigation under 1000px */}
    <div className={`jwt-navmenu ${openMenu ? 'jwt-navmenu--on' : ''}`}
      role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!openMenu}>
      <div className="jwt-navmenu__top">
        <a href="#home" aria-label={brand} onClick={go('#home')}>
          {(logoSrcCondensed || logoSrc)
            ? <img className="jwt-navmenu__logo" src={logoSrcCondensed || logoSrc} alt={brand} />
            : <span className="jwt-nav__wordmark"><span className="jwt-nav__dot" />{brand}</span>}
        </a>
        <button className="jwt-navmenu__close" aria-label="Close menu" onClick={() => setOpenMenu(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="jwt-navmenu__body">
        <div className="jwt-navmenu__links">
          {links.map((l) => (
            <button key={l.href} type="button"
              className={`jwt-navmenu__link ${activeHref === l.href ? 'jwt-navmenu__link--active' : ''}`.trim()}
              onClick={go(l.href)}>{l.label}</button>
          ))}
        </div>

        <div className="jwt-navmenu__cols">
          {panel.map((col) => (
            <div className="jwt-navmenu__col" key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((cl) => (
                  <li key={cl.href}><a href={cl.href} onClick={go(cl.href)}>{cl.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="jwt-navmenu__foot">
        <Button href={ctaHref} onClick={go(ctaHref)} variant="primary" size="lg" uppercase withArrow>
          {cta}
        </Button>
      </div>
    </div>
    </>
  );
}
