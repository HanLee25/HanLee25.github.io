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
          className="items-center md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <IconBurger
            className="icon"
            aria-labelledby="burgerIconTitleID burgerIconDescID"
          />
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
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
              className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
