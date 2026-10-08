import React from "react";
import { graphql } from "gatsby";

import Modal from "../components/modal";
import ProjectContent from "../components/projectContent";

export default function Template({ data }) {
  const { markdownRemark } = data;

  return (
    <Modal>
      <ProjectContent markdownRemark={markdownRemark} />
    </Modal>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM, YYYY")
        slug
        title
        tags
        impacts
        excerpt
        team
        teamUrl
        role
        industry
        headerFlip
        previewLandscape
        cover {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        preview {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
