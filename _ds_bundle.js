/* @ds-bundle: {"format":4,"namespace":"JWTDesignStudioDesignSystem_593c65","components":[{"name":"AwardList","sourcePath":"components/content/AwardList.jsx"},{"name":"Carousel","sourcePath":"components/content/Carousel.jsx"},{"name":"CompareSlider","sourcePath":"components/content/CompareSlider.jsx"},{"name":"FactTable","sourcePath":"components/content/FactTable.jsx"},{"name":"Figure","sourcePath":"components/content/Figure.jsx"},{"name":"HeroShowcase","sourcePath":"components/content/HeroShowcase.jsx"},{"name":"PersonCard","sourcePath":"components/content/PersonCard.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"ShareRow","sourcePath":"components/content/ShareRow.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"FilterSelect","sourcePath":"components/core/FilterBar.jsx"},{"name":"FilterBar","sourcePath":"components/core/FilterBar.jsx"},{"name":"MetaList","sourcePath":"components/core/MetaList.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"},{"name":"InView","sourcePath":"components/motion/Reveal.jsx"},{"name":"RevealImage","sourcePath":"components/motion/Reveal.jsx"},{"name":"BackToTop","sourcePath":"components/navigation/BackToTop.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"WhatsAppButton","sourcePath":"components/navigation/WhatsAppButton.jsx"}],"sourceHashes":{"components/content/AwardList.jsx":"c4f6ba442730","components/content/Carousel.jsx":"c439f4015a99","components/content/CompareSlider.jsx":"91296c589797","components/content/FactTable.jsx":"829d8f25d815","components/content/Figure.jsx":"4d04708c64ee","components/content/HeroShowcase.jsx":"65d73f58d533","components/content/PersonCard.jsx":"880944544531","components/content/ProjectCard.jsx":"2d1873b1227f","components/content/Quote.jsx":"e17a4271691a","components/content/ServiceCard.jsx":"35ca74df633b","components/content/ShareRow.jsx":"2ce12dbfa2a3","components/content/StatBlock.jsx":"ce353d7d8b6b","components/core/Badge.jsx":"faf04b381cd7","components/core/Divider.jsx":"baedb284cde4","components/core/Eyebrow.jsx":"945ebf39ae21","components/core/FilterBar.jsx":"5364036e0b53","components/core/MetaList.jsx":"613f0ff45ab7","components/core/Tag.jsx":"8308beb1f2f5","components/forms/Button.jsx":"da92a3bb3645","components/forms/Input.jsx":"cd625cede113","components/motion/Reveal.jsx":"ee69b16ecfe3","components/navigation/BackToTop.jsx":"4b79c64fa8ef","components/navigation/Footer.jsx":"7ad49620dc11","components/navigation/Navbar.jsx":"33927a289783","components/navigation/WhatsAppButton.jsx":"d7f748c496b9","ui_kits/website/AboutPage.jsx":"38a7e5fbb803","ui_kits/website/ContactPage.jsx":"942c5ca09ead","ui_kits/website/ExpertisePage.jsx":"fa028714c359","ui_kits/website/HomePage.jsx":"daf4e77dde80","ui_kits/website/ProjectPage.jsx":"c1437202067a","ui_kits/website/ProjectsPage.jsx":"f56ac615356e","ui_kits/website/data.js":"8f93f4194def","ui_kits/website/kit-ui.jsx":"aa3432632798"},"inlinedExternals":[],"unexposedExports":[{"name":"useInView","sourcePath":"components/motion/Reveal.jsx"}]} */

(() => {

const __ds_ns = (window.JWTDesignStudioDesignSystem_593c65 = window.JWTDesignStudioDesignSystem_593c65 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/AwardList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-awards-css', `
.jwt-awards { display: flex; flex-direction: column; }
.jwt-award {
  display: grid; grid-template-columns: 7rem 1fr auto;
  gap: 1.5rem; align-items: baseline;
  padding: 1.35rem 0; border-top: 1px solid var(--line-subtle);
}
.jwt-awards .jwt-award:last-child { border-bottom: 1px solid var(--line-subtle); }
.jwt-award__result {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-accent);
}
.jwt-award__body { display: flex; flex-direction: column; gap: 0.25rem; }
.jwt-award__title {
  font-family: var(--font-display); font-size: 1.25rem; font-weight: var(--fw-light);
  letter-spacing: var(--track-tight); color: var(--text-primary);
}
.jwt-award__name { font: var(--text-sm); color: var(--text-secondary); }
.jwt-award__year {
  font: var(--label-sm); letter-spacing: var(--track-label); color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}
@media (max-width: 640px) {
  .jwt-award { grid-template-columns: 1fr auto; }
  .jwt-award__result { grid-column: 1 / -1; }
}
`);

/**
 * Awards & accolades list — result / project + award name / year rows,
 * separated by hairlines.
 */
function AwardList({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `jwt-awards ${className}`.trim()
  }, rest), items.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: "jwt-award",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-award__result"
  }, a.result), /*#__PURE__*/React.createElement("span", {
    className: "jwt-award__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-award__title"
  }, a.project), a.award && /*#__PURE__*/React.createElement("span", {
    className: "jwt-award__name"
  }, a.award)), /*#__PURE__*/React.createElement("span", {
    className: "jwt-award__year"
  }, a.year))));
}
Object.assign(__ds_scope, { AwardList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AwardList.jsx", error: String((e && e.message) || e) }); }

// components/content/Carousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
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
const Chevron = ({
  dir
}) => /*#__PURE__*/React.createElement("svg", {
  width: "10",
  height: "16",
  viewBox: "0 0 10 16",
  fill: "none",
  "aria-hidden": "true",
  style: {
    transform: dir === 'prev' ? 'scaleX(-1)' : 'none'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M2 1l6 7-6 7",
  stroke: "currentColor",
  strokeWidth: "1.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Captioned image carousel with an italic caption and an "n / N" counter —
 * the project-page gallery device. Slides cross-fade; arrow keys work when focused.
 */
function Carousel({
  slides = [],
  ratio = '16 / 10',
  loop = true,
  showDots = true,
  className = '',
  ...rest
}) {
  const [i, setI] = React.useState(0);
  const n = slides.length;
  if (!n) return null;
  const go = next => {
    if (loop) setI((next + n) % n);else setI(Math.max(0, Math.min(n - 1, next)));
  };
  const onKey = e => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(i + 1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(i - 1);
    }
  };
  const current = slides[i];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `jwt-carousel ${className}`.trim(),
    onKeyDown: onKey,
    tabIndex: 0,
    role: "group",
    "aria-roledescription": "carousel"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "jwt-carousel__viewport",
    style: {
      '--_ratio': ratio
    }
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: `jwt-carousel__slide ${idx === i ? 'jwt-carousel__slide--on' : ''}`,
    "aria-hidden": idx !== i
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: s.alt || s.caption || '',
    loading: idx === 0 ? 'eager' : 'lazy'
  }))), n > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous image",
    className: "jwt-carousel__nav jwt-carousel__nav--prev",
    disabled: !loop && i === 0,
    onClick: () => go(i - 1)
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: "prev"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next image",
    className: "jwt-carousel__nav jwt-carousel__nav--next",
    disabled: !loop && i === n - 1,
    onClick: () => go(i + 1)
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: "next"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "jwt-carousel__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-carousel__cap"
  }, current.caption), /*#__PURE__*/React.createElement("span", {
    className: "jwt-carousel__count"
  }, i + 1, " / ", n)), showDots && n > 1 && /*#__PURE__*/React.createElement("div", {
    className: "jwt-carousel__dots"
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    type: "button",
    "aria-label": `Go to image ${idx + 1}`,
    className: `jwt-carousel__dot ${idx === i ? 'jwt-carousel__dot--on' : ''}`,
    onClick: () => setI(idx)
  }))));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/content/CompareSlider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
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
function CompareSlider({
  before,
  after,
  beforeLabel = 'Render',
  afterLabel = 'Built',
  beforeAlt = '',
  afterAlt = '',
  start = 50,
  ratio = '16 / 9',
  height,
  safeRight,
  children,
  className = '',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState(start);
  const dragging = React.useRef(false);
  const setFromClientX = React.useCallback(clientX => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    const p = (clientX - r.left) / r.width * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);
  React.useEffect(() => {
    const move = e => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move, {
      passive: true
    });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [setFromClientX]);
  const down = e => {
    dragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(x);
  };
  const onKey = e => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPos(p => Math.max(0, p - 4));
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPos(p => Math.min(100, p + 4));
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: `jwt-compare ${height ? 'jwt-compare--fill' : ''} ${className}`.trim(),
    style: {
      '--_pos': `${pos}%`,
      '--_ratio': ratio,
      '--_h': height,
      '--_safe': safeRight,
      ...style
    },
    onMouseDown: down,
    onTouchStart: down,
    onKeyDown: onKey,
    tabIndex: 0,
    role: "slider",
    "aria-label": `${beforeLabel} to ${afterLabel} comparison`,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(pos)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "jwt-compare__side jwt-compare__side--before"
  }, /*#__PURE__*/React.createElement("img", {
    src: before,
    alt: beforeAlt || beforeLabel,
    draggable: "false"
  })), /*#__PURE__*/React.createElement("div", {
    className: "jwt-compare__side jwt-compare__side--after"
  }, /*#__PURE__*/React.createElement("img", {
    src: after,
    alt: afterAlt || afterLabel,
    draggable: "false"
  })), beforeLabel && /*#__PURE__*/React.createElement("span", {
    className: "jwt-compare__tag jwt-compare__tag--before"
  }, beforeLabel), afterLabel && /*#__PURE__*/React.createElement("span", {
    className: "jwt-compare__tag jwt-compare__tag--after"
  }, afterLabel), /*#__PURE__*/React.createElement("div", {
    className: "jwt-compare__handle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-compare__grip"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.5 1.5 3 6l4.5 4.5M12.5 1.5 17 6l-4.5 4.5",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), children);
}
Object.assign(__ds_scope, { CompareSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CompareSlider.jsx", error: String((e && e.message) || e) }); }

// components/content/FactTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-facttable-css', `
.jwt-facts { display: grid; gap: 0; }
.jwt-facts__row {
  display: grid; grid-template-columns: var(--_labelw, 11rem) 1fr;
  gap: 1.5rem; padding: 0.95rem 0; border-top: 1px solid var(--line-subtle);
}
.jwt-facts__row:last-child { border-bottom: 1px solid var(--line-subtle); }
.jwt-facts__label {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted); padding-top: 0.15rem;
}
.jwt-facts__value { font: var(--text-base); color: var(--text-primary); }
.jwt-facts--stacked .jwt-facts__row { grid-template-columns: 1fr; gap: 0.35rem; }
@media (max-width: 600px) { .jwt-facts__row { grid-template-columns: 1fr; gap: 0.35rem; } }
`);

/**
 * Label / value credit table — the project-page fact list
 * (Client, Location, Studio, Expertise, Completed, Sector, Photography).
 * Rows with an empty value are skipped.
 */
function FactTable({
  rows = [],
  labelWidth = '11rem',
  stacked = false,
  className = '',
  style,
  ...rest
}) {
  const shown = rows.filter(r => r && r.value != null && r.value !== '');
  return /*#__PURE__*/React.createElement("dl", _extends({
    className: `jwt-facts ${stacked ? 'jwt-facts--stacked' : ''} ${className}`.trim(),
    style: {
      '--_labelw': labelWidth,
      margin: 0,
      ...style
    }
  }, rest), shown.map(r => /*#__PURE__*/React.createElement("div", {
    className: "jwt-facts__row",
    key: r.label
  }, /*#__PURE__*/React.createElement("dt", {
    className: "jwt-facts__label"
  }, r.label), /*#__PURE__*/React.createElement("dd", {
    className: "jwt-facts__value",
    style: {
      margin: 0
    }
  }, Array.isArray(r.value) ? r.value.join(', ') : r.value))));
}
Object.assign(__ds_scope, { FactTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FactTable.jsx", error: String((e && e.message) || e) }); }

// components/content/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-figure-css', `
.jwt-figure { margin: 0; display: block; }
.jwt-figure__frame {
  position: relative; overflow: hidden; background: var(--bg-fill);
  border-radius: var(--_radius, var(--radius-md));
}
.jwt-figure__img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform var(--dur-slow) var(--ease-soft);
}
.jwt-figure--zoom:hover .jwt-figure__img { transform: scale(1.04); }
.jwt-figure__cap {
  margin-top: 0.85rem; display: flex; justify-content: space-between; gap: 1rem;
  font-family: var(--font-sans); font-size: 0.875rem; color: var(--text-secondary);
}
.jwt-figure__cap-meta { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.04em; }
`);
const RADII = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  none: '0'
};

/**
 * Image frame with consistent ratio, soft radius and optional caption / hover zoom.
 * The base unit for all JWT photography.
 */
function Figure({
  src,
  alt = '',
  ratio = '4 / 3',
  radius = 'md',
  zoom = false,
  caption,
  meta,
  shadow = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: `jwt-figure ${zoom ? 'jwt-figure--zoom' : ''} ${className}`.trim(),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "jwt-figure__frame",
    style: {
      aspectRatio: ratio,
      '--_radius': RADII[radius] || RADII.md,
      boxShadow: shadow ? 'var(--shadow-image)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "jwt-figure__img",
    src: src,
    alt: alt,
    loading: "lazy"
  })), (caption || meta) && /*#__PURE__*/React.createElement("figcaption", {
    className: "jwt-figure__cap"
  }, /*#__PURE__*/React.createElement("span", null, caption), meta && /*#__PURE__*/React.createElement("span", {
    className: "jwt-figure__cap-meta"
  }, meta)));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Figure.jsx", error: String((e && e.message) || e) }); }

// components/content/HeroShowcase.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
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
function HeroShowcase({
  slides = [],
  onSelect,
  cta = 'View project',
  rest = 12,
  edge = 7,
  className = '',
  style,
  ...restProps
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
    const mark = src => {
      if (!alive) return;
      setReady(prev => prev.has(src) ? prev : new Set(prev).add(src));
    };
    slides.forEach(s => {
      if (!s || !s.src) return;
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => mark(s.src);
      img.onerror = () => mark(s.src);
      img.src = s.src;
      if (img.complete) mark(s.src);
    });
    return () => {
      alive = false;
    };
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
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
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
  const restOf = s => s && s.inset ? rest : 0;

  /* The full-bleed frame currently behind everything: the most recent main slide. */
  let backdropIdx = 0;
  for (let i = idx; i >= 0; i--) {
    if (!slides[i].inset) {
      backdropIdx = i;
      break;
    }
  }
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
  const loaded = s => !!(s && s.src && ready.has(s.src));
  const nextReady = loaded(next);
  const ee = nextReady ? e : 0;
  const baseRestOpacity = nextIsInset ? 1 - ee : 1;
  const nextInsetScale = 0.985 + ee * 0.015;
  const nextMainInset = (1 - ee) * edge;
  const go = s => {
    if (onSelect && s && s.href) onSelect(s.href);
  };
  const jump = i => {
    const el = wrapRef.current;
    if (!el || n < 2) return;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: el.offsetTop + span * i / (n - 1),
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: wrapRef,
    className: `jwt-hero ${className}`.trim(),
    style: {
      height: n > 1 ? `${n * 100}vh` : '100vh',
      ...style
    }
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__sticky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__layer jwt-hero__layer--backdrop"
  }, /*#__PURE__*/React.createElement("img", {
    src: backdrop.src,
    alt: backdrop.title || ''
  })), /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__darken",
    style: {
      opacity: darken
    }
  }), base !== backdrop && /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__layer jwt-hero__layer--rest",
    style: {
      inset: `${baseRest}%`,
      opacity: baseRestOpacity
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base.src,
    alt: base.title || ''
  })), nextIsInset && /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__layer jwt-hero__layer--rest jwt-hero__layer--incoming",
    style: {
      inset: `${nextRest}%`,
      opacity: ee,
      transform: `scale(${nextInsetScale})`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: next.src,
    alt: next.title || ''
  })), nextIsMain && t > 0 && /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__layer jwt-hero__layer--incoming",
    style: {
      inset: `${nextMainInset}%`,
      opacity: ee
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: next.src,
    alt: next.title || ''
  })), /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__scrim"
  }), n > 1 && /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__dots"
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "aria-label": `Slide ${i + 1}`,
    className: `jwt-hero__dot ${i === Math.round(f) ? 'jwt-hero__dot--on' : ''}`,
    onClick: () => jump(i)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__chrome"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "jwt-hero__title"
  }, shown.title), /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jwt-hero__cta",
    onClick: () => go(shown)
  }, cta), /*#__PURE__*/React.createElement("div", {
    className: "jwt-hero__meta"
  }, (shown.meta || []).map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m)))))));
}
Object.assign(__ds_scope, { HeroShowcase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/HeroShowcase.jsx", error: String((e && e.message) || e) }); }

// components/content/PersonCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-person-css', `
.jwt-person { display: block; text-decoration: none; color: inherit; cursor: pointer; }
.jwt-person__frame {
  aspect-ratio: 3 / 4; overflow: hidden; border-radius: var(--radius-md);
  background: var(--bg-fill); position: relative;
}
.jwt-person__frame img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: grayscale(1) contrast(1.02);
  transition: transform 800ms var(--ease-soft), filter var(--dur-med) var(--ease-soft);
}
.jwt-person:hover .jwt-person__frame img { transform: scale(1.04); filter: grayscale(0); }
.jwt-person__body { padding-top: 0.9rem; display: flex; flex-direction: column; gap: 0.3rem; }
.jwt-person__studio {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-accent);
}
.jwt-person__name {
  font-family: var(--font-display); font-weight: var(--fw-light); font-size: 1.375rem;
  line-height: 1.15; letter-spacing: var(--track-tight); color: var(--text-primary);
  transition: color var(--dur-fast) var(--ease-soft);
}
.jwt-person:hover .jwt-person__name { color: var(--text-accent); }
.jwt-person__role { font: var(--text-sm); color: var(--text-secondary); }
/* Initials mark when no portrait has been supplied */
.jwt-person__initials {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: var(--fw-light);
  font-size: clamp(2.5rem, 6vw, 3.75rem); letter-spacing: 0.06em;
  color: var(--tan-600); background: var(--bg-fill);
  transition: background var(--dur-med) var(--ease-soft), color var(--dur-med) var(--ease-soft);
}
.jwt-person:hover .jwt-person__initials { background: var(--bg-sunken); color: var(--tan-700); }
`);

/**
 * Team member card: duotone-to-colour portrait on hover, studio label,
 * name and role. Used in the project-page Team block and an About page.
 */
function PersonCard({
  src,
  alt,
  name,
  role,
  studio,
  href = '#',
  className = '',
  ...rest
}) {
  const initials = (name || '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `jwt-person ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "jwt-person__frame"
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || name,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "jwt-person__initials",
    "aria-hidden": "true"
  }, initials)), /*#__PURE__*/React.createElement("div", {
    className: "jwt-person__body"
  }, studio && /*#__PURE__*/React.createElement("span", {
    className: "jwt-person__studio"
  }, studio), /*#__PURE__*/React.createElement("span", {
    className: "jwt-person__name"
  }, name), role && /*#__PURE__*/React.createElement("span", {
    className: "jwt-person__role"
  }, role)));
}
Object.assign(__ds_scope, { PersonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PersonCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Editorial testimonial / pull-quote in display serif, with optional attribution.
 * Use on Home and case studies. `tone="inverse"` for dark sections.
 */
function Quote({
  children,
  author,
  role,
  tone = 'default',
  size = 'lg',
  className = '',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  const quoteFont = size === 'xl' ? 'var(--display-xl)' : size === 'md' ? 'var(--display-md)' : 'var(--display-lg)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: className,
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.75rem',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: 'var(--display-2xl)',
      fontWeight: 200,
      lineHeight: 0.5,
      height: '0.5em',
      color: 'var(--tan-600)',
      display: 'block'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: quoteFont,
      color: inverse ? 'var(--paper)' : 'var(--text-primary)',
      letterSpacing: 'var(--track-tight)',
      textWrap: 'balance'
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-base)',
      fontWeight: 'var(--fw-medium)',
      color: inverse ? 'var(--paper)' : 'var(--text-primary)'
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label)',
      letterSpacing: 'var(--track-wide)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--tan-200)' : 'var(--text-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-service-css', `
.jwt-service {
  display: flex; flex-direction: column; gap: 1rem;
  padding: 2rem 0; border-top: 1px solid var(--line);
  transition: border-color var(--dur-fast) var(--ease-soft);
}
.jwt-service__index {
  font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: var(--track-eyebrow);
  color: var(--text-accent);
}
.jwt-service__title {
  font-family: var(--font-display); font-weight: var(--fw-light); font-size: 1.75rem;
  line-height: 1.1; color: var(--text-primary); letter-spacing: var(--track-tight);
}
.jwt-service__desc {
  font-family: var(--font-sans); font-size: 1rem; line-height: 1.65; color: var(--text-secondary);
  max-width: 46ch;
}
.jwt-service__tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.25rem; }
.jwt-service__tag {
  font-family: var(--font-sans); font-size: 0.8125rem; color: var(--text-secondary);
  border: 1px solid var(--line); border-radius: var(--radius-pill); padding: 0.35rem 0.8rem;
}
`);

/**
 * Service line item (full home interiors, fit-out, styling…). Index number,
 * serif title, description, optional sub-deliverable tags.
 */
function ServiceCard({
  index,
  title,
  description,
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `jwt-service ${className}`.trim()
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    className: "jwt-service__index"
  }, index), /*#__PURE__*/React.createElement("h3", {
    className: "jwt-service__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "jwt-service__desc"
  }, description), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "jwt-service__tags"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "jwt-service__tag"
  }, it))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ShareRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
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
  facebook: /*#__PURE__*/React.createElement("path", {
    d: "M9.5 5H11V2.6h-1.8C7.2 2.6 6.4 3.9 6.4 5.6V7H5v2.4h1.4V17h2.6V9.4h1.9L11.2 7H9V5.9c0-.6.2-.9.5-.9Z",
    fill: "currentColor"
  }),
  linkedin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4.6 7.5h2.3V16H4.6zM5.75 3.4a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.1 7.5h2.2v1.16h.03c.31-.58 1.06-1.19 2.19-1.19 2.34 0 2.77 1.5 2.77 3.46V16h-2.3v-3.6c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.93-1.38 1.9V16H9.1Z",
    fill: "currentColor"
  })),
  whatsapp: /*#__PURE__*/React.createElement("path", {
    d: "M10 3a7 7 0 0 0-6 10.6L3.2 17l3.5-.85A7 7 0 1 0 10 3Zm3.3 9.6c-.16.44-.9.85-1.25.88-.35.03-.66.14-2.23-.6-1.88-.9-3.02-2.9-3.11-3.03-.09-.13-.72-1.01-.7-1.9.02-.9.5-1.32.68-1.5a.7.7 0 0 1 .5-.22h.35c.11 0 .27-.04.41.33.15.4.5 1.35.55 1.45.04.1.07.2.01.33-.07.13-.1.21-.2.33l-.3.35c-.09.1-.19.2-.08.4.1.19.47.8 1 1.28.68.62 1.25.81 1.43.9.18.09.29.08.4-.04.11-.13.47-.55.6-.74.13-.19.25-.15.42-.09.17.06 1.1.52 1.29.61.19.1.31.14.36.22.04.09.04.5-.12.94Z",
    fill: "currentColor"
  }),
  link: /*#__PURE__*/React.createElement("path", {
    d: "M8.2 11.8a2.8 2.8 0 0 1 0-3.96l2-2a2.8 2.8 0 0 1 3.96 3.96l-.9.9M11.8 8.2a2.8 2.8 0 0 1 0 3.96l-2 2A2.8 2.8 0 0 1 5.84 10.2l.9-.9",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    fill: "none"
  })
};
const Icon = ({
  name
}) => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true"
}, ICONS[name]);

