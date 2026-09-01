/* JWT website kit — Home. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const { Navbar, Button, Eyebrow, ProjectCard, StatBlock, Quote, Divider, Reveal, RevealImage, CompareSlider, HeroShowcase, PersonCard, Badge } = NS;
  const { Container, Section, SectionHead, Lede, navLinks, logoWhite, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const I = window.JWT_IMG;

  function HomePage({ navigate }) {
    /* Hero: a single full-screen image (a strong project cover). */
    const heroImg = (D.projects.find((p) => p.slug === 'ronaldo-muchawar') || D.projects.find((p) => p.hasImagery) || {}).img;

    /* The project the stage shows, then three more as cards below it. */
    const lead = D.projects.find((p) => p.slug === 'ronaldo-muchawar') || D.projects.find((p) => p.hasImagery);
    const featured = D.projects.filter((p) => p !== lead).slice(0, 3);

    /* Stage slides — per project, exactly THREE frames: a main full-bleed frame
       followed by two that rest inset over it (so each primary project shows
       three navigation dots, not one per gallery image). */
    const stageSlides = lead
      ? (D.galleries[lead.slug] || []).slice(0, 3).map((g, i) => ({
          src: g.src || I[g.key],
          title: lead.title,
          meta: [lead.expertise, g.caption].filter(Boolean),
          href: '#project/' + lead.slug,
          inset: i % 3 !== 0,
        }))
      : [];

    return (
      <div>
        {/* Fixed nav sits over the full-screen hero. */}
        <Navbar variant="overlay" sticky logoSrc={logoWhite} logoSrcCondensed={logoCharcoal}
          links={navLinks} activeHref="#home" cta="Start a project" ctaHref="#contact"
          onNavigate={navigate} />

        {/* HERO — a single full-screen image with the title overlaid. */}
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: 'var(--char-900)' }}>
          {heroImg && (
            <img src={heroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(180deg, rgba(44,46,53,0.34) 0%, rgba(44,46,53,0) 34%, rgba(44,46,53,0) 55%, rgba(44,46,53,0.62) 100%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            padding: 'var(--gutter)', paddingBottom: 'calc(var(--gutter) + 12px)',
          }}>
            <h1 style={{
              font: 'var(--display-2xl)', color: '#FFFFFF', letterSpacing: 'var(--track-display)',
              margin: 0, maxWidth: '16ch', textWrap: 'balance',
            }}>Turning vision into reality.</h1>
          </div>
        </div>

        {/* Positioning statement — the two founders shown alongside it. */}
        <Section bg="page" pad="md">
          <div className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-8)', alignItems: 'start' }}>
            <div>
              <Reveal><Eyebrow dot>The Studio</Eyebrow></Reveal>
              <Reveal delay={120}>
                <div className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-5)' }}>
                  {D.team.map((t) => (
                    <PersonCard key={t.name} src={t.img} name={t.name} role={t.role}
                      studio={D.studio.locations} href="#about"
                      onClick={(ev) => { ev.preventDefault(); navigate('#about'); }} />
                  ))}
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p style={{ font: 'var(--display-md)', letterSpacing: 'var(--track-tight)', textWrap: 'balance', marginBottom: '1.1rem' }}>
                  We are an upscale design studio, committed to delivering tailor-made projects.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <Lede max="58ch">
                  Led by two sisters across the UAE, Lebanon and Syria, JWT works end to end and entirely in-house — so a project moves from first sketch to final light scene without ever losing its thread.
                </Lede>
              </Reveal>
              <Reveal delay={220}>
                <div style={{ marginTop: '2rem' }}>
                  <Button variant="link" withArrow onClick={() => navigate('#about')}>About the studio</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Three disciplines */}
        <Section bg="sunken" pad="md">
          <Reveal>
            <SectionHead eyebrow="Expertise" title="Four disciplines, one team." />
          </Reveal>
          <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }}>
            {D.expertise.map((e, i) => (
              <Reveal key={e.slug} delay={i * 90}>
                <button onClick={() => navigate('#expertise/' + e.slug)}
                  style={{ background: 'none', border: 'none', borderTop: '1px solid var(--line)', padding: 'var(--space-4) 0 0', textAlign: 'left', cursor: 'pointer', width: '100%' }}>
                  <Eyebrow tone="muted">{e.index}</Eyebrow>
                  <h3 style={{ font: 'var(--display-md)', margin: '0.7rem 0 0' }}>{e.title}</h3>
                </button>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROJECTS — the full-viewport stage, scrolled down from the hero.
            Scrolling grows each next frame in over the last. */}
        {stageSlides.length > 0 && (
          <Section bg="page" pad="md" style={{ paddingBottom: 0 }}>
            <Reveal>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: 'var(--space-6)' }}>
                <Eyebrow dot>Selected projects</Eyebrow>
                <Button variant="link" withArrow onClick={() => navigate('#projects')}>All projects</Button>
              </div>
            </Reveal>
          </Section>
        )}
        {stageSlides.length > 0 && (
          <HeroShowcase slides={stageSlides} onSelect={navigate} cta="View project" />
        )}

        {/* Remaining projects */}
        <Section bg="page" pad="md">
          <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <ProjectCard src={p.thumb} title={p.title}
                  discipline={p.expertise} ratio="4 / 3" visualisation={p.visualisation}
                  badge={p.isC2C ? <Badge tone="ink">Concept to Completion</Badge> : null}
                  onClick={(e) => { e.preventDefault(); navigate('#project/' + p.slug); }} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Sectors */}
        <Section bg="page" pad="md">
          <Reveal><Divider label="Portfolio by expertise" /></Reveal>
          <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
            {D.projectExpertises.map((s, i) => {
              const count = D.projects.filter((p) => p.expertise === s).length;
              return (
                <Reveal key={s} delay={i * 90}>
                  <button onClick={() => navigate('#projects/' + s.toLowerCase())}
                    style={{ background: 'none', border: 'none', borderTop: '1px solid var(--line)', padding: 'var(--space-4) 0 0', textAlign: 'left', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
                    <h3 style={{ font: 'var(--display-md)' }}>{s}</h3>
                    {count > 0 && (
                      <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', color: 'var(--text-muted)' }}>{count}</span>
                    )}
                  </button>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* Stats — dark */}
        <Section bg="contrast" pad="md">
          <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }}>
            {D.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}><StatBlock {...s} tone="inverse" /></Reveal>
            ))}
          </div>
        </Section>

        {/* Studio positioning — the studio's own words, in place of the
            client testimonials we don't yet have. */}
        <Section bg="page" pad="md">
          <Reveal>
            <div style={{ maxWidth: '40ch', margin: '0 auto', textAlign: 'center' }}>
              <Quote size="md" author={D.studio.founders} role={`Founders · Since ${D.studio.founded}`}>
                {D.studio.positioning}
              </Quote>
            </div>
          </Reveal>
        </Section>

        {/* CTA */}
        <Section bg="sunken" pad="lg">
          <Reveal>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <Eyebrow dot>Start a project</Eyebrow>
              <h2 style={{ font: 'var(--display-xl)', maxWidth: '22ch', textWrap: 'balance' }}>
                Tell us what you're building, and we'll tell you how we'd shape it.
              </h2>
              <Button variant="primary" size="lg" withArrow onClick={() => navigate('#contact')}>Get in touch</Button>
            </div>
          </Reveal>
        </Section>
      </div>
    );
  }

  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.HomePage = HomePage;
})();
