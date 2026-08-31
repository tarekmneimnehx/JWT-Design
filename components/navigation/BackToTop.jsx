import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-backtotop-css', `
.jwt-btt {
  position: fixed; right: var(--space-5); bottom: var(--space-5); z-index: 60;
  width: 46px; height: 46px; border-radius: 999px; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--char-900); color: var(--paper); border: none;
  box-shadow: var(--shadow-md);
  opacity: 0; visibility: hidden; transform: translateY(10px);
  transition: opacity var(--dur-med) var(--ease-soft),
              transform var(--dur-med) var(--ease-soft),
              visibility var(--dur-med) var(--ease-soft),
              background var(--dur-fast) var(--ease-soft);
}
.jwt-btt--on { opacity: 1; visibility: visible; transform: none; }
.jwt-btt:hover { background: var(--tan-600); color: var(--char-900); }
.jwt-btt svg { display: block; }
`);

/** Appears after scrolling past `showAfter` px and returns the page to the top. */
export function BackToTop({ showAfter = 700, label = 'Back to top', className = '', ...rest }) {
  const [on, setOn] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setOn(window.scrollY > showAfter);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);

  return (
    <button
      type="button"
      aria-label={label}
      className={`jwt-btt ${on ? 'jwt-btt--on' : ''} ${className}`.trim()}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      {...rest}
    >
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
        <path d="M7 15V2M1.5 7.5 7 2l5.5 5.5" stroke="currentColor" strokeWidth="1.4"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
