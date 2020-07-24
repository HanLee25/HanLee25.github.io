import React from "react"
import PropTypes from "prop-types"

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} project${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

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
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.frontmatter;
            const { title } = node.frontmatter;
            const { cover } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={slug}>
                  <Img fixed={cover.childImageSharp.fixed} />
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to="/tags">All tags</Link>
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            cover {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
