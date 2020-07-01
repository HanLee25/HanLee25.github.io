import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import BrandFace from "../images/svg-plugin/han-face.svg";
import IconBurger from "../images/svg-plugin/icon-burger.svg";

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
        <Link to="/">
          <h1 className="header__brand">
            <BrandFace
              className="header__face"
              aria-labelledby="hanFaceTitleID hanFaceDescID"
            />

            <span className="header__title">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="button button--svg md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <IconBurger
            className={`${
              isExpanded ? `icon--burger-close` : ` `
            } icon icon--burger`}
            aria-labelledby="burgerIconTitleID burgerIconDescID"
          />
        </button>

        <nav
          className={`${
            isExpanded ? `header__nav--opened` : ` `
          } header__nav main-nav`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="main-nav__item"
              key={link.title}
              to={link.route}
              activeClassName="main-nav__item--active"
            >
              {link.title}
            </Link>
          ))}
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
