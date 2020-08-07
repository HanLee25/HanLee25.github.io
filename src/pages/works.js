import React, { useRef, useEffect } from "react";
import { Link, graphql } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from "gatsby-image";


import Layout from "../components/layout";
import SEO from "../components/seo";
import Tags from "../components/tags";

function WorksPage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { edges } = data.allMarkdownRemark;

  gsap.registerPlugin(ScrollTrigger);

  let projectList = useRef(null);

  useEffect(() => {
    const project = projectList.childNodes;

    gsap.defaults({ ease: "power3.out" });
    gsap.set(project, { y: 50, opacity: 0.5 });

    ScrollTrigger.batch(project, {
      onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1 }),
      start: "top bottom",
    });
  });
  return (
    <Layout>
      <SEO
        keywords={[
          `product designer`,
          `illustrator`,
          `UI designer`,
          `UX designer`,
        ]}
        title="Works"
      />

      <section className="content-section">
        <header className="content-section__header">
          <h2 className="h2">Works</h2>
        </header>

        <Tags />

        <div className="work-list" ref={(el) => (projectList = el)}>
          {edges.map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <article key={frontmatter.slug} className="work-list__item">
                <Link
                  to={frontmatter.slug}
                  className="work-list__link"
                  state={{
                    modal: true,
                  }}
                >
                  <div className="work-list__thumbnail">
                    <Img fluid={frontmatter.cover.childImageSharp.fluid} />
                  </div>
                </Link>

                <div className="work-list__detail">
                  <header className="work-list__header">
                    <h3 className="work-list__title h4">
                      {frontmatter.title}
                    </h3>

                    <small className="work-list__meta">
                      <time dateTime={frontmatter.date}>
                        {frontmatter.date}
                      </time>
                      {` `}
                      at
                      {` `}
                      <a
                        href={frontmatter.teamUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {frontmatter.team}
                      </a>
                    </small>
                  </header>

                  <p className="work-list__description paragrahp-truncate">
                    {frontmatter.excerpt}
                  </p>

                  {frontmatter.tags ? (
                    <ul className="inline-list">
                      {frontmatter.tags.map((tag) => (
                        <li key={tag + `tag`} className="inline-list__item">
                          <span className="tag">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div>
                    <Link
                      to={frontmatter.slug}
                      className="text-sm text-gray-600"
                      state={{
                        modal: true,
                      }}
                    >
                      Read more &gt;
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export const workQuery = graphql`
  query WorksPageQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___number] }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMM, YYYY")
            slug
            title
            team
            teamUrl
            excerpt
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            number
          }
        }
      }
    }
  }
`;

export default WorksPage;
