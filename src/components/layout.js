import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

import IconGithub from "../images/svg-plugin/icon-github2.svg";
import IconGatsby from "../images/svg-plugin/icon-gatsbyjs.svg";
import IconReact from "../images/svg-plugin/icon-reactjs.svg";
import IconTailwind from "../images/svg-plugin/icon-tailwindcss.svg";
import IconGraphql from "../images/svg-plugin/icon-graphql.svg";
import IconNpm from "../images/svg-plugin/icon-npm.svg";

function Layout({ children }) {
  return (
  <div className="page">
    <Header />

    <main className="main">{children}</main>

    <footer className="footer">
      <div className="footer__wrapper">
        <nav className="flex justify-between p-4 mx-auto text-sm md:px-8 lg:px-0">
          <p className="footer__credit">
            <a
              className="font-bold no-underline"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>

          <p className="footer__credit space-x-3">
            <span>Built with{` `}</span>

            <a
              className="button button--svg"
              href="https://pages.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub
                className="icon icon--sm"
                aria-label="GitHub Pages"
              />
            </a>

            <a
              className="button button--svg"
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGatsby
                className="icon icon--sm"
                aria-label="Gatsby"
              />
            </a>
            
            <a
              className="button button--svg"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconReact
                className="icon icon--sm"
                aria-label="React"
              />
            </a>

            <a
              className="button button--svg"
              href="https://graphql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGraphql
                className="icon icon--sm"
                aria-label="GraphQL"
              />
            </a>

            <a
              className="button button--svg"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTailwind
                className="icon icon--sm"
                aria-label="Tailwind CSS"
              />
            </a>
            
            <a
              className="button button--svg"
              href="https://www.npmjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconNpm className="icon icon--sm" aria-label="npm" />
            </a>
          </p>
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
