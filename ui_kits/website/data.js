/* JWT Design Studio — content for the website UI kit.
   Plain global (no module) so every Babel screen script can read window.JWT_DATA.

   The PORTFOLIO is built from projects.json (embedded verbatim as
   projects-data.js → window.JWT_PROJECTS, loaded before this file). That
   manifest is the source of truth: 27 projects, 535 images. Image files live in
   assets/images/<slug>/ and assets/thumbs/<slug>/, copied in from the asset
   bundle. Do not hand-write the project list here — edit projects.json and
   regenerate projects-data.js.

   Studio identity, the four service disciplines, stats, team and process copy
   remain authored below. */
(function () {
  /* Old RONALDO renders, kept only as decorative imagery for the service and
     process cards (they live at assets/projects/ronaldo-muchawar/). */
  const R = '../../assets/projects/ronaldo-muchawar/';
  window.JWT_IMG = {
    ronLiving:  R + '01-living.webp',
    ronAtrium:  R + '02-stair-atrium.webp',
    ronStair:   R + '03-stair-detail.webp',
    ronDining:  R + '04-dining.webp',
    ronLounge:  R + '05-lounge.webp',
    ronKitchen: R + '06-kitchen.webp',
  };
  const I = window.JWT_IMG;

  /* Service disciplines (what the studio does) — distinct from the portfolio's
     expertise categories (how projects are grouped). */
  const DISCIPLINES = ['Interiors', 'Architectural', 'Lighting', 'Landscape'];

  /* ── Portfolio, built from the manifest ─────────────────────────────────── */
  const MANIFEST = window.JWT_PROJECTS || { projects: [], expertises: [], statuses: [] };
  const ABASE = '../../assets/';
  /* Images are served as WebP (converted from the source JPEGs) — ~40% lighter at
     the same quality. The manifest still lists .jpg filenames (used for captions,
     dimensions and lookups); only the URL swaps to .webp. */
  const toWebp = (file) => file.replace(/\.(jpe?g|png)$/i, '.webp');
  const imgPath   = (slug, file) => ABASE + 'images/' + slug + '/' + toWebp(file);
  const thumbPath = (slug, file) => ABASE + 'thumbs/' + slug + '/' + toWebp(file);

  /* "grow-offices-14-reception-desk-completed.jpg" → "Reception desk" */
  const captionFromFile = (slug, file) => {
    let s = file.replace(/\.[a-z0-9]+$/i, '');
    if (s.indexOf(slug + '-') === 0) s = s.slice(slug.length + 1);
    s = s.replace(/^\d+-?/, '').replace(/-(concept|completed)$/i, '').replace(/-/g, ' ').trim();
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
  };
  const ratioOf = (p, file) => {
    const d = p.dimensions && p.dimensions[file];
    return d ? d[0] + ' / ' + d[1] : '16 / 9';
  };

  /* Studio review overrides — covers, curated image sets, titles, project order
     and the Style/Type tags chosen with the studio (window.JWT_REVIEW, loaded
     before this file). Regenerate that file from a new review export. */
  const REVIEW = window.JWT_REVIEW || { order: [], projects: {} };
  const MP = {}; MANIFEST.projects.forEach((p) => { MP[p.slug] = p; });

  const projects = MANIFEST.projects.map((p) => {
    const ov = (REVIEW.projects && REVIEW.projects[p.slug]) || {};
    const status = ov.status || p.status;
    const isC2C = status === 'Concept to Completion';
    const images = (ov.images && ov.images.length) ? ov.images : p.images;
    const cover = (ov.cover && images.indexOf(ov.cover) !== -1) ? ov.cover : images[0];
    return {
      slug: p.slug,
      title: ov.title || p.title,
      expertise: ov.expertise || p.expertise,   // Residential | Commercial | Hospitality | Landscape
      style: ov.style || null,                   // Classical | Modern
      type: ov.type || null,                     // Interior | Architecture | Both
      status,                                    // Concept | Concept to Completion
      isC2C,
      images,                                    // curated, ordered, visible-only set
      imageCount: images.length,
      hasImagery: true,
      /* Pure-render projects are labelled "Visualisation"; C2C ones hold photos too. */
      visualisation: !isC2C,
      cover,
      img: imgPath(p.slug, cover),
      thumb: thumbPath(p.slug, cover),
      ratio: ratioOf(p, cover),
      concept: isC2C && p.concept ? p.concept.map((f) => imgPath(p.slug, f)) : null,
      completed: isC2C && p.completed ? p.completed.map((f) => imgPath(p.slug, f)) : null,
      discipline: null, sector: null, region: null,
      year: ov.year || null,
      city: ov.city || null,
      summary: ov.summary || null,
    };
  });

  /* Apply the studio's project ordering. */
  if (REVIEW.order && REVIEW.order.length) {
    const oi = {}; REVIEW.order.forEach((s, i) => { oi[s] = i; });
    projects.sort((a, b) => {
      const ai = oi[a.slug] == null ? 999 : oi[a.slug];
      const bi = oi[b.slug] == null ? 999 : oi[b.slug];
      return ai - bi;
    });
  }

  /* Full galleries keyed by slug — from each project's curated image set. */
  const galleries = {};
  projects.forEach((pr) => {
    galleries[pr.slug] = pr.images.map((f) => ({
      src: imgPath(pr.slug, f),
      thumb: thumbPath(pr.slug, f),
      caption: captionFromFile(pr.slug, f),
      ratio: ratioOf(MP[pr.slug], f),
    }));
  });

  /* Concept → Completion before/after pairs for the dragger, from the projects
     that carry matched render/photograph sets. Paired by index up to the
     shorter list. GROW Offices leads (the stronger dragger). */
  const comparisons = [];
  MANIFEST.projects
    .filter((p) => p.status === 'Concept to Completion' && p.concept && p.completed)
    .sort((a, b) => (a.slug === 'grow-offices' ? -1 : b.slug === 'grow-offices' ? 1 : 0))
    .forEach((p) => {
      const n = Math.min(p.concept.length, p.completed.length);
      for (let i = 0; i < n; i++) {
        comparisons.push({
          slug: p.slug, title: p.title,
          meta: [p.expertise, 'Concept to Completion'],
          before: imgPath(p.slug, p.concept[i]),
          after: imgPath(p.slug, p.completed[i]),
          beforeLabel: 'Concept', afterLabel: 'Completed',
          room: captionFromFile(p.slug, p.completed[i]),
        });
      }
    });

  /* Press & news — from press-data.js (window.JWT_PRESS), newest first. */
  const PRESS = (window.JWT_PRESS || []).slice()
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

  window.JWT_DATA = {
    studio: {
      name: 'JWT',
      full: 'JWT Design Studio',
      positioning: 'An upscale design studio, committed to delivering tailor-made projects and turning vision into reality.',
      tagline: 'Turning vision into reality.',
      character: 'Calm, modern, studied.',
      founders: 'Jinan and Joelle Touma',
      founded: 2004,
      email: 'info@jwtdesignstudio.com',
      phone: '+971 4 000 0000',              // placeholder
      whatsapp: '971585397971',              // digits only, for wa.me links
      whatsappDisplay: '+971 58 539 7971',
      locations: 'UAE | Lebanon | Syria',
      /* Home hero background video — the three clips concatenated into ONE
         seamless file (no gap/reload between them), played full-screen, muted and
         looped. 1080p (hd) desktop encode + lighter 720p (sd) mobile encode; the
         hero picks per screen size. Empty array falls back to the hero image. */
      heroVideos: [
        { hd: '../../assets/video/hero-all.1080.mp4', sd: '../../assets/video/hero-all.720.mp4' },
      ],
      instagram: '@jwtdesignstudio',
      instagramUrl: 'https://www.instagram.com/jwtdesignstudio/',
      linkedin: 'JWT Design Studio',
      linkedinUrl: 'https://www.linkedin.com/company/jwt-design-studio/',
    },

    imageryNote: 'Renders are 3D visualisation; completed projects also show photography.',

    disciplines: DISCIPLINES,
    /* Studio geography — used by the contact form. */
    regions: ['UAE', 'Lebanon', 'Syria'],
    /* Portfolio filter categories + statuses, straight from the manifest. */
    projectExpertises: MANIFEST.expertises,
    statuses: MANIFEST.statuses,
    /* Additional filter dimensions assigned in the review. */
    styles: ['Classical', 'Modern'],
    types: ['Interior', 'Architecture'],

    /* Architecture leads the disciplines. Each carries a representative image
       pulled from the portfolio (an exterior for Architectural, an interior for
       Interiors, a night scene for Lighting, an outdoor scene for Landscape). */
    expertise: [
      {
        slug: 'architectural', index: '01', title: 'Architectural',
        lede: 'Structure, envelope and light — the architectural groundwork that lets an interior work effortlessly.',
        body: 'We rework plans, openings and volumes, coordinate the technical package and manage the trades on site, so the built result matches the drawings exactly.',
        services: ['Concept & massing', 'Technical drawings', 'Facade & envelope', 'Fit-out coordination', 'Site supervision & snagging'],
        img: imgPath('sh-butti-villa', 'sh-butti-villa-01-entrance-driveway.jpg'),
      },
      {
        slug: 'interiors', index: '02', title: 'Interiors',
        lede: 'Tailor-made interiors, resolved to the last detail — from the first spatial move to the final styled layer.',
        body: 'We shape how a space is entered, used and remembered: planning, materials, bespoke joinery, furniture and the finishing curation. Every scheme is drawn around its owner rather than a house style.',
        services: ['Space planning', 'Material & finish palettes', 'Bespoke joinery', 'FF&E and procurement', 'Styling & handover'],
        img: imgPath('gg-residence', 'gg-residence-04-living-seating.jpg'),
      },
      {
        slug: 'lighting', index: '03', title: 'Lighting',
        lede: 'Light as a material. Layered, dimmable, and designed for how a room is used at every hour.',
        body: 'Architectural, decorative and task layers are specified together and commissioned scene by scene — the quietest discipline with the largest effect on how a space feels.',
        services: ['Lighting concept', 'Architectural detailing', 'Decorative selection', 'Circuiting & controls', 'On-site commissioning'],
        img: imgPath('vk-residence', 'vk-residence-06-living-night.jpg'),
      },
      {
        slug: 'landscape', index: '04', title: 'Landscape',
        lede: 'The ground, the planting and the threshold between inside and out.',
        body: 'Courtyards, terraces and planted thresholds designed with the same care as the rooms they serve — so the view out is composed, not left over.',
        services: ['Landscape concept', 'Planting design', 'Hardscape & levels', 'External lighting', 'Terrace & pool surrounds'],
        img: imgPath('jpl-landscape', 'jpl-landscape-05-pergola-lounge.jpg'),
      },
    ],

    stats: [
      { value: '2004', label: 'Studio founded' },
      { value: '3', label: 'Countries — UAE, Lebanon & Syria' },
      { value: '4', label: 'Disciplines in-house' },
      { value: '100', suffix: '%', label: 'Concept to completion' },
    ],

    projects,
    galleries,
    comparisons,
    press: PRESS,

    /* A wide "together" portrait of the two founders, for the About page. */
    teamPhoto: '../../assets/team/founders.webp?v=6',
    /* Wide 'together' shot for the contact page. */
    contactPhoto: '../../assets/team/founders-table.webp?v=6',

    team: [
      /* The studio is the two sisters — no wider team. Portraits supplied by the
         studio; paths are relative to ui_kits/website/. */
      { name: 'Jinan Touma', role: 'Co-Founder', studio: 'JWT Design Studio', img: '../../assets/team/jinane.webp?v=6' },
      { name: 'Joelle Touma', role: 'Co-Founder', studio: 'JWT Design Studio', img: '../../assets/team/joelle.webp?v=6' },
    ],

    /* Intentionally empty — no invented awards or client quotes.
       Screens hide these sections entirely when empty. */
    awards: [],
    testimonials: [],

    /* img is a studio render used decoratively per step (hover warms it to colour). */
    process: [
      { index: '01', title: 'Discovery', body: 'We listen first — to how you live or trade, what you love, and what each space has to hold.', img: I.ronLounge },
      { index: '02', title: 'Concept', body: 'Plans, palettes and references resolve into one clear direction you can feel before it is built.', img: I.ronAtrium },
      { index: '03', title: 'Design development', body: 'Every layer is drawn and specified — architecture, joinery, lighting and the furniture plan.', img: I.ronStair },
      { index: '04', title: 'Delivery', body: 'We coordinate the trades, commission the light and style the final layer, then hand over.', img: I.ronLiving },
    ],
  };
})();
