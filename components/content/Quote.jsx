import React from 'react';

/**
 * Editorial testimonial / pull-quote in display serif, with optional attribution.
 * Use on Home and case studies. `tone="inverse"` for dark sections.
 */
export function Quote({ children, author, role, tone = 'default', size = 'lg', className = '', style, ...rest }) {
  const inverse = tone === 'inverse';
  const quoteFont = size === 'xl' ? 'var(--display-xl)' : size === 'md' ? 'var(--display-md)' : 'var(--display-lg)';
  return (
    <figure
      className={className}
      style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '1.75rem', ...style }}
      {...rest}
    >
      <span aria-hidden="true" style={{
        font: 'var(--display-2xl)', fontWeight: 200, lineHeight: 0.5, height: '0.5em',
        color: 'var(--tan-600)', display: 'block',
      }}>“</span>
      <blockquote style={{
        margin: 0, font: quoteFont,
        color: inverse ? 'var(--paper)' : 'var(--text-primary)',
        letterSpacing: 'var(--track-tight)', textWrap: 'balance',
      }}>
        {children}
      </blockquote>
      {(author || role) && (
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {author && <span style={{
            font: 'var(--text-base)', fontWeight: 'var(--fw-medium)',
            color: inverse ? 'var(--paper)' : 'var(--text-primary)',
          }}>{author}</span>}
          {role && <span style={{
            font: 'var(--label)', letterSpacing: 'var(--track-wide)', textTransform: 'uppercase',
            color: inverse ? 'var(--tan-200)' : 'var(--text-muted)',
          }}>{role}</span>}
        </figcaption>
      )}
    </figure>
  );
}