/**
 * Share row for project pages: Facebook, LinkedIn, WhatsApp and a copy-link
 * action that confirms inline.
 */
function ShareRow({
  url,
  title = '',
  legend = 'Share',
  networks = ['facebook', 'linkedin', 'whatsapp', 'link'],
  className = '',
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const href = url || (typeof window !== 'undefined' ? window.location.href : '');
  const enc = encodeURIComponent(href);
  const encT = encodeURIComponent(title);
  const HREFS = {
    facebook: `https://www.facebook.com/share.php?u=${enc}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}`,
    whatsapp: `https://wa.me/?text=${encT ? encT + '%20' : ''}${enc}`
  };
  const copy = async () => {
    try {
      if (navigator.clipboard) await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {/* clipboard unavailable */}
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `jwt-share ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "jwt-share__legend"
  }, legend), /*#__PURE__*/React.createElement("div", {
    className: "jwt-share__links"
  }, networks.map(nw => nw === 'link' ? /*#__PURE__*/React.createElement("button", {
    key: nw,
    type: "button",
    className: "jwt-share__link",
    onClick: copy,
    "aria-label": "Copy link"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "link"
  })) : /*#__PURE__*/React.createElement("a", {
    key: nw,
    className: "jwt-share__link",
    href: HREFS[nw],
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": `Share on ${nw}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: nw
  })))), copied && /*#__PURE__*/React.createElement("span", {
    className: "jwt-share__toast"
  }, "Link copied"));
}
Object.assign(__ds_scope, { ShareRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ShareRow.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Large serif statistic with a tracked label beneath — "10 / Years", "84 / Projects".
 * Used in stat rows on About and Home.
 */
function StatBlock({
  value,
  label,
  suffix,
  align = 'start',
  tone = 'default',
  className = '',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--display-lg)',
      color: inverse ? 'var(--paper)' : 'var(--text-primary)',
      lineHeight: 1,
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.1em'
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--display-sm)',
      color: 'var(--text-accent)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--tan-200)' : 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--bg-fill)',
    fg: 'var(--text-secondary)'
  },
  accent: {
    bg: 'var(--tan-200)',
    fg: 'var(--char-900)'
  },
  ink: {
    bg: 'var(--char-900)',
    fg: 'var(--paper)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--text-secondary)',
    bd: 'var(--line)'
  }
};

/**
 * Tiny status / meta label — e.g. "Completed", "2024", "Featured".
 * Smaller and squarer than Tag; not interactive.
 */
function Badge({
  children,
  tone = 'neutral',
  className = '',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      font: 'var(--label)',
      letterSpacing: 'var(--track-wide)',
      textTransform: 'uppercase',
      padding: '0.3rem 0.55rem',
      borderRadius: 'var(--radius-xs)',
      background: t.bg,
      color: t.fg,
      border: t.bd ? `1px solid ${t.bd}` : '1px solid transparent',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hairline divider. Optionally centers a small mark (the brand dot or a label)
 * for a more editorial section break.
 */
function Divider({
  label,
  dot = false,
  tone = 'default',
  className = '',
  style,
  ...rest
}) {
  const lineColor = tone === 'inverse' ? 'var(--line-inverse)' : 'var(--line)';
  const line = {
    flex: 1,
    height: '1px',
    background: lineColor
  };
  const hasCenter = dot || label;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "separator",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: hasCenter ? '1.25rem' : 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: line
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '999px',
      background: 'var(--tan-600)'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'inverse' ? 'var(--paper)' : 'var(--text-muted)'
    }
  }, label), hasCenter && /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small tracked mono label that introduces a section ("Our Expertise", "01 — Discovery").
 * The signature JWT typographic device. Optionally prefixes the brand taupe dot.
 */
