import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-carousel-css', `
.jwt-carousel { position: relative; }
.jwt-carousel__viewport {
  position: relative; overflow: hidden; border-radius: var(--radius-md);
  background: var(--bg-fill); aspect-ratio: var(--_ratio, 16 / 10);
}
.jwt-carousel__slide {
  position: absolute; inset: 0; opacity: 0;
  transition: opacity 700ms var(--ease-soft);
  pointer-events: none;
}
.jwt-carousel__slide--on { opacity: 1; pointer-events: auto; }
.jwt-carousel__slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
.jwt-carousel__nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 44px; height: 44px; border-radius: 999px; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.9); color: var(--char-900); border: none;
  transition: background var(--dur-fast) var(--ease-soft), opacity var(--dur-fast) var(--ease-soft);
}
.jwt-carousel__nav:hover { background: var(--paper); }
.jwt-carousel__nav--prev { left: var(--space-4); }
.jwt-carousel__nav--next { right: var(--space-4); }
.jwt-carousel__nav[disabled] { opacity: 0.35; pointer-events: none; }
.jwt-carousel__bar {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: 1.5rem; margin-top: 0.9rem;
}
.jwt-carousel__cap {
  font-family: var(--font-display); font-weight: var(--fw-light); font-size: 1.125rem;
  color: var(--text-secondary); letter-spacing: var(--track-tight);
}
.jwt-carousel__count {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted); font-variant-numeric: tabular-nums; white-space: nowrap;
}
.jwt-carousel__dots { display: flex; gap: 0.4rem; margin-top: 0.9rem; }
.jwt-carousel__dot {
  width: 22px; height: 2px; border: none; padding: 0; cursor: pointer;
  background: var(--line); transition: background var(--dur-fast) var(--ease-soft);
}
.jwt-carousel__dot--on { background: var(--tan-600); }
`);

const Chevron = ({ dir }) => (
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true"
    style={{ transform: dir === 'prev' ? 'scaleX(-1)' : 'none' }}>
    <path d="M2 1l6 7-6 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Captioned image carousel with an italic caption and an "n / N" counter —
 * the project-page gallery device. Slides cross-fade; arrow keys work when focused.
 */
export function Carousel({ slides = [], ratio = '16 / 10', loop = true, showDots = true, className = '', ...rest }) {
  const [i, setI] = React.useState(0);
  const n = slides.length;
  if (!n) return null;

  const go = (next) => {
    if (loop) setI((next + n) % n);
    else setI(Math.max(0, Math.min(n - 1, next)));
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
  };

  const current = slides[i];

  return (
    <div className={`jwt-carousel ${className}`.trim()} onKeyDown={onKey} tabIndex={0}
      role="group" aria-roledescription="carousel" {...rest}>
      <div className="jwt-carousel__viewport" style={{ '--_ratio': ratio }}>
        {slides.map((s, idx) => (
          <div key={idx} className={`jwt-carousel__slide ${idx === i ? 'jwt-carousel__slide--on' : ''}`}
            aria-hidden={idx !== i}>
            <img src={s.src} alt={s.alt || s.caption || ''} loading={idx === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
        {n > 1 && (
          <>
            <button type="button" aria-label="Previous image"
              className="jwt-carousel__nav jwt-carousel__nav--prev"
              disabled={!loop && i === 0} onClick={() => go(i - 1)}><Chevron dir="prev" /></button>
            <button type="button" aria-label="Next image"
              className="jwt-carousel__nav jwt-carousel__nav--next"
              disabled={!loop && i === n - 1} onClick={() => go(i + 1)}><Chevron dir="next" /></button>
          </>
        )}
      </div>

      <div className="jwt-carousel__bar">
        <span className="jwt-carousel__cap">{current.caption}</span>
        <span className="jwt-carousel__count">{i + 1} / {n}</span>
      </div>

      {showDots && n > 1 && (
        <div className="jwt-carousel__dots">
          {slides.map((_, idx) => (
            <button key={idx} type="button" aria-label={`Go to image ${idx + 1}`}
              className={`jwt-carousel__dot ${idx === i ? 'jwt-carousel__dot--on' : ''}`}
              onClick={() => setI(idx)} />
          ))}
        </div>
      )}
    </div>
  );
}
