import { Link } from "@tanstack/react-router";

import logo from "../../assets/images/shawaya-shack-logo.png";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Shawaya Shack home">
        <img src={logo} width="2870" height="2706" alt="" />
        <span>Shawaya Shack</span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#menu">Menu</a>
        <a href="#story">Our story</a>
        <a
          className="instagram-nav"
          href="https://www.instagram.com/shawayashack?igsh=MTVreXExb3VkYXh4Mg=="
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </nav>

      <a className="header-cta" href="#menu">
        View menu
      </a>
    </header>
  );
}
