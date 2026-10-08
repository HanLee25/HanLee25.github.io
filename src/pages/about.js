import React, { useRef, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const Head = () => (
  <SEO
    keywords={[`product designer`, `illustrator`, `UI designer`, `UX designer`]}
    title="About"
  />
);

function AboutPage() {
  gsap.registerPlugin(ScrollTrigger);

  let careerTimeLine = useRef(null);
  let stickyContainer = useRef(null);

  useEffect(() => {
    const careerEvent = careerTimeLine.childNodes;

    gsap.defaults({ ease: "power3.out" });
    gsap.set(careerEvent, { y: 50, opacity: 0.5 });

    ScrollTrigger.batch(careerEvent, {
      onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1 }),
      start: "top 95%",
    });

    const stickyTarget = stickyContainer.firstElementChild;

    ScrollTrigger.create({
      trigger: stickyContainer,
      start: "top top",
      end: "bottom top",
      endTrigger: ".main",
      toggleClass: { targets: stickyTarget, className: "is--stuck" },
    });

    ScrollTrigger.create({
      trigger: stickyContainer,
      start: "top -100px",
      end: "bottom top",
      endTrigger: ".main",
      toggleClass: { targets: stickyTarget, className: "is--shown" },
    });

    ScrollTrigger.create({
      trigger: stickyContainer,
      start: "top -110px",
      end: "bottom top",
      endTrigger: ".main",
      toggleClass: { targets: stickyTarget, className: "is--pushed" },
    });
  });
  return (
    <Layout>
      <div className="content-column content-column--reversed">
        <aside className="content-column__side-bar">
          <div className="sticky-element" ref={(el) => (stickyContainer = el)}>
            <div className="sticky-element__target">
              <ul className="anchor-nav">
                <li>
                  <AnchorLink
                    to="/about#bio"
                    title="Who I am"
                    className="anchor-nav__item"
                  />
                </li>
                <li>
                  <AnchorLink
                    to="/about#mission"
                    title="How I think"
                    className="anchor-nav__item"
                  />
                </li>
                <li>
                  <AnchorLink
                    to="/about#experience"
                    title="How I work"
                    className="anchor-nav__item"
                  />
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="content-column__main">
          <section id="bio" className="content-section">
            <header className="content-section__header">
              <h2 className="h3">Who I am</h2>
            </header>

            <p>
              I'm Han Lee, a product designer who believes <b>good design should empower people to make better decisions.</b>
            </p>

            <p>
              I used be a sculptor, a tattoo artist, and an illustrator.
              <br />
              I  still am a pretty awsome Amazon box toy-maker.{" "}
              <span role="img" aria-label="emoji: packaging box">
                📦
              </span>
            </p>
          </section>

          <section id="mission" className="content-section">
            <header className="content-section__header">
              <h2 className="h3">How I think</h2>
            </header>

            <div>
              <blockquote className="quote">
                To survive, you must tell stories.
              </blockquote>

              <cite className="quote-by">– Umberto Eco</cite>
            </div>

            <p>
              I've always been interested in how information becomes meaningful through context. As an artist, I learned to communicate through the arts. And as a designer, I apply those same principles.
            </p>

            <p>
              I believe <b>visual storytelling</b> can give people the clarity and confidence they need to move forward.
            </p>
          </section>

          <section id="experience" className="content-section">
            <header className="content-section__header">
              <h2 className="h3">How I work</h2>
            </header>

            <p>
              My collaboration goal is simple:
              <br />
              <b>making ideas tangible enough for the team to make better decisions.</b>
            </p>

            <p>
              The deliverable to bring an idea to life can vary in forms and fidelity, depending on what the team needs.
              I would use my best design justification to help the team make decisions effectively.
            </p>

            <ul className="timeline" ref={(el) => (careerTimeLine = el)}>
              <li className="timeline__event" data-date="Jan 2024 - Present">
                <h3 className="timeline__title h6">Staff Product designer</h3>

                <small className="timeline__meta">
                  Match Group / E&E / New York, NY
                </small>

                <div className="timeline__detail">
                  Support team with hands-on contribution:

                  <ul className="timeline__contribution">
                    <li>Product discovery workshop guide</li>
                    <li>Design principle mentoring</li>
                    <li>Tactical UI/UX iteration</li>
                  </ul>
                </div>
              </li>

              <li className="timeline__event" data-date="Jul 2019 - Jan 2024">
                <h3 className="timeline__title h6">Lead Product designer</h3>

                <small className="timeline__meta">
                  OkCupid / Client success / New York, NY
                </small>

                <div className="timeline__detail">
                  Contributing end-to-end design cycle:

                  <ul className="timeline__contribution">
                    <li>Design discovery</li>
                    <li>UI/UX iteration</li>
                    <li>Design system management</li>
                  </ul>
                </div>
              </li>

              <li className="timeline__event" data-date="Jul 2019 - Jan 2021">
                <h3 className="timeline__title h6">Product designer</h3>

                <small className="timeline__meta">
                  Thoughtbot / Client success / New York, NY
                </small>

                <div className="timeline__detail">
                  Contributing various client projects:

                  <ul className="timeline__contribution">
                    <li>Product consulting</li>
                    <li>Design discovery workshop</li>
                    <li>UI/UX iteration</li>
                    <li>Front-end engineering</li>
                  </ul>
                </div>
              </li>

              <li className="timeline__event" data-date="Mar 2017 - Jul 2019">
                <h3 className="timeline__title h6">Design manager</h3>

                <small className="timeline__meta">
                  Fareportal / Mobile app / New York, NY
                </small>

                <div className="timeline__detail">
                  Responsible to lead the team:

                  <ul className="timeline__contribution">
                    <li>Design quality management</li>
                    <li>Design system adoption</li>
                    <li>Product design thinking adoption</li>
                  </ul>
                </div>
              </li>

              <li className="timeline__event" data-date="Mar 2015 - Feb 2017">
                <h3 className="timeline__title h6">Design Lead</h3>

                <small className="timeline__meta">
                  Fareportal / Web app / New York, NY
                </small>

                <div className="timeline__detail">
                  Leading UI/UX design process:

                  <ul className="timeline__contribution">
                    <li>Design consistency guide</li>
                    <li>Design system ownership</li>
                    <li>Front-end engineering</li>
                  </ul>
                </div>
              </li>

              <li className="timeline__event" data-date="Mar 2012 – Feb 2015">
                <h3 className="timeline__title h6">UI/UX designer</h3>

                <small className="timeline__meta">
                  Fareportal / Booking engine / New York, NY
                </small>

                <div className="timeline__detail">
                  Contributing UI/UX design process:

                  <ul className="timeline__contribution">
                    <li>UI/UX look & feel</li>
                    <li>User flow design</li>
                    <li>Conversion optimization</li>
                  </ul>
                </div>
              </li>

              <li className="timeline__event" data-date="Mar 2008 – Jan 2012">
                <h3 className="timeline__title h6">
                  Web / Motion Graphic Designer
                </h3>

                <small className="timeline__meta">
                  SB design studio / Web design / New York, NY
                </small>

                <div className="timeline__detail">
                  Own Web/Motion design process:

                  <ul className="timeline__contribution">
                    <li>Building online brand presence</li>
                    <li>Brand identity</li>
                    <li>Promotion video</li>
                    <li>Visual presentation</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
