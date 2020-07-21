import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `product designer`,
          `illustrator`,
          `UI designer`,
          `UX designer`,
        ]}
        title="About"
      />

      <div className="content-column">
        <aside className="content-column__side-bar">
          <ul className="anchor-nav">
            <li>
              <AnchorLink
                to="/about#bio"
                title="Bio"
                className="anchor-nav__item"
              />
            </li>
            <li>
              <AnchorLink
                to="/about#mission"
                title="Mission"
                className="anchor-nav__item"
              />
            </li>
            <li>
              <AnchorLink
                to="/about#experience"
                title="Experience"
                className="anchor-nav__item"
              />
            </li>
          </ul>
        </aside>

        <div className="content-column__main">
          <section className="content-section">
            <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-red-700">
              To survive, you must tell stories.
            </blockquote>

            <cite className="block mt-4 text-xs font-bold text-right uppercase">
              – Umberto Eco
            </cite>
          </section>

          <section id="bio" className="content-section">
            <h2 className="h2">Bio</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <Link to="/">incididunt</Link> ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </section>

          <section id="mission" className="content-section">
            <h2 className="h2">Mission</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          <section id="experience" className="content-section">
            <h2 className="h2">Experience</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
