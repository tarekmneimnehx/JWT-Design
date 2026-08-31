import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-facttable-css', `
.jwt-facts { display: grid; gap: 0; }
.jwt-facts__row {
  display: grid; grid-template-columns: var(--_labelw, 11rem) 1fr;
  gap: 1.5rem; padding: 0.95rem 0; border-top: 1px solid var(--line-subtle);
}
.jwt-facts__row:last-child { border-bottom: 1px solid var(--line-subtle); }
.jwt-facts__label {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted); padding-top: 0.15rem;
}
.jwt-facts__value { font: var(--text-base); color: var(--text-primary); }
.jwt-facts--stacked .jwt-facts__row { grid-template-columns: 1fr; gap: 0.35rem; }
@media (max-width: 600px) { .jwt-facts__row { grid-template-columns: 1fr; gap: 0.35rem; } }
`);

/**
 * Label / value credit table — the project-page fact list
 * (Client, Location, Studio, Expertise, Completed, Sector, Photography).
 * Rows with an empty value are skipped.
 */
export function FactTable({ rows = [], labelWidth = '11rem', stacked = false, className = '', style, ...rest }) {
  const shown = rows.filter((r) => r && r.value != null && r.value !== '');
  return (
    <dl
      className={`jwt-facts ${stacked ? 'jwt-facts--stacked' : ''} ${className}`.trim()}
      style={{ '--_labelw': labelWidth, margin: 0, ...style }}
      {...rest}
    >
      {shown.map((r) => (
        <div className="jwt-facts__row" key={r.label}>
          <dt className="jwt-facts__label">{r.label}</dt>
          <dd className="jwt-facts__value" style={{ margin: 0 }}>
            {Array.isArray(r.value) ? r.value.join(', ') : r.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
