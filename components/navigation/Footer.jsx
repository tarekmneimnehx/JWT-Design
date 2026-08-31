import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-footer-css', `
.jwt-footer { background: var(--bg-contrast); color: var(--paper); font-family: var(--font-sans); }
.jwt-footer__inner { max-width: var(--content-max); margin: 0 auto; padding: var(--space-9) var(--gutter) var(--space-6); }
.jwt-footer__top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 1.1fr; gap: 2.5rem; }
@media (max-width: 1000px) { .jwt-footer__top { grid-template-columns: 1fr 1fr 1fr; gap: 2.5rem; } }
@media (max-width: 620px) { .jwt-footer__top { grid-template-columns: 1fr 1fr; } }
.jwt-footer__brand-row { display: flex; flex-direction: column; align-items: flex-start; gap: 1.25rem; }
/* align-self stops the img being stretched to the column width by the flex
   default (align-items: stretch), which floats the SVG artwork off-centre. */
.jwt-footer__logo { height: 30px; width: auto; align-self: flex-start; }
.jwt-footer__wordmark { display: inline-flex; align-items: center; gap: 0.3em; font-weight: var(--fw-semibold); font-size: 1.6rem; letter-spacing: 0.02em; }
.jwt-footer__dot { width: 8px; height: 8px; border-radius: 999px; background: var(--tan-600); }
.jwt-footer__tag { font-family: var(--font-display); font-weight: var(--fw-extralight); font-size: 1.5rem; line-height: 1.35; color: var(--paper); max-width: 22ch; }
.jwt-footer__col h4 { font: var(--label-sm); font-weight: var(--fw-medium); letter-spacing: var(--track-eyebrow); text-transform: uppercase; color: var(--tan-200); margin: 0 0 1.1rem; }
.jwt-footer__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.7rem; }
.jwt-footer__col a { color: rgba(255,255,255,0.8); font-size: 0.9375rem; text-decoration: none; transition: color var(--dur-fast) var(--ease-soft); }
.jwt-footer__col a:hover { color: var(--tan-200); }
.jwt-footer__rule { height: 1px; background: var(--line-inverse); margin: var(--space-7) 0 var(--space-5); }
.jwt-footer__bottom { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.jwt-footer__copy { font-size: 0.8125rem; color: rgba(255,255,255,0.55); }
.jwt-footer__social { display: flex; gap: 1.5rem; }
.jwt-footer__social a { font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase; color: rgba(255,255,255,0.7); text-decoration: none; }
.jwt-footer__social a:hover { color: var(--paper); }
`);

const COLS = [
  { title: 'Expertise', links: [
    { label: 'Interiors', href: '#expertise/interiors' },
    { label: 'Architectural', href: '#expertise/architectural' },
    { label: 'Lighting', href: '#expertise/lighting' },
  ]},
  { title: 'Sectors', links: [
    { label: 'Residential', href: '#projects/residential' },
    { label: 'Hospitality', href: '#projects/hospitality' },
    { label: 'Offices', href: '#projects/offices' },
    { label: 'Spa & Wellness', href: '#projects/spa-wellness' },
  ]},
  { title: 'Studio', links: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]},
];

/** Accepts either a plain string or a {label, href} object per link. */
function normalize(l) {
  return typeof l === 'string' ? { label: l, href: '#' } : l;
}

/**
 * Site footer on the dark ink ground: brand lockup + italic tagline, link
 * columns, contact block and social row.
 */
export function Footer({
  logoSrc, brand = 'JWT', tagline = 'Turning vision into reality.',
  columns = COLS, email = 'studio@jwtdesignstudio.com', location = 'Dubai | Beirut',
  social = [{ label: 'Instagram', href: '#' }],
  onNavigate, className = '', ...rest
}) {
  const year = new Date().getFullYear();
  const go = (href) => (e) => {
    if (onNavigate && href && href.startsWith('#')) { e.preventDefault(); onNavigate(href); }
  };
  return (
    <footer className={`jwt-footer ${className}`.trim()} {...rest}>
      <div className="jwt-footer__inner">
        <div className="jwt-footer__top">
          <div className="jwt-footer__brand-row">
            {logoSrc
              ? <img className="jwt-footer__logo" src={logoSrc} alt={brand} />
              : <span className="jwt-footer__wordmark"><span className="jwt-footer__dot" />{brand}</span>}
            <p className="jwt-footer__tag">{tagline}</p>
          </div>
          {columns.map((c) => (
            <div className="jwt-footer__col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map(normalize).map((l) => (
                  <li key={l.label}><a href={l.href} onClick={go(l.href)}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="jwt-footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${email}`}>{email}</a></li>
              <li><a href="#about" onClick={go('#about')}>{location}</a></li>
              <li><a href="#contact" onClick={go('#contact')}>Start a project →</a></li>
            </ul>
          </div>
        </div>
        <div className="jwt-footer__rule" />
        <div className="jwt-footer__bottom">
          <span className="jwt-footer__copy">© {year} {brand} Design Studio. All rights reserved.</span>
          <div className="jwt-footer__social">
            {social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
