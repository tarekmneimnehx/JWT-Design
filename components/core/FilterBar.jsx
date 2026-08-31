import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-filterbar-css', `
.jwt-filterbar {
  display: flex; align-items: center; flex-wrap: wrap; gap: 0 var(--space-7);
  border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  padding: var(--space-4) 0;
}
.jwt-filterbar__legend {
  font: var(--label); letter-spacing: var(--track-eyebrow); text-transform: uppercase;
  color: var(--text-primary); margin-right: var(--space-2);
}
.jwt-filter { position: relative; }
.jwt-filter__btn {
  display: inline-flex; align-items: baseline; gap: 0.7rem;
  background: none; border: none; padding: 0.4rem 0; cursor: pointer;
  font-family: var(--font-sans); color: var(--text-primary);
}
.jwt-filter__name {
  font: var(--label); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted);
}
.jwt-filter__value {
  font-family: var(--font-display); font-size: 1.25rem; font-weight: var(--fw-light);
  letter-spacing: var(--track-tight); line-height: 1;
  border-bottom: 1px solid var(--line); padding-bottom: 3px;
  transition: border-color var(--dur-fast) var(--ease-soft);
}
.jwt-filter__btn:hover .jwt-filter__value { border-bottom-color: var(--char-900); }
.jwt-filter__chev { transition: transform var(--dur-fast) var(--ease-soft); align-self: center; }
.jwt-filter--open .jwt-filter__chev { transform: rotate(180deg); }
.jwt-filter__menu {
  position: absolute; top: calc(100% + 10px); left: 0; z-index: 40;
  min-width: 230px; background: var(--bg-elevated);
  border: 1px solid var(--line); border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md); padding: 0.4rem; margin: 0;
  list-style: none; max-height: 320px; overflow-y: auto;
}
.jwt-filter__opt {
  display: block; width: 100%; text-align: left; background: none; border: none;
  cursor: pointer; padding: 0.6rem 0.75rem; border-radius: var(--radius-xs);
  font: var(--text-sm); color: var(--text-secondary);
  transition: background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft);
}
.jwt-filter__opt:hover { background: var(--bg-sunken); color: var(--text-primary); }
.jwt-filter__opt--on { color: var(--text-primary); font-weight: var(--fw-medium); }
.jwt-filter__opt--on::after { content: ' ·'; color: var(--tan-600); }
.jwt-filterbar__right { margin-left: auto; display: flex; align-items: center; gap: var(--space-5); }
.jwt-filterbar__count { font: var(--label); letter-spacing: var(--track-label); text-transform: uppercase; color: var(--text-muted); }
.jwt-filterbar__clear {
  background: none; border: none; cursor: pointer; padding: 0;
  font: var(--label); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-accent); border-bottom: 1px solid transparent;
}
.jwt-filterbar__clear:hover { border-bottom-color: var(--tan-600); }
@media (max-width: 720px) {
  .jwt-filterbar { gap: var(--space-4) var(--space-6); }
  .jwt-filterbar__right { margin-left: 0; width: 100%; }
}
`);

const Chev = () => (
  <svg className="jwt-filter__chev" width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden="true">
    <path d="M1 1l4.5 4L10 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** A single labelled dropdown within the FilterBar. */
export function FilterSelect({ name, value, options = [], allLabel = 'All', onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const all = [allLabel, ...options];
  return (
    <div className={`jwt-filter ${open ? 'jwt-filter--open' : ''}`} ref={ref}>
      <button type="button" className="jwt-filter__btn" onClick={() => setOpen((o) => !o)}
        aria-expanded={open} aria-haspopup="listbox">
        <span className="jwt-filter__name">{name}</span>
        <span className="jwt-filter__value">{value || allLabel}</span>
        <Chev />
      </button>
      {open && (
        <ul className="jwt-filter__menu" role="listbox">
          {all.map((o) => (
            <li key={o}>
              <button type="button" role="option" aria-selected={o === (value || allLabel)}
                className={`jwt-filter__opt ${o === (value || allLabel) ? 'jwt-filter__opt--on' : ''}`}
                onClick={() => { onChange && onChange(o === allLabel ? allLabel : o); setOpen(false); }}>
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * The projects filter rail: a "Filter By" legend, one or more labelled
 * dropdowns, a live result count and a clear action.
 */
export function FilterBar({ legend = 'Filter By', filters = [], count, total, onClear, className = '', ...rest }) {
  const dirty = filters.some((f) => f.value && f.value !== (f.allLabel || 'All'));
  return (
    <div className={`jwt-filterbar ${className}`.trim()} {...rest}>
      <span className="jwt-filterbar__legend">{legend}</span>
      {filters.map((f) => (
        <FilterSelect key={f.name} name={f.name} value={f.value} options={f.options}
          allLabel={f.allLabel} onChange={f.onChange} />
      ))}
      <div className="jwt-filterbar__right">
        {count != null && (
          <span className="jwt-filterbar__count">
            {count}{total != null && count !== total ? ` of ${total}` : ''} {count === 1 ? 'Project' : 'Projects'}
          </span>
        )}
        {dirty && onClear && (
          <button type="button" className="jwt-filterbar__clear" onClick={onClear}>Clear</button>
        )}
      </div>
    </div>
  );
}
