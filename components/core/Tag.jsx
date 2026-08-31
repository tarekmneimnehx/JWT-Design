import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-tag-css', `
.jwt-tag {
  display: inline-flex; align-items: center; gap: 0.45em;
  font-family: var(--font-sans); font-size: 0.8125rem; font-weight: var(--fw-regular);
  letter-spacing: 0.01em; line-height: 1;
  padding: 0.5rem 0.9rem; border-radius: var(--radius-pill);
  border: 1px solid var(--line); color: var(--text-secondary);
  background: transparent; cursor: default; user-select: none;
  transition: all var(--dur-fast) var(--ease-soft);
}
.jwt-tag--button { cursor: pointer; }
.jwt-tag--button:hover { border-color: var(--char-900); color: var(--text-primary); }
.jwt-tag--active {
  background: var(--char-900); border-color: var(--char-900); color: var(--paper);
}
.jwt-tag--solid {
  background: var(--bg-fill); border-color: transparent; color: var(--text-secondary);
}
.jwt-tag__count { color: var(--text-muted); font-variant-numeric: tabular-nums; }
.jwt-tag--active .jwt-tag__count { color: var(--tan-200); }
`);

/**
 * Category / filter pill. Use as a static label or an interactive filter
 * (`onClick` + `active`). Common on the portfolio gallery.
 */
export function Tag({ children, active = false, solid = false, count, className = '', onClick, ...rest }) {
  const cls = [
    'jwt-tag',
    onClick ? 'jwt-tag--button' : '',
    active ? 'jwt-tag--active' : '',
    solid && !active ? 'jwt-tag--solid' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} onClick={onClick} role={onClick ? 'button' : undefined} {...rest}>
      {children}
      {count != null && <span className="jwt-tag__count">{count}</span>}
    </span>
  );
}
