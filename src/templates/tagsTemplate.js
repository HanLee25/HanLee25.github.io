import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tags from "../components/tags";
import ProjectList from "../components/projectList";

export const Head = ({ pageContext, data }) => (
  <SEO
    keywords={[`product designer`, `illustrator`, `UI designer`, `UX designer`]}
    title={`Work${data.allMarkdownRemark.totalCount === 1 ? "" : "s"} in '${pageContext.tag}'`}
  />
);

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `Work${totalCount === 1 ? "" : "s"} in '${tag}'`;
  return (
    <Layout>
      <section className="content-section">
        <header className="content-section__header content-section__header--short">
          <h2 className="h2">{tagHeader}</h2>
        </header>

        <Tags />

        <ProjectList edges={edges} activeTag={tag} filtered />
      </section>
    </Layout>
  );
};

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
};

export const pageQuery = graphql`query ($tag: String) {
  allMarkdownRemark(
    limit: 2000
    sort: {frontmatter: {number: ASC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
  ) {
    totalCount
    edges {
      node {
        frontmatter {
          date(formatString: "MMM, YYYY")
          sortDate: date(formatString: "YYYY-MM-DD")
          slug
          title
          team
          teamUrl
          excerpt
          tags
          cover {
            childImageSharp {
              gatsbyImageData(width: 600, quality: 100)
            }
          }
          number
        }
      }
    }
  }
}`;

export default TagPage;
