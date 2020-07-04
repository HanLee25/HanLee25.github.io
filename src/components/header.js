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
				<Link to="/" title="{site.siteMetadata.title} : Home">
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
						className={`icon icon--burger${
							isExpanded ? ` icon--burger-close` : ``
						}`}
						aria-labelledby="burgerIconTitleID burgerIconDescID"
					/>
				</button>

				<nav
					className={`header__nav${
						isExpanded ? ` header__nav--opened` : ``
					}`}
				>
					<ul className="main-nav divide-y divide-gray-300 md:divide-y">
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
							<li>
								<Link
									className="main-nav__item"
									key={link.title}
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
