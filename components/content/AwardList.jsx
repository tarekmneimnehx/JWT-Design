import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-awards-css', `
.jwt-awards { display: flex; flex-direction: column; }
.jwt-award {
  display: grid; grid-template-columns: 7rem 1fr auto;
  gap: 1.5rem; align-items: baseline;
  padding: 1.35rem 0; border-top: 1px solid var(--line-subtle);
}
.jwt-awards .jwt-award:last-child { border-bottom: 1px solid var(--line-subtle); }
.jwt-award__result {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-accent);
}
.jwt-award__body { display: flex; flex-direction: column; gap: 0.25rem; }
.jwt-award__title {
  font-family: var(--font-display); font-size: 1.25rem; font-weight: var(--fw-light);
  letter-spacing: var(--track-tight); color: var(--text-primary);
}
.jwt-award__name { font: var(--text-sm); color: var(--text-secondary); }
.jwt-award__year {
  font: var(--label-sm); letter-spacing: var(--track-label); color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}
@media (max-width: 640px) {
  .jwt-award { grid-template-columns: 1fr auto; }
  .jwt-award__result { grid-column: 1 / -1; }
}
`);

/**
 * Awards & accolades list — result / project + award name / year rows,
 * separated by hairlines.
 */
export function AwardList({ items = [], className = '', ...rest }) {
  return (
    <div className={`jwt-awards ${className}`.trim()} {...rest}>
      {items.map((a, i) => (
        <div className="jwt-award" key={i}>
          <span className="jwt-award__result">{a.result}</span>
          <span className="jwt-award__body">
            <span className="jwt-award__title">{a.project}</span>
            {a.award && <span className="jwt-award__name">{a.award}</span>}
          </span>
          <span className="jwt-award__year">{a.year}</span>
        </div>
      ))}
    </div>
  );
}
