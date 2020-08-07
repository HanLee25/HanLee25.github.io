import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tags from "../components/tags";

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const pageTag = tag
  const tagHeader = `Work${totalCount === 1 ? "" : "s"} in '${pageTag}'`

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

      <section className="content-section">
        <header className="content-section__header content-section__header--short">
          <h2 className="h2">{tagHeader}</h2>
        </header>

        <Tags />

        <div className="work-list">
          {edges.map((edge) => {
            const { frontmatter } = edge.node;
            return (
              <article key={frontmatter.slug} className="work-list__item">
                <Link
                  to={frontmatter.slug}
                  className="work-list__link button button--link"
                >
                  <Img
                    fluid={frontmatter.cover.childImageSharp.fluid}
                    className="work-list__thumbnail"
                  />
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

                  <p className="work-list__description">
                    {frontmatter.excerpt}
                  </p>

                  {frontmatter.tags ? (
                    <ul className="inline-list">
                      {frontmatter.tags.map((tag) => (
                        <li key={tag + `tag`} className="inline-list__item">
                          <span
                            className={`tag${
                              tag === pageTag ? ` tag--active` : ``
                            }`}
                          >
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div>
                    <Link
                      to={frontmatter.slug}
                      className="text-sm text-gray-600"
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

TagPage.propTypes = {
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

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { order: ASC, fields: [frontmatter___number] }
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
            number
          }
        }
      }
    }
  }
`

export default TagPage;
