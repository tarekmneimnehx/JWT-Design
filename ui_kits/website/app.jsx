/* Root App — identical to the old inline <script type="text/babel"> in index.html.
   Reads the globals the screen/data scripts populated (JWT_SCREENS, JWT_KIT,
   JWT_DATA) and the design-system namespace, then mounts the hash-routed app. */
export function mountApp() {
  const NS = window.JWTDesignStudioDesignSystem_593c65;
  const { Footer, BackToTop, WhatsAppButton } = NS;
  const S = window.JWT_SCREENS;
  const { logoWhite } = window.JWT_KIT;
  const D = window.JWT_DATA;
  const { useState, useEffect } = React;

  function parseRoute() {
    const h = (window.location.hash || '#home').replace(/^#/, '');
    const [name, param] = h.split('/');
    return { name: name || 'home', param };
  }

  function App() {
    const [route, setRoute] = useState(parseRoute());

    useEffect(() => {
      const onHash = () => { setRoute(parseRoute()); window.scrollTo(0, 0); };
      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, []);

    const navigate = (href) => {
      const target = href.replace(/^#/, '');
      const current = route.name + (route.param ? '/' + route.param : '');
      if (target === current) { window.scrollTo(0, 0); return; }
      window.location.hash = href;
    };

    let screen;
    switch (route.name) {
      case 'about':     screen = <S.AboutPage navigate={navigate} />; break;
      case 'expertise': screen = <S.ExpertisePage navigate={navigate} param={route.param} />; break;
      case 'projects':  screen = <S.ProjectsPage navigate={navigate} param={route.param} />; break;
      case 'project':   screen = <S.ProjectPage navigate={navigate} param={route.param} />; break;
      case 'contact':   screen = <S.ContactPage navigate={navigate} />; break;
      case 'press':     screen = <S.PressPage navigate={navigate} />; break;
      default:          screen = <S.HomePage navigate={navigate} />;
    }

    return (
      <div>
        {screen}
        <Footer
          logoSrc={logoWhite}
          tagline={D.studio.tagline}
          email={D.studio.email}
          location={D.studio.locations}
          onNavigate={navigate}
          columns={[
            { title: 'Expertise', links: [
              { label: 'Architectural', href: '#expertise/architectural' },
              { label: 'Interiors', href: '#expertise/interiors' },
              { label: 'Lighting', href: '#expertise/lighting' },
              { label: 'Landscape', href: '#expertise/landscape' },
            ]},
            { title: 'Portfolio', links: [
              { label: 'Residential', href: '#projects/residential' },
              { label: 'Commercial', href: '#projects/commercial' },
              { label: 'Hospitality', href: '#projects/hospitality' },
              { label: 'Landscape', href: '#projects/landscape' },
            ]},
            { title: 'Studio', links: [
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Press', href: '#press' },
              { label: 'Contact', href: '#contact' },
            ]},
          ]}
          social={[
            { label: 'Instagram', href: 'https://www.instagram.com/jwtdesignstudio/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/jwt-design-studio/' },
          ]} />
        <BackToTop />
        <WhatsAppButton phone={D.studio.whatsapp} />
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}
