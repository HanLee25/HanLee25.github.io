import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`product designer`, `illustrator`, `UI designer`, `UX designer`]}
        title="Home - Han Lee"
      />

      <section className="section section-hero">
        <h2 className="hero h1">
          Hey there!
          <span role="img" aria-label="emoji">
            👋
          </span>
          <br />
          My name is Han.
          <br />I am a{" "}
          <strong className="hero__strong">product designer</strong>.
        </h2>

        <div className="value-prop">
          <p>
            Also, an UI + UX designer, a product design workshoper,
            an illustrator, a front-end developer,
            <br />
            and a hot glue master.
          </p>

          <p className="value-prop__bad">
            A{" "}
            <span role="img" aria-label="emoji">
              💡
            </span>
            <span className="tracking-tighter underline">life</span>{" "}
            <b className="inline-block transform translate-y-1">
              is
            </b>{" "}
            t<span className="font-serif uppercase">o</span>o{" "}
            <span className="uppercase">v</span>alu
            <span className="inline-block italic transform scale-125">
              able
            </span>
            <span role="img" aria-label="emoji">
              🧻
            </span>{" "}
            to de
            <span className="uppercase inline-block transform scale-125">
              a
            </span>
            l with{" "}
            <span className="font-sans inline-block transform -rotate-5 skew-x-12 font-bold line-through textShadow-xl">
              bad <span className="uppercase">d</span>esigns
            </span>
            .
          </p>

          <p>
            Let's make the world better together.
            <br />
            {[
              {
                route: `/contact`,
                title: `Ask me how`,
              },
            ].map((link) => (
              <Link
                className="value-prop__cta button"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
