import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { TextPlugin } from "gsap/TextPlugin";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  let hero = useRef(null);
  let designer = useRef(null);
  let value = useRef(null);
  let bad = useRef(null);
  let typing = useRef(null);

  gsap.registerPlugin(TextPlugin);

    useEffect(() => {
      const headlineHi = hero.children[0].firstElementChild;
      const headlineHand = hero.children[0].lastElementChild;
      const headlineIam01 = hero.lastElementChild.previousSibling.children[0];
      const headlineIam02 = hero.lastElementChild.children[0];
      const designerBox = designer.firstElementChild;
      const whyHire = value.firstElementChild.children[0];
      const askMe = value.lastElementChild.children[0];
      const badDesign = bad;
      const typingText = typing.children[0].children[1];

      gsap.from([headlineHi, headlineHand, headlineIam01, headlineIam02], {
        duration: 0.8,
        y: 130,
        ease: "ease.out",
        stagger: 0.4,
        delay: 1,
      });

      gsap.from(designerBox, {
        duration: 1,
        y: -360,
        ease: "bounce.out",
        delay: 3,
      });

      gsap.from([whyHire, askMe], {
        duration: 1,
        y: 180,
        ease: "ease.out",
        stagger: 0.4,
      });

      gsap.to(typingText, {
        duration: 6,
        text: {
          value:
            ", an illustrator, a product designer, and a front-end developer",
          type: "diff",
        },
        ease: "none",
        repeat: -1,
        repeatDelay: 1,
        delay: 4,
      });
    })
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
              <span className="typing" ref={(el) => (typing = el)}>
                <span className="typing__item">
                  <span>an UI + UX designer</span>
                  <span className="typing__string"></span>.
                </span>
              </span>
              <br />
              We should work together.
              <br />
              <span className="hero__why">
                Your time is too valuable to be wasted on the{" "}
                <span className="hero__bad" ref={(el) => (bad = el)}>
                  bad designs
                </span>
                .
              </span>
            </span>
          </p>

          <div className="overflow-hidden">
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
          <script>console.log('Hey, this is a "Hi" from the Helmet!')</script>
        </Helmet>
      </section>
    </Layout>
  );
}

export default IndexPage;
