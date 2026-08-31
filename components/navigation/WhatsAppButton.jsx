import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-whatsapp-css', `
.jwt-wa {
  position: fixed; right: var(--fab-offset); bottom: var(--fab-offset); z-index: 80;
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--fab-size); height: var(--fab-size);
  border-radius: var(--radius-pill);
  background: var(--char-900); color: var(--paper);
  font-family: var(--font-sans); font-size: 0.875rem; font-weight: var(--fw-medium);
  letter-spacing: 0.02em; text-decoration: none;
  box-shadow: var(--shadow-lg);
  transition: background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft);
}
.jwt-wa:hover { background: var(--tan-700); }
.jwt-wa:active { transform: scale(0.98); }
.jwt-wa:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 3px; }
.jwt-wa svg { display: block; flex: 0 0 auto; }
@media (max-width: 600px) {
  .jwt-wa { --fab-size: 52px; --fab-offset: 16px; }
}
`);

/**
 * Floating WhatsApp enquiry button — the default contact route in the UAE.
 * Opens wa.me with an optional prefilled message.
 */
export function WhatsAppButton({
  phone, label = 'WhatsApp us',
  message = 'Hello JWT, I would like to talk about a project.',
  className = '', ...rest
}) {
  const href = `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  return (
    <a className={`jwt-wa ${className}`.trim()} href={href}
       target="_blank" rel="noopener noreferrer" aria-label={label} title={label} {...rest}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"/>
      </svg>
    </a>
  );
}
