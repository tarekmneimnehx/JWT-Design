/* JWT website kit — single project case study.
   Structure follows the HBA project-page order: title-first on cream with
   stacked meta, lead image, portrait, large statement paragraphs, credit table
   + share, captioned carousel, team, awards, related projects. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const {
    Navbar, Eyebrow, Button, Divider, Carousel, FactTable, ShareRow,
    PersonCard, AwardList, ProjectCard, Reveal, RevealImage,
  } = NS;
  const { Container, Section, Lede, NavSpacer, navLinks, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const I = window.JWT_IMG;

  /* Stacked meta lines, as HBA renders them under the project title. */
  function MetaStack({ items }) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 2.5rem' }}>
        {items.filter(Boolean).map((m, i) => (
          <span key={i} style={{
            font: 'var(--label)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
            color: i === 0 ? 'var(--text-accent)' : 'var(--text-secondary)',
          }}>{m}</span>
        ))}
      </div>
    );
  }

  function ProjectPage({ navigate, param }) {
    const idx = Math.max(0, D.projects.findIndex((p) => p.slug === param));
    const p = D.projects[idx];

    const gallery = (D.galleries[p.slug] || [])
      .map((g) => ({ src: I[g.key], caption: g.caption }));
    const hasGallery = gallery.length > 0;
    const portrait = hasGallery;

    /* Related: same sector first, then anything else. */
    const related = D.projects
      .filter((x) => x.slug !== p.slug)
      .sort((a, b) => (b.sector === p.sector) - (a.sector === p.sector))
      .slice(0, 4);

    return (
      <div style={{ background: 'var(--bg-page)' }}>
        <Navbar variant="solid" sticky logoSrc={logoCharcoal} links={navLinks} activeHref="#projects"
          cta="Start a project" ctaHref="#contact" onNavigate={navigate} />
        <NavSpacer />

        {/* Back link, then the image — the work leads, not the label. */}
        <Section bg="page" pad="sm" style={{ paddingTop: 'var(--space-5)', paddingBottom: 'var(--space-5)' }}>
          <Reveal>
            <button onClick={() => navigate('#projects')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', font: 'var(--text-sm)', padding: 0 }}>
              ← All projects
            </button>
          </Reveal>
        </Section>

        {/* Lead image — full-bleed and tall. Only when we hold real imagery. */}
        {p.img && (
          <RevealImage style={{ width: '100%', height: '82vh' }}>
            <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span style={{
              position: 'absolute', bottom: '1rem', left: 'var(--gutter)',
              font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase',
              color: 'var(--paper)', background: 'rgba(44,46,53,0.55)',
              padding: '0.35rem 0.7rem', borderRadius: 'var(--radius-xs)', backdropFilter: 'blur(3px)',
            }}>Visualisation</span>
          </RevealImage>
        )}

        {/* Title and meta sit under the image, quieter than it. */}
        <Section bg="page" pad="sm">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            <Reveal>
              <h1 style={{ font: 'var(--display-lg)', letterSpacing: 'var(--track-display)', maxWidth: '20ch', textWrap: 'balance', margin: 0 }}>
                {p.title}
              </h1>
            </Reveal>
            <Reveal delay={90}>
              <MetaStack items={[p.discipline, p.sector, p.region, p.year]} />
            </Reveal>
          </div>
        </Section>

        {/* Portrait + statement paragraphs */}
        <Section bg="page" pad="md">
          <div className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: portrait ? '0.8fr 1.2fr' : '1fr', gap: 'var(--space-8)', alignItems: 'start' }}>
            {portrait && (
              <RevealImage style={{ aspectRatio: '3 / 4', borderRadius: 'var(--radius-md)' }}>
                <img src={gallery[0].src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </RevealImage>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: portrait ? 'none' : '68ch' }}>
              <Reveal>
                <p style={{ font: 'var(--display-md)', letterSpacing: 'var(--track-tight)', lineHeight: 1.3, textWrap: 'pretty' }}>
                  {p.summary || 'Project details are being prepared. Please get in touch for the full case study.'}
                </p>
              </Reveal>
              {p.summary && (
              <Reveal delay={100}>
                <p style={{ font: 'var(--display-md)', letterSpacing: 'var(--track-tight)', lineHeight: 1.3, color: 'var(--text-secondary)', textWrap: 'pretty' }}>
                  We reworked the plan around light and flow, layering warm materials, natural stone and bespoke joinery — every element specified to be lived with rather than looked at.
                </p>
              </Reveal>
              )}
              <Reveal delay={180}>
                <Lede max="52ch">
                  Interiors, architecture and lighting were resolved together in-house, so the built result matches the drawings exactly and the scheme reads as a single idea.
                </Lede>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Credit table + share */}
        <Section bg="page" pad="sm" style={{ paddingTop: 0 }}>
          <div className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-9)', alignItems: 'start' }}>
            <Reveal>
              <FactTable rows={[
                { label: 'Location', value: p.region },
                { label: 'Studio', value: p.region === 'Beirut' ? 'JWT Beirut' : 'JWT Dubai' },
                { label: 'Expertise', value: p.scope },
                { label: 'Discipline', value: p.discipline },
                { label: 'Sector', value: p.classified ? p.sector : null },
                { label: 'Materials', value: p.materials },
                { label: 'Imagery', value: '3D visualisation, in-house' },
              ].filter((r) => r.value != null && r.value !== '')} />
            </Reveal>
            <Reveal delay={120} style={{ paddingTop: 'var(--space-4)' }}>
              <ShareRow title={p.title} />
            </Reveal>
          </div>
        </Section>

        {/* Captioned carousel */}
        {hasGallery && (
        <Section bg="sunken" pad="md">
          <Reveal>
            <Eyebrow dot>Gallery — visualisations</Eyebrow>
          </Reveal>
          <Reveal delay={100} style={{ marginTop: 'var(--space-5)' }}>
            <Carousel ratio="16 / 9" slides={gallery} />
          </Reveal>
        </Section>
        )}

        {/* Studio — JWT is the two sisters */}
        <Section bg="page" pad="md">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: 'var(--space-6)' }}>
              <h2 style={{ font: 'var(--display-lg)', letterSpacing: 'var(--track-tight)' }}>Studio</h2>
              <Button variant="link" withArrow onClick={() => navigate('#about')}>About JWT</Button>
            </div>
          </Reveal>
          <div className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 320px))', gap: 'var(--space-6)' }}>
            {D.team.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <PersonCard src={t.img} name={t.name} role={t.role} studio={t.studio}
                  onClick={(e) => { e.preventDefault(); navigate('#about'); }} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Awards — hidden until the studio supplies real accolades */}
        {D.awards.length > 0 && (
        <Section bg="page" pad="sm" style={{ paddingTop: 0 }}>
          <Reveal>
            <h2 style={{ font: 'var(--display-lg)', letterSpacing: 'var(--track-tight)', marginBottom: 'var(--space-5)' }}>
              Awards &amp; accolades
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <AwardList items={D.awards} />
          </Reveal>
        </Section>
        )}

        {/* Related projects */}
        <Section bg="sunken" pad="md">
          <Reveal>
            <h2 style={{ font: 'var(--display-lg)', letterSpacing: 'var(--track-tight)', marginBottom: 'var(--space-6)' }}>
              Related projects
            </h2>
          </Reveal>
          <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            {related.slice(0, 3).map((r, i) => (
              <Reveal key={r.slug} delay={i * 90}>
                <ProjectCard src={r.img} title={r.title} ratio="16 / 9" visualisation={r.visualisation && r.hasImagery}
                  discipline={r.discipline} sector={r.sector} region={r.region} year={r.year}
                  onClick={(e) => { e.preventDefault(); navigate('#project/' + r.slug); }} />
              </Reveal>
            ))}
          </div>
        </Section>
      </div>
    );
  }

  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.ProjectPage = ProjectPage;
})();
