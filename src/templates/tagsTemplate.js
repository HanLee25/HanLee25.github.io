import React from "react"
import PropTypes from "prop-types"

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import { kebabCase } from "lodash";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const pageTag = tag
  const tagHeader = `work${totalCount === 1 ? "" : "s"} by "${pageTag}(${totalCount})"`

  return (
    <Layout>
      <SEO
        keywords={[
          `product designer`,
          `illustrator`,
          `UI designer`,
          `UX designer`,
        ]}
        title={tagHeader}
      />

      <section  className="content-section">
        <h2 className="h2">{tagHeader}</h2>

        <Link to="/tags">All tags</Link>
        <Link to="/works">All works</Link>
        
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
                      <time datetime="{frontmatter.date}">
                        {frontmatter.date}
                      </time>
                      {" "}
                      at
                      {" "}
                      <Link
                        to={frontmatter.teamUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {frontmatter.team}
                      </Link>
                    </small>
                  </header>

                  <p className="project-list__description">
                    {frontmatter.excerpt}
                  </p>

                  {frontmatter.tags ? (
                    <ul className="tag-list">
                      {frontmatter.tags.map((tag) => (
                        <li key={tag + `tag`} className="tag-list__item">
                          <Link
                            to={`/tags/${kebabCase(tag)}/`}
                            className={`tag${
                              tag === pageTag ? ` tag--active` : ``
                            }`}
                          >
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

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
`
