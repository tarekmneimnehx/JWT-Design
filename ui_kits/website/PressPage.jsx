/* JWT website kit — Press & News. Data-driven from JWT_DATA.press (press-data.js). */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const { Navbar, Button, Eyebrow, Badge, Reveal } = NS;
  const { Container, Section, PageHead, NavSpacer, navLinks, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  /* '2024-09' → 'September 2024'; '2024' → '2024'; full date → 'Month YYYY'. */
  const fmtDate = (d) => {
    if (!d) return '';
    const [y, m] = String(d).split('-');
    return m ? `${MONTHS[parseInt(m, 10) - 1] || ''} ${y}`.trim() : y;
  };

  function PressCard({ item }) {
    const link = item.url
      ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
      : {};
    const meta = [item.outlet, fmtDate(item.date)].filter(Boolean).join('  ·  ');
    return (
      <a {...link} style={{
        textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', overflow: 'hidden',
        background: 'var(--bg-elevated)', height: '100%',
      }}>
        {item.image ? (
          <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', background: 'var(--bg-fill)' }}>
            <img src={item.image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 18%' }} />
          </div>
        ) : (
          <div style={{
            aspectRatio: '16 / 10', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-sunken)', borderBottom: '1px solid var(--line-subtle)',
          }}>
            <span style={{ font: 'var(--display-md)', color: 'var(--text-muted)', textAlign: 'center', padding: '0 1rem' }}>
              {item.outlet || (item.type === 'news' ? 'Studio news' : 'Press')}
            </span>
          </div>
        )}
        <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {item.type === 'news' && <Badge tone="ink">News</Badge>}
            <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{meta}</span>
          </div>
          <h3 style={{ font: 'var(--display-sm)', margin: 0, textWrap: 'balance' }}>{item.title}</h3>
          {item.excerpt && (
            <p style={{ font: 'var(--text-base)', color: 'var(--text-secondary)', margin: 0 }}>{item.excerpt}</p>
          )}
          {item.url && (
            <span style={{ font: 'var(--label-md)', color: 'var(--text-accent)', marginTop: 'auto', paddingTop: '0.4rem' }}>
              Read article →
            </span>
          )}
        </div>
      </a>
    );
  }

  function PressPage({ navigate }) {
    const items = D.press || [];

    return (
      <div style={{ background: 'var(--bg-page)' }}>
        <Navbar variant="solid" sticky logoSrc={logoCharcoal} links={navLinks} activeHref="#press"
          cta="Start a project" ctaHref="#contact" onNavigate={navigate} />
        <NavSpacer />

        <Section bg="page" pad="md">
          <PageHead
            eyebrow="Press"
            title="Press & news."
            lede="Selected coverage, features and studio news — the projects and ideas that JWT Design Studio is being talked about for." />
        </Section>

        <Section bg="page" pad="sm" style={{ paddingTop: 0 }}>
          {items.length === 0 ? (
            <div style={{
              border: '1px dashed var(--line)', borderRadius: 'var(--radius-md)',
              padding: 'var(--space-9) var(--space-6)', textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
            }}>
              <Eyebrow dot>Coming soon</Eyebrow>
              <p style={{ font: 'var(--display-md)', maxWidth: '30ch', textWrap: 'balance', margin: 0 }}>
                Selected coverage and studio news will appear here.
              </p>
              <p style={{ font: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '46ch', margin: 0 }}>
                Have us featured somewhere, or an announcement to share? It will be added here.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <Button variant="outline" onClick={() => navigate('#contact')}>Get in touch</Button>
              </div>
            </div>
          ) : (
            <div className="jwt-rg jwt-rg-multi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-7) var(--space-6)' }}>
              {items.map((item, i) => (
                <Reveal key={(item.url || item.title) + i} delay={(i % 3) * 110}>
                  <PressCard item={item} />
                </Reveal>
              ))}
            </div>
          )}
        </Section>
      </div>
    );
  }

  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.PressPage = PressPage;
})();