function Eyebrow({
  children,
  dot = false,
  tone = 'accent',
  as = 'div',
  className = '',
  style,
  ...rest
}) {
  const Tag = as;
  const color = tone === 'accent' ? 'var(--text-accent)' : tone === 'muted' ? 'var(--text-muted)' : tone === 'inverse' ? 'var(--tan-200)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6em',
      font: 'var(--label)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '999px',
      background: 'var(--tan-600)',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/FilterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-filterbar-css', `
.jwt-filterbar {
  display: flex; align-items: center; flex-wrap: wrap; gap: 0 var(--space-7);
  border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  padding: var(--space-4) 0;
}
.jwt-filterbar__legend {
  font: var(--label); letter-spacing: var(--track-eyebrow); text-transform: uppercase;
  color: var(--text-primary); margin-right: var(--space-2);
}
.jwt-filter { position: relative; }
.jwt-filter__btn {
  display: inline-flex; align-items: baseline; gap: 0.7rem;
  background: none; border: none; padding: 0.4rem 0; cursor: pointer;
  font-family: var(--font-sans); color: var(--text-primary);
}
.jwt-filter__name {
  font: var(--label); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted);
}
.jwt-filter__value {
  font-family: var(--font-display); font-size: 1.25rem; font-weight: var(--fw-light);
  letter-spacing: var(--track-tight); line-height: 1;
  border-bottom: 1px solid var(--line); padding-bottom: 3px;
  transition: border-color var(--dur-fast) var(--ease-soft);
}
.jwt-filter__btn:hover .jwt-filter__value { border-bottom-color: var(--char-900); }
.jwt-filter__chev { transition: transform var(--dur-fast) var(--ease-soft); align-self: center; }
.jwt-filter--open .jwt-filter__chev { transform: rotate(180deg); }
.jwt-filter__menu {
  position: absolute; top: calc(100% + 10px); left: 0; z-index: 40;
  min-width: 230px; background: var(--bg-elevated);
  border: 1px solid var(--line); border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md); padding: 0.4rem; margin: 0;
  list-style: none; max-height: 320px; overflow-y: auto;
}
.jwt-filter__opt {
  display: block; width: 100%; text-align: left; background: none; border: none;
  cursor: pointer; padding: 0.6rem 0.75rem; border-radius: var(--radius-xs);
  font: var(--text-sm); color: var(--text-secondary);
  transition: background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft);
}
.jwt-filter__opt:hover { background: var(--bg-sunken); color: var(--text-primary); }
.jwt-filter__opt--on { color: var(--text-primary); font-weight: var(--fw-medium); }
.jwt-filter__opt--on::after { content: ' ·'; color: var(--tan-600); }
.jwt-filterbar__right { margin-left: auto; display: flex; align-items: center; gap: var(--space-5); }
.jwt-filterbar__count { font: var(--label); letter-spacing: var(--track-label); text-transform: uppercase; color: var(--text-muted); }
.jwt-filterbar__clear {
  background: none; border: none; cursor: pointer; padding: 0;
  font: var(--label); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-accent); border-bottom: 1px solid transparent;
}
.jwt-filterbar__clear:hover { border-bottom-color: var(--tan-600); }
@media (max-width: 720px) {
  .jwt-filterbar { gap: var(--space-4) var(--space-6); }
  .jwt-filterbar__right { margin-left: 0; width: 100%; }
}
`);
const Chev = () => /*#__PURE__*/React.createElement("svg", {
  className: "jwt-filter__chev",
  width: "11",
  height: "7",
  viewBox: "0 0 11 7",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 1l4.5 4L10 1",
  stroke: "currentColor",
  strokeWidth: "1.3",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/** A single labelled dropdown within the FilterBar. */
function FilterSelect({
  name,
  value,
  options = [],
  allLabel = 'All',
  onChange
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const all = [allLabel, ...options];
  return /*#__PURE__*/React.createElement("div", {
    className: `jwt-filter ${open ? 'jwt-filter--open' : ''}`,
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "jwt-filter__btn",
    onClick: () => setOpen(o => !o),
    "aria-expanded": open,
    "aria-haspopup": "listbox"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-filter__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "jwt-filter__value"
  }, value || allLabel), /*#__PURE__*/React.createElement(Chev, null)), open && /*#__PURE__*/React.createElement("ul", {
    className: "jwt-filter__menu",
    role: "listbox"
  }, all.map(o => /*#__PURE__*/React.createElement("li", {
    key: o
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "option",
    "aria-selected": o === (value || allLabel),
    className: `jwt-filter__opt ${o === (value || allLabel) ? 'jwt-filter__opt--on' : ''}`,
    onClick: () => {
      onChange && onChange(o === allLabel ? allLabel : o);
      setOpen(false);
    }
  }, o)))));
}

/**
 * The projects filter rail: a "Filter By" legend, one or more labelled
 * dropdowns, a live result count and a clear action.
 */
function FilterBar({
  legend = 'Filter By',
  filters = [],
  count,
  total,
  onClear,
  className = '',
  ...rest
}) {
  const dirty = filters.some(f => f.value && f.value !== (f.allLabel || 'All'));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `jwt-filterbar ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "jwt-filterbar__legend"
  }, legend), filters.map(f => /*#__PURE__*/React.createElement(FilterSelect, {
    key: f.name,
    name: f.name,
    value: f.value,
    options: f.options,
    allLabel: f.allLabel,
    onChange: f.onChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "jwt-filterbar__right"
  }, count != null && /*#__PURE__*/React.createElement("span", {
    className: "jwt-filterbar__count"
  }, count, total != null && count !== total ? ` of ${total}` : '', " ", count === 1 ? 'Project' : 'Projects'), dirty && onClear && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "jwt-filterbar__clear",
    onClick: onClear
  }, "Clear")));
}
Object.assign(__ds_scope, { FilterSelect, FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/core/MetaList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-metalist-css', `
.jwt-meta {
  display: flex; flex-wrap: wrap; align-items: center;
  font: var(--label-sm); letter-spacing: var(--track-label);
  text-transform: uppercase; color: var(--text-muted); gap: 0 0.55rem;
}
.jwt-meta--inverse { color: rgba(255,255,255,0.72); }
.jwt-meta--lg { font: var(--label); letter-spacing: var(--track-label); }
.jwt-meta__sep { opacity: 0.45; }
.jwt-meta__item--accent { color: var(--text-accent); }
.jwt-meta--inverse .jwt-meta__item--accent { color: var(--tan-200); }
`);

/**
 * The project meta run — a single tracked uppercase line of
 * discipline / sector / region / year, separated by thin slashes.
 * The first item is accented so the discipline reads first.
 */
function MetaList({
  items = [],
  tone = 'default',
  size = 'sm',
  accentFirst = true,
  separator = '/',
  className = '',
  ...rest
}) {
  const list = items.filter(Boolean);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `jwt-meta ${tone === 'inverse' ? 'jwt-meta--inverse' : ''} ${size === 'lg' ? 'jwt-meta--lg' : ''} ${className}`.trim()
  }, rest), list.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "jwt-meta__sep",
    "aria-hidden": "true"
  }, separator), /*#__PURE__*/React.createElement("span", {
    className: i === 0 && accentFirst ? 'jwt-meta__item--accent' : undefined
  }, it))));
}
Object.assign(__ds_scope, { MetaList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MetaList.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-projectcard-css', `
.jwt-pcard { display: block; text-decoration: none; color: inherit; cursor: pointer; }
.jwt-pcard__frame {
  position: relative; overflow: hidden; border-radius: var(--radius-md);
  background: var(--bg-fill); aspect-ratio: var(--_ratio, 4 / 5);
}
.jwt-pcard__img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 800ms var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__img { transform: scale(1.05); }
.jwt-pcard__badge { position: absolute; top: 1rem; left: 1rem; }
/* Thin veil that deepens on hover, HBA-style */
.jwt-pcard__veil {
  position: absolute; inset: 0; background: rgba(44,46,53,0);
  transition: background var(--dur-med) var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__veil { background: rgba(44,46,53,0.10); }
.jwt-pcard__body { padding-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
.jwt-pcard__title {
  font-family: var(--font-display); font-weight: var(--fw-light);
  font-size: 1.5rem; line-height: 1.2; color: var(--text-primary);
  letter-spacing: var(--track-tight);
  transition: color var(--dur-fast) var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__title { color: var(--text-accent); }
.jwt-pcard__view {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted); display: inline-flex; align-items: center; gap: 0.45rem;
  opacity: 0; transform: translateY(-3px);
  transition: opacity var(--dur-med) var(--ease-soft), transform var(--dur-med) var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__view { opacity: 1; transform: translateY(0); }

/* Index tile — for projects we hold no imagery for yet. Reads as an
   intentional editorial index rather than a broken or stock-filled card. */
.jwt-pcard__placeholder {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  justify-content: space-between; padding: 1.4rem;
  background: var(--bg-fill);
  border: 1px solid var(--line-subtle);
  border-radius: var(--radius-md);
  transition: background var(--dur-med) var(--ease-soft);
}
.jwt-pcard:hover .jwt-pcard__placeholder { background: var(--bg-sunken); }
.jwt-pcard__ph-mark { width: 9px; height: 9px; border-radius: 999px; background: var(--tan-600); }
.jwt-pcard__ph-note {
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--text-muted);
}
/* Visualisation stamp — every JWT image is a 3D render, stated not implied. */
.jwt-pcard__viz {
  position: absolute; bottom: 0.85rem; left: 0.85rem;
  font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase;
  color: var(--paper); background: rgba(44,46,53,0.55);
  padding: 0.3rem 0.6rem; border-radius: var(--radius-xs);
  backdrop-filter: blur(3px);
}
`);

/**
 * Project tile: image with hover zoom, a tracked meta run
 * (discipline / sector / region / year) and the project title.
 */
function ProjectCard({
  src,
  alt,
  title,
  discipline,
  sector,
  region,
  year,
  location,
  category,
  // legacy aliases
  ratio = '16 / 9',
  visualisation = false,
  badge,
  href = '#',
  showView = true,
  className = '',
  ...rest
}) {
  const meta = [discipline || category, sector, region || location, year];
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `jwt-pcard ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "jwt-pcard__frame",
    style: {
      '--_ratio': ratio
    }
  }, src ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "jwt-pcard__img",
    src: src,
    alt: alt || title,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jwt-pcard__veil"
  }), visualisation && /*#__PURE__*/React.createElement("span", {
    className: "jwt-pcard__viz"
  }, "Visualisation")) : /*#__PURE__*/React.createElement("div", {
    className: "jwt-pcard__placeholder"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-pcard__ph-mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jwt-pcard__ph-note"
  }, "Imagery in preparation")), badge && /*#__PURE__*/React.createElement("div", {
    className: "jwt-pcard__badge"
  }, badge)), /*#__PURE__*/React.createElement("div", {
    className: "jwt-pcard__body"
  }, /*#__PURE__*/React.createElement(__ds_scope.MetaList, {
    items: meta
  }), /*#__PURE__*/React.createElement("h3", {
    className: "jwt-pcard__title"
  }, title), showView && /*#__PURE__*/React.createElement("span", {
    className: "jwt-pcard__view"
  }, "View project", /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "8",
    viewBox: "0 0 14 8",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 4h12M9 1l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-tag-css', `
.jwt-tag {
  display: inline-flex; align-items: center; gap: 0.45em;
  font-family: var(--font-sans); font-size: 0.8125rem; font-weight: var(--fw-regular);
  letter-spacing: 0.01em; line-height: 1;
  padding: 0.5rem 0.9rem; border-radius: var(--radius-pill);
  border: 1px solid var(--line); color: var(--text-secondary);
  background: transparent; cursor: default; user-select: none;
  transition: all var(--dur-fast) var(--ease-soft);
}
.jwt-tag--button { cursor: pointer; }
.jwt-tag--button:hover { border-color: var(--char-900); color: var(--text-primary); }
.jwt-tag--active {
  background: var(--char-900); border-color: var(--char-900); color: var(--paper);
}
.jwt-tag--solid {
  background: var(--bg-fill); border-color: transparent; color: var(--text-secondary);
}
.jwt-tag__count { color: var(--text-muted); font-variant-numeric: tabular-nums; }
.jwt-tag--active .jwt-tag__count { color: var(--tan-200); }
`);

/**
 * Category / filter pill. Use as a static label or an interactive filter
 * (`onClick` + `active`). Common on the portfolio gallery.
 */
function Tag({
  children,
  active = false,
  solid = false,
  count,
  className = '',
  onClick,
  ...rest
}) {
  const cls = ['jwt-tag', onClick ? 'jwt-tag--button' : '', active ? 'jwt-tag--active' : '', solid && !active ? 'jwt-tag--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick,
    role: onClick ? 'button' : undefined
  }, rest), children, count != null && /*#__PURE__*/React.createElement("span", {
    className: "jwt-tag__count"
  }, count));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once per bundle load so we get real :hover/:active/:focus. */
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-button-css', `
.jwt-btn {
  --_bg: var(--char-900); --_fg: var(--paper); --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.6em;
  font-family: var(--font-sans); font-weight: var(--fw-medium);
  letter-spacing: 0.02em; line-height: 1; white-space: nowrap;
  border: 1px solid var(--_bd); background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-sm); cursor: pointer;
  transition: background var(--dur-fast) var(--ease-soft),
              color var(--dur-fast) var(--ease-soft),
              border-color var(--dur-fast) var(--ease-soft),
              transform var(--dur-fast) var(--ease-soft);
  text-decoration: none;
}
.jwt-btn:active { transform: translateY(0.5px) scale(0.992); }
.jwt-btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.jwt-btn[disabled] { opacity: 0.42; pointer-events: none; }
.jwt-btn--sm { font-size: 0.8125rem; padding: 0.6rem 1.1rem; }
.jwt-btn--md { font-size: 0.875rem; padding: 0.85rem 1.6rem; }
.jwt-btn--lg { font-size: 0.95rem; padding: 1.05rem 2.1rem; }
.jwt-btn--uppercase { text-transform: uppercase; letter-spacing: 0.14em; font-size: 0.75rem; }

.jwt-btn--primary { --_bg: var(--char-900); --_fg: var(--paper); }
.jwt-btn--primary:hover { --_bg: var(--char-800); }
.jwt-btn--accent { --_bg: var(--tan-600); --_fg: var(--char-900); }
.jwt-btn--accent:hover { --_bg: var(--tan-600); }
.jwt-btn--outline { --_bg: transparent; --_fg: var(--char-900); --_bd: var(--char-900); }
.jwt-btn--outline:hover { --_bg: var(--char-900); --_fg: var(--paper); }
/* For dark / photographic grounds */
.jwt-btn--outline-inverse { --_bg: transparent; --_fg: var(--paper); --_bd: rgba(255,255,255,0.5); }
.jwt-btn--outline-inverse:hover { --_bg: var(--paper); --_fg: var(--char-900); --_bd: var(--paper); }
.jwt-btn--ghost { --_bg: transparent; --_fg: var(--char-900); --_bd: transparent; }
.jwt-btn--ghost:hover { --_bg: var(--paper-3); }
.jwt-btn--link {
  --_bg: transparent; --_fg: currentColor; --_bd: transparent;
  padding-left: 0; padding-right: 0; border-radius: 0;
  border-bottom: 1px solid var(--line); border-bottom-left-radius: 0;
}
.jwt-btn--link:hover { border-bottom-color: currentColor; }
.jwt-btn__arrow { transition: transform var(--dur-med) var(--ease-soft); flex: 0 0 auto; }
.jwt-btn:hover .jwt-btn__arrow { transform: translateX(3px); }
`);
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  className: "jwt-btn__arrow",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 8h9M9 4.5 12.5 8 9 11.5",
  stroke: "currentColor",
  strokeWidth: "1.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * JWT primary action. Renders an <a> when `href` is set, otherwise a <button>.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  uppercase = false,
  withArrow = false,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['jwt-btn', `jwt-btn--${variant}`, `jwt-btn--${size}`, uppercase ? 'jwt-btn--uppercase' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, children), withArrow && /*#__PURE__*/React.createElement(Arrow, null));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-field-css', `
.jwt-field { display: flex; flex-direction: column; gap: 0.5rem; }
.jwt-field__label {
  font-family: var(--font-mono); font-size: 0.7rem; font-weight: var(--fw-medium);
  letter-spacing: var(--track-eyebrow); text-transform: uppercase; color: var(--text-secondary);
}
.jwt-field__control {
  font-family: var(--font-sans); font-size: 1rem; font-weight: var(--fw-regular);
  color: var(--text-primary); background: transparent;
  border: none; border-bottom: 1px solid var(--line);
  padding: 0.65rem 0.1rem; width: 100%;
  transition: border-color var(--dur-fast) var(--ease-soft);
}
.jwt-field__control::placeholder { color: var(--text-muted); }
.jwt-field__control:focus { outline: none; border-bottom-color: var(--char-900); }
.jwt-field__control:focus-visible { outline: none; }
textarea.jwt-field__control { resize: vertical; min-height: 7rem; line-height: 1.6; }
select.jwt-field__control {
  appearance: none; cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5 6 6l5-4.5' stroke='%232B2A28' stroke-width='1.3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 0.1rem center; padding-right: 1.5rem;
}
.jwt-field--boxed .jwt-field__control {
  border: 1px solid var(--line); border-radius: var(--radius-sm);
  padding: 0.8rem 0.9rem; background: var(--bg-elevated);
}
.jwt-field--boxed .jwt-field__control:focus { border-color: var(--char-900); }
`);
let uid = 0;
function useId(prefix) {
  const ref = React.useRef();
  if (!ref.current) ref.current = `${prefix}-${++uid}`;
  return ref.current;
}

/** Underlined (default) or boxed text input with an uppercase mono label. */
function Input({
  label,
  boxed = false,
  type = 'text',
  className = '',
  ...rest
}) {
  const id = useId('jwt-input');
  return /*#__PURE__*/React.createElement("div", {
    className: `jwt-field ${boxed ? 'jwt-field--boxed' : ''} ${className}`.trim()
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "jwt-field__label",
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    className: "jwt-field__control"
  }, rest)));
}

/** Multi-line input that matches Input styling. */
function Textarea({
  label,
  boxed = false,
  rows = 4,
  className = '',
  ...rest
}) {
  const id = useId('jwt-textarea');
  return /*#__PURE__*/React.createElement("div", {
    className: `jwt-field ${boxed ? 'jwt-field--boxed' : ''} ${className}`.trim()
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "jwt-field__label",
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    className: "jwt-field__control"
  }, rest)));
}

/** Native select styled with the brand chevron. Pass <option>s as children. */
function Select({
  label,
  boxed = false,
  children,
  className = '',
  ...rest
}) {
  const id = useId('jwt-select');
  return /*#__PURE__*/React.createElement("div", {
    className: `jwt-field ${boxed ? 'jwt-field--boxed' : ''} ${className}`.trim()
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "jwt-field__label",
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "jwt-field__control"
  }, rest), children));
}
Object.assign(__ds_scope, { Input, Textarea, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
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
function useInView({
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
  once = true
} = {}) {
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
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    function detach() {
      detached = true;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    check();
    return () => {
      detach();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [once]);
  return [ref, inView];
}

/**
 * Scroll-reveal wrapper: content fades and rises into place once.
 * Stagger siblings with an incrementing `delay`.
 */
function Reveal({
  children,
  delay = 0,
  rise = 26,
  as = 'div',
  className = '',
  style,
  ...rest
}) {
  const [ref, inView] = useInView();
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: `jwt-reveal ${inView ? 'jwt-reveal--in' : ''} ${className}`.trim(),
    style: {
      '--_delay': `${delay}ms`,
      '--_rise': `${rise}px`,
      ...style
    }
  }, rest), children);
}

/**
 * Render-prop wrapper around the in-view hook, for reveal behaviour the built-in
 * `Reveal` / `RevealImage` don't cover (counters, lazy mounts, custom transforms).
 * This is the namespace-safe way to reach the hook from a consuming project.
 */
function InView({
  children,
  threshold,
  rootMargin,
  once
}) {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    once
  });
  return typeof children === 'function' ? children({
    ref,
    inView
  }) : null;
}

/**
 * Image reveal: the frame clips while the photograph settles from a slight
 * over-scale — the signature editorial entrance for full-bleed photography.
 * Pass an <img> (or any single child) as the only child.
 */
function RevealImage({
  children,
  delay = 0,
  className = '',
  style,
  ...rest
}) {
  const [ref, inView] = useInView();
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: `jwt-reveal-img ${inView ? 'jwt-reveal-img--in' : ''} ${className}`.trim(),
    style: {
      '--_delay': `${delay}ms`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { useInView, Reveal, InView, RevealImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BackToTop.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-backtotop-css', `
.jwt-btt {
  position: fixed; right: var(--space-5); bottom: var(--space-5); z-index: 60;
  width: 46px; height: 46px; border-radius: 999px; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--char-900); color: var(--paper); border: none;
  box-shadow: var(--shadow-md);
  opacity: 0; visibility: hidden; transform: translateY(10px);
  transition: opacity var(--dur-med) var(--ease-soft),
              transform var(--dur-med) var(--ease-soft),
              visibility var(--dur-med) var(--ease-soft),
              background var(--dur-fast) var(--ease-soft);
}
.jwt-btt--on { opacity: 1; visibility: visible; transform: none; }
.jwt-btt:hover { background: var(--tan-600); color: var(--char-900); }
.jwt-btt svg { display: block; }
`);

/** Appears after scrolling past `showAfter` px and returns the page to the top. */
function BackToTop({
  showAfter = 700,
  label = 'Back to top',
  className = '',
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setOn(window.scrollY > showAfter);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    className: `jwt-btt ${on ? 'jwt-btt--on' : ''} ${className}`.trim(),
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 15V2M1.5 7.5 7 2l5.5 5.5",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { BackToTop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BackToTop.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-footer-css', `
.jwt-footer { background: var(--bg-contrast); color: var(--paper); font-family: var(--font-sans); }
.jwt-footer__inner { max-width: var(--content-max); margin: 0 auto; padding: var(--space-9) var(--gutter) var(--space-6); }
.jwt-footer__top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 1.1fr; gap: 2.5rem; }
@media (max-width: 1000px) { .jwt-footer__top { grid-template-columns: 1fr 1fr 1fr; gap: 2.5rem; } }
@media (max-width: 620px) { .jwt-footer__top { grid-template-columns: 1fr 1fr; } }
.jwt-footer__brand-row { display: flex; flex-direction: column; align-items: flex-start; gap: 1.25rem; }
/* align-self stops the img being stretched to the column width by the flex
   default (align-items: stretch), which floats the SVG artwork off-centre. */
