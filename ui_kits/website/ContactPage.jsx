/* JWT website kit — Contact / enquiry form wired to Netlify Forms. */
(function () {
  const NS = window.JWTDesignStudioDesignSystem_593c65 || {};
  const { Navbar, Eyebrow, Button, Input, Textarea, Select, Divider } = NS;
  const { Container, Section, PageHead, NavSpacer, navLinks, logoCharcoal } = window.JWT_KIT || {};
  const D = window.JWT_DATA;
  const { useState } = React;

  /* Contact links inherit the detail's type but stay obviously tappable. */
  const LINK = { color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--line)' };

  /* Email: opens the default mail app via mailto where one exists, and always
     copies the address to the clipboard as a fallback (with a brief confirmation)
     so it works even on desktops with no mail client configured. */
  function EmailValue() {
    const [copied, setCopied] = useState(false);
    const onClick = () => {
      try {
        if (navigator.clipboard) navigator.clipboard.writeText(D.studio.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      } catch (e) { /* clipboard unavailable — mailto still fires */ }
    };
    return (
      <a href={`mailto:${D.studio.email}`} style={LINK} onClick={onClick}>
        {D.studio.email}{copied ? '  ·  ✓ copied' : ''}
      </a>
    );
  }

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

    /* Real submit: post the form's fields to Netlify Forms (URL-encoded to "/"),
       which stores the enquiry and emails a notification. We show the thank-you
       screen regardless so the visitor is never left hanging on a network hiccup. */
    const handleSubmit = (e) => {
      e.preventDefault();
      const body = new URLSearchParams(new FormData(e.target)).toString();
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      }).then(() => setSent(true)).catch(() => setSent(true));
    };

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
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="jwt-rg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                  {/* Netlify Forms plumbing: identifies which form this is, and a hidden
                      honeypot field that silently catches spam bots. */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden><label>Leave this empty: <input name="bot-field" /></label></p>
                  <Input label="Full name" name="name" placeholder="Your name" required />
                  <Input label="Email" name="email" type="email" placeholder="you@email.com" required />
                  <Input label="Phone" name="phone" placeholder="+971 50 000 0000" />
                  <Select label="Region" name="region" defaultValue="">
                    <option value="" disabled>Select…</option>
                    {(D.regions || []).map((r) => <option key={r}>{r}</option>)}
                    <option>Elsewhere</option>
                  </Select>
                  <Select label="Expertise required" name="expertise" defaultValue="">
                    <option value="" disabled>Select…</option>
                    {(D.disciplines || []).map((d) => <option key={d}>{d}</option>)}
                    <option>Not sure yet</option>
                  </Select>
                  <Select label="Project type" name="project-type" defaultValue="">
                    <option value="" disabled>Select…</option>
                    {(D.projectExpertises || []).map((s) => <option key={s}>{s}</option>)}
                  </Select>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <Textarea label="About your project" name="message" rows={4}
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
              <div style={{ aspectRatio: '3 / 2', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <img src={D.contactPhoto} alt={`${D.studio.founders}, JWT Design Studio`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <Detail label="Email" value={<EmailValue />} />
                <Detail label="WhatsApp" value={<a href={`https://wa.me/${D.studio.whatsapp}`} target="_blank" rel="noopener noreferrer" style={LINK}>{D.studio.whatsappDisplay}</a>} />
                <Detail label="Studios" value={D.studio.locations} />
                <Detail label="Instagram" value={<a href={D.studio.instagramUrl} target="_blank" rel="noopener noreferrer" style={LINK}>{D.studio.instagram}</a>} />
                <Detail label="LinkedIn" value={<a href={D.studio.linkedinUrl} target="_blank" rel="noopener noreferrer" style={LINK}>{D.studio.linkedin}</a>} />
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
