import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-person-css', `
.jwt-person { display: block; text-decoration: none; color: inherit; cursor: pointer; }
.jwt-person__frame {
  aspect-ratio: 3 / 4; overflow: hidden; border-radius: var(--radius-md);
  background: var(--bg-fill); position: relative;
}
.jwt-person__frame img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: grayscale(1) contrast(1.02);
  transition: transform 800ms var(--ease-soft), filter var(--dur-med) var(--ease-soft);
}
.jwt-person:hover .jwt-person__frame img { transform: scale(1.04); filter: grayscale(0); }
.jwt-person__body { padding-top: 0.9rem; display: flex; flex-direction: column; gap: 0.3rem; }
.jwt-person__studio {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-accent);
}
.jwt-person__name {
  font-family: var(--font-display); font-weight: var(--fw-light); font-size: 1.375rem;
  line-height: 1.15; letter-spacing: var(--track-tight); color: var(--text-primary);
  transition: color var(--dur-fast) var(--ease-soft);
}
.jwt-person:hover .jwt-person__name { color: var(--text-accent); }
.jwt-person__role { font: var(--text-sm); color: var(--text-secondary); }
/* Initials mark when no portrait has been supplied */
.jwt-person__initials {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: var(--fw-light);
  font-size: clamp(2.5rem, 6vw, 3.75rem); letter-spacing: 0.06em;
  color: var(--tan-600); background: var(--bg-fill);
  transition: background var(--dur-med) var(--ease-soft), color var(--dur-med) var(--ease-soft);
}
.jwt-person:hover .jwt-person__initials { background: var(--bg-sunken); color: var(--tan-700); }
`);

/**
 * Team member card: duotone-to-colour portrait on hover, studio label,
 * name and role. Used in the project-page Team block and an About page.
 */
export function PersonCard({ src, alt, name, role, studio, href = '#', className = '', ...rest }) {
  const initials = (name || '').split(/\s+/).filter(Boolean).slice(0, 2)
    .map((w) => w[0]).join('').toUpperCase();
  return (
    <a href={href} className={`jwt-person ${className}`.trim()} {...rest}>
      <div className="jwt-person__frame">
        {src
          ? <img src={src} alt={alt || name} loading="lazy" />
          : <span className="jwt-person__initials" aria-hidden="true">{initials}</span>}
      </div>
      <div className="jwt-person__body">
        {studio && <span className="jwt-person__studio">{studio}</span>}
        <span className="jwt-person__name">{name}</span>
        {role && <span className="jwt-person__role">{role}</span>}
      </div>
    </a>
  );
}
