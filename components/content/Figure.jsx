import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-figure-css', `
.jwt-figure { margin: 0; display: block; }
.jwt-figure__frame {
  position: relative; overflow: hidden; background: var(--bg-fill);
  border-radius: var(--_radius, var(--radius-md));
}
.jwt-figure__img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform var(--dur-slow) var(--ease-soft);
}
.jwt-figure--zoom:hover .jwt-figure__img { transform: scale(1.04); }
.jwt-figure__cap {
  margin-top: 0.85rem; display: flex; justify-content: space-between; gap: 1rem;
  font-family: var(--font-sans); font-size: 0.875rem; color: var(--text-secondary);
}
.jwt-figure__cap-meta { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.04em; }
`);

const RADII = { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', none: '0' };

/**
 * Image frame with consistent ratio, soft radius and optional caption / hover zoom.
 * The base unit for all JWT photography.
 */
export function Figure({
  src, alt = '', ratio = '4 / 3', radius = 'md', zoom = false,
  caption, meta, shadow = false, className = '', style, ...rest
}) {
  return (
    <figure className={`jwt-figure ${zoom ? 'jwt-figure--zoom' : ''} ${className}`.trim()} style={style} {...rest}>
      <div
        className="jwt-figure__frame"
        style={{
          aspectRatio: ratio,
          '--_radius': RADII[radius] || RADII.md,
          boxShadow: shadow ? 'var(--shadow-image)' : 'none',
        }}
      >
        <img className="jwt-figure__img" src={src} alt={alt} loading="lazy" />
      </div>
      {(caption || meta) && (
        <figcaption className="jwt-figure__cap">
          <span>{caption}</span>
          {meta && <span className="jwt-figure__cap-meta">{meta}</span>}
        </figcaption>
      )}
    </figure>
  );
}
