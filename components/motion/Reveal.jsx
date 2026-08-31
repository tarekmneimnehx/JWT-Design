import React from 'react';

function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

injectOnce('jwt-reveal-css', `
.jwt-reveal {
  opacity: 0;
  transform: translateY(var(--_rise, 26px));
  transition: opacity 900ms var(--ease-soft), transform 900ms var(--ease-soft);
  transition-delay: var(--_delay, 0ms);
  will-change: opacity, transform;
}
.jwt-reveal--in { opacity: 1; transform: none; }
/* Image reveal: the frame clips while the photo settles from a slight over-scale */
.jwt-reveal-img { overflow: hidden; }
.jwt-reveal-img > img, .jwt-reveal-img > .jwt-reveal-img__inner {
  transform: scale(1.08);
  transition: transform 1400ms var(--ease-soft), opacity 900ms var(--ease-soft);
  transition-delay: var(--_delay, 0ms);
  opacity: 0;
}
.jwt-reveal-img--in > img, .jwt-reveal-img--in > .jwt-reveal-img__inner {
  transform: scale(1); opacity: 1;
}
@media (prefers-reduced-motion: reduce) {
  .jwt-reveal, .jwt-reveal-img > img, .jwt-reveal-img > .jwt-reveal-img__inner {
    opacity: 1 !important; transform: none !important; transition: none !important;
  }
}
`);

/**
 * Fires once when the element scrolls into view. Returns [ref, inView].
 * Used by Reveal / RevealImage, and available directly for custom cases.
 */
export function useInView({ threshold = 0.12, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Deliberately NOT IntersectionObserver. IO proved unreliable in embedded
       and preview contexts here: it delivers its initial non-intersecting
       callback and then never fires again on scroll, which left every
       below-the-fold element permanently at opacity 0 — and, because those
       wrappers contain loading="lazy" images, stopped the imagery downloading
       at all. A rAF-throttled rect check is the same mechanism HeroShowcase
       uses successfully, always runs once on mount, and cannot fail closed. */
    let raf = 0;
    let detached = false;

    const check = () => {
      raf = 0;
      if (detached || !el.isConnected) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      /* Matches the old rootMargin: reveal once the top edge clears 92% of the
         viewport, so content animates in slightly before it is fully on screen. */
      const visible = r.top < vh * 0.92 && r.bottom > 0;
      if (visible) {
        setInView(true);
        if (once) detach();
      } else if (!once) {
        setInView(false);
      }
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };

    function detach() {
      detached = true;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    check();

    return () => { detach(); if (raf) cancelAnimationFrame(raf); };
  }, [once]);

  return [ref, inView];
}

/**
 * Scroll-reveal wrapper: content fades and rises into place once.
 * Stagger siblings with an incrementing `delay`.
 */
export function Reveal({ children, delay = 0, rise = 26, as = 'div', className = '', style, ...rest }) {
  const [ref, inView] = useInView();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`jwt-reveal ${inView ? 'jwt-reveal--in' : ''} ${className}`.trim()}
      style={{ '--_delay': `${delay}ms`, '--_rise': `${rise}px`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Render-prop wrapper around the in-view hook, for reveal behaviour the built-in
 * `Reveal` / `RevealImage` don't cover (counters, lazy mounts, custom transforms).
 * This is the namespace-safe way to reach the hook from a consuming project.
 */
export function InView({ children, threshold, rootMargin, once }) {
  const [ref, inView] = useInView({ threshold, rootMargin, once });
  return typeof children === 'function' ? children({ ref, inView }) : null;
}

/**
 * Image reveal: the frame clips while the photograph settles from a slight
 * over-scale — the signature editorial entrance for full-bleed photography.
 * Pass an <img> (or any single child) as the only child.
 */
export function RevealImage({ children, delay = 0, className = '', style, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`jwt-reveal-img ${inView ? 'jwt-reveal-img--in' : ''} ${className}`.trim()}
      style={{ '--_delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
