import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tags from "../components/tags";
import ProjectList from "../components/projectList";

export const Head = () => (
  <SEO
    keywords={[`product designer`, `illustrator`, `UI designer`, `UX designer`]}
    title="Works"
  />
);

function WorksPage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <section className="content-section">
        <header className="content-section__header">
          <h2 className="h2">Works</h2>
        </header>

        <Tags />

        <ProjectList
          edges={edges}
          openInModal
          truncateExcerpt
          trackTeamLinks
        />
      </section>
    </Layout>
  );
}

export const workQuery = graphql`query WorksPageQuery {
  allMarkdownRemark(sort: {frontmatter: {number: ASC}}) {
    edges {
      node {
        html
        frontmatter {
          date(formatString: "MMM, YYYY")
          sortDate: date(formatString: "YYYY-MM-DD")
          slug
          title
          team
          teamUrl
          excerpt
          impacts
          role
          industry
          tags
          headerFlip
          previewLandscape
          cover {
            childImageSharp {
              gatsbyImageData(width: 600, quality: 100)
            }
          }
          preview {
            childImageSharp {
              gatsbyImageData(width: 800, quality: 100)
            }
          }
          number
        }
      }
    }
  }
}`;

export default WorksPage;
