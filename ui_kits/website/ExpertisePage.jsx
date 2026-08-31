/* JWT website kit — Expertise: the four disciplines. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const { Navbar, Button, Eyebrow, Divider, ProjectCard, MetaList, Reveal, RevealImage } = NS;
  const { Container, Section, PageHead, Lede, SectionHead, NavSpacer, navLinks, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;

  function Discipline({ e, flip, navigate }) {
    const related = D.projects.filter((p) => p.discipline === e.title).slice(0, 3);
    return (
      <div id={e.slug} style={{ borderTop: '1px solid var(--line)', paddingTop: 'var(--space-7)', marginBottom: 'var(--space-9)' }}>
        <div className="jwt-rg" style={{
          display: 'grid', gridTemplateColumns: flip ? '1fr 0.9fr' : '0.9fr 1fr',
          gap: 'var(--space-8)', alignItems: 'start',
        }}>
          <div style={{ order: flip ? 2 : 1 }}>
            <Reveal><Eyebrow dot>{e.index} — {e.title}</Eyebrow></Reveal>
            <h2 style={{ font: 'var(--display-xl)', letterSpacing: 'var(--track-tight)', margin: '1rem 0 1.2rem', maxWidth: '18ch', textWrap: 'balance' }}>
              {e.lede}
            </h2>
            <p style={{ font: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '50ch', marginBottom: 'var(--space-6)' }}>
              {e.body}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
              {e.services.map((s) => (
                <li key={s} style={{
                  font: 'var(--text-base)', color: 'var(--text-primary)',
                  borderTop: '1px solid var(--line-subtle)', padding: '0.85rem 0',
                  display: 'flex', alignItems: 'center', gap: '0.8rem',
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '999px', background: 'var(--tan-600)', flex: '0 0 auto' }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ order: flip ? 1 : 2 }}>
            <RevealImage style={{ aspectRatio: '4 / 5', borderRadius: 'var(--radius-md)' }}>
              <img src={e.img} alt={e.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </RevealImage>
          </div>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: 'var(--space-8)' }}>
            <Divider label={`${e.title} projects`} />
            <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 110}>
                  <ProjectCard src={p.img} title={p.title} ratio="16 / 9" visualisation={p.visualisation && p.hasImagery}
                    discipline={p.discipline} sector={p.sector} region={p.region} year={p.year}
                    onClick={(ev) => { ev.preventDefault(); navigate('#project/' + p.slug); }} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  function ExpertisePage({ navigate, param }) {
    /* Deep link (#expertise/lighting) focuses a single discipline. */
    const focused = D.expertise.find((e) => e.slug === param);
    const list = focused ? [focused] : D.expertise;

    return (
      <div style={{ background: 'var(--bg-page)' }}>
        <Navbar variant="solid" sticky logoSrc={logoCharcoal} links={navLinks} activeHref="#expertise"
          cta="Start a project" ctaHref="#contact" onNavigate={navigate} />
        <NavSpacer />

        <Section bg="page" pad="md">
          <PageHead
            eyebrow="Expertise"
            title={focused ? focused.title : 'Expertise'}
            lede={focused
              ? focused.lede
              : 'Four disciplines, resolved by one team. Interiors, architecture, lighting and landscape are designed together — which is why a JWT project reads as a single idea rather than a set of separate packages.'} />
          {focused && (
            <div style={{ marginTop: 'var(--space-6)' }}>
              <Button variant="link" onClick={() => navigate('#expertise')}>← All expertise</Button>
            </div>
          )}
        </Section>

        <Container>
          {list.map((e, i) => (
            <Discipline key={e.slug} e={e} flip={i % 2 === 1} navigate={navigate} />
          ))}
        </Container>

        <Section bg="contrast" pad="lg">
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <Eyebrow dot tone="inverse">Sectors</Eyebrow>
            <h2 style={{ font: 'var(--display-xl)', color: 'var(--paper)', maxWidth: '24ch', textWrap: 'balance' }}>
              Residential, hospitality, offices, spa &amp; wellness.
            </h2>
            <Button variant="accent" size="lg" withArrow onClick={() => navigate('#projects')}>Browse projects</Button>
          </div>
        </Section>
      </div>
    );
  }

  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.ExpertisePage = ExpertisePage;
})();
