import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

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
        <div className="md:w-2/3 md:mr-8">
          <ul>
            {edges.map((edge) => {
              const { frontmatter } = edge.node;
              return (
                <li
                  key={frontmatter.slug}
                >
                  <Link to={frontmatter.slug} className="">
                    {frontmatter.title}
                    <br/>
                    {frontmatter.excerpt}
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </div>
      </section>
    </Layout>
  );
}

export const workQuery = graphql`
         query WorksPageQuery {
           allMarkdownRemark(
             sort: { order: DESC, fields: [frontmatter___date] }
           ) {
             edges {
               node {
                 frontmatter {
                   date
                   slug
                   title
                   excerpt
                 }
               }
             }
           }
         }
       `;

export default WorksPage;
