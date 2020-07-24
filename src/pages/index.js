import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  let hero = useRef(null);
  let designer = useRef(null);

    useEffect(() => {
      const headlineHi = hero.children[0].children[0];
      const headlineHand = headlineHi.nextSibling;
      const headlineIam = hero.lastElementChild.children[0];

      const designerBox = designer.firstElementChild;

      gsap.to(hero, { duration: 0, css: { visibility: "visible" } });

      gsap.from([headlineHi, headlineHand], {
          duration: 0.8,
          y: 120,
          ease: "power3.easeOut",
          stagger: 0.7,
          delay: 0.25,
        }
      );

      gsap.from(headlineIam, {
        duration: 1,
        y: 240,
        ease: "power3.easeOut",
        delay: 0.5,
      });

      gsap.from(designerBox, {
        duration: 1,
        y: -120,
        ease: "power3.easeOut",
        delay: 1.5,
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
            <span className="hero__block">Hey there!</span>
            <span className="hero__block" role="img" aria-label="emoji: Hi">
              {" "}
              👋
            </span>
          </span>

          <br />

          <span className="hero__paragraph">
            <span className="hero__block">
              I am a{" "}
              <strong className="hero__strong" ref={(el) => (designer = el)}>
                <span className="hero__box"></span>
                <span className="hero__designer">product designer</span>
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
            </span>
          </span>
        </h2>

        <div className="hero__value">
          <p>
            I am also{" "}
            <span className="typing">
              <span className="typing__item">
                <span className="typing__string">an UI + UX designer.</span>
              </span>
              <span className="typing__item">
                <span className="typing__string">an illustrator.</span>
              </span>
              <span className="typing__item">
                <span className="typing__string">a product stategist.</span>
              </span>
              <span className="typing__item">
                <span className="typing__string">a front-end developer.</span>
              </span>
            </span>
            <br />
            We should work together.
            <br />
            <span className="hero__why">
              Because A{" "}
              <span role="img" aria-label="emoji: light bulb">
                💡
              </span>
              <span className="tracking-tighter underline">life</span>{" "}
              <b className="inline-block transform translate-y-1">is</b> t
              <span className="font-serif uppercase">o</span>o{" "}
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
          <script>console.log('Hey, this is a "Hi" from the Helmet!')</script>
        </Helmet>
      </section>
    </Layout>
  );
}

export default IndexPage;
