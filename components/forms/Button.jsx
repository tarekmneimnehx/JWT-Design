import React from 'react';

/* Inject component CSS once per bundle load so we get real :hover/:active/:focus. */
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-button-css', `
.jwt-btn {
  --_bg: var(--char-900); --_fg: var(--paper); --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.6em;
  font-family: var(--font-sans); font-weight: var(--fw-medium);
  letter-spacing: 0.02em; line-height: 1; white-space: nowrap;
  border: 1px solid var(--_bd); background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-sm); cursor: pointer;
  transition: background var(--dur-fast) var(--ease-soft),
              color var(--dur-fast) var(--ease-soft),
              border-color var(--dur-fast) var(--ease-soft),
              transform var(--dur-fast) var(--ease-soft);
  text-decoration: none;
}
.jwt-btn:active { transform: translateY(0.5px) scale(0.992); }
.jwt-btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.jwt-btn[disabled] { opacity: 0.42; pointer-events: none; }
.jwt-btn--sm { font-size: 0.8125rem; padding: 0.6rem 1.1rem; }
.jwt-btn--md { font-size: 0.875rem; padding: 0.85rem 1.6rem; }
.jwt-btn--lg { font-size: 0.95rem; padding: 1.05rem 2.1rem; }
.jwt-btn--uppercase { text-transform: uppercase; letter-spacing: 0.14em; font-size: 0.75rem; }

.jwt-btn--primary { --_bg: var(--char-900); --_fg: var(--paper); }
.jwt-btn--primary:hover { --_bg: var(--char-800); }
.jwt-btn--accent { --_bg: var(--tan-600); --_fg: var(--char-900); }
.jwt-btn--accent:hover { --_bg: var(--tan-600); }
.jwt-btn--outline { --_bg: transparent; --_fg: var(--char-900); --_bd: var(--char-900); }
.jwt-btn--outline:hover { --_bg: var(--char-900); --_fg: var(--paper); }
/* For dark / photographic grounds */
.jwt-btn--outline-inverse { --_bg: transparent; --_fg: var(--paper); --_bd: rgba(255,255,255,0.5); }
.jwt-btn--outline-inverse:hover { --_bg: var(--paper); --_fg: var(--char-900); --_bd: var(--paper); }
.jwt-btn--ghost { --_bg: transparent; --_fg: var(--char-900); --_bd: transparent; }
.jwt-btn--ghost:hover { --_bg: var(--paper-3); }
.jwt-btn--link {
  --_bg: transparent; --_fg: currentColor; --_bd: transparent;
  padding-left: 0; padding-right: 0; border-radius: 0;
  border-bottom: 1px solid var(--line); border-bottom-left-radius: 0;
}
.jwt-btn--link:hover { border-bottom-color: currentColor; }
.jwt-btn__arrow { transition: transform var(--dur-med) var(--ease-soft); flex: 0 0 auto; }
.jwt-btn:hover .jwt-btn__arrow { transform: translateX(3px); }
`);

const Arrow = () => (
  <svg className="jwt-btn__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h9M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * JWT primary action. Renders an <a> when `href` is set, otherwise a <button>.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  uppercase = false,
  withArrow = false,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = [
    'jwt-btn',
    `jwt-btn--${variant}`,
    `jwt-btn--${size}`,
    uppercase ? 'jwt-btn--uppercase' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Arrow />}
    </>
  );

  if (href && !disabled) {
    return <a href={href} className={cls} {...rest}>{content}</a>;
  }
  return <button type="button" className={cls} disabled={disabled} {...rest}>{content}</button>;
}
