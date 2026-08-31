import React from 'react';

/**
 * Large serif statistic with a tracked label beneath — "10 / Years", "84 / Projects".
 * Used in stat rows on About and Home.
 */
export function StatBlock({ value, label, suffix, align = 'start', tone = 'default', className = '', style, ...rest }) {
  const inverse = tone === 'inverse';
  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, ...style }}
      {...rest}
    >
      <div style={{
        font: 'var(--display-lg)',
        color: inverse ? 'var(--paper)' : 'var(--text-primary)',
        lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: '0.1em',
      }}>
        {value}
        {suffix && (
          <span style={{ font: 'var(--display-sm)', color: 'var(--text-accent)' }}>{suffix}</span>
        )}
      </div>
      <div style={{
        font: 'var(--label)', letterSpacing: 'var(--track-eyebrow)', textTransform: 'uppercase',
        color: inverse ? 'var(--tan-200)' : 'var(--text-secondary)',
      }}>{label}</div>
    </div>
  );
}
