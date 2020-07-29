import React, { useRef, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  gsap.registerPlugin(ScrollTrigger);

  let careerTimeLine = useRef(null);

  useEffect(() => {

    const careerEvent = careerTimeLine.childNodes;

    gsap.defaults({ ease: "power3.out" });
    gsap.set(careerEvent, { y: 100 });

    ScrollTrigger.batch(careerEvent, {
      onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1 }),
      start: "top bottom",
    });
  })
  return (
    <Layout>
      <SEO
        keywords={[
          `product designer`,
          `illustrator`,
          `UI designer`,
          `UX designer`,
        ]}
        title="About"
      />

      <div className="content-column">
        <aside className="content-column__side-bar">
          <ul className="anchor-nav">
            <li>
              <AnchorLink
                to="/about#bio"
                title="Bio"
                className="anchor-nav__item"
              />
            </li>
            <li>
              <AnchorLink
                to="/about#mission"
                title="Mission"
                className="anchor-nav__item"
              />
            </li>
            <li>
              <AnchorLink
                to="/about#experience"
                title="Experience"
                className="anchor-nav__item"
              />
            </li>
          </ul>
        </aside>

        <div className="content-column__main">
          <section id="bio" className="content-section">
            <header className="content-section__header">
              <h2 className="h2">Bio</h2>
            </header>

            <p>
              Han Lee, a product designer who helps to solve UI/UX problems of
              digital products, through front-end development and product
              consulting for 10+ years.
            </p>

            <p>
              I studied fine and studio art at Hong-ik University in South Korea
              and the Cooper Union in New York City. After graduate schools, I
              translated my learnings of the human-artwork interaction into the
              human-computer interaction. Since then, my goal is always to
              communicate with the audience naturally.
            </p>

            <p>
              I love drawing illustrations and digitalizes them to create
              animation. I am also very talented Amazon box artist.{" "}
              <span role="img" aria-label="emoji: packaging box">
                📦
              </span>
            </p>
          </section>

          <section id="mission" className="content-section">
            <header className="content-section__header">
              <h2 className="h2">Mission</h2>
            </header>

            <div>
              <blockquote className="quote">
                To survive, you must tell stories.
              </blockquote>

              <cite className="quote-by">– Umberto Eco</cite>
            </div>

            <p>
              Telling a story is the one of the most effective way delivering
              information. When we tell a story, the information is flowing with
              context. In storytelling, we don't dump information in audience's
              face.
            </p>

            <p>
              When I was in college, my biggest challenge was delivering the
              message through my artwork because I wouldn’t be around all the
              time to explain things.
            </p>

            <p>
              Now, I have to tell a story about my product without standing by
              my users. And I need to do that visually. I should be able to
              understand the flow of thoughts of my users, and curate the
              information to fit with the context at times.
            </p>

            <p>
              <b>
                - all to{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Visual_narrative"
                  target="_blank"
                  rel="noreferrer"
                >
                  tell a story visually
                </a>{" "}
                about the product.
              </b>
            </p>
          </section>

          <section id="experience" className="content-section">
            <header className="content-section__header">
              <h2 className="h2">Experience</h2>
            </header>

            <p>
              One thing that I learned from my past experience is, more elements
              of the experience I understand, better my product justification
              gets. Because users experience the product as a whole, not
              component by component.
            </p>

            <p>
              I have experience of a studio artist, a visual designer, an UI
              deisgner, a front-end developer, and an interaction designer for
              past 10+ years. And that helps me to grow as an all-around product
              designer.
            </p>

            <ul className="timeline" ref={(el) => (careerTimeLine = el)}>
              <li className="timeline__event" data-date="Jul 2019 - Apr 2020">
                <h3 className="timeline__title h5">Product designer</h3>

                <small className="timeline__meta">
                  Thoughtbot / Client success / New York, NY
                </small>

                <p className="timeline__detail">
                  Solving UI/UX problems of digital products, through front-end
                  development and product consulting. Conducting design
                  researches, participating, and facilitating product design
                  sprints. Contribute UI, UX design iteration process.
                </p>
              </li>

              <li className="timeline__event" data-date="Mar 2017 - Jul 2019">
                <h3 className="timeline__title h5">Design manager</h3>

                <small className="timeline__meta">
                  Fareportal / Mobile product / New York, NY
                </small>

                <p className="timeline__detail">
                  Working closely with the head of the mobile product.
                  Responsible to oversee the quality of UI design, the
                  seamlessness of the UX of the product. And responsible for
                  overseeing the quality of front-end codebase.
                </p>
              </li>

              <li className="timeline__event" data-date="Mar 2015 - Feb 2017">
                <h3 className="timeline__title h5">Design Team Lead</h3>

                <small className="timeline__meta">
                  Fareportal / Web app & booking engine / New York, NY
                </small>

                <p className="timeline__detail">
                  Responsible for providing design feedback in iterative product
                  design process, and creating hand-on design deliverables such
                  as wireframes, prototypes, and high-fidelity UI mockups.
                </p>

                <p className="timeline__detail">
                  Also contributing to building MVP for product experiment by
                  utilizing front-end coding ability. Participating to create a
                  branding guide, style guide, and UI library.
                </p>
              </li>

              <li className="timeline__event" data-date="Mar 2012 – Feb 2015">
                <h3 className="timeline__title h5">UI/UX designer</h3>

                <small className="timeline__meta">
                  Fareportal / Web app & booking engine / New York, NY
                </small>

                <p className="timeline__detail">
                  Reporting to the Creative Director, and working closely with
                  the Product Manager.
                </p>

                <p className="timeline__detail">
                  Responsible for UI/UX design workflow, to create high-quality
                  design solutions to serve e-commerce User Experience.
                  Collaborating with the product team to provide design
                  guidelines and UX feedback. Contributing to creating
                  user-friendly branding, including a branding guide, marketing
                  materials, and brand identity.
                </p>
              </li>

              <li className="timeline__event" data-date="Mar 2008 – Jan 2012">
                <h3 className="timeline__title h5">
                  Web / Motion Graphic Designer
                </h3>

                <small className="timeline__meta">
                  SB design studio / Web design / New York, NY
                </small>

                <p className="timeline__detail">
                  Reporting to the Creative Director, and working closely with
                  the Product Manager.
                </p>

                <p className="timeline__detail">
                  Providing branding identity, presentation for clients.
                  Creating UI design solutions, marketing materials, and CMS
                  template/theme by front-end coding.
                  <br />
                  Creating flash animation, editing promotion video.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
