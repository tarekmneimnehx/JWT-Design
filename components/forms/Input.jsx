import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-field-css', `
.jwt-field { display: flex; flex-direction: column; gap: 0.5rem; }
.jwt-field__label {
  font-family: var(--font-mono); font-size: 0.7rem; font-weight: var(--fw-medium);
  letter-spacing: var(--track-eyebrow); text-transform: uppercase; color: var(--text-secondary);
}
.jwt-field__control {
  font-family: var(--font-sans); font-size: 1rem; font-weight: var(--fw-regular);
  color: var(--text-primary); background: transparent;
  border: none; border-bottom: 1px solid var(--line);
  padding: 0.65rem 0.1rem; width: 100%;
  transition: border-color var(--dur-fast) var(--ease-soft);
}
.jwt-field__control::placeholder { color: var(--text-muted); }
.jwt-field__control:focus { outline: none; border-bottom-color: var(--char-900); }
.jwt-field__control:focus-visible { outline: none; }
textarea.jwt-field__control { resize: vertical; min-height: 7rem; line-height: 1.6; }
select.jwt-field__control {
  appearance: none; cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5 6 6l5-4.5' stroke='%232B2A28' stroke-width='1.3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 0.1rem center; padding-right: 1.5rem;
}
.jwt-field--boxed .jwt-field__control {
  border: 1px solid var(--line); border-radius: var(--radius-sm);
  padding: 0.8rem 0.9rem; background: var(--bg-elevated);
}
.jwt-field--boxed .jwt-field__control:focus { border-color: var(--char-900); }
`);

let uid = 0;
function useId(prefix) {
  const ref = React.useRef();
  if (!ref.current) ref.current = `${prefix}-${++uid}`;
  return ref.current;
}

/** Underlined (default) or boxed text input with an uppercase mono label. */
export function Input({ label, boxed = false, type = 'text', className = '', ...rest }) {
  const id = useId('jwt-input');
  return (
    <div className={`jwt-field ${boxed ? 'jwt-field--boxed' : ''} ${className}`.trim()}>
      {label && <label className="jwt-field__label" htmlFor={id}>{label}</label>}
      <input id={id} type={type} className="jwt-field__control" {...rest} />
    </div>
  );
}

/** Multi-line input that matches Input styling. */
export function Textarea({ label, boxed = false, rows = 4, className = '', ...rest }) {
  const id = useId('jwt-textarea');
  return (
    <div className={`jwt-field ${boxed ? 'jwt-field--boxed' : ''} ${className}`.trim()}>
      {label && <label className="jwt-field__label" htmlFor={id}>{label}</label>}
      <textarea id={id} rows={rows} className="jwt-field__control" {...rest} />
    </div>
  );
}

/** Native select styled with the brand chevron. Pass <option>s as children. */
export function Select({ label, boxed = false, children, className = '', ...rest }) {
  const id = useId('jwt-select');
  return (
    <div className={`jwt-field ${boxed ? 'jwt-field--boxed' : ''} ${className}`.trim()}>
      {label && <label className="jwt-field__label" htmlFor={id}>{label}</label>}
      <select id={id} className="jwt-field__control" {...rest}>{children}</select>
    </div>
  );
}
