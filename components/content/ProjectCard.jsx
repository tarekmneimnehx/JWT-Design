import React from 'react';
import { MetaList } from '../core/MetaList.jsx';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-projectcard-css', `
.jwt-pcard { display: block; text-decoration: none; color: inherit; cursor: pointer; }
.jwt-pcard__frame {
  position: relative; overflow: hidden; border-radius: var(--radius-md);
  background: var(--bg-fill); aspect-ratio: var(--_ratio, 4 / 5);
}
.jwt-pcard__img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 800ms var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__img { transform: scale(1.05); }
.jwt-pcard__badge { position: absolute; top: 1rem; left: 1rem; }
/* Thin veil that deepens on hover, HBA-style */
.jwt-pcard__veil {
  position: absolute; inset: 0; background: rgba(44,46,53,0);
  transition: background var(--dur-med) var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__veil { background: rgba(44,46,53,0.10); }
.jwt-pcard__body { padding-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
.jwt-pcard__title {
  font-family: var(--font-display); font-weight: var(--fw-light);
  font-size: 1.5rem; line-height: 1.2; color: var(--text-primary);
  letter-spacing: var(--track-tight);
  transition: color var(--dur-fast) var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__title { color: var(--text-accent); }
.jwt-pcard__view {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted); display: inline-flex; align-items: center; gap: 0.45rem;
  opacity: 0; transform: translateY(-3px);
  transition: opacity var(--dur-med) var(--ease-soft), transform var(--dur-med) var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__view { opacity: 1; transform: translateY(0); }

/* Index tile — for projects we hold no imagery for yet. Reads as an
   intentional editorial index rather than a broken or stock-filled card. */
.jwt-pcard__placeholder {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  justify-content: space-between; padding: 1.4rem;
  background: var(--bg-fill);
  border: 1px solid var(--line-subtle);
  border-radius: var(--radius-md);
  transition: background var(--dur-med) var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__placeholder { background: var(--bg-sunken); }
.jwt-pcard__ph-mark { width: 9px; height: 9px; border-radius: 999px; background: var(--tan-600); }
.jwt-pcard__ph-note {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted);
}
/* Visualisation stamp — every JWT image is a 3D render, stated not implied. */
.jwt-pcard__viz {
  position: absolute; bottom: 0.85rem; left: 0.85rem;
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--paper); background: rgba(44,46,53,0.55);
  padding: 0.3rem 0.6rem; border-radius: var(--radius-xs);
  backdrop-filter: blur(3px);
}
`);

/**
 * Project tile: image with hover zoom, a tracked meta run
 * (discipline / sector / region / year) and the project title.
 */
export function ProjectCard({
  src, alt, title,
  discipline, sector, region, year,
  location, category,           // legacy aliases
  ratio = '16 / 9',
  visualisation = false,
  badge, href = '#', showView = true, className = '', ...rest
}) {
  const meta = [discipline || category, sector, region || location, year];
  return (
    <a href={href} className={`jwt-pcard ${className}`.trim()} {...rest}>
      <div className="jwt-pcard__frame" style={{ '--_ratio': ratio }}>
        {src ? (
          <>
            <img className="jwt-pcard__img" src={src} alt={alt || title} loading="lazy" />
            <span className="jwt-pcard__veil" />
            {visualisation && <span className="jwt-pcard__viz">Visualisation</span>}
          </>
        ) : (
          <div className="jwt-pcard__placeholder">
            <span className="jwt-pcard__ph-mark" />
            <span className="jwt-pcard__ph-note">Imagery in preparation</span>
          </div>
        )}
        {badge && <div className="jwt-pcard__badge">{badge}</div>}
      </div>
      <div className="jwt-pcard__body">
        <MetaList items={meta} />
        <h3 className="jwt-pcard__title">{title}</h3>
        {showView && (
          <span className="jwt-pcard__view">
            View project
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
              <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </a>
  );
}
