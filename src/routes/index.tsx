import { createFileRoute } from "@tanstack/react-router";

import heroDesktop from "../../assets/images/hero-shawaya-four-tine.webp";
import heroMobile from "../../assets/images/hero-shawaya-four-tine-mobile.webp";
import logo from "../../assets/images/shawaya-shack-logo.png";
import spiceMarket from "../../assets/images/spice-market.jpg";
import { MenuSection } from "../components/MenuSection";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p>Traditional masala · Premium fire</p>
            <h1 id="hero-title">
              <span>
                Built for <span className="hero-accent">the Flame</span>
              </span>
              <span>
                Made for <span className="hero-accent">the Table</span>
              </span>
            </h1>
          </div>

          <figure className="hero-media">
            <picture>
              <source media="(max-width: 47.99rem)" srcSet={heroMobile} />
              <img
                src={heroDesktop}
                width="1762"
                height="892"
                fetchPriority="high"
                decoding="async"
                alt="Golden masala shawaya being carved with a four-tine fork beside a live fire."
              />
            </picture>
            <span className="hero-seal">
              <img src={logo} width="2870" height="2706" alt="Shawaya Shack" />
            </span>
          </figure>
        </section>

        <MenuSection />

        <section className="story-section" id="story" aria-labelledby="story-title">
          <div className="story-shell">
            <figure className="story-media">
              <img
                src={spiceMarket}
                width="800"
                height="1008"
                loading="lazy"
                alt="Mounds of vivid masala spices in a warmly lit market stall."
              />
              <figcaption>Born in the hearth</figcaption>
            </figure>

            <div className="story-copy">
              <h2 id="story-title">
                Slow heat.
                <span>Deep flavor.</span>
              </h2>
              <p>
                Traditional masala meets patient fire. Every Shawaya Shack plate
                is built around bold spice, careful grilling, and portions made
                for solo cravings or a table full of friends.
              </p>
              <a href="#menu">See the full menu</a>
            </div>
          </div>
        </section>

        <section className="instagram-band" aria-labelledby="instagram-title">
          <div>
            <h2 id="instagram-title">Follow what’s on the fire.</h2>
            <p>New plates, fresh grills, and Shawaya Shack updates.</p>
          </div>
          <a
            href="https://www.instagram.com/shawayashack?igsh=MTVreXExb3VkYXh4Mg=="
            target="_blank"
            rel="noreferrer"
          >
            Open Instagram
          </a>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
