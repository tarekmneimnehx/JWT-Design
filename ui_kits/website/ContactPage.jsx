/* JWT website kit — Contact / enquiry with a mock-submitting form. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const { Navbar, Eyebrow, Button, Input, Textarea, Select, Divider } = NS;
  const { Container, Section, PageHead, NavSpacer, navLinks, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const { useState } = React;

  function Detail({ label, value }) {
    return (
      <div style={{ borderTop: '1px solid var(--line-subtle)', paddingTop: '0.9rem' }}>
        <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
        <p style={{ font: 'var(--text-lg)', marginTop: '0.3rem' }}>{value}</p>
      </div>
    );
  }

  function ContactPage({ navigate }) {
    const [sent, setSent] = useState(false);

    return (
      <div style={{ background: 'var(--bg-page)' }}>
        <Navbar variant="solid" sticky logoSrc={logoCharcoal} links={navLinks} activeHref="#contact"
          cta="Start a project" ctaHref="#contact" onNavigate={navigate} />
        <NavSpacer />

        <Section bg="page" pad="md">
          <PageHead
            eyebrow="Contact"
            title="Start a project."
            lede="A few details to begin. We'll reply within two working days to arrange a first conversation — in the UAE, in Lebanon, in Syria, or on a call." />
        </Section>

        <Section bg="page" pad="sm" style={{ paddingTop: 0 }}>
          <div className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'var(--space-9)', alignItems: 'start' }}>
            {/* Form */}
            <div>
              {sent ? (
                <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: 'var(--space-7)', background: 'var(--bg-elevated)' }}>
                  <Eyebrow dot>Thank you</Eyebrow>
                  <h3 style={{ font: 'var(--display-lg)', margin: '0.8rem 0 0.6rem' }}>Your enquiry is on its way.</h3>
                  <p style={{ font: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '42ch', marginBottom: '1.5rem' }}>
                    We've received your details and will be in touch shortly. In the meantime, take a look at our recent projects.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button variant="outline" onClick={() => navigate('#projects')}>View projects</Button>
                    <Button variant="link" onClick={() => setSent(false)}>Send another</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                  <Input label="Full name" placeholder="Your name" required />
                  <Input label="Email" type="email" placeholder="you@email.com" required />
                  <Input label="Phone" placeholder="+971 50 000 0000" />
                  <Select label="Region" defaultValue="">
                    <option value="" disabled>Select…</option>
                    {D.regions.map((r) => <option key={r}>{r}</option>)}
                    <option>Elsewhere</option>
                  </Select>
                  <Select label="Expertise required" defaultValue="">
                    <option value="" disabled>Select…</option>
                    {D.disciplines.map((d) => <option key={d}>{d}</option>)}
                    <option>All three</option>
                  </Select>
                  <Select label="Sector" defaultValue="">
                    <option value="" disabled>Select…</option>
                    {D.sectors.map((s) => <option key={s}>{s}</option>)}
                  </Select>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <Textarea label="About your project" rows={4}
                      placeholder="Where is it, what stage are you at, and when would you like to start?" />
                  </div>
                  <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
                    <Button variant="primary" size="lg" withArrow type="submit">Send enquiry</Button>
                  </div>
                </form>
              )}
            </div>

            {/* Details + image */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <div style={{ aspectRatio: '4 / 5', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <img src={window.JWT_IMG.ronKitchen} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <Detail label="Email" value={D.studio.email} />
                <Detail label="Studios" value={D.studio.locations} />
                <Detail label="Instagram" value={D.studio.instagram} />
              </div>
            </aside>
          </div>
        </Section>
      </div>
    );
  }

  window.JWT_SCREENS = window.JWT_SCREENS || {};
  window.JWT_SCREENS.ContactPage = ContactPage;
})();