.jwt-footer__logo { height: 30px; width: auto; align-self: flex-start; }
.jwt-footer__wordmark { display: inline-flex; align-items: center; gap: 0.3em; font-weight: var(--fw-semibold); font-size: 1.6rem; letter-spacing: 0.02em; }
.jwt-footer__dot { width: 8px; height: 8px; border-radius: 999px; background: var(--tan-600); }
.jwt-footer__tag { font-family: var(--font-display); font-weight: var(--fw-extralight); font-size: 1.5rem; line-height: 1.35; color: var(--paper); max-width: 22ch; }
.jwt-footer__col h4 { font: var(--label-sm); font-weight: var(--fw-medium); letter-spacing: var(--track-eyebrow); text-transform: uppercase; color: var(--tan-200); margin: 0 0 1.1rem; }
.jwt-footer__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.7rem; }
.jwt-footer__col a { color: rgba(255,255,255,0.8); font-size: 0.9375rem; text-decoration: none; transition: color var(--dur-fast) var(--ease-soft); }
.jwt-footer__col a:hover { color: var(--tan-200); }
.jwt-footer__rule { height: 1px; background: var(--line-inverse); margin: var(--space-7) 0 var(--space-5); }
.jwt-footer__bottom { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.jwt-footer__copy { font-size: 0.8125rem; color: rgba(255,255,255,0.55); }
.jwt-footer__social { display: flex; gap: 1.5rem; }
.jwt-footer__social a { font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase; color: rgba(255,255,255,0.7); text-decoration: none; }
.jwt-footer__social a:hover { color: var(--paper); }
`);
const COLS = [{
  title: 'Expertise',
  links: [{
    label: 'Interiors',
    href: '#expertise/interiors'
  }, {
    label: 'Architectural',
    href: '#expertise/architectural'
  }, {
    label: 'Lighting',
    href: '#expertise/lighting'
  }]
}, {
  title: 'Sectors',
  links: [{
    label: 'Residential',
    href: '#projects/residential'
  }, {
    label: 'Hospitality',
    href: '#projects/hospitality'
  }, {
    label: 'Offices',
    href: '#projects/offices'
  }, {
    label: 'Spa & Wellness',
    href: '#projects/spa-wellness'
  }]
}, {
  title: 'Studio',
  links: [{
    label: 'About',
    href: '#about'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Contact',
    href: '#contact'
  }]
}];

/** Accepts either a plain string or a {label, href} object per link. */
function normalize(l) {
  return typeof l === 'string' ? {
    label: l,
    href: '#'
  } : l;
}

/**
 * Site footer on the dark ink ground: brand lockup + italic tagline, link
 * columns, contact block and social row.
 */
function Footer({
  logoSrc,
  brand = 'JWT',
  tagline = 'Turning vision into reality.',
  columns = COLS,
  email = 'studio@jwtdesignstudio.com',
  location = 'Dubai | Beirut',
  social = [{
    label: 'Instagram',
    href: '#'
  }],
  onNavigate,
  className = '',
  ...rest
}) {
  const year = new Date().getFullYear();
  const go = href => e => {
    if (onNavigate && href && href.startsWith('#')) {
      e.preventDefault();
      onNavigate(href);
    }
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: `jwt-footer ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "jwt-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jwt-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jwt-footer__brand-row"
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    className: "jwt-footer__logo",
    src: logoSrc,
    alt: brand
  }) : /*#__PURE__*/React.createElement("span", {
    className: "jwt-footer__wordmark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-footer__dot"
  }), brand), /*#__PURE__*/React.createElement("p", {
    className: "jwt-footer__tag"
  }, tagline)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    className: "jwt-footer__col",
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", null, c.title), /*#__PURE__*/React.createElement("ul", null, c.links.map(normalize).map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    onClick: go(l.href)
  }, l.label)))))), /*#__PURE__*/React.createElement("div", {
    className: "jwt-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`
  }, email)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    onClick: go('#about')
  }, location)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: go('#contact')
  }, "Start a project \u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "jwt-footer__rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jwt-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-footer__copy"
  }, "\xA9 ", year, " ", brand, " Design Studio. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "jwt-footer__social"
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href
  }, s.label))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-navbar-css', `
.jwt-nav {
  position: relative; z-index: 30; width: 100%;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.4rem var(--gutter); gap: 2rem;
  font-family: var(--font-sans);
}
.jwt-nav--overlay { position: absolute; top: 0; left: 0; }
.jwt-nav--solid { background: var(--bg-page); border-bottom: 1px solid var(--line); }
/* Sticky + condense-on-scroll */
.jwt-nav--fixed {
  position: fixed; top: 0; left: 0;
  transition: padding var(--dur-med) var(--ease-soft),
              background var(--dur-med) var(--ease-soft),
              border-color var(--dur-med) var(--ease-soft),
              color var(--dur-med) var(--ease-soft);
}
.jwt-nav--condensed {
  padding-top: 0.7rem; padding-bottom: 0.7rem;
  background: var(--bg-page); border-bottom: 1px solid var(--line);
}
.jwt-nav__logo { transition: height var(--dur-med) var(--ease-soft); }
.jwt-nav--condensed .jwt-nav__logo { height: 21px; }
.jwt-nav__brand { display: inline-flex; align-items: center; gap: 0.7rem; text-decoration: none; }
.jwt-nav__logo { height: 26px; width: auto; display: block; }
.jwt-nav__wordmark {
  display: inline-flex; align-items: center; gap: 0.28em;
  font-weight: var(--fw-semibold); font-size: 1.4rem; letter-spacing: 0.02em;
}
.jwt-nav__dot { width: 7px; height: 7px; border-radius: 999px; background: var(--tan-600); }
.jwt-nav__links { display: flex; align-items: stretch; gap: 2rem; }
.jwt-nav__item { position: relative; display: flex; align-items: center; }
.jwt-nav__link {
  font-size: 0.8125rem; font-weight: var(--fw-medium); letter-spacing: var(--track-label);
  text-transform: uppercase; color: inherit; text-decoration: none;
  position: relative; padding: 0.5rem 0; background: none; border: none; cursor: pointer;
  font-family: var(--font-sans); display: inline-flex; align-items: center; gap: 0.45rem;
  opacity: 0.82; transition: opacity var(--dur-fast) var(--ease-soft);
}
.jwt-nav__link::after {
  content: ''; position: absolute; left: 0; bottom: 0.15rem; height: 1px; width: 0;
  background: currentColor; transition: width var(--dur-med) var(--ease-soft);
}
.jwt-nav__link:hover { opacity: 1; color: inherit; }
.jwt-nav__link:hover::after, .jwt-nav__link--active::after { width: 100%; }
.jwt-nav__link--active { opacity: 1; }
.jwt-nav__chev { transition: transform var(--dur-fast) var(--ease-soft); }
.jwt-nav__item--open .jwt-nav__chev { transform: rotate(180deg); }

/* Expertise mega panel */
.jwt-nav__panel {
  position: absolute; top: calc(100% + 0.6rem); left: 50%; transform: translateX(-50%);
  background: var(--bg-elevated); border: 1px solid var(--line);
  border-radius: var(--radius-sm); box-shadow: var(--shadow-lg);
  padding: var(--space-5) var(--space-6); display: flex; gap: var(--space-7);
  z-index: 50; color: var(--char-900);
}
.jwt-nav__col { min-width: 160px; }
.jwt-nav__col h5 {
  margin: 0 0 0.9rem; font: var(--label-sm); letter-spacing: var(--track-eyebrow);
  text-transform: uppercase; color: var(--text-accent); font-weight: var(--fw-medium);
}
.jwt-nav__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.55rem; }
.jwt-nav__col a {
  font-family: var(--font-display); font-size: 1.125rem; font-weight: var(--fw-light);
  color: var(--text-primary); letter-spacing: var(--track-tight); text-decoration: none;
  transition: color var(--dur-fast) var(--ease-soft);
}
.jwt-nav__col a:hover { color: var(--text-accent); }

