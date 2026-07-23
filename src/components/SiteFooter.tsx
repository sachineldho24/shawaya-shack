import logo from "../../assets/images/shawaya-shack-logo.png";

const instagramUrl =
  "https://www.instagram.com/shawayashack?igsh=MTVreXExb3VkYXh4Mg==";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="visit">
      <div className="footer-shell">
        <div className="footer-brand">
          <img src={logo} width="2870" height="2706" alt="" />
          <div>
            <h2>Shawaya Shack</h2>
            <p>Traditional masala. Patient fire. Generous plates.</p>
          </div>
        </div>

        <div className="footer-block">
          <h3>Visit us</h3>
          <p>Address and opening hours coming soon.</p>
        </div>

        <div className="footer-block">
          <h3>Follow the fire</h3>
          <a
            className="instagram-link"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Shawaya Shack on Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle className="instagram-dot" cx="17.3" cy="6.8" r="1" />
            </svg>
            <span>@shawayashack</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shawaya Shack</p>
        <p>Designed for the flame</p>
      </div>
    </footer>
  );
}
