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
    ronLiving:  R + '01-living.jpg',
    ronAtrium:  R + '02-stair-atrium.jpg',
    ronStair:   R + '03-stair-detail.jpg',
    ronDining:  R + '04-dining.jpg',
    ronLounge:  R + '05-lounge.jpg',
    ronKitchen: R + '06-kitchen.jpg',
  };
  const I = window.JWT_IMG;

  /* Service disciplines (what the studio does) — distinct from the portfolio's
     expertise categories (how projects are grouped). */
  const DISCIPLINES = ['Interiors', 'Architectural', 'Lighting', 'Landscape'];

  /* ── Portfolio, built from the manifest ─────────────────────────────────── */
  const MANIFEST = window.JWT_PROJECTS || { projects: [], expertises: [], statuses: [] };
  const ABASE = '../../assets/';
  const imgPath   = (slug, file) => ABASE + 'images/' + slug + '/' + file;
  const thumbPath = (slug, file) => ABASE + 'thumbs/' + slug + '/' + file;

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

  const projects = MANIFEST.projects.map((p) => {
    const isC2C = p.status === 'Concept to Completion';
    return {
      slug: p.slug,
      title: p.title,
      expertise: p.expertise,        // Residential | Commercial | Hospitality | Landscape
      status: p.status,              // Concept | Concept to Completion
      isC2C,
      imageCount: p.image_count,
      hasImagery: true,
      /* Pure-render projects are labelled "Visualisation"; C2C ones also hold
         real photographs, so they are not. */
      visualisation: !isC2C,
      cover: p.cover,
      img: imgPath(p.slug, p.cover),
      thumb: thumbPath(p.slug, p.cover),
      ratio: ratioOf(p, p.cover),
      concept: isC2C && p.concept ? p.concept.map((f) => imgPath(p.slug, f)) : null,
      completed: isC2C && p.completed ? p.completed.map((f) => imgPath(p.slug, f)) : null,
      /* Legacy display fields the cards/pages may read — null so nothing stale shows. */
      discipline: null, sector: null, region: null, year: null, summary: null,
    };
  });

  /* Full galleries keyed by slug — { src, thumb, caption, ratio } per image. */
  const galleries = {};
  MANIFEST.projects.forEach((p) => {
    galleries[p.slug] = p.images.map((f) => ({
      src: imgPath(p.slug, f),
      thumb: thumbPath(p.slug, f),
      caption: captionFromFile(p.slug, f),
      ratio: ratioOf(p, f),
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

  window.JWT_DATA = {
    studio: {
      name: 'JWT',
      full: 'JWT Design Studio',
      positioning: 'An upscale design studio, committed to delivering tailor-made projects and turning vision into reality.',
      tagline: 'Turning vision into reality.',
      character: 'Calm, modern, studied.',
      founders: 'Jinane and Joelle Touma',
      founded: 2017,
      email: 'studio@jwtdesignstudio.com',   // placeholder
      phone: '+971 4 000 0000',              // placeholder
      whatsapp: '971400000000',              // placeholder
      locations: 'UAE | Lebanon | Syria',
      instagram: '@jwtdesignstudio',
      instagramUrl: 'https://www.instagram.com/jwtdesignstudio/',
    },

    imageryNote: 'Renders are 3D visualisation; completed projects also show photography.',

    disciplines: DISCIPLINES,
    /* Portfolio filter categories + statuses, straight from the manifest. */
    projectExpertises: MANIFEST.expertises,
    statuses: MANIFEST.statuses,

    expertise: [
      {
        slug: 'interiors', index: '01', title: 'Interiors',
        lede: 'Tailor-made interiors, resolved to the last detail — from the first spatial move to the final styled layer.',
        body: 'We shape how a space is entered, used and remembered: planning, materials, bespoke joinery, furniture and the finishing curation. Every scheme is drawn around its owner rather than a house style.',
        services: ['Space planning', 'Material & finish palettes', 'Bespoke joinery', 'FF&E and procurement', 'Styling & handover'],
        img: I.ronLiving,
      },
      {
        slug: 'architectural', index: '02', title: 'Architectural',
        lede: 'Structure, envelope and light — the architectural groundwork that lets an interior work effortlessly.',
        body: 'We rework plans, openings and volumes, coordinate the technical package and manage the trades on site, so the built result matches the drawings exactly.',
        services: ['Concept & massing', 'Technical drawings', 'Facade & envelope', 'Fit-out coordination', 'Site supervision & snagging'],
        img: I.ronAtrium,
      },
      {
        slug: 'lighting', index: '03', title: 'Lighting',
        lede: 'Light as a material. Layered, dimmable, and designed for how a room is used at every hour.',
        body: 'Architectural, decorative and task layers are specified together and commissioned scene by scene — the quietest discipline with the largest effect on how a space feels.',
        services: ['Lighting concept', 'Architectural detailing', 'Decorative selection', 'Circuiting & controls', 'On-site commissioning'],
        img: I.ronStair,
      },
      {
        slug: 'landscape', index: '04', title: 'Landscape',
        lede: 'The ground, the planting and the threshold between inside and out.',
        body: 'Courtyards, terraces and planted thresholds designed with the same care as the rooms they serve — so the view out is composed, not left over.',
        services: ['Landscape concept', 'Planting design', 'Hardscape & levels', 'External lighting', 'Terrace & pool surrounds'],
        img: I.ronAtrium,
      },
    ],

    stats: [
      { value: '2017', label: 'Studio founded' },
      { value: '3', label: 'Countries — UAE, Lebanon & Syria' },
      { value: '4', label: 'Disciplines in-house' },
      { value: '100', suffix: '%', label: 'Concept to completion' },
    ],

    projects,
    galleries,
    comparisons,

    team: [
      /* The studio is the two sisters — no wider team. Portraits supplied by the
         studio; paths are relative to ui_kits/website/. */
      { name: 'Jinane Touma', role: 'Co-Founder', studio: 'JWT Design Studio', img: '../../assets/team/jinane.jpg' },
      { name: 'Joelle Touma', role: 'Co-Founder · Interior Architect', studio: 'JWT Design Studio', img: '../../assets/team/joelle.jpg' },
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
