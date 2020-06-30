import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
		<div className="page">
			<Header />

			<main className="main">
				{children}
			</main>

			<footer className="footer">
				<div className="footer__wrapper">
					<nav className="flex justify-between p-4 mx-auto text-sm md:p-8">
						<p className="footer__credit">
							Created by{` `}
							<a
  							className="font-bold no-underline"
								href="https://bryant.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								Han Lee
							</a>
						</p>

						<p>
							<a
								className="font-bold no-underline"
								href="https://github.com/taylorbryant/gatsby-starter-tailwind"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
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
