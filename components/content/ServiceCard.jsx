import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-service-css', `
.jwt-service {
  display: flex; flex-direction: column; gap: 1rem;
  padding: 2rem 0; border-top: 1px solid var(--line);
  transition: border-color var(--dur-fast) var(--ease-soft);
}
.jwt-service__index {
  font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: var(--track-eyebrow);
  color: var(--text-accent);
}
.jwt-service__title {
  font-family: var(--font-display); font-weight: var(--fw-light); font-size: 1.75rem;
  line-height: 1.1; color: var(--text-primary); letter-spacing: var(--track-tight);
}
.jwt-service__desc {
  font-family: var(--font-sans); font-size: 1rem; line-height: 1.65; color: var(--text-secondary);
  max-width: 46ch;
}
.jwt-service__tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.25rem; }
.jwt-service__tag {
  font-family: var(--font-sans); font-size: 0.8125rem; color: var(--text-secondary);
  border: 1px solid var(--line); border-radius: var(--radius-pill); padding: 0.35rem 0.8rem;
}
`);

/**
 * Service line item (full home interiors, fit-out, styling…). Index number,
 * serif title, description, optional sub-deliverable tags.
 */
export function ServiceCard({ index, title, description, items = [], className = '', ...rest }) {
  return (
    <div className={`jwt-service ${className}`.trim()} {...rest}>
      {index != null && <span className="jwt-service__index">{index}</span>}
      <h3 className="jwt-service__title">{title}</h3>
      {description && <p className="jwt-service__desc">{description}</p>}
      {items.length > 0 && (
        <div className="jwt-service__tags">
          {items.map((it, i) => <span key={i} className="jwt-service__tag">{it}</span>)}
        </div>
      )}
    </div>
  );
}
