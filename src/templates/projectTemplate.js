import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO
        keywords={[
          `product designer`,
          `illustrator`,
          `UI designer`,
          `UX designer`,
        ]}
        title={frontmatter.title}
      />

      <section className="content-section project">
        <h2 className="hero h2">{frontmatter.title}</h2>
        <p>{frontmatter.excerpt}</p>

        <Img fixed={frontmatter.cover.childImageSharp.fixed} />

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        excerpt
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
`;
