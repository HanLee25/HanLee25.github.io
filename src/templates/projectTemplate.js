import React, { useRef, useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { gsap } from "gsap";

import Modal from "../components/modal";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  gsap.config({
    nullTargetWarn: false,
  });

  let projectWrapper = useRef(null);

  useEffect(() => {
    const projectIntro = projectWrapper.firstElementChild.children[0];
    const projectMeta = projectIntro.nextSibling.childNodes;

    gsap.from([projectIntro, projectMeta], {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.25,
      delay: 0.5,
    });

    const projectTitle =
      projectWrapper.lastElementChild.children[0].children[0].childNodes;

    gsap.from(projectTitle, {
      duration: 0.5,
      y: 100,
      ease: "power3.out",
      stagger: 0.25,
    });
  })
  return (
    <Modal>
      <div className="content-column" ref={(el) => (projectWrapper = el)}>
        <aside className="content-column__side-bar">
          <div className="project-intro">
            <Img
              fixed={frontmatter.cover.childImageSharp.fixed}
              className="project-intro__thumbnail"
            />

            <span className="project-intro__title">{frontmatter.title}</span>
          </div>

          <dl className="project-meta">
            <dt className="project-meta__title">Team</dt>
            <dd>
              <a
                href="{frontmatter.teamUrl}"
                target="_blank"
                title="{frontmatter.team}"
              >
                {frontmatter.team}
              </a>
            </dd>

            <dt className="project-meta__title">Industry</dt>
            <dd>{frontmatter.industry}</dd>

            <dt className="project-meta__title">Role</dt>
            <dd>{frontmatter.role}</dd>

            <dt className="project-meta__title">Skills</dt>
            <dd>
              {frontmatter.tags ? (
                <ul className="inline-list">
                  {frontmatter.tags.map((tag) => (
                    <li key={tag + `tag`} className="inline-list__item">
                      <span className="tag">{tag}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </dd>
          </dl>
        </aside>

        <div className="content-column__main">
          <section className="content-section">
            <header className="content-section__header project-header">
              <h2 className="project-header__title h1">{frontmatter.title}</h2>

              <p className="project-header__overview">{frontmatter.excerpt}</p>
            </header>
          </section>

          <div
            className="project"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </div>
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
        excerpt
        team
        teamUrl
        role
        industry
        cover {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
