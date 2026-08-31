import React from 'react';

const TONES = {
  neutral: { bg: 'var(--bg-fill)', fg: 'var(--text-secondary)' },
  accent:  { bg: 'var(--tan-200)', fg: 'var(--char-900)' },
  ink:     { bg: 'var(--char-900)', fg: 'var(--paper)' },
  outline: { bg: 'transparent', fg: 'var(--text-secondary)', bd: 'var(--line)' },
};

/**
 * Tiny status / meta label — e.g. "Completed", "2024", "Featured".
 * Smaller and squarer than Tag; not interactive.
 */
export function Badge({ children, tone = 'neutral', className = '', style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center',
        font: 'var(--label)', letterSpacing: 'var(--track-wide)', textTransform: 'uppercase',
        padding: '0.3rem 0.55rem', borderRadius: 'var(--radius-xs)',
        background: t.bg, color: t.fg,
        border: t.bd ? `1px solid ${t.bd}` : '1px solid transparent',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
