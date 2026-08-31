import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-share-css', `
.jwt-share { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
.jwt-share__legend {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted);
}
.jwt-share__links { display: flex; align-items: center; gap: 0.5rem; }
.jwt-share__link {
  width: 38px; height: 38px; border-radius: 999px; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid var(--line); background: transparent; color: var(--text-secondary);
  text-decoration: none;
  transition: border-color var(--dur-fast) var(--ease-soft),
              color var(--dur-fast) var(--ease-soft),
              background var(--dur-fast) var(--ease-soft);
}
.jwt-share__link:hover { border-color: var(--char-900); color: var(--char-900); background: var(--bg-sunken); }
.jwt-share__toast {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-accent);
}
`);

/* Simple glyphs matching the 1.4px inline-SVG house style. */
const ICONS = {
  facebook: <path d="M9.5 5H11V2.6h-1.8C7.2 2.6 6.4 3.9 6.4 5.6V7H5v2.4h1.4V17h2.6V9.4h1.9L11.2 7H9V5.9c0-.6.2-.9.5-.9Z" fill="currentColor" />,
  linkedin: <><path d="M4.6 7.5h2.3V16H4.6zM5.75 3.4a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Z" fill="currentColor" /><path d="M9.1 7.5h2.2v1.16h.03c.31-.58 1.06-1.19 2.19-1.19 2.34 0 2.77 1.5 2.77 3.46V16h-2.3v-3.6c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.93-1.38 1.9V16H9.1Z" fill="currentColor" /></>,
  whatsapp: <path d="M10 3a7 7 0 0 0-6 10.6L3.2 17l3.5-.85A7 7 0 1 0 10 3Zm3.3 9.6c-.16.44-.9.85-1.25.88-.35.03-.66.14-2.23-.6-1.88-.9-3.02-2.9-3.11-3.03-.09-.13-.72-1.01-.7-1.9.02-.9.5-1.32.68-1.5a.7.7 0 0 1 .5-.22h.35c.11 0 .27-.04.41.33.15.4.5 1.35.55 1.45.04.1.07.2.01.33-.07.13-.1.21-.2.33l-.3.35c-.09.1-.19.2-.08.4.1.19.47.8 1 1.28.68.62 1.25.81 1.43.9.18.09.29.08.4-.04.11-.13.47-.55.6-.74.13-.19.25-.15.42-.09.17.06 1.1.52 1.29.61.19.1.31.14.36.22.04.09.04.5-.12.94Z" fill="currentColor" />,
  link: <path d="M8.2 11.8a2.8 2.8 0 0 1 0-3.96l2-2a2.8 2.8 0 0 1 3.96 3.96l-.9.9M11.8 8.2a2.8 2.8 0 0 1 0 3.96l-2 2A2.8 2.8 0 0 1 5.84 10.2l.9-.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />,
};

const Icon = ({ name }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">{ICONS[name]}</svg>
);

/**
 * Share row for project pages: Facebook, LinkedIn, WhatsApp and a copy-link
 * action that confirms inline.
 */
export function ShareRow({ url, title = '', legend = 'Share', networks = ['facebook', 'linkedin', 'whatsapp', 'link'], className = '', ...rest }) {
  const [copied, setCopied] = React.useState(false);
  const href = url || (typeof window !== 'undefined' ? window.location.href : '');
  const enc = encodeURIComponent(href);
  const encT = encodeURIComponent(title);

  const HREFS = {
    facebook: `https://www.facebook.com/share.php?u=${enc}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}`,
    whatsapp: `https://wa.me/?text=${encT ? encT + '%20' : ''}${enc}`,
  };

  const copy = async () => {
    try {
      if (navigator.clipboard) await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) { /* clipboard unavailable */ }
  };

  return (
    <div className={`jwt-share ${className}`.trim()} {...rest}>
      <span className="jwt-share__legend">{legend}</span>
      <div className="jwt-share__links">
        {networks.map((nw) => nw === 'link' ? (
          <button key={nw} type="button" className="jwt-share__link" onClick={copy} aria-label="Copy link">
            <Icon name="link" />
          </button>
        ) : (
          <a key={nw} className="jwt-share__link" href={HREFS[nw]} target="_blank"
            rel="noopener noreferrer" aria-label={`Share on ${nw}`}>
            <Icon name={nw} />
          </a>
        ))}
      </div>
      {copied && <span className="jwt-share__toast">Link copied</span>}
    </div>
  );
}
