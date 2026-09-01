/* JWT website kit — About the studio. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const { Navbar, Eyebrow, Button, StatBlock, Quote, Divider, Reveal, RevealImage, PersonCard } = NS;
  const { Container, Section, SectionHead, PageHead, Lede, NavSpacer, navLinks, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;

  function AboutPage({ navigate }) {
    return (
      <div style={{ background: 'var(--bg-page)' }}>
        <Navbar variant="solid" sticky logoSrc={logoCharcoal} links={navLinks} activeHref="#about"
          cta="Start a project" ctaHref="#contact" onNavigate={navigate} />
        <NavSpacer />

        <Section bg="page" pad="md">
          <PageHead
            eyebrow="About"
            title="An upscale studio, built on two points of view."
            lede={`JWT Design Studio was founded in ${D.studio.founded} by ${D.studio.founders} — two sisters working across the UAE, Lebanon and Syria. The practice still runs the way it started: closely, personally, and tailor-made to each project.`} />
        </Section>

        {/* Portrait + story */}
        <Section bg="page" pad="sm" style={{ paddingTop: 0 }}>
          <div className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
            <RevealImage style={{ aspectRatio: '4 / 5', borderRadius: 'var(--radius-md)' }}>
              <img src={window.JWT_IMG.ronLounge} alt="JWT Design Studio interior visualisation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </RevealImage>
            <div>
              <Eyebrow dot>The sisters</Eyebrow>
              <h2 style={{ font: 'var(--display-lg)', letterSpacing: 'var(--track-tight)', margin: '1rem 0 1.2rem', maxWidth: '20ch', textWrap: 'balance' }}>
                Two sisters, one way of seeing a space.
              </h2>
              <p style={{ font: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '48ch', marginBottom: '1.2rem' }}>
                {D.studio.founders} founded JWT in {D.studio.founded} and still lead every project themselves — there is no account layer between you and the people drawing your space.
              </p>
              <p style={{ font: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '50ch', marginBottom: 'var(--space-6)' }}>
                Across the UAE, Lebanon and Syria they work across interiors, architecture, lighting and landscape, keeping every discipline in-house so nothing is lost in translation between packages.
              </p>
              <div className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', maxWidth: '380px' }}>
                {D.team.map((t, i) => (
                  <Reveal key={t.name} delay={i * 90}>
                    <PersonCard src={t.img} name={t.name} role={t.role} studio={D.studio.locations} href="#contact"
                      onClick={(e) => { e.preventDefault(); navigate('#contact'); }} />
                  </Reveal>
                ))}
              </div>
            </div>
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

        {/* Process */}
        <Section bg="page" pad="lg">
          <SectionHead eyebrow="How we work" title="Concept to completion, in four steps." align="center" max="22ch" />
          <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }}>
            {D.process.map((s, i) => (
              <Reveal key={s.index} delay={i * 90}>
                <div className="jwt-process">
                  {s.img && (
                    <div className="jwt-process__media">
                      <img src={s.img} alt="" loading="lazy" />
                    </div>
                  )}
                  <div style={{ borderTop: '1px solid var(--line)', paddingTop: 'var(--space-4)', marginTop: s.img ? 'var(--space-4)' : 0 }}>
                    <Eyebrow tone="muted">{s.index}</Eyebrow>
                    <h3 className="jwt-process__title" style={{ font: 'var(--display-md)', margin: '0.6rem 0' }}>{s.title}</h3>
                    <p style={{ font: 'var(--text-base)', color: 'var(--text-secondary)' }}>{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Studios */}
        <Section bg="sunken" pad="md">
          <SectionHead eyebrow="Where we work" title="UAE | Lebanon | Syria" max="20ch" />
          {/* Country markers only \u2014 no per-country claims are invented. */}
          <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-7)' }}>
            {['UAE', 'Lebanon', 'Syria'].map((country) => (
              <div key={country} style={{ borderTop: '1px solid var(--line)', paddingTop: 'var(--space-5)' }}>
                <h3 style={{ font: 'var(--display-lg)' }}>{country}</h3>
              </div>
            ))}
          </div>
        </Section>

        {/* Philosophy */}
        <Section bg="page" pad="lg">
          <div style={{ maxWidth: '32ch', margin: '0 auto', textAlign: 'center' }}>
            <Quote size="xl" author="JWT Design Studio" role="UAE | Lebanon | Syria">
              Committed to delivering tailor-made projects, and turning vision into reality.
            </Quote>
          </div>
        </Section>

        <Section bg="sunken" pad="lg">
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <Eyebrow dot>Work with us</Eyebrow>
            <h2 style={{ font: 'var(--display-xl)', maxWidth: '20ch', textWrap: 'balance' }}>We'd love to hear about your space.</h2>
            <Button variant="primary" size="lg" withArrow onClick={() => navigate('#contact')}>Start a project</Button>
          </div>
        </Section>
      </div>
    );
  }

  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.AboutPage = AboutPage;
})();
