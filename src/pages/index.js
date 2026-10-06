import React, { useRef, useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import { gsap } from "gsap";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const featuredProjectSlugs = [
  "/works/1st-project",
  "/works/4th-project",
  "/works/3rd-project",
];

function IndexPage({ data }) {
  const allProjects = data?.allMarkdownRemark?.edges || [];
  const projectLookup = allProjects.reduce((lookup, { node }) => {
    const { slug, title, excerpt, cover } = node.frontmatter;

    lookup[slug] = {
      title,
      description: excerpt,
      image: cover?.childImageSharp?.fluid,
      path: slug,
    };

    return lookup;
  }, {});

  const featuredProjects = featuredProjectSlugs
    .map((slug) => projectLookup[slug])
    .filter(Boolean);
  let hero = useRef(null);
  let designer = useRef(null);
  let value = useRef(null);
  const carouselSlide = useRef(null);
  const hasMountedCarousel = useRef(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const headlineHi = hero.children[0].firstElementChild;
    const headlineHand = hero.children[0].lastElementChild;
    const headlineIam01 = hero.lastElementChild.previousSibling.children[0];
    const headlineIam02 = hero.lastElementChild.children[0];
    const designerBox = designer.firstElementChild;
    const whyHire = value.firstElementChild.children[0];

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

  }, []);

  useEffect(() => {
    if (!hasMountedCarousel.current) {
      hasMountedCarousel.current = true;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const image = carouselSlide.current.querySelector(".featured-carousel__image");
    const copy = carouselSlide.current.querySelector(".featured-carousel__copy");
    const animation = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
    });

    animation
      .fromTo(
        image,
        { autoAlpha: 0, scale: 0.94 },
        { autoAlpha: 1, scale: 1, clearProps: "opacity,visibility,transform" }
      )
      .fromTo(
        copy,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, clearProps: "opacity,visibility,transform" },
        "<0.12"
      );

    return () => animation.kill();
  }, [activeProject]);

  const changeProject = (offset) => {
    setActiveProject((currentProject) =>
      (currentProject + offset + featuredProjects.length) % featuredProjects.length
    );
  };

  const project = featuredProjects[activeProject];

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
          <span className="hero__paragraph hero__greeting">
            <span className="hero__line">Hey there!</span>{" "}
            <span className="hero__line hero__hi" role="img" aria-label="emoji: Hi">
              👋
            </span>
          </span>

          <br />

          <span className="hero__paragraph">
            <span className="hero__line">
              I design to empower people{" "}
            </span>
          </span>

          <span className="hero__paragraph">
            <span className="hero__line">
              to make{" "}
              <strong className="hero__strong" ref={(el) => (designer = el)}>
                  <span className="hero__box"></span>
                  <span className="hero__keyword">
                    better decisions
                  </span>
              </strong>.
            </span>
          </span>
        </h2>

        <div className="hero__value" ref={(el) => (value = el)}>
          <p className="hero__paragraph">
            <span className="hero__line">
              I am a Product Designer who uses{" "}
              <span className="hero__line">
                <OutboundLink
                  href="https://en.wikipedia.org/wiki/Visual_narrative"
                  target="_blank"
                  rel="noreferrer"
                  className="button button--link"
                >
                  visual storytelling
                </OutboundLink>
              </span>
              {" "}
              to make complex ideas tangible
              {" "}
              <span className="hero__why">
                 for people who use products and people who build them. Check out my showcase. ;)
              </span>
            </span>
          </p>

          <section
            className="featured-carousel"
            aria-label="Featured work"
            aria-roledescription="carousel"
          >
            <div
              className="featured-carousel__slide"
              ref={carouselSlide}
              key={project.path}
              aria-roledescription="slide"
              aria-label={`${activeProject + 1} of ${featuredProjects.length}`}
              aria-live="polite"
            >
              <Link className="featured-carousel__image-link" to={project.path}>
                {project.image ? (
                  <Img className="featured-carousel__image" fluid={project.image} alt={project.title} />
                ) : null}
              </Link>
              <div>
                <p className="featured-carousel__eyebrow">Showcase #{activeProject + 1}/{featuredProjects.length}</p>
                <h3 className="h5 featured-carousel__title">
                  <Link to={project.path}>{project.title}</Link>
                </h3>
                <p className="featured-carousel__desc">{project.description}</p>
                <Link className="button button--link" to={project.path}>
                  View project <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="featured-carousel__controls">
              <div className="featured-carousel__pagination" aria-label="Choose a project">
                {featuredProjects.map((featuredProject, index) => (
                  <button
                    className={`featured-carousel__indicator${index === activeProject ? " featured-carousel__indicator--active" : ""}`}
                    key={featuredProject.path}
                    type="button"
                    aria-label={`Show ${featuredProject.title}`}
                    aria-current={index === activeProject ? "true" : undefined}
                    onClick={() => setActiveProject(index)}
                  />
                ))}
              </div>

              <div className="featured-carousel__arrows">
                <button type="button" aria-label="Previous project" onClick={() => changeProject(-1)}>
                  <span aria-hidden="true">&larr;</span>
                </button>
                <button type="button" aria-label="Next project" onClick={() => changeProject(1)}>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query FeaturedProjectsQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___number] }) {
      edges {
        node {
          frontmatter {
            slug
            title
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
