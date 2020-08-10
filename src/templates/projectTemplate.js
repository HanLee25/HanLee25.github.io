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

  let projectInfo = useRef(null);
  let projectContent = useRef(null);

  useEffect(() => {
    const projectIntro = projectInfo.firstElementChild.childNodes;
    const projectMeta = projectInfo.firstElementChild.nextSibling.childNodes;

    gsap.from(projectIntro, {
      duration: 0.5,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.25,
    });

    gsap.from(projectMeta, {
      duration: 0.25,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.1,
      delay: 0.35,
    });

    const projectTitle =
      projectContent.firstElementChild.children[0].childNodes;

    gsap.from(projectTitle, {
      duration: 0.5,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.25,
    });

    const imgBlocks = document.querySelectorAll('.project-content__image--block');

    function isOverflown(element) {
      return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

    imgBlocks.forEach(imgBlock => imgBlock.classList.add(isOverflown(imgBlock) ? 'is--overflows' : 'is--fits'));

    let isDown = false;
    let startX;
    let scrollLeft;

    imgBlocks.forEach(imgBlock => imgBlock.addEventListener('mousedown', (e) => {
      isDown = true;
      imgBlock.classList.add('is--grabbed');
      startX = e.pageX - imgBlock.offsetLeft;
      scrollLeft = imgBlock.scrollLeft;
    }));
    imgBlocks.forEach(imgBlock => imgBlock.addEventListener('mouseleave', () => {
      isDown = false;
      imgBlock.classList.remove('is--grabbed');
    }));
    imgBlocks.forEach(imgBlock => imgBlock.addEventListener('mouseup', () => {
      isDown = false;
      imgBlock.classList.remove('is--grabbed');
    }));
    imgBlocks.forEach(imgBlock => imgBlock.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - imgBlock.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      imgBlock.scrollLeft = scrollLeft - walk;
    }));
  })
  return (
    <Modal>
      <div className="content-column">
        <aside
          className="content-column__side-bar"
          ref={(el) => (projectInfo = el)}
        >
          <div className="project-intro">
            <div className="project-intro__thumbnail">
              <Img fluid={frontmatter.cover.childImageSharp.fluid} />
            </div>

            <span className="project-intro__title">{frontmatter.title}</span>
          </div>

          <dl
            className={`project-meta${
              frontmatter.headerFlip === true ? ` project-meta--pushed` : ``
            }`}
          >
            <dt className="project-meta__title">Team</dt>
            <dd>
              <a
                href={frontmatter.teamUrl}
                target="_blank"
                rel="noreferrer"
                title={frontmatter.team}
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

        <div
          className="content-column__main"
          ref={(el) => (projectContent = el)}
        >
          <section className="content-section">
            <header
              className={`content-section__header project-header${
                frontmatter.headerFlip === true
                  ? ` project-header--flipped`
                  : ``
              }`}
            >
              <h2 className="project-header__title h1">{frontmatter.title}</h2>

              <p className="project-header__overview">{frontmatter.excerpt}</p>

              <div className={`project-header__preview${
              frontmatter.previewLandscape === true ? ` project-header__preview--landscape` : ``
            }`}>
                <Img fluid={frontmatter.preview.childImageSharp.fluid} />
              </div>
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
