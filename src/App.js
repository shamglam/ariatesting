import './App.css';
import { Outlet } from 'react-router-dom';
// import { Menu } from './ariaRoles/index.tsx'; // Removed unused import

function App() {
  return (
  <div id="app-root" aria-busy="false" aria-label="Demonstrasjonsside" aria-describedby="page-desc" aria-roledescription="Demonstrasjon av ARIA-attributter">
      <div id="page-desc" className="visually-hidden">
        Denne siden demonstrerer alle ARIA-attributter, HTML5-landemerker, overskrifter, en kompatibel liste, tabell og skjema.
      </div>

      {/* Banner Landmark */}
      <header role="banner" aria-label="Nettstedbanner" aria-labelledby="site-title">
        <h1 id="site-title" aria-level="1">
          
          <a href="/" aria-label="Hjemmeside">
          Demonstrasjon av ARIA-attributter</a>
        </h1>
        <nav aria-label="Hovednavigasjon" aria-controls="main-content">
          <p aria-hidden="true">Listen under leses "punkt" hovednavigasjon navigasjon landemerke</p>
          <ul role="menu">
            <li><a href="#main-content" aria-label="Hopp til hovedinnhold">Hopp til hovedinnhold</a></li>
            <li><a href="#article-section" aria-label="Gå til artikkel">Artikkel</a></li>
            <li><a href="#footer-section" aria-label="Gå til bunntekst">Bunntekst</a></li>
          </ul>
        </nav>

        <nav aria-label="Sekundær navigasjon">
           <p aria-hidden="true">Listen under leses "rekkefølge" sekundær navigasjon landemerke</p>
          <ol>
            <li><a href="liveregions" aria-label="Gå til liveregions">Liveregions</a></li>
            <li><a href="popover" aria-label="Gå til popover siden">Popover</a></li>
            <li><a href="roles" aria-label="Gå til rollesiden">Roller</a></li>
            <li><a href="content" aria-label="Gå til innholdssiden">Innhold</a></li>
                    <li><a href="therest" aria-label="Resten av greiene">Resten</a></li>

          </ol>
        </nav>

      </header>

            {/* Moved banner and media content to ContentPage.tsx */}

      {/* Main Landmark */}
      <main id="main-content" role="main" aria-label="Hovedinnhold" aria-describedby="main-desc" aria-atomic="true">
      
        <Outlet />
      </main>

      {/* Footer Landmark */}
      <footer id="footer-section" role="contentinfo" aria-label="Nettstedets bunntekst" aria-labelledby="footer-title" aria-details="footer-details">
        <h2 id="footer-title" aria-level="2">Bunntekst</h2>
        <div id="footer-details" className="visually-hidden">
          Dette er landemerket for bunntekst.
        </div>
        <p aria-hidden="false">Opphavsrett &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
