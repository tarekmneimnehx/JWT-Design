import React from 'react';

/**
 * Small tracked mono label that introduces a section ("Our Expertise", "01 — Discovery").
 * The signature JWT typographic device. Optionally prefixes the brand taupe dot.
 */
export function Eyebrow({ children, dot = false, tone = 'accent', as = 'div', className = '', style, ...rest }) {
  const Tag = as;
  const color = tone === 'accent' ? 'var(--text-accent)'
    : tone === 'muted' ? 'var(--text-muted)'
    : tone === 'inverse' ? 'var(--tan-200)'
    : 'var(--text-primary)';
  return (
    <Tag
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.6em',
        font: 'var(--label)', letterSpacing: 'var(--track-eyebrow)',
        textTransform: 'uppercase', color, ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{
          width: '6px', height: '6px', borderRadius: '999px',
          background: 'var(--tan-600)', flex: '0 0 auto',
        }} />
      )}
      {children}
    </Tag>
  );
}
