import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

import Header from "./header";

import IconGithub2 from "../images/svg-plugin/icon-github2.svg";
import IconGatsby from "../images/svg-plugin/icon-gatsbyjs.svg";
import IconReact from "../images/svg-plugin/icon-reactjs.svg";
import IconTailwind from "../images/svg-plugin/icon-tailwindcss.svg";
import IconGraphql from "../images/svg-plugin/icon-graphql.svg";
import IconNpm from "../images/svg-plugin/icon-npm.svg";
import IconGsap from "../images/svg-plugin/icon-gsap.svg";

function Layout({ children }) {
  gsap.config({
    nullTargetWarn: false,
  });

  let app = useRef(null);
  let main = useRef(null);

  useEffect(() => {
    gsap.to(app, { duration: 0, css: { visibility: "visible" } });

    gsap.to(main, {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
      delay: 0.25,
    });

    const contentSection = ".content-section";

    gsap.from(contentSection, {
      duration: 0.5,
      y: 100,
      ease: "power3.out",
      delay: 0.25,
    });

    const contentHeader = ".content-section__header > *";

    gsap.from(contentHeader, {
      duration: 0.5,
      y: 100,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.5,
    });
  })
  return (
    <div className="page" ref={(el) => (app = el)}>
      <Header />

      <main className="main" ref={(el) => (main = el)}>
        {children}
      </main>

      <footer className="footer">
        <div className="footer__wrapper">
          <nav className="footer__credit">
            <span className="footer__copyright">
              &copy; Copyright 2020, Han Lee
            </span>

            <span className="footer__links space-x-3">
              <span>Built with{` `}</span>

              <a
                className="footer__link button button--svg"
                href="https://pages.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub2 className="icon" aria-label="GitHub Pages" />
              </a>

              <a
                className="footer__link button button--svg"
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGatsby className="icon" aria-label="Gatsby" />
              </a>

              <a
                className="footer__link button button--svg"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconReact className="icon" aria-label="React" />
              </a>

              <a
                className="footer__link button button--svg"
                href="https://graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGraphql className="icon" aria-label="GraphQL" />
              </a>

              <a
                className="footer__link button button--svg"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTailwind className="icon" aria-label="Tailwind CSS" />
              </a>

              <a
                className="footer__link button button--svg"
                href="https://greensock.com/gsap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGsap className="icon" aria-label="GSAP" />
              </a>

              <a
                className="footer__link button button--svg"
                href="https://www.npmjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconNpm className="icon" aria-label="npm" />
              </a>
            </span>
          </nav>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
