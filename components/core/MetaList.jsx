import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-metalist-css', `
.jwt-meta {
  display: flex; flex-wrap: wrap; align-items: center;
  font: var(--label-sm); letter-spacing: var(--track-label);
  text-transform: uppercase; color: var(--text-muted); gap: 0 0.55rem;
}
.jwt-meta--inverse { color: rgba(255,255,255,0.72); }
.jwt-meta--lg { font: var(--label); letter-spacing: var(--track-label); }
.jwt-meta__sep { opacity: 0.45; }
.jwt-meta__item--accent { color: var(--text-accent); }
.jwt-meta--inverse .jwt-meta__item--accent { color: var(--tan-200); }
`);

/**
 * The project meta run — a single tracked uppercase line of
 * discipline / sector / region / year, separated by thin slashes.
 * The first item is accented so the discipline reads first.
 */
export function MetaList({ items = [], tone = 'default', size = 'sm', accentFirst = true, separator = '/', className = '', ...rest }) {
  const list = items.filter(Boolean);
  return (
    <div
      className={`jwt-meta ${tone === 'inverse' ? 'jwt-meta--inverse' : ''} ${size === 'lg' ? 'jwt-meta--lg' : ''} ${className}`.trim()}
      {...rest}
    >
      {list.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="jwt-meta__sep" aria-hidden="true">{separator}</span>}
          <span className={i === 0 && accentFirst ? 'jwt-meta__item--accent' : undefined}>{it}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
