import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import { gsap } from "gsap";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  let hero = useRef(null);
  let designer = useRef(null);
  let value = useRef(null);

  useEffect(() => {
    const headlineHi = hero.children[0].firstElementChild;
    const headlineHand = hero.children[0].lastElementChild;
    const headlineIam01 = hero.lastElementChild.previousSibling.children[0];
    const headlineIam02 = hero.lastElementChild.children[0];
    const designerBox = designer.firstElementChild;
    const whyHire = value.firstElementChild.children[0];
    const askMe = value.lastElementChild.children[0];
    const checkOut = value.lastElementChild.children[1];

    gsap.from([headlineHi, headlineHand, headlineIam01, headlineIam02], {
      duration: 0.8,
      y: 130,
      ease: "power3.out",
      stagger: 0.4,
    });

    gsap.from(designerBox, {
      duration: 1,
      y: -360,
      ease: "bounce.out",
      delay: 3,
    });

    gsap.from(whyHire, {
      duration: 0.8,
      y: 180,
      ease: "power3.out",
      delay: 1.6,
    });

    gsap.from([askMe, checkOut], {
      duration: 0.4,
      y: 80,
      ease: "power3.out",
      stagger: 0.2,
      delay: 2,
    });
  });
  return (
    <Layout>
      <SEO
        keywords={[
          `product design`,
          `illustration`,
          `UI design`,
          `UX design`,
          `visual storytelling`,
          `visual narrative`,
        ]}
        title="Home"
      />

      <section className="content-section justify-between">
        <h2 className="hero h1" ref={(el) => (hero = el)}>
          <span className="hero__paragraph">
            <span className="hero__line">Hey there!</span>{" "}
            <span className="hero__line" role="img" aria-label="emoji: Hi">
              👋
            </span>
          </span>

          <br />
          <br />

          <span className="hero__paragraph">
            <span className="hero__line">
              I'm a{" "}
              <strong className="hero__strong" ref={(el) => (designer = el)}>
                <span className="hero__box"></span>
                <span className="hero__designer">
                  <span className="hero__product">product </span>designer
                </span>
              </strong>{" "}
              who
            </span>{" "}
          </span>

          <span className="hero__paragraph">
            <span className="hero__line">
              loves to tell a story{" "}
              <a
                href="https://en.wikipedia.org/wiki/Visual_narrative"
                target="_blank"
                rel="noreferrer"
                className="button button--link"
              >
                visually
              </a>
              .
            </span>
          </span>
        </h2>

        <div className="hero__value" ref={(el) => (value = el)}>
          <p className="hero__paragraph">
            <span className="hero__line">
              I am also{" "}
              <span className="typing">
                <span className="typing__item">
                  <span className="typing__string">an UI + UX designer. </span>
                </span>
                <span className="typing__item">
                  <span className="typing__string">an illustrator. </span>
                </span>
                <span className="typing__item">
                  <span className="typing__string">an art director. </span>
                </span>
                <span className="typing__item">
                  <span className="typing__string">a product stategist. </span>
                </span>
                <span className="typing__item">
                  <span className="typing__string">
                    a front-end developer.{" "}
                  </span>
                </span>
              </span>
              <br />
              We should work together.
              <br />
              <span className="hero__why">
                Your time is too valuable to be wasted on the bad designs.
              </span>
            </span>
          </p>

          <div className="overflow-hidden">
            <Link className="hero__cta button" title="Ask me how" to="/contact">
              Ask me how
            </Link>

            <Link
              className="hero__cta button button--ghost"
              title="Check out"
              to="/works"
            >
              CHeck out my works
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
