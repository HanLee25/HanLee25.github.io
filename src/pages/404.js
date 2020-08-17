import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
          <Link to="/" title="Home">
            <span role="img" aria-label="emoji: house building">
              🏠
            </span>
          </Link>{" "}
          again?
        </p>
      </section>

      <Helmet
        bodyAttributes={{
          class: '404'
        }}
      />
    </Layout>
  );
}

export default NotFoundPage;
