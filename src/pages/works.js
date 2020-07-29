import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

function WorksPage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { edges } = data.allMarkdownRemark;
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

        <div className="project-list">
          {edges.map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <article key={frontmatter.slug} className="project-list__item">
                <Link to={frontmatter.slug} className="button button--link">
                  <Img
                    fluid={frontmatter.cover.childImageSharp.fluid}
                    className="project-list__thumbnail"
                  />
                </Link>

                <div className="project-list__detail">
                  <header className="project-list__header">
                    <h3 className="project-list__title h4">
                      {frontmatter.title}
                    </h3>

                    <small className="project-list__meta">
                      <time dateTime="{frontmatter.date}">
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

                  <p className="project-list__description">
                    {frontmatter.excerpt}
                  </p>

                  {frontmatter.tags ? (
                    <ul className="tag-list">
                      {frontmatter.tags.map((tag) => (
                        <li key={tag + `tag`} className="tag-list__item">
                          <Link to={`/tags/${kebabCase(tag)}/`} className="tag">
                            {tag}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div>
                    <Link
                      to={frontmatter.slug}
                      className="text-sm text-gray-600"
                    >
                      Read more
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
      sort: { order: ASC, fields: [frontmatter___date] }
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
                fluid {
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

export default WorksPage;
