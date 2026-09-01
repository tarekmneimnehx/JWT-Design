/* JWT website kit — Projects index with an Expertise filter and Load More. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const { Navbar, Button, ProjectCard, Badge, FilterBar, Reveal } = NS;
  const { Container, Section, PageHead, NavSpacer, navLinks, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const { useState, useEffect } = React;

  const PAGE = 9;

  /* Map a #projects/<slug> deep link onto an expertise preset. */
  const EXPERTISE_FROM_SLUG = {
    residential: 'Residential', commercial: 'Commercial',
    hospitality: 'Hospitality', landscape: 'Landscape',
  };

  function ProjectsPage({ navigate, param }) {
    const [expertise, setExpertise] = useState('All');
    const [shown, setShown] = useState(PAGE);

    /* Honour deep links from the footer / nav. */
    useEffect(() => {
      setExpertise(EXPERTISE_FROM_SLUG[param] || 'All');
      setShown(PAGE);
    }, [param]);

    const results = D.projects.filter((p) => expertise === 'All' || p.expertise === expertise);
    const visible = results.slice(0, shown);

    const reset = (fn) => (v) => { fn(v); setShown(PAGE); };
    const clearAll = () => { setExpertise('All'); setShown(PAGE); };

    return (
      <div style={{ background: 'var(--bg-page)' }}>
        <Navbar variant="solid" sticky logoSrc={logoCharcoal} links={navLinks} activeHref="#projects"
          cta="Start a project" ctaHref="#contact" onNavigate={navigate} />
        <NavSpacer />

        <Section bg="page" pad="md">
          <PageHead
            eyebrow="Projects"
            title="Projects"
            lede="We know great design is meaningless without exceptional delivery. From concept to completion, our clients know that a tailor-made idea can be brought to life exactly as it was drawn." />
        </Section>

        <Container>
          <FilterBar
            count={results.length} total={D.projects.length} onClear={clearAll}
            filters={[
              { name: 'Expertise', value: expertise, options: D.projectExpertises, onChange: reset(setExpertise) },
            ]} />
        </Container>

        <Section bg="page" pad="sm">
          {visible.length === 0 ? (
            <div style={{ padding: 'var(--space-9) 0', textAlign: 'center' }}>
              <p style={{ font: 'var(--display-md)', marginBottom: '1rem' }}>No projects in that category yet.</p>
              <Button variant="outline" onClick={clearAll}>Clear filter</Button>
            </div>
          ) : (
            <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-7) var(--space-6)' }}>
              {visible.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 110}>
                  <ProjectCard src={p.thumb} title={p.title}
                    discipline={p.expertise} ratio="4 / 3"
                    visualisation={p.visualisation}
                    badge={p.isC2C ? <Badge tone="ink">Concept to Completion</Badge> : null}
                    onClick={(e) => { e.preventDefault(); navigate('#project/' + p.slug); }} />
                </Reveal>
              ))}
            </div>
          )}

          {shown < results.length && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-8)' }}>
              <Button variant="outline" size="lg" uppercase onClick={() => setShown((s) => s + PAGE)}>
                Load more
              </Button>
            </div>
          )}
        </Section>
      </div>
    );
  }

  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.ProjectsPage = ProjectsPage;
})();
