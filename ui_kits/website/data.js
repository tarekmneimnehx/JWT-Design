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
    ronLiving:  R + '01-living.jpg',
    ronAtrium:  R + '02-stair-atrium.jpg',
    ronStair:   R + '03-stair-detail.jpg',
    ronDining:  R + '04-dining.jpg',
    ronLounge:  R + '05-lounge.jpg',
    ronKitchen: R + '06-kitchen.jpg',
  };
  const I = window.JWT_IMG;

  const DISCIPLINES = ['Interiors', 'Architectural', 'Lighting', 'Landscape'];
  const SECTORS = ['Residential', 'Hospitality', 'Offices', 'Spa & Wellness'];
  const REGIONS = ['Dubai', 'Beirut'];

  /* Real project names, kept exactly as the studio refers to them. */
  const NAMES = [
    'RONALDO MUCHAWAR', 'AL WATHBA MAJLIS', 'H.A.M EXTERNAL MAJLIS',
    'MIREL EXPERIENCE CENTER', 'SERENITY SECRET', 'SH. BUTTI VILLA',
    'SHIKHANA', 'SOBHA VILLAS', 'THE VILLAGE MALL', 'JPL LANDSCAPE',
    'BS PROJECT', 'GG PROJECT', 'JADEEL PROJECT', 'JW PROJECT',
    'MR PROJECT', 'NA PROJECT', 'NG PROJECT', 'NR PROJECT',
    'RC PROJECT', 'SP PROJECT', 'VK PROJECT', 'ZBM PROJECT',
  ];
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  /* Discipline / sector assignments. Names that state their own type are
     classified from the name; coded projects default to Interiors/Residential
     and are flagged so we never present a guess as fact. */
  const CLASSIFY = {
    'RONALDO MUCHAWAR':        { d: 'Interiors',     s: 'Residential',     confirmed: true },
    'AL WATHBA MAJLIS':        { d: 'Interiors',     s: 'Residential',     confirmed: true },
    'H.A.M EXTERNAL MAJLIS':   { d: 'Architectural', s: 'Residential',     confirmed: true },
    'MIREL EXPERIENCE CENTER': { d: 'Interiors',     s: 'Offices',         confirmed: true },
    'SERENITY SECRET':         { d: 'Interiors',     s: 'Spa & Wellness',  confirmed: true },
    'SH. BUTTI VILLA':         { d: 'Interiors',     s: 'Residential',     confirmed: true },
    'SHIKHANA':                { d: 'Interiors',     s: 'Hospitality',     confirmed: true },
    'SOBHA VILLAS':            { d: 'Interiors',     s: 'Residential',     confirmed: true },
    'THE VILLAGE MALL':        { d: 'Interiors',     s: 'Offices',         confirmed: true },
    'JPL LANDSCAPE':           { d: 'Landscape',     s: 'Residential',     confirmed: true },
  };

  const projects = NAMES.map((title) => {
    const c = CLASSIFY[title] || { d: 'Interiors', s: 'Residential', confirmed: false };
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
      summary: null,
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
    materials: ['Travertine', 'Bleached oak', 'Onyx', 'Bouclé', 'Antique bronze'],
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
      locations: 'Dubai | Beirut',
      instagram: '@jwtdesignstudio',
      instagramUrl: 'https://www.instagram.com/jwtdesignstudio/',
    },

    /* Every image on the site is a 3D visualisation — stated, not implied. */
    imageryNote: 'All imagery shown is 3D visualisation of studio work.',

    disciplines: DISCIPLINES,
    sectors: SECTORS,
    regions: REGIONS,

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
      { value: '2', label: 'Studios — Dubai & Beirut' },
      { value: '4', label: 'Disciplines in-house' },
      { value: '100', suffix: '%', label: 'Concept to completion' },
    ],

    projects,

    /* Captioned carousel sets, keyed by slug. Only real imagery is listed. */
    galleries: {
      'ronaldo-muchawar': [
        { key: 'ronLiving',  caption: 'Formal living' },
        { key: 'ronAtrium',  caption: 'Stair atrium' },
        { key: 'ronStair',   caption: 'Stair detail' },
        { key: 'ronDining',  caption: 'Dining and bar' },
        { key: 'ronLounge',  caption: 'Family lounge' },
        { key: 'ronKitchen', caption: 'Kitchen' },
      ],
    },

    /* Cover comparison pairs (render → built).
       PLACEHOLDER PAIRINGS. A comparison slider only works when both frames are
       the SAME view from the SAME camera position. We currently hold six renders
       of RONALDO MUCHAWAR and no site photography, so these pair related views of
       one project and label both sides honestly as visualisations. Replace `after`
       with the real photograph of the matching angle and set
       afterLabel: 'As built' as soon as the shoot lands. */
    comparisons: [
      {
        slug: 'ronaldo-muchawar', title: 'RONALDO MUCHAWAR',
        meta: ['JWT Dubai', 'Interiors', 'Residential'],
        before: 'ronAtrium', after: 'ronStair',
        beforeLabel: 'Concept', afterLabel: 'Developed',
        room: 'Stair atrium', pending: true,
      },
      {
        slug: 'ronaldo-muchawar', title: 'RONALDO MUCHAWAR',
        meta: ['JWT Dubai', 'Interiors', 'Residential'],
        before: 'ronLiving', after: 'ronLounge',
        beforeLabel: 'Concept', afterLabel: 'Developed',
        room: 'Living', pending: true,
      },
      {
        slug: 'ronaldo-muchawar', title: 'RONALDO MUCHAWAR',
        meta: ['JWT Dubai', 'Interiors', 'Residential'],
        before: 'ronDining', after: 'ronKitchen',
        beforeLabel: 'Concept', afterLabel: 'Developed',
        room: 'Dining and kitchen', pending: true,
      },
    ],

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

    process: [
      { index: '01', title: 'Discovery', body: 'We listen first — to how you live or trade, what you love, and what each space has to hold.' },
      { index: '02', title: 'Concept', body: 'Plans, palettes and references resolve into one clear direction you can feel before it is built.' },
      { index: '03', title: 'Design development', body: 'Every layer is drawn and specified — architecture, joinery, lighting and the furniture plan.' },
      { index: '04', title: 'Delivery', body: 'We coordinate the trades, commission the light and style the final layer, then hand over.' },
    ],
  };
})();
