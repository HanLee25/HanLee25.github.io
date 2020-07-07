import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

import IconLinkedin from "../images/svg-plugin/icon-linkedin.svg";
import IconDribbble from "../images/svg-plugin/icon-dribbble.svg";
import IconGithub from "../images/svg-plugin/icon-github.svg";
import IconGithub2 from "../images/svg-plugin/icon-github2.svg";
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
					<nav className="footer__credit">
						<p className="footer__links space-x-3">
							<span>Find me at{` `}</span>

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
						</p>

						<p className="footer__links footer__links--build space-x-3">
							<span>Built with{` `}</span>

							<a
								className="button button--svg"
								href="https://pages.github.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconGithub2
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
								<IconNpm
									className="icon icon--sm"
									aria-label="npm"
								/>
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