.jwt-nav__right { display: flex; align-items: center; gap: 1.5rem; }
.jwt-nav--light, .jwt-nav--solid { color: var(--char-900); }
.jwt-nav--overlay-tone { color: var(--paper); }
.jwt-nav__menu { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; color: inherit; }
.jwt-nav__menu svg { display: block; }

/* Mobile menu overlay */
.jwt-navmenu {
  position: fixed; inset: 0; z-index: 90; background: var(--bg-page); color: var(--char-900);
  display: flex; flex-direction: column; padding: 1.4rem var(--gutter) var(--space-7);
  opacity: 0; visibility: hidden;
  transition: opacity var(--dur-med) var(--ease-soft), visibility var(--dur-med) var(--ease-soft);
}
.jwt-navmenu--on { opacity: 1; visibility: visible; }
.jwt-navmenu__top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.jwt-navmenu__logo { height: 26px; width: auto; display: block; }
.jwt-navmenu__close {
  background: none; border: none; cursor: pointer; padding: 0.5rem; color: var(--char-900);
  display: inline-flex;
}
.jwt-navmenu__body {
  margin-top: var(--space-6); display: flex; flex-direction: column; gap: var(--space-6);
  overflow-y: auto; flex: 1;
}
.jwt-navmenu__links { display: flex; flex-direction: column; }
.jwt-navmenu__link {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 7vw, 2.5rem); line-height: 1.2; font-weight: var(--fw-extralight);
  letter-spacing: var(--track-tight); color: var(--text-primary);
  background: none; border: none; border-bottom: 1px solid var(--line-subtle);
  padding: 0.7rem 0; text-align: left; cursor: pointer; width: 100%;
  font-family: var(--font-display);
}
.jwt-navmenu__link:hover, .jwt-navmenu__link--active { color: var(--text-accent); }
.jwt-navmenu__cols { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); }
.jwt-navmenu__col h5 {
  margin: 0 0 0.9rem; font: var(--label-sm); letter-spacing: var(--track-eyebrow);
  text-transform: uppercase; color: var(--text-accent); font-weight: var(--fw-medium);
}
.jwt-navmenu__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
.jwt-navmenu__col a { font: var(--text-base); color: var(--text-secondary); text-decoration: none; }
.jwt-navmenu__col a:hover { color: var(--text-accent); }
.jwt-navmenu__foot { margin-top: auto; padding-top: var(--space-5); display: flex; flex-direction: column; gap: 1rem; }
.jwt-navmenu__meta { font: var(--label-sm); letter-spacing: var(--track-label); text-transform: uppercase; color: var(--text-muted); }
@media (min-width: 1001px) { .jwt-navmenu { display: none; } }
@media (max-width: 1000px) {
  .jwt-nav__links { display: none; }
  .jwt-nav__menu { display: inline-flex; }
  .jwt-nav__right .jwt-btn { display: none; }
}
`);
const DEFAULT_LINKS = [{
  label: 'Home',
  href: '#home'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Expertise',
  href: '#expertise',
  panel: true
}, {
  label: 'Projects',
  href: '#projects'
}, {
  label: 'Contact',
  href: '#contact'
}];
const DEFAULT_PANEL = [{
  title: 'Disciplines',
  links: [{
    label: 'Interiors',
    href: '#expertise/interiors'
  }, {
    label: 'Architectural',
    href: '#expertise/architectural'
  }, {
    label: 'Lighting',
    href: '#expertise/lighting'
  }, {
    label: 'Landscape',
    href: '#expertise/landscape'
  }]
}, {
  title: 'Sectors',
  links: [{
    label: 'Residential',
    href: '#projects/residential'
  }, {
    label: 'Hospitality',
    href: '#projects/hospitality'
  }, {
    label: 'Offices',
    href: '#projects/offices'
  }, {
    label: 'Spa & Wellness',
    href: '#projects/spa-wellness'
  }]
}];
const Chev = () => /*#__PURE__*/React.createElement("svg", {
  className: "jwt-nav__chev",
  width: "9",
  height: "6",
  viewBox: "0 0 9 6",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 1l3.5 3L8 1",
  stroke: "currentColor",
  strokeWidth: "1.3",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Marketing top bar. `overlay` for transparent-over-hero (cream text),
 * `solid` for a bordered cream bar on inner pages. The Expertise item opens a
 * two-column panel of disciplines and sectors.
 */
function Navbar({
  logoSrc,
  logoSrcCondensed,
  brand = 'JWT',
  links = DEFAULT_LINKS,
  panel = DEFAULT_PANEL,
  activeHref,
  variant = 'solid',
  cta = 'Enquire',
  ctaHref = '#contact',
  sticky = false,
  onMenu,
  onNavigate,
  className = '',
  ...rest
}) {
  const [openPanel, setOpenPanel] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const itemRef = React.useRef(null);
  React.useEffect(() => {
    if (!sticky) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sticky]);
  React.useEffect(() => {
    if (!openPanel) return;
    const onDoc = e => {
      if (itemRef.current && !itemRef.current.contains(e.target)) setOpenPanel(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [openPanel]);

  /* Lock page scroll and allow Escape while the mobile menu is open. */
  React.useEffect(() => {
    if (!openMenu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = e => {
      if (e.key === 'Escape') setOpenMenu(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [openMenu]);

  /* Over a hero the bar is cream-on-photo; once condensed it becomes a solid cream bar. */
  const onPhoto = variant === 'overlay' && !(sticky && scrolled);
  const tone = onPhoto ? 'jwt-nav--overlay-tone' : 'jwt-nav--light';
  const pos = sticky ? 'jwt-nav--fixed' : variant === 'overlay' ? 'jwt-nav--overlay' : 'jwt-nav--solid';
  const condensed = sticky && scrolled ? 'jwt-nav--condensed' : '';
  const shownLogo = !onPhoto && logoSrcCondensed ? logoSrcCondensed : logoSrc;
  const go = href => e => {
    if (onNavigate) {
      e.preventDefault();
      setOpenPanel(false);
      setOpenMenu(false);
      onNavigate(href);
    } else setOpenMenu(false);
  };
  const panelLinks = panel.reduce((acc, c) => acc.concat(c.links), []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", _extends({
    className: `jwt-nav ${pos} ${tone} ${condensed} ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "jwt-nav__brand",
    href: "#home",
    "aria-label": brand,
    onClick: go('#home')
  }, shownLogo ? /*#__PURE__*/React.createElement("img", {
    className: "jwt-nav__logo",
    src: shownLogo,
    alt: brand
  }) : /*#__PURE__*/React.createElement("span", {
    className: "jwt-nav__wordmark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-nav__dot"
  }), brand)), /*#__PURE__*/React.createElement("div", {
    className: "jwt-nav__links"
  }, links.map(l => {
    const active = activeHref === l.href;
    if (!l.panel) {
      return /*#__PURE__*/React.createElement("div", {
        className: "jwt-nav__item",
        key: l.href
      }, /*#__PURE__*/React.createElement("a", {
        href: l.href,
        onClick: go(l.href),
        className: `jwt-nav__link ${active ? 'jwt-nav__link--active' : ''}`.trim()
      }, l.label));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: `jwt-nav__item ${openPanel ? 'jwt-nav__item--open' : ''}`,
      key: l.href,
      ref: itemRef
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": openPanel,
      className: `jwt-nav__link ${active ? 'jwt-nav__link--active' : ''}`.trim(),
      onClick: () => setOpenPanel(o => !o)
    }, l.label, /*#__PURE__*/React.createElement(Chev, null)), openPanel && /*#__PURE__*/React.createElement("div", {
      className: "jwt-nav__panel"
    }, panel.map(col => /*#__PURE__*/React.createElement("div", {
      className: "jwt-nav__col",
      key: col.title
    }, /*#__PURE__*/React.createElement("h5", null, col.title), /*#__PURE__*/React.createElement("ul", null, col.links.map(cl => /*#__PURE__*/React.createElement("li", {
      key: cl.href
    }, /*#__PURE__*/React.createElement("a", {
      href: cl.href,
      onClick: go(cl.href)
    }, cl.label))))))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "jwt-nav__right"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    onClick: go(ctaHref),
    variant: onPhoto ? 'accent' : 'primary',
    size: "sm",
    uppercase: true
  }, cta), /*#__PURE__*/React.createElement("button", {
    className: "jwt-nav__menu",
    "aria-label": "Open menu",
    "aria-expanded": openMenu,
    onClick: () => {
      setOpenMenu(true);
      if (onMenu) onMenu();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "14",
    viewBox: "0 0 22 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 1h22M0 7h22M0 13h14",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: `jwt-navmenu ${openMenu ? 'jwt-navmenu--on' : ''}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Menu",
    "aria-hidden": !openMenu
  }, /*#__PURE__*/React.createElement("div", {
    className: "jwt-navmenu__top"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    "aria-label": brand,
    onClick: go('#home')
  }, logoSrcCondensed || logoSrc ? /*#__PURE__*/React.createElement("img", {
    className: "jwt-navmenu__logo",
    src: logoSrcCondensed || logoSrc,
    alt: brand
  }) : /*#__PURE__*/React.createElement("span", {
    className: "jwt-nav__wordmark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jwt-nav__dot"
  }), brand)), /*#__PURE__*/React.createElement("button", {
    className: "jwt-navmenu__close",
    "aria-label": "Close menu",
    onClick: () => setOpenMenu(false)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l12 12M16 4L4 16",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "jwt-navmenu__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jwt-navmenu__links"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.href,
    type: "button",
    className: `jwt-navmenu__link ${activeHref === l.href ? 'jwt-navmenu__link--active' : ''}`.trim(),
    onClick: go(l.href)
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "jwt-navmenu__cols"
  }, panel.map(col => /*#__PURE__*/React.createElement("div", {
    className: "jwt-navmenu__col",
    key: col.title
  }, /*#__PURE__*/React.createElement("h5", null, col.title), /*#__PURE__*/React.createElement("ul", null, col.links.map(cl => /*#__PURE__*/React.createElement("li", {
    key: cl.href
  }, /*#__PURE__*/React.createElement("a", {
    href: cl.href,
    onClick: go(cl.href)
  }, cl.label)))))))), /*#__PURE__*/React.createElement("div", {
    className: "jwt-navmenu__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    onClick: go(ctaHref),
    variant: "primary",
    size: "lg",
    uppercase: true,
    withArrow: true
  }, cta))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce('jwt-whatsapp-css', `
.jwt-wa {
  position: fixed; right: var(--fab-offset); bottom: var(--fab-offset); z-index: 80;
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--fab-size); height: var(--fab-size);
  border-radius: var(--radius-pill);
  background: var(--char-900); color: var(--paper);
  font-family: var(--font-sans); font-size: 0.875rem; font-weight: var(--fw-medium);
  letter-spacing: 0.02em; text-decoration: none;
  box-shadow: var(--shadow-lg);
  transition: background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft);
}
.jwt-wa:hover { background: var(--tan-700); }
.jwt-wa:active { transform: scale(0.98); }
.jwt-wa:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 3px; }
.jwt-wa svg { display: block; flex: 0 0 auto; }
@media (max-width: 600px) {
  .jwt-wa { --fab-size: 52px; --fab-offset: 16px; }
}
`);

/**
 * Floating WhatsApp enquiry button — the default contact route in the UAE.
 * Opens wa.me with an optional prefilled message.
 */
function WhatsAppButton({
  phone,
  label = 'WhatsApp us',
  message = 'Hello JWT, I would like to talk about a project.',
  className = '',
  ...rest
}) {
  const href = `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  return /*#__PURE__*/React.createElement("a", _extends({
    className: `jwt-wa ${className}`.trim(),
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"
  })));
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* JWT website kit — About the studio. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const {
    Navbar,
    Eyebrow,
    Button,
    StatBlock,
    Quote,
    Divider,
    Reveal,
    RevealImage,
    PersonCard
  } = NS;
  const {
    Container,
    Section,
    SectionHead,
    PageHead,
    Lede,
    NavSpacer,
    navLinks,
    logoCharcoal
  } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  function AboutPage({
    navigate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement(Navbar, {
      variant: "solid",
      sticky: true,
      logoSrc: logoCharcoal,
      links: navLinks,
      activeHref: "#about",
      cta: "Start a project",
      ctaHref: "#contact",
      onNavigate: navigate
    }), /*#__PURE__*/React.createElement(NavSpacer, null), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "About",
      title: "An upscale studio, built on two points of view.",
      lede: `JWT Design Studio was founded in ${D.studio.founded} by ${D.studio.founders} — two sisters working across Dubai and Beirut. The practice still runs the way it started: closely, personally, and tailor-made to each project.`
    })), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "sm",
      style: {
        paddingTop: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-8)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(RevealImage, {
      style: {
        aspectRatio: '4 / 5',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.JWT_IMG.ronLounge,
      alt: "JWT Design Studio interior visualisation",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true
    }, "The sisters"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-lg)',
        letterSpacing: 'var(--track-tight)',
        margin: '1rem 0 1.2rem',
        maxWidth: '20ch',
        textWrap: 'balance'
      }
    }, "Two sisters, one way of seeing a space."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--text-lg)',
        color: 'var(--text-secondary)',
        maxWidth: '48ch',
        marginBottom: '1.2rem'
      }
    }, D.studio.founders, " founded JWT in ", D.studio.founded, " and still lead every project themselves \u2014 there is no account layer between you and the people drawing your space."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--text-base)',
        color: 'var(--text-secondary)',
        maxWidth: '50ch',
        marginBottom: 'var(--space-6)'
      }
    }, "Between Dubai and Beirut they work across interiors, architecture, lighting and landscape, keeping every discipline in-house so nothing is lost in translation between packages."), /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-5)',
        maxWidth: '380px'
      }
    }, D.team.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: t.name,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(PersonCard, {
      src: t.img,
      name: t.name,
      role: t.role,
      studio: D.studio.locations,
      href: "#contact",
      onClick: e => {
        e.preventDefault();
        navigate('#contact');
      }
    }))))))), /*#__PURE__*/React.createElement(Section, {
      bg: "contrast",
      pad: "md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-6)'
      }
    }, D.stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.label,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(StatBlock, _extends({}, s, {
      tone: "inverse"
    })))))), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "lg"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "How we work",
      title: "Concept to completion, in four steps.",
      align: "center",
      max: "22ch"
    }), /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-6)'
      }
    }, D.process.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.index,
      delay: i * 90
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--line)',
        paddingTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "muted"
    }, s.index), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: 'var(--display-md)',
        margin: '0.6rem 0'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--text-base)',
        color: 'var(--text-secondary)'
      }
    }, s.body)))))), /*#__PURE__*/React.createElement(Section, {
      bg: "sunken",
      pad: "md"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Studios",
      title: "Dubai | Beirut",
      max: "20ch"
    }), /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-7)'
      }
    }, [{
      city: 'Dubai',
      body: 'The Gulf base, leading residential and hospitality delivery across the UAE.'
    }, {
      city: 'Beirut',
      body: 'The studio\u2019s second home \u2014 residences, restaurants and wellness spaces.'
    }].map(s => /*#__PURE__*/React.createElement("div", {
      key: s.city,
      style: {
        borderTop: '1px solid var(--line)',
        paddingTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: 'var(--display-lg)',
        marginBottom: '0.8rem'
      }
    }, s.city), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--text-lg)',
        color: 'var(--text-secondary)',
        maxWidth: '38ch'
      }
    }, s.body))))), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '32ch',
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Quote, {
      size: "xl",
      author: "JWT Design Studio",
      role: "Dubai | Beirut"
    }, "Committed to delivering tailor-made projects, and turning vision into reality."))), /*#__PURE__*/React.createElement(Section, {
      bg: "sunken",
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true
    }, "Work with us"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-xl)',
        maxWidth: '20ch',
        textWrap: 'balance'
      }
    }, "We'd love to hear about your space."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      withArrow: true,
      onClick: () => navigate('#contact')
    }, "Start a project"))));
  }
  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.AboutPage = AboutPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
