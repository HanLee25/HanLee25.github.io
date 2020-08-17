import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImgOops from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />

      <section className="content-section">
        <header className="content-section__header">
          <h2 className="h2">You seems lost</h2>
        </header>

        <p>
          I can't fine the page you're looking for.
          <br />
          Maybe try{" "}
          <Link to="/" title="Home" className="button button--link">
            <span role="img" aria-label="emoji: house building">
              🏠
            </span>
          </Link>{" "}
          again?
        </p>

        <ImgOops className="mt-8 lg:mt-16" aria-label="Something missing" />
      </section>
    </Layout>
  );
}

export default NotFoundPage;
