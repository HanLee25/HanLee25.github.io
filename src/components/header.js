import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import BrandFace from "../images/svg-plugin/han-face.svg";
import IconBurger from "../images/svg-plugin/icon-burger.svg";
import IconLinkedin from "../images/svg-plugin/icon-linkedin.svg";
import IconDribbble from "../images/svg-plugin/icon-dribbble.svg";
import IconGithub from "../images/svg-plugin/icon-github.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link
          to="/"
          title="{site.siteMetadata.title} : Home"
          className="header__home"
        >
          <h1 className="header__brand">
            <BrandFace
              className="header__face"
              aria-labelledby="hanFaceTitleID hanFaceDescID"
            />

            <span className="header__title">{site.siteMetadata.title}</span>
          </h1>
        </Link>

        <span className="sr-only">Find me at</span>

        <ul className="header__links">
          <li>
            <a
              className="button button--svg"
              href="https://www.linkedin.com/in/han-lee-07bb3688/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin
                className="icon icon--sm"
                aria-label="Linkedin Profile"
              />
            </a>
          </li>

          <li>
            <a
              className="button button--svg"
              href="https://dribbble.com/eyian25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconDribbble
                className="icon icon--sm"
                aria-label="Dribbble Profile"
              />
            </a>
          </li>

          <li>
            <a
              className="button button--svg"
              href="https://github.com/HanLee25/practicalJavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub
                className="icon icon--sm"
                aria-label="GitHub Profile"
              />
            </a>
          </li>
        </ul>

        <button
          className="button button--svg md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <IconBurger
            className={`icon icon--burger${
              isExpanded ? ` icon--burger-close` : ``
            }`}
            aria-labelledby="burgerIconTitleID burgerIconDescID"
          />
        </button>

        <nav
          className={`header__nav${isExpanded ? ` header__nav--opened` : ``}`}
        >
          <ul className="main-nav divide-y divide-gray-300 md:divide-y-0">
            {[
              {
                route: `/about`,
                title: `About`,
              },
              {
                route: `/works`,
                title: `Works`,
              },
              {
                route: `/contact`,
                title: `Contact`,
              },
            ].map((link) => (
              <li key={link.title}>
                <Link
                  className="main-nav__item"
                  to={link.route}
                  activeClassName="main-nav__item--active"
                  partiallyActive={true}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`${
          isExpanded ? `header__back-drop--opened` : ` `
        } header__back-drop`}
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <span className="sr-only">Close navigation</span>
      </div>
    </header>
  );
}

export default Header;