/* JWT website kit — Contact / enquiry with a mock-submitting form. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const {
    Navbar,
    Eyebrow,
    Button,
    Input,
    Textarea,
    Select,
    Divider
  } = NS;
  const {
    Container,
    Section,
    PageHead,
    NavSpacer,
    navLinks,
    logoCharcoal
  } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const {
    useState
  } = React;
  function Detail({
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--line-subtle)',
        paddingTop: '0.9rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--label-sm)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--text-lg)',
        marginTop: '0.3rem'
      }
    }, value));
  }
  function ContactPage({
    navigate
  }) {
    const [sent, setSent] = useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement(Navbar, {
      variant: "solid",
      sticky: true,
      logoSrc: logoCharcoal,
      links: navLinks,
      activeHref: "#contact",
      cta: "Start a project",
      ctaHref: "#contact",
      onNavigate: navigate
    }), /*#__PURE__*/React.createElement(NavSpacer, null), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Contact",
      title: "Start a project.",
      lede: "A few details to begin. We'll reply within two working days to arrange a first conversation \u2014 in Dubai, in Beirut, or on a call."
    })), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "sm",
      style: {
        paddingTop: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 'var(--space-9)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-7)',
        background: 'var(--bg-elevated)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true
    }, "Thank you"), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: 'var(--display-lg)',
        margin: '0.8rem 0 0.6rem'
      }
    }, "Your enquiry is on its way."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--text-base)',
        color: 'var(--text-secondary)',
        maxWidth: '42ch',
        marginBottom: '1.5rem'
      }
    }, "We've received your details and will be in touch shortly. In the meantime, take a look at our recent projects."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => navigate('#projects')
    }, "View projects"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => setSent(false)
    }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Your name",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      placeholder: "+971 50 000 0000"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Region",
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Select\u2026"), D.regions.map(r => /*#__PURE__*/React.createElement("option", {
      key: r
    }, r)), /*#__PURE__*/React.createElement("option", null, "Elsewhere")), /*#__PURE__*/React.createElement(Select, {
      label: "Expertise required",
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Select\u2026"), D.disciplines.map(d => /*#__PURE__*/React.createElement("option", {
      key: d
    }, d)), /*#__PURE__*/React.createElement("option", null, "All three")), /*#__PURE__*/React.createElement(Select, {
      label: "Sector",
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Select\u2026"), D.sectors.map(s => /*#__PURE__*/React.createElement("option", {
      key: s
    }, s))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1'
      }
    }, /*#__PURE__*/React.createElement(Textarea, {
      label: "About your project",
      rows: 4,
      placeholder: "Where is it, what stage are you at, and when would you like to start?"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1',
        marginTop: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      withArrow: true,
      type: "submit"
    }, "Send enquiry")))), /*#__PURE__*/React.createElement("aside", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '4 / 5',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.JWT_IMG.ronKitchen,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Detail, {
      label: "Email",
      value: D.studio.email
    }), /*#__PURE__*/React.createElement(Detail, {
      label: "Studios",
      value: D.studio.locations
    }), /*#__PURE__*/React.createElement(Detail, {
      label: "Instagram",
      value: D.studio.instagram
    }))))));
  }
  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.ContactPage = ContactPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ExpertisePage.jsx
try { (() => {
/* JWT website kit — Expertise: the four disciplines. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const {
    Navbar,
    Button,
    Eyebrow,
    Divider,
    ProjectCard,
    MetaList,
    Reveal,
    RevealImage
  } = NS;
  const {
    Container,
    Section,
    PageHead,
    Lede,
    SectionHead,
    NavSpacer,
    navLinks,
    logoCharcoal
  } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  function Discipline({
    e,
    flip,
    navigate
  }) {
    const related = D.projects.filter(p => p.discipline === e.title).slice(0, 3);
    return /*#__PURE__*/React.createElement("div", {
      id: e.slug,
      style: {
        borderTop: '1px solid var(--line)',
        paddingTop: 'var(--space-7)',
        marginBottom: 'var(--space-9)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: flip ? '1fr 0.9fr' : '0.9fr 1fr',
        gap: 'var(--space-8)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        order: flip ? 2 : 1
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true
    }, e.index, " \u2014 ", e.title)), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-xl)',
        letterSpacing: 'var(--track-tight)',
        margin: '1rem 0 1.2rem',
        maxWidth: '18ch',
        textWrap: 'balance'
      }
    }, e.lede), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--text-lg)',
        color: 'var(--text-secondary)',
        maxWidth: '50ch',
        marginBottom: 'var(--space-6)'
      }
    }, e.body), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
      }
    }, e.services.map(s => /*#__PURE__*/React.createElement("li", {
      key: s,
      style: {
        font: 'var(--text-base)',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--line-subtle)',
        padding: '0.85rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '5px',
        height: '5px',
        borderRadius: '999px',
        background: 'var(--tan-600)',
        flex: '0 0 auto'
      }
    }), s)))), /*#__PURE__*/React.createElement("div", {
      style: {
        order: flip ? 1 : 2
      }
    }, /*#__PURE__*/React.createElement(RevealImage, {
      style: {
        aspectRatio: '4 / 5',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: e.img,
      alt: e.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })))), related.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(Divider, {
      label: `${e.title} projects`
    }), /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-6)',
        marginTop: 'var(--space-6)'
      }
    }, related.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.slug,
      delay: i * 110
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      src: p.img,
      title: p.title,
      ratio: "16 / 9",
      visualisation: p.visualisation && p.hasImagery,
      discipline: p.discipline,
      sector: p.sector,
      region: p.region,
      year: p.year,
      onClick: ev => {
        ev.preventDefault();
        navigate('#project/' + p.slug);
      }
    }))))));
  }
  function ExpertisePage({
    navigate,
    param
  }) {
    /* Deep link (#expertise/lighting) focuses a single discipline. */
    const focused = D.expertise.find(e => e.slug === param);
    const list = focused ? [focused] : D.expertise;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement(Navbar, {
      variant: "solid",
      sticky: true,
      logoSrc: logoCharcoal,
      links: navLinks,
      activeHref: "#expertise",
      cta: "Start a project",
      ctaHref: "#contact",
      onNavigate: navigate
    }), /*#__PURE__*/React.createElement(NavSpacer, null), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Expertise",
      title: focused ? focused.title : 'Expertise',
      lede: focused ? focused.lede : 'Four disciplines, resolved by one team. Interiors, architecture, lighting and landscape are designed together — which is why a JWT project reads as a single idea rather than a set of separate packages.'
    }), focused && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => navigate('#expertise')
    }, "\u2190 All expertise"))), /*#__PURE__*/React.createElement(Container, null, list.map((e, i) => /*#__PURE__*/React.createElement(Discipline, {
      key: e.slug,
      e: e,
      flip: i % 2 === 1,
      navigate: navigate
    }))), /*#__PURE__*/React.createElement(Section, {
      bg: "contrast",
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true,
      tone: "inverse"
    }, "Sectors"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-xl)',
        color: 'var(--paper)',
        maxWidth: '24ch',
        textWrap: 'balance'
      }
    }, "Residential, hospitality, offices, spa & wellness."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      withArrow: true,
      onClick: () => navigate('#projects')
    }, "Browse projects"))));
  }
  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.ExpertisePage = ExpertisePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ExpertisePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* JWT website kit — Home. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const {
    Navbar,
    Button,
    Eyebrow,
    ProjectCard,
    StatBlock,
    Quote,
    Divider,
    Reveal,
    RevealImage,
    CompareSlider,
    HeroShowcase,
    PersonCard
  } = NS;
  const {
    Container,
    Section,
    SectionHead,
    Lede,
    navLinks,
    logoWhite,
    logoCharcoal
  } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const I = window.JWT_IMG;
  function HomePage({
    navigate
  }) {
    const [cover, setCover] = React.useState(0);
    const comparisons = D.comparisons || [];
    const c = comparisons[cover];

    /* The project the stage shows, then three more as cards below it. */
    const lead = D.projects.find(p => p.hasImagery);
    const featured = D.projects.filter(p => p !== lead && p.classified).slice(0, 3);

    /* Stage slides — per project, a main full-bleed frame followed by two that
       rest inset over it; the next project restarts the sequence. */
    const stageSlides = lead ? (D.galleries[lead.slug] || []).map((g, i) => ({
      src: I[g.key],
      title: lead.title,
      meta: [lead.region === 'Beirut' ? 'JWT Beirut' : 'JWT Dubai', lead.discipline, lead.classified ? lead.sector : null, g.caption].filter(Boolean),
      href: '#project/' + lead.slug,
      inset: i % 3 !== 0
    })) : [];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
      variant: "overlay",
      sticky: true,
      logoSrc: logoWhite,
      logoSrcCondensed: logoCharcoal,
      links: navLinks,
      activeHref: "#home",
      cta: "Start a project",
      ctaHref: "#contact",
      onNavigate: navigate
    }), c && /*#__PURE__*/React.createElement(CompareSlider, {
      key: cover,
      height: "100vh",
      before: I[c.before],
      after: I[c.after],
      beforeLabel: c.beforeLabel,
      afterLabel: c.afterLabel,
      beforeAlt: `${c.title} — ${c.room}, ${c.beforeLabel}`,
      afterAlt: `${c.title} — ${c.room}, ${c.afterLabel}`,
      safeRight: "var(--fab-safe)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'var(--gutter)',
        paddingBottom: 'calc(var(--gutter) + 46px)',
        gap: 'var(--space-5)',
        background: 'linear-gradient(180deg, rgba(44,46,53,0.34) 0%, rgba(44,46,53,0) 30%, rgba(44,46,53,0) 55%, rgba(44,46,53,0.62) 100%)'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--display-2xl)',
        color: '#FFFFFF',
        letterSpacing: 'var(--track-display)',
        margin: 0,
        maxWidth: '16ch',
        textWrap: 'balance'
      }
    }, "Turning vision into reality."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--label-sm)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.62)',
        paddingRight: 'var(--fab-safe)'
      }
    }, "Drag to compare")))), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 'var(--space-8)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true
    }, "The Studio")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-4)',
        marginTop: 'var(--space-5)'
      }
    }, D.team.map(t => /*#__PURE__*/React.createElement(PersonCard, {
      key: t.name,
      src: t.img,
      name: t.name,
      role: t.role,
      studio: D.studio.locations,
      href: "#about",
      onClick: ev => {
        ev.preventDefault();
        navigate('#about');
      }
    }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--display-md)',
        letterSpacing: 'var(--track-tight)',
        textWrap: 'balance',
        marginBottom: '1.1rem'
      }
    }, "We are an upscale design studio, committed to delivering tailor-made projects.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement(Lede, {
      max: "58ch"
    }, "Led by two sisters across Dubai and Beirut, JWT works end to end and entirely in-house \u2014 so a project moves from first sketch to final light scene without ever losing its thread.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 220
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '2rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      withArrow: true,
      onClick: () => navigate('#about')
    }, "About the studio")))))), /*#__PURE__*/React.createElement(Section, {
      bg: "sunken",
      pad: "md"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Expertise",
      title: "Four disciplines, one team."
    })), /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-6)'
      }
    }, D.expertise.map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: e.slug,
      delay: i * 90
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => navigate('#expertise/' + e.slug),
      style: {
        background: 'none',
        border: 'none',
        borderTop: '1px solid var(--line)',
        padding: 'var(--space-4) 0 0',
        textAlign: 'left',
        cursor: 'pointer',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "muted"
    }, e.index), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: 'var(--display-md)',
        margin: '0.7rem 0 0'
      }
    }, e.title)))))), stageSlides.length > 0 && /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true
    }, "Selected projects"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      withArrow: true,
      onClick: () => navigate('#projects')
    }, "All projects")))), stageSlides.length > 0 && /*#__PURE__*/React.createElement(HeroShowcase, {
      slides: stageSlides,
      onSelect: navigate,
      cta: "View project"
    }), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-6)'
      }
    }, featured.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.slug,
      delay: i * 110
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      src: p.img,
      title: p.title,
      discipline: p.discipline,
      sector: p.sector,
      region: p.region,
      year: p.year,
      ratio: p.ratio || '16 / 9',
      visualisation: p.visualisation && p.hasImagery,
      onClick: e => {
        e.preventDefault();
        navigate('#project/' + p.slug);
      }
    }))))), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Divider, {
      label: "Sectors we work across"
    })), /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-6)',
        marginTop: 'var(--space-6)'
      }
    }, D.sectors.map((s, i) => {
      const count = D.projects.filter(p => p.classified && p.sector === s).length;
      return /*#__PURE__*/React.createElement(Reveal, {
        key: s,
        delay: i * 90
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => navigate('#projects/' + s.toLowerCase().replace(/\s*&\s*/, '-').replace(/\s+/g, '-')),
        style: {
          background: 'none',
          border: 'none',
          borderTop: '1px solid var(--line)',
          padding: 'var(--space-4) 0 0',
          textAlign: 'left',
          cursor: 'pointer',
          width: '100%',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '1rem'
        }
      }, /*#__PURE__*/React.createElement("h3", {
        style: {
          font: 'var(--display-md)'
        }
      }, s), count > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--label-sm)',
          letterSpacing: 'var(--track-label)',
          color: 'var(--text-muted)'
        }
      }, count)));
    }))), /*#__PURE__*/React.createElement(Section, {
      bg: "contrast",
      pad: "md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-6)'
      }
    }, D.stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: s.label,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(StatBlock, _extends({}, s, {
      tone: "inverse"
    })))))), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '40ch',
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Quote, {
      size: "md",
      author: D.studio.founders,
      role: `Founders · Since ${D.studio.founded}`
    }, D.studio.positioning)))), /*#__PURE__*/React.createElement(Section, {
      bg: "sunken",
      pad: "lg"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true
    }, "Start a project"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-xl)',
        maxWidth: '22ch',
        textWrap: 'balance'
      }
    }, "Tell us what you're building, and we'll tell you how we'd shape it."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      withArrow: true,
      onClick: () => navigate('#contact')
    }, "Get in touch")))));
  }
  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.HomePage = HomePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectPage.jsx
