import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-heroshow-css', `
.jwt-hero { position: relative; }
.jwt-hero__sticky {
  position: sticky; top: 0; height: 100vh; overflow: hidden;
  background: var(--char-900);
}
.jwt-hero__layer { position: absolute; inset: 0; overflow: hidden; }
.jwt-hero__layer img { width: 100%; height: 100%; object-fit: cover; display: block; }
/* Inset frames rest centred over the backdrop at the same aspect ratio. */
.jwt-hero__layer--rest { box-shadow: var(--shadow-image); }
.jwt-hero__layer--backdrop { will-change: opacity; }
.jwt-hero__darken { position: absolute; inset: 0; background: var(--char-900); pointer-events: none; }
.jwt-hero__layer--rest, .jwt-hero__layer--incoming { will-change: opacity, transform, inset; }
.jwt-hero__scrim {
  position: absolute; inset: 0; z-index: 4; pointer-events: none;
  background: linear-gradient(180deg, rgba(44,46,53,0.30) 0%, rgba(44,46,53,0) 32%, rgba(44,46,53,0) 55%, rgba(44,46,53,0.62) 100%);
}
.jwt-hero__chrome {
  position: absolute; inset: 0; z-index: 5;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: var(--gutter); gap: var(--space-5);
  pointer-events: none;
}
.jwt-hero__title {
  font-family: var(--font-display); font-weight: var(--fw-ultralight);
  font-size: clamp(2.5rem, 5.4vw, 5rem); line-height: 1.02;
  letter-spacing: var(--track-display); color: #FFFFFF; margin: 0;
  max-width: 18ch; text-wrap: balance;
}
.jwt-hero__foot {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--space-6); flex-wrap: wrap;
  /* Clear the fixed bottom-right buttons so the meta row is never painted over. */
  padding-right: var(--fab-safe, 0px);
}
.jwt-hero__cta {
  pointer-events: auto;
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--font-sans); font-size: 0.72rem; font-weight: var(--fw-medium);
  letter-spacing: var(--track-label); text-transform: uppercase;
  color: #FFFFFF; background: transparent; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.7); border-radius: var(--radius-pill);
  padding: 0.85rem 1.9rem; white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft);
}
.jwt-hero__cta:hover { background: #FFFFFF; color: var(--char-900); border-color: #FFFFFF; }
.jwt-hero__meta { display: flex; align-items: center; gap: clamp(1.25rem, 3.5vw, 4rem); flex-wrap: wrap; }
.jwt-hero__meta span {
  font-family: var(--font-sans); font-size: 0.72rem; font-weight: var(--fw-regular);
  letter-spacing: var(--track-label); text-transform: uppercase;
  color: rgba(255,255,255,0.92); white-space: nowrap;
}
.jwt-hero__dots {
  position: absolute; right: var(--gutter); top: 50%; transform: translateY(-50%);
  z-index: 5; display: flex; flex-direction: column; gap: 0.7rem;
}
.jwt-hero__dot {
  width: 6px; height: 6px; border-radius: 999px; border: none; padding: 0;
  background: rgba(255,255,255,0.4); cursor: pointer;
  transition: background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft);
}
.jwt-hero__dot--on { background: #FFFFFF; transform: scale(1.5); }
@media (max-width: 760px) {
  .jwt-hero__foot { flex-direction: column; align-items: flex-start; gap: var(--space-4); }
  .jwt-hero__meta { gap: 1rem; }
  .jwt-hero__dots { display: none; }
}
`);

/**
 * Full-viewport project stage. Scrolling drives the transition: the next frame
 * enters as an inset panel over the current one and grows to full bleed, while
 * the title, CTA and meta row stay pinned.
 */
export function HeroShowcase({
  slides = [], onSelect, cta = 'View project',
  rest = 12, edge = 7,
  className = '', style, ...restProps
}) {
  const n = Math.max(1, slides.length);
  const wrapRef = React.useRef(null);
  const [f, setF] = React.useState(0); // fractional slide position, 0 … n-1
  /* Decode every frame up front. Without this each image only starts loading
     when its cross-fade begins, so the panel fades up empty and fills in
     seconds later — which reads as a broken transition however well the
     opacity curve is tuned. */
  const [ready, setReady] = React.useState(() => new Set());
  React.useEffect(() => {
    let alive = true;
    const mark = (src) => {
      if (!alive) return;
      setReady((prev) => (prev.has(src) ? prev : new Set(prev).add(src)));
    };
    slides.forEach((s) => {
      if (!s || !s.src) return;
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => mark(s.src);
      img.onerror = () => mark(s.src);
      img.src = s.src;
      if (img.complete) mark(s.src);
    });
    return () => { alive = false; };
  }, [slides]);

  React.useEffect(() => {
    if (n < 2) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const span = rect.height - window.innerHeight;
        if (span <= 0) return;
        const p = Math.min(1, Math.max(0, -rect.top / span));
        setF(p * (n - 1));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [n]);

  const idx = Math.min(n - 1, Math.floor(f));
  const t = Math.min(1, Math.max(0, f - idx));
  const base = slides[idx] || {};
  const next = slides[Math.min(n - 1, idx + 1)];
  const shown = t > 0.5 && next ? next : base;

  /* A slide is either the project's main frame (full bleed) or one of the two
     that follow it, which rest inset and centred over that main frame.
     ONE value drives both axes: `inset: y% x%` resolves x against the parent's
     width and y against its height, so the two must be equal or the frame's
     aspect ratio drifts away from the stage's. */
  const restOf = (s) => (s && s.inset ? rest : 0);

  /* The full-bleed frame currently behind everything: the most recent main slide. */
  let backdropIdx = 0;
  for (let i = idx; i >= 0; i--) { if (!slides[i].inset) { backdropIdx = i; break; } }
  const backdrop = slides[backdropIdx] || {};

  /* Ease the motion so frames settle rather than tracking scroll linearly. */
  const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const baseRest = restOf(base);
  const nextRest = restOf(next);

  const nextIsInset = !!(next && next !== base && next.inset);
  const nextIsMain = !!(next && next !== base && !next.inset);

  /* How deep we are into this project's secondary frames — drives the backdrop
     darken, so the main image dims to a solid brand-grey (the logo mono) as its
     detail frames come forward, then clears again on the next project. */
  const intoProject = Math.min(1, Math.max(0, f - backdropIdx));
  const darken = Math.min(1, intoProject * 1.15);

  /* The two secondaries share one resting box and cross-fade in place. A frame
     that has not decoded yet stays at 0 opacity, so we never animate a blank
     panel; the outgoing frame holds until its replacement can actually paint. */
  const loaded = (s) => !!(s && s.src && ready.has(s.src));
  const nextReady = loaded(next);
  const ee = nextReady ? e : 0;
  const baseRestOpacity = nextIsInset ? 1 - ee : 1;
  const nextInsetScale = 0.985 + ee * 0.015;
  const nextMainInset = (1 - ee) * edge;

  const go = (s) => { if (onSelect && s && s.href) onSelect(s.href); };

  const jump = (i) => {
    const el = wrapRef.current;
    if (!el || n < 2) return;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (span * i) / (n - 1), behavior: 'smooth' });
  };

  return (
    <div
      ref={wrapRef}
      className={`jwt-hero ${className}`.trim()}
      style={{ height: n > 1 ? `${n * 100}vh` : '100vh', ...style }}
      {...restProps}
    >
      <div className="jwt-hero__sticky">
        {/* Full-bleed backdrop: the current project's main frame. It darkens to
            a solid brand-grey as the project's secondary frames come forward. */}
        <div className="jwt-hero__layer jwt-hero__layer--backdrop">
          <img src={backdrop.src} alt={backdrop.title || ''} />
        </div>
        {/* Darkening veil in the logo grey (--char-900): transparent over the
            primary image, deepening to solid as the secondary frames arrive. */}
        <div className="jwt-hero__darken" style={{ opacity: darken }} />
        {/* The current secondary frame, resting inset over that backdrop. */}
        {base !== backdrop && (
          <div className="jwt-hero__layer jwt-hero__layer--rest"
            style={{ inset: `${baseRest}%`, opacity: baseRestOpacity }}>
            <img src={base.src} alt={base.title || ''} />
          </div>
        )}
        {/* Next secondary — same resting box, cross-fading in to replace it. */}
        {nextIsInset && (
          <div className="jwt-hero__layer jwt-hero__layer--rest jwt-hero__layer--incoming"
            style={{ inset: `${nextRest}%`, opacity: ee, transform: `scale(${nextInsetScale})` }}>
            <img src={next.src} alt={next.title || ''} />
          </div>
        )}
        {/* Next project's main frame — eases out to full bleed. */}
        {nextIsMain && t > 0 && (
          <div className="jwt-hero__layer jwt-hero__layer--incoming"
            style={{ inset: `${nextMainInset}%`, opacity: ee }}>
            <img src={next.src} alt={next.title || ''} />
          </div>
        )}
        <div className="jwt-hero__scrim" />

        {n > 1 && (
          <div className="jwt-hero__dots">
            {slides.map((s, i) => (
              <button key={i} aria-label={`Slide ${i + 1}`}
                className={`jwt-hero__dot ${i === Math.round(f) ? 'jwt-hero__dot--on' : ''}`}
                onClick={() => jump(i)} />
            ))}
          </div>
        )}

        <div className="jwt-hero__chrome">
          <h2 className="jwt-hero__title">{shown.title}</h2>
          <div className="jwt-hero__foot">
            <button className="jwt-hero__cta" onClick={() => go(shown)}>{cta}</button>
            <div className="jwt-hero__meta">
              {(shown.meta || []).map((m, i) => <span key={i}>{m}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
