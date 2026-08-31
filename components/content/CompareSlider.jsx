import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-compare-css', `
.jwt-compare {
  position: relative; overflow: hidden; width: 100%;
  aspect-ratio: var(--_ratio, 16 / 9);
  background: var(--bg-fill); user-select: none;
  touch-action: pan-y;
  cursor: ew-resize;
}
/* Fill mode: an explicit height wins over the aspect ratio (full-screen hero). */
.jwt-compare--fill { aspect-ratio: auto; height: var(--_h, 100vh); }
.jwt-compare__side { position: absolute; inset: 0; }
.jwt-compare__side img {
  position: absolute; inset: 0;
  width: 100%; height: 100%; object-fit: cover; display: block;
}
/* The "after" side is revealed by clipping from the left edge to the handle. */
.jwt-compare__side--after { clip-path: inset(0 0 0 var(--_pos, 50%)); }
.jwt-compare__handle {
  position: absolute; top: 0; bottom: 0; left: var(--_pos, 50%);
  width: 2px; background: rgba(255,255,255,0.92); z-index: 4;
  transform: translateX(-1px); pointer-events: none;
  box-shadow: 0 0 18px rgba(44,46,53,0.35);
}
.jwt-compare__grip {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 52px; height: 52px; border-radius: 999px;
  background: rgba(255,255,255,0.94);
  display: flex; align-items: center; justify-content: center; gap: 3px;
  box-shadow: 0 6px 24px rgba(44,46,53,0.28);
}
.jwt-compare__grip svg { display: block; color: var(--char-900); }
.jwt-compare__tag {
  position: absolute; bottom: 1.1rem; z-index: 3;
  font-family: var(--font-sans); font-size: 0.7rem; font-weight: var(--fw-medium);
  letter-spacing: var(--track-label); text-transform: uppercase;
  color: #FFFFFF; background: rgba(44,46,53,0.55);
  padding: 0.35rem 0.7rem; border-radius: var(--radius-xs);
  backdrop-filter: blur(3px); pointer-events: none;
}
.jwt-compare__tag--before { left: 1.1rem; }
/* Inset past any fixed bottom-right button (see --fab-safe). */
.jwt-compare__tag--after { right: calc(1.1rem + var(--_safe, 0px)); }
.jwt-compare:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 3px; }
@media (prefers-reduced-motion: no-preference) {
  .jwt-compare--idle .jwt-compare__handle,
  .jwt-compare--idle .jwt-compare__side--after { transition: none; }
}
`);

/**
 * Before / after image comparison slider. Drag the handle (or use the arrow keys)
 * to wipe between two images of the same view — a render and the built room.
 */
export function CompareSlider({
  before, after,
  beforeLabel = 'Render', afterLabel = 'Built',
  beforeAlt = '', afterAlt = '',
  start = 50, ratio = '16 / 9', height, safeRight,
  children,
  className = '', style, ...rest
}) {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState(start);
  const dragging = React.useRef(false);

  const setFromClientX = React.useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  React.useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const up = () => { dragging.current = false; };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [setFromClientX]);

  const down = (e) => {
    dragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(x);
  };

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); setPos((p) => Math.max(0, p - 4)); }
    if (e.key === 'ArrowRight') { e.preventDefault(); setPos((p) => Math.min(100, p + 4)); }
  };

  return (
    <div
      ref={ref}
      className={`jwt-compare ${height ? 'jwt-compare--fill' : ''} ${className}`.trim()}
      style={{ '--_pos': `${pos}%`, '--_ratio': ratio, '--_h': height, '--_safe': safeRight, ...style }}
      onMouseDown={down}
      onTouchStart={down}
      onKeyDown={onKey}
      tabIndex={0}
      role="slider"
      aria-label={`${beforeLabel} to ${afterLabel} comparison`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      {...rest}
    >
      <div className="jwt-compare__side jwt-compare__side--before">
        <img src={before} alt={beforeAlt || beforeLabel} draggable="false" />
      </div>
      <div className="jwt-compare__side jwt-compare__side--after">
        <img src={after} alt={afterAlt || afterLabel} draggable="false" />
      </div>

      {beforeLabel && <span className="jwt-compare__tag jwt-compare__tag--before">{beforeLabel}</span>}
      {afterLabel && <span className="jwt-compare__tag jwt-compare__tag--after">{afterLabel}</span>}

      <div className="jwt-compare__handle">
        <span className="jwt-compare__grip">
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
            <path d="M7.5 1.5 3 6l4.5 4.5M12.5 1.5 17 6l-4.5 4.5"
              stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {children}
    </div>
  );
}