try { (() => {
/* JWT website kit — single project case study.
   Structure follows the HBA project-page order: title-first on cream with
   stacked meta, lead image, portrait, large statement paragraphs, credit table
   + share, captioned carousel, team, awards, related projects. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const {
    Navbar,
    Eyebrow,
    Button,
    Divider,
    Carousel,
    FactTable,
    ShareRow,
    PersonCard,
    AwardList,
    ProjectCard,
    Reveal,
    RevealImage
  } = NS;
  const {
    Container,
    Section,
    Lede,
    NavSpacer,
    navLinks,
    logoCharcoal
  } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const I = window.JWT_IMG;

  /* Stacked meta lines, as HBA renders them under the project title. */
  function MetaStack({
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem 2.5rem'
      }
    }, items.filter(Boolean).map((m, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        font: 'var(--label)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: i === 0 ? 'var(--text-accent)' : 'var(--text-secondary)'
      }
    }, m)));
  }
  function ProjectPage({
    navigate,
    param
  }) {
    const idx = Math.max(0, D.projects.findIndex(p => p.slug === param));
    const p = D.projects[idx];
    const gallery = (D.galleries[p.slug] || []).map(g => ({
      src: I[g.key],
      caption: g.caption
    }));
    const hasGallery = gallery.length > 0;
    const portrait = hasGallery;

    /* Related: same sector first, then anything else. */
    const related = D.projects.filter(x => x.slug !== p.slug).sort((a, b) => (b.sector === p.sector) - (a.sector === p.sector)).slice(0, 4);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement(Navbar, {
      variant: "solid",
      sticky: true,
      logoSrc: logoCharcoal,
      links: navLinks,
      activeHref: "#projects",
      cta: "Start a project",
      ctaHref: "#contact",
      onNavigate: navigate
    }), /*#__PURE__*/React.createElement(NavSpacer, null), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "sm",
      style: {
        paddingTop: 'var(--space-5)',
        paddingBottom: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("button", {
      onClick: () => navigate('#projects'),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-secondary)',
        font: 'var(--text-sm)',
        padding: 0
      }
    }, "\u2190 All projects"))), p.img && /*#__PURE__*/React.createElement(RevealImage, {
      style: {
        width: '100%',
        height: '82vh'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: p.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: '1rem',
        left: 'var(--gutter)',
        font: 'var(--label-sm)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: 'var(--paper)',
        background: 'rgba(44,46,53,0.55)',
        padding: '0.35rem 0.7rem',
        borderRadius: 'var(--radius-xs)',
        backdropFilter: 'blur(3px)'
      }
    }, "Visualisation")), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 'var(--space-6)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--display-lg)',
        letterSpacing: 'var(--track-display)',
        maxWidth: '20ch',
        textWrap: 'balance',
        margin: 0
      }
    }, p.title)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 90
    }, /*#__PURE__*/React.createElement(MetaStack, {
      items: [p.discipline, p.sector, p.region, p.year]
    })))), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: portrait ? '0.8fr 1.2fr' : '1fr',
        gap: 'var(--space-8)',
        alignItems: 'start'
      }
    }, portrait && /*#__PURE__*/React.createElement(RevealImage, {
      style: {
        aspectRatio: '3 / 4',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: gallery[0].src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
        maxWidth: portrait ? 'none' : '68ch'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--display-md)',
        letterSpacing: 'var(--track-tight)',
        lineHeight: 1.3,
        textWrap: 'pretty'
      }
    }, p.summary || 'Project details are being prepared. Please get in touch for the full case study.')), p.summary && /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--display-md)',
        letterSpacing: 'var(--track-tight)',
        lineHeight: 1.3,
        color: 'var(--text-secondary)',
        textWrap: 'pretty'
      }
    }, "We reworked the plan around light and flow, layering warm materials, natural stone and bespoke joinery \u2014 every element specified to be lived with rather than looked at.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 180
    }, /*#__PURE__*/React.createElement(Lede, {
      max: "52ch"
    }, "Interiors, architecture and lighting were resolved together in-house, so the built result matches the drawings exactly and the scheme reads as a single idea."))))), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "sm",
      style: {
        paddingTop: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 'var(--space-9)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(FactTable, {
      rows: [{
        label: 'Location',
        value: p.region
      }, {
        label: 'Studio',
        value: p.region === 'Beirut' ? 'JWT Beirut' : 'JWT Dubai'
      }, {
        label: 'Expertise',
        value: p.scope
      }, {
        label: 'Discipline',
        value: p.discipline
      }, {
        label: 'Sector',
        value: p.classified ? p.sector : null
      }, {
        label: 'Materials',
        value: p.materials
      }, {
        label: 'Imagery',
        value: '3D visualisation, in-house'
      }].filter(r => r.value != null && r.value !== '')
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120,
      style: {
        paddingTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(ShareRow, {
      title: p.title
    })))), hasGallery && /*#__PURE__*/React.createElement(Section, {
      bg: "sunken",
      pad: "md"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true
    }, "Gallery \u2014 visualisations")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100,
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Carousel, {
      ratio: "16 / 9",
      slides: gallery
    }))), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-lg)',
        letterSpacing: 'var(--track-tight)'
      }
    }, "Studio"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      withArrow: true,
      onClick: () => navigate('#about')
    }, "About JWT"))), /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 320px))',
        gap: 'var(--space-6)'
      }
    }, D.team.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: t.name,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(PersonCard, {
      src: t.img,
      name: t.name,
      role: t.role,
      studio: t.studio,
      onClick: e => {
        e.preventDefault();
        navigate('#about');
      }
    }))))), D.awards.length > 0 && /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "sm",
      style: {
        paddingTop: 0
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-lg)',
        letterSpacing: 'var(--track-tight)',
        marginBottom: 'var(--space-5)'
      }
    }, "Awards & accolades")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement(AwardList, {
      items: D.awards
    }))), /*#__PURE__*/React.createElement(Section, {
      bg: "sunken",
      pad: "md"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-lg)',
        letterSpacing: 'var(--track-tight)',
        marginBottom: 'var(--space-6)'
      }
    }, "Related projects")), /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-6)'
      }
    }, related.slice(0, 3).map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: r.slug,
      delay: i * 90
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      src: r.img,
      title: r.title,
      ratio: "16 / 9",
      visualisation: r.visualisation && r.hasImagery,
      discipline: r.discipline,
      sector: r.sector,
      region: r.region,
      year: r.year,
      onClick: e => {
        e.preventDefault();
        navigate('#project/' + r.slug);
      }
    }))))));
  }
  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.ProjectPage = ProjectPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsPage.jsx
try { (() => {
/* JWT website kit — Projects index with Expertise + Sector + Region filters and Load More. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const {
    Navbar,
    Button,
    ProjectCard,
    Badge,
    FilterBar,
    Reveal
  } = NS;
  const {
    Container,
    Section,
    PageHead,
    NavSpacer,
    navLinks,
    logoCharcoal
  } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const {
    useState,
    useEffect
  } = React;
  const PAGE = 6;

  /* Map a #projects/<slug> deep link onto a sector preset. */
  const SECTOR_FROM_SLUG = {
    residential: 'Residential',
    hospitality: 'Hospitality',
    offices: 'Offices',
    'spa-wellness': 'Spa & Wellness'
  };
  function ProjectsPage({
    navigate,
    param
  }) {
    const [discipline, setDiscipline] = useState('All');
    const [sector, setSector] = useState('All');
    const [region, setRegion] = useState('All');
    const [shown, setShown] = useState(PAGE);

    /* Honour deep links from the Expertise nav panel. A sector deep link should
       present that sector cleanly, so clear any filters left over from before. */
    useEffect(() => {
      setSector(SECTOR_FROM_SLUG[param] || 'All');
      setDiscipline('All');
      setRegion('All');
      setShown(PAGE);
    }, [param]);
    const match = p => (discipline === 'All' || p.discipline === discipline) && (sector === 'All' || p.sector === sector) && (region === 'All' || p.region === region);
    const results = D.projects.filter(match);
    const visible = results.slice(0, shown);
    const reset = fn => v => {
      fn(v);
      setShown(PAGE);
    };
    const clearAll = () => {
      setDiscipline('All');
      setSector('All');
      setRegion('All');
      setShown(PAGE);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement(Navbar, {
      variant: "solid",
      sticky: true,
      logoSrc: logoCharcoal,
      links: navLinks,
      activeHref: "#projects",
      cta: "Start a project",
      ctaHref: "#contact",
      onNavigate: navigate
    }), /*#__PURE__*/React.createElement(NavSpacer, null), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "md"
    }, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Projects",
      title: "Projects",
      lede: "We know great design is meaningless without exceptional delivery. From concept to completion, our clients know that a tailor-made idea can be brought to life exactly as it was drawn."
    })), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(FilterBar, {
      count: results.length,
      total: D.projects.length,
      onClear: clearAll,
      filters: [{
        name: 'Expertise',
        value: discipline,
        options: D.disciplines,
        onChange: reset(setDiscipline)
      }, {
        name: 'Sector',
        value: sector,
        options: D.sectors,
        onChange: reset(setSector)
      }, {
        name: 'Region',
        value: region,
        options: D.regions,
        onChange: reset(setRegion)
      }]
    })), /*#__PURE__*/React.createElement(Section, {
      bg: "page",
      pad: "sm"
    }, visible.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-9) 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--display-md)',
        marginBottom: '1rem'
      }
    }, "No projects match that combination."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: clearAll
    }, "Clear filters")) : /*#__PURE__*/React.createElement("div", {
      className: "jwt-rg jwt-rg-multi",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-7) var(--space-6)'
      }
    }, visible.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: p.slug,
      delay: i % 3 * 110
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      src: p.img,
      title: p.title,
      discipline: p.discipline,
      sector: p.sector,
      region: p.region,
      year: p.year,
      ratio: p.ratio || '16 / 9',
      visualisation: p.visualisation && p.hasImagery,
      badge: p.year === 'In progress' ? /*#__PURE__*/React.createElement(Badge, {
        tone: "ink"
      }, "In progress") : null,
      onClick: e => {
        e.preventDefault();
        navigate('#project/' + p.slug);
      }
    })))), shown < results.length && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      uppercase: true,
      onClick: () => setShown(s => s + PAGE)
    }, "Load more"))));
  }
  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.ProjectsPage = ProjectsPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* JWT Design Studio — content for the website UI kit.
   Plain global (no module) so every Babel screen script can read window.JWT_DATA.

   REAL, confirmed by the studio:
     · founders  — Jinane and Joelle Touma (two sisters, no wider team)
     · founded   — 2017
     · locations — Dubai | Beirut
     · character — "calm, modern, studied"
     · clients   — private homeowners, property developers, café/restaurant owners
     · projects  — the 22 names below are the studio's real project list
     · imagery   — the RONALDO MUCHAWAR renders in assets/projects/ronaldo-muchawar/
                   are the studio's own work. ALL are 3D visualisations, and the
                   site labels them as such by the studio's instruction.

   STILL PLACEHOLDER (see readme.md → caveats):
     · every project's year, area, duration, sector and summary
     · email + phone
     · imagery for the other 21 projects (they render as index tiles, not fake photos)
     · no testimonials or awards yet — those sections are intentionally absent
       rather than filled with invented content. */
