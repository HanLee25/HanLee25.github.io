import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `product design`,
          `illustrattion`,
          `UI design`,
          `UX design`,
          `visual storytelling`,
          `visual narrative`,
        ]}
        title="Home"
      />

      <section className="content-section justify-between">
        <h2 className="hero h1">
          Hey there!
          <span role="img" aria-label="emoji: Hi">
            👋
          </span>

          <br />
          <br />I am a{" "}
          <strong className="hero__strong">
            product designer
          </strong>{" "}
          who loves to tell a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Visual_narrative"
            target="_blank"
            rel="noreferrer"
            className="button button--link"
          >
            story visually
          </a>
          .
        </h2>

        <div className="hero__value">
          <p>
            I am also{" "}
            <span className="typing">
              <span class="typing__item">
                <span class="typing__string">
                  an UI + UX designer.
                </span>
              </span>
              <span class="typing__item">
                <span class="typing__string">
                  an illustrator.
                </span>
              </span>
              <span class="typing__item">
                <span class="typing__string">
                  a product stategist.
                </span>
              </span>
              <span class="typing__item">
                <span class="typing__string">
                  a front-end developer.
                </span>
              </span>
            </span>
            <br/>
            We should work together.
            <br />
            <span className="hero__why">
              Because A{" "}
              <span role="img" aria-label="emoji: light bulb">
                💡
              </span>
              <span className="tracking-tighter underline">
                life
              </span>{" "}
              <b className="inline-block transform translate-y-1">
                is
              </b>{" "}
              t<span className="font-serif uppercase">o</span>o{" "}
              <span className="uppercase">v</span>alu
              <span className="inline-block italic transform scale-125">
                able
              </span>
              <span role="img" aria-label="emoji: toilet paper">
                🧻
              </span>{" "}
              to de
              <span className="uppercase inline-block transform scale-125">
                a
              </span>
              l with the{" "}
              <span className="font-sans inline-block transform -rotate-5 skew-x-12 font-bold line-through textShadow-xl">
                bad <span className="uppercase">d</span>esigns
              </span>
              .
            </span>
          </p>

          <div>
            {[
              {
                route: `/contact`,
                title: `Ask me how`,
              },
            ].map((link) => (
              <Link
                className="hero__cta button"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <Helmet>
          <script>console.log('Test')</script>
        </Helmet>
      </section>
    </Layout>
  );
}

export default IndexPage;