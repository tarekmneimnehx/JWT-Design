import React from 'react';

/**
 * Hairline divider. Optionally centers a small mark (the brand dot or a label)
 * for a more editorial section break.
 */
export function Divider({ label, dot = false, tone = 'default', className = '', style, ...rest }) {
  const lineColor = tone === 'inverse' ? 'var(--line-inverse)' : 'var(--line)';
  const line = { flex: 1, height: '1px', background: lineColor };
  const hasCenter = dot || label;
  return (
    <div
      className={className}
      role="separator"
      style={{ display: 'flex', alignItems: 'center', gap: hasCenter ? '1.25rem' : 0, ...style }}
      {...rest}
    >
      <span style={line} />
      {dot && (
        <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: 'var(--tan-600)' }} />
      )}
      {label && (
        <span style={{
          font: 'var(--label)', letterSpacing: 'var(--track-eyebrow)', textTransform: 'uppercase',
          color: tone === 'inverse' ? 'var(--paper)' : 'var(--text-muted)',
        }}>{label}</span>
      )}
      {hasCenter && <span style={line} />}
    </div>
  );
}