(function () {
  /* Paths are relative to ui_kits/website/, so climb to the project root. */
  const R = '../../assets/projects/ronaldo-muchawar/';

  /* The studio's own renders — RONALDO MUCHAWAR. */
  window.JWT_IMG = {
    ronLiving: R + '01-living.jpg',
    ronAtrium: R + '02-stair-atrium.jpg',
    ronStair: R + '03-stair-detail.jpg',
    ronDining: R + '04-dining.jpg',
    ronLounge: R + '05-lounge.jpg',
    ronKitchen: R + '06-kitchen.jpg'
  };
  const I = window.JWT_IMG;
  const DISCIPLINES = ['Interiors', 'Architectural', 'Lighting', 'Landscape'];
  const SECTORS = ['Residential', 'Hospitality', 'Offices', 'Spa & Wellness'];
  const REGIONS = ['Dubai', 'Beirut'];

  /* Real project names, kept exactly as the studio refers to them. */
  const NAMES = ['RONALDO MUCHAWAR', 'AL WATHBA MAJLIS', 'H.A.M EXTERNAL MAJLIS', 'MIREL EXPERIENCE CENTER', 'SERENITY SECRET', 'SH. BUTTI VILLA', 'SHIKHANA', 'SOBHA VILLAS', 'THE VILLAGE MALL', 'JPL LANDSCAPE', 'BS PROJECT', 'GG PROJECT', 'JADEEL PROJECT', 'JW PROJECT', 'MR PROJECT', 'NA PROJECT', 'NG PROJECT', 'NR PROJECT', 'RC PROJECT', 'SP PROJECT', 'VK PROJECT', 'ZBM PROJECT'];
  const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  /* Discipline / sector assignments. Names that state their own type are
     classified from the name; coded projects default to Interiors/Residential
     and are flagged so we never present a guess as fact. */
  const CLASSIFY = {
    'RONALDO MUCHAWAR': {
      d: 'Interiors',
      s: 'Residential',
      confirmed: true
    },
    'AL WATHBA MAJLIS': {
      d: 'Interiors',
      s: 'Residential',
      confirmed: true
    },
    'H.A.M EXTERNAL MAJLIS': {
      d: 'Architectural',
      s: 'Residential',
      confirmed: true
    },
    'MIREL EXPERIENCE CENTER': {
      d: 'Interiors',
      s: 'Offices',
      confirmed: true
    },
    'SERENITY SECRET': {
      d: 'Interiors',
      s: 'Spa & Wellness',
      confirmed: true
    },
    'SH. BUTTI VILLA': {
      d: 'Interiors',
      s: 'Residential',
      confirmed: true
    },
    'SHIKHANA': {
      d: 'Interiors',
      s: 'Hospitality',
      confirmed: true
    },
    'SOBHA VILLAS': {
      d: 'Interiors',
      s: 'Residential',
      confirmed: true
    },
    'THE VILLAGE MALL': {
      d: 'Interiors',
      s: 'Offices',
      confirmed: true
    },
    'JPL LANDSCAPE': {
      d: 'Landscape',
      s: 'Residential',
      confirmed: true
    }
  };
  const projects = NAMES.map(title => {
    const c = CLASSIFY[title] || {
      d: 'Interiors',
      s: 'Residential',
      confirmed: false
    };
    return {
      slug: slugify(title),
      title,
      discipline: c.d,
      sector: c.s,
      /* false → classification is our assumption, not the studio's word */
      classified: c.confirmed,
      region: 'Dubai',
      /* No year claimed for projects we have no date for. */
      year: null,
      /* Visualisation, not photography — labelled site-wide. */
      visualisation: true,
      img: null,
      hasImagery: false,
      summary: null
    };
  });

  /* The one project we have real imagery for. */
  const ron = projects[0];
  Object.assign(ron, {
    featured: true,
    hasImagery: true,
    img: I.ronLiving,
    ratio: '16 / 9',
    summary: 'A full-floor family residence in pale travertine, bleached oak and bouclé — organised around a planted stair atrium that pulls daylight down through the plan.',
    scope: ['Interiors', 'Lighting', 'Joinery', 'FF&E'],
    materials: ['Travertine', 'Bleached oak', 'Onyx', 'Bouclé', 'Antique bronze']
  });
  window.JWT_DATA = {
    studio: {
      name: 'JWT',
      full: 'JWT Design Studio',
      positioning: 'An upscale design studio, committed to delivering tailor-made projects and turning vision into reality.',
      tagline: 'Turning vision into reality.',
      character: 'Calm, modern, studied.',
      founders: 'Jinane and Joelle Touma',
      founded: 2017,
      email: 'studio@jwtdesignstudio.com',
      // placeholder
      phone: '+971 4 000 0000',
      // placeholder
      whatsapp: '971400000000',
      // placeholder
      locations: 'Dubai | Beirut',
      instagram: '@jwtdesignstudio',
      instagramUrl: 'https://www.instagram.com/jwtdesignstudio/'
    },
    /* Every image on the site is a 3D visualisation — stated, not implied. */
    imageryNote: 'All imagery shown is 3D visualisation of studio work.',
    disciplines: DISCIPLINES,
    sectors: SECTORS,
    regions: REGIONS,
    expertise: [{
      slug: 'interiors',
      index: '01',
      title: 'Interiors',
      lede: 'Tailor-made interiors, resolved to the last detail — from the first spatial move to the final styled layer.',
      body: 'We shape how a space is entered, used and remembered: planning, materials, bespoke joinery, furniture and the finishing curation. Every scheme is drawn around its owner rather than a house style.',
      services: ['Space planning', 'Material & finish palettes', 'Bespoke joinery', 'FF&E and procurement', 'Styling & handover'],
      img: I.ronLiving
    }, {
      slug: 'architectural',
      index: '02',
      title: 'Architectural',
      lede: 'Structure, envelope and light — the architectural groundwork that lets an interior work effortlessly.',
      body: 'We rework plans, openings and volumes, coordinate the technical package and manage the trades on site, so the built result matches the drawings exactly.',
      services: ['Concept & massing', 'Technical drawings', 'Facade & envelope', 'Fit-out coordination', 'Site supervision & snagging'],
      img: I.ronAtrium
    }, {
      slug: 'lighting',
      index: '03',
      title: 'Lighting',
      lede: 'Light as a material. Layered, dimmable, and designed for how a room is used at every hour.',
      body: 'Architectural, decorative and task layers are specified together and commissioned scene by scene — the quietest discipline with the largest effect on how a space feels.',
      services: ['Lighting concept', 'Architectural detailing', 'Decorative selection', 'Circuiting & controls', 'On-site commissioning'],
      img: I.ronStair
    }, {
      slug: 'landscape',
      index: '04',
      title: 'Landscape',
      lede: 'The ground, the planting and the threshold between inside and out.',
      body: 'Courtyards, terraces and planted thresholds designed with the same care as the rooms they serve — so the view out is composed, not left over.',
      services: ['Landscape concept', 'Planting design', 'Hardscape & levels', 'External lighting', 'Terrace & pool surrounds'],
      img: I.ronAtrium
    }],
    stats: [{
      value: '2017',
      label: 'Studio founded'
    }, {
      value: '2',
      label: 'Studios — Dubai & Beirut'
    }, {
      value: '4',
      label: 'Disciplines in-house'
    }, {
      value: '100',
      suffix: '%',
      label: 'Concept to completion'
    }],
    projects,
    /* Captioned carousel sets, keyed by slug. Only real imagery is listed. */
    galleries: {
      'ronaldo-muchawar': [{
        key: 'ronLiving',
        caption: 'Formal living'
      }, {
        key: 'ronAtrium',
        caption: 'Stair atrium'
      }, {
        key: 'ronStair',
        caption: 'Stair detail'
      }, {
        key: 'ronDining',
        caption: 'Dining and bar'
      }, {
        key: 'ronLounge',
        caption: 'Family lounge'
      }, {
        key: 'ronKitchen',
        caption: 'Kitchen'
      }]
    },
    /* Cover comparison pairs (render → built).
       PLACEHOLDER PAIRINGS. A comparison slider only works when both frames are
       the SAME view from the SAME camera position. We currently hold six renders
       of RONALDO MUCHAWAR and no site photography, so these pair related views of
       one project and label both sides honestly as visualisations. Replace `after`
       with the real photograph of the matching angle and set
       afterLabel: 'As built' as soon as the shoot lands. */
    comparisons: [{
      slug: 'ronaldo-muchawar',
      title: 'RONALDO MUCHAWAR',
      meta: ['JWT Dubai', 'Interiors', 'Residential'],
      before: 'ronAtrium',
      after: 'ronStair',
      beforeLabel: 'Concept',
      afterLabel: 'Developed',
      room: 'Stair atrium',
      pending: true
    }, {
      slug: 'ronaldo-muchawar',
      title: 'RONALDO MUCHAWAR',
      meta: ['JWT Dubai', 'Interiors', 'Residential'],
      before: 'ronLiving',
      after: 'ronLounge',
      beforeLabel: 'Concept',
      afterLabel: 'Developed',
      room: 'Living',
      pending: true
    }, {
      slug: 'ronaldo-muchawar',
      title: 'RONALDO MUCHAWAR',
      meta: ['JWT Dubai', 'Interiors', 'Residential'],
      before: 'ronDining',
      after: 'ronKitchen',
      beforeLabel: 'Concept',
      afterLabel: 'Developed',
      room: 'Dining and kitchen',
      pending: true
    }],
    team: [
    /* The studio is the two sisters — no wider team. Portraits supplied by the
       studio; paths are relative to ui_kits/website/. */
    {
      name: 'Jinane Touma',
      role: 'Co-Founder',
      studio: 'JWT Design Studio',
      img: '../../assets/team/jinane.jpg'
    }, {
      name: 'Joelle Touma',
      role: 'Co-Founder · Interior Architect',
      studio: 'JWT Design Studio',
      img: '../../assets/team/joelle.jpg'
    }],
    /* Intentionally empty — no invented awards or client quotes.
       Screens hide these sections entirely when empty. */
    awards: [],
    testimonials: [],
    process: [{
      index: '01',
      title: 'Discovery',
      body: 'We listen first — to how you live or trade, what you love, and what each space has to hold.'
    }, {
      index: '02',
      title: 'Concept',
      body: 'Plans, palettes and references resolve into one clear direction you can feel before it is built.'
    }, {
      index: '03',
      title: 'Design development',
      body: 'Every layer is drawn and specified — architecture, joinery, lighting and the furniture plan.'
    }, {
      index: '04',
      title: 'Delivery',
      body: 'We coordinate the trades, commission the light and style the final layer, then hand over.'
    }]
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/kit-ui.jsx
try { (() => {
/* JWT website kit — shared layout primitives. Exposed on window.JWT_KIT. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65;
  const {
    Eyebrow
  } = NS;

  /* Responsive grids.
     The screens set their column tracks in inline styles, which cannot carry
     media queries — so every multi-column grid in this kit also gets the
     `jwt-rg` class and these breakpoints collapse it. `!important` is required
     precisely because an inline style otherwise beats a class rule.
      `jwt-rg` only ever collapses to ONE column, so it is safe on a grid whose
     authored track list is already single (e.g. ProjectPage's statement block,
     which is one column for projects without imagery). The intermediate
     two-column step is opt-in via `jwt-rg-multi` and belongs only on grids that
     are genuinely 3- or 4-up — a blanket rule there would silently rewrite
     single-track grids into two columns and leave half the row empty. */
  (function injectGrid() {
    if (typeof document === 'undefined' || document.getElementById('jwt-kit-grid')) return;
    const s = document.createElement('style');
    s.id = 'jwt-kit-grid';
    s.textContent = `
@media (max-width: 1024px) {
  .jwt-rg-multi { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
}
@media (max-width: 720px) {
  .jwt-rg { grid-template-columns: minmax(0, 1fr) !important; gap: var(--space-6) !important; }
}
/* Long uppercase meta rows wrap rather than force horizontal scroll. */
@media (max-width: 720px) {
  .jwt-hero__meta, .jwt-metastack { flex-wrap: wrap !important; }
}`;
    document.head.appendChild(s);
  })();
  const Container = ({
    children,
    narrow,
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 'var(--content-narrow)' : 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      ...style
    }
  }, children);
  const BG = {
    page: 'var(--bg-page)',
    sunken: 'var(--bg-sunken)',
    fill: 'var(--bg-fill)',
    elevated: 'var(--bg-elevated)',
    contrast: 'var(--bg-contrast)',
    slate: 'var(--bg-slate)'
  };
  const Section = ({
    children,
    bg = 'page',
    pad = 'lg',
    id,
    style
  }) => {
    const padY = pad === 'xs' ? 'var(--space-6)' : pad === 'sm' ? 'var(--space-7)' : pad === 'md' ? 'var(--space-8)' : 'var(--space-10)';
    return /*#__PURE__*/React.createElement("section", {
      id: id,
      style: {
        background: BG[bg] || bg,
        padding: `${padY} 0`,
        ...style
      }
    }, /*#__PURE__*/React.createElement(Container, null, children));
  };

  /* The large light intro paragraph that follows a page title (HBA's subhead device). */
  const Lede = ({
    children,
    tone = 'default',
    max = '56ch',
    style
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--lede)',
      color: tone === 'inverse' ? 'rgba(255,255,255,0.84)' : 'var(--text-secondary)',
      maxWidth: max,
      textWrap: 'pretty',
      margin: 0,
      ...style
    }
  }, children);

  /* Page masthead: eyebrow + serif title + lede, used at the top of inner pages. */
  const PageHead = ({
    eyebrow,
    title,
    lede,
    tone = 'default',
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true,
    tone: tone === 'inverse' ? 'inverse' : 'accent'
  }, eyebrow), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--display-2xl)',
      letterSpacing: 'var(--track-tight)',
      color: tone === 'inverse' ? 'var(--paper)' : 'var(--text-primary)',
      maxWidth: '16ch',
      textWrap: 'balance',
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement(Lede, {
    tone: tone
  }, lede), children);
  const SectionHead = ({
    eyebrow,
    title,
    intro,
    align = 'left',
    tone = 'default',
    max = '22ch',
    actions
  }) => {
    const inverse = tone === 'inverse';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        marginBottom: 'var(--space-7)'
      }
    }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
      dot: true,
      tone: inverse ? 'inverse' : 'accent'
    }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--display-xl)',
        letterSpacing: 'var(--track-tight)',
        color: inverse ? 'var(--paper)' : 'var(--text-primary)',
        maxWidth: max,
        textWrap: 'balance',
        margin: 0
      }
    }, title), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--text-lg)',
        color: inverse ? 'rgba(255,255,255,0.78)' : 'var(--text-secondary)',
        maxWidth: '52ch',
        margin: 0
      }
    }, intro), actions && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '0.5rem',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, actions));
  };

  /* Sticky navbars are position:fixed — inner pages need this spacer so content
     starts below the bar. Hero pages use the overlay variant and don't. */
  const NavSpacer = () => /*#__PURE__*/React.createElement("div", {
    style: {
      height: '72px'
    }
  });
  window.JWT_KIT = {
    Container,
    Section,
    SectionHead,
    Lede,
    PageHead,
    NavSpacer,
    navLinks: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'About',
      href: '#about'
    }, {
      label: 'Expertise',
      href: '#expertise',
      panel: true
    }, {
      label: 'Projects',
      href: '#projects'
    }, {
      label: 'Contact',
      href: '#contact'
    }],
    logoWhite: '../../assets/logo-white.svg',
    logoCharcoal: '../../assets/logo-charcoal.svg'
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/kit-ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AwardList = __ds_scope.AwardList;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.CompareSlider = __ds_scope.CompareSlider;

__ds_ns.FactTable = __ds_scope.FactTable;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.HeroShowcase = __ds_scope.HeroShowcase;

__ds_ns.PersonCard = __ds_scope.PersonCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ShareRow = __ds_scope.ShareRow;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FilterSelect = __ds_scope.FilterSelect;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.MetaList = __ds_scope.MetaList;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.InView = __ds_scope.InView;

__ds_ns.RevealImage = __ds_scope.RevealImage;

__ds_ns.BackToTop = __ds_scope.BackToTop;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

})();
