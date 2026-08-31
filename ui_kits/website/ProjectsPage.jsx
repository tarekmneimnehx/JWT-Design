/* JWT website kit — Projects index with Expertise + Sector + Region filters and Load More. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const { Navbar, Button, ProjectCard, Badge, FilterBar, Reveal } = NS;
  const { Container, Section, PageHead, NavSpacer, navLinks, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const { useState, useEffect } = React;

  const PAGE = 6;

  /* Map a #projects/<slug> deep link onto a sector preset. */
  const SECTOR_FROM_SLUG = {
    residential: 'Residential', hospitality: 'Hospitality',
    offices: 'Offices', 'spa-wellness': 'Spa & Wellness',
  };

  function ProjectsPage({ navigate, param }) {
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

    const match = (p) =>
      (discipline === 'All' || p.discipline === discipline) &&
      (sector === 'All' || p.sector === sector) &&
      (region === 'All' || p.region === region);

    const results = D.projects.filter(match);
    const visible = results.slice(0, shown);

    const reset = (fn) => (v) => { fn(v); setShown(PAGE); };
    const clearAll = () => { setDiscipline('All'); setSector('All'); setRegion('All'); setShown(PAGE); };

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
              { name: 'Expertise', value: discipline, options: D.disciplines, onChange: reset(setDiscipline) },
              { name: 'Sector', value: sector, options: D.sectors, onChange: reset(setSector) },
              { name: 'Region', value: region, options: D.regions, onChange: reset(setRegion) },
            ]} />
        </Container>

        <Section bg="page" pad="sm">
          {visible.length === 0 ? (
            <div style={{ padding: 'var(--space-9) 0', textAlign: 'center' }}>
              <p style={{ font: 'var(--display-md)', marginBottom: '1rem' }}>No projects match that combination.</p>
              <Button variant="outline" onClick={clearAll}>Clear filters</Button>
            </div>
          ) : (
            <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-7) var(--space-6)' }}>
              {visible.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 110}>
                  <ProjectCard src={p.img} title={p.title}
                    discipline={p.discipline} sector={p.sector} region={p.region} year={p.year}
                    ratio={p.ratio || '16 / 9'} visualisation={p.visualisation && p.hasImagery}
                    badge={p.year === 'In progress' ? <Badge tone="ink">In progress</Badge> : null}
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
