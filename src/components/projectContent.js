import React, { useEffect, useRef } from "react";
import Img from "gatsby-image";
import { gsap } from "gsap";
import { OutboundLink } from "gatsby-plugin-google-analytics";

function ProjectContent({ markdownRemark }) {
  const { frontmatter, html } = markdownRemark;
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const projectInfo = content.querySelector(".content-column__side-bar");
    const projectMain = content.querySelector(".content-column__main");
    const introElements = projectInfo.querySelectorAll(
      ".project-intro > *, .project-meta > *"
    );
    const headerElements = projectMain.querySelectorAll(
      ".project-header__title, .project-header__overview"
    );
    const imageBlocks = content.querySelectorAll(
      ".project-content__image--block"
    );
    const dragCleanups = [];

    gsap.from(introElements, {
      duration: 0.5,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.15,
    });

    gsap.from(headerElements, {
      duration: 0.5,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.15,
    });

    imageBlocks.forEach((imageBlock) => {
      const isOverflown =
        imageBlock.scrollHeight > imageBlock.clientHeight ||
        imageBlock.scrollWidth > imageBlock.clientWidth;
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      imageBlock.classList.add(isOverflown ? "is--overflows" : "is--fits");

      const startDrag = (event) => {
        isDragging = true;
        imageBlock.classList.add("is--grabbed");
        startX = event.pageX - imageBlock.offsetLeft;
        scrollLeft = imageBlock.scrollLeft;
      };
      const stopDrag = () => {
        isDragging = false;
        imageBlock.classList.remove("is--grabbed");
      };
      const drag = (event) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.pageX - imageBlock.offsetLeft;
        imageBlock.scrollLeft = scrollLeft - (x - startX) * 3;
      };

      imageBlock.addEventListener("mousedown", startDrag);
      imageBlock.addEventListener("mouseleave", stopDrag);
      imageBlock.addEventListener("mouseup", stopDrag);
      imageBlock.addEventListener("mousemove", drag);
      dragCleanups.push(() => {
        imageBlock.removeEventListener("mousedown", startDrag);
        imageBlock.removeEventListener("mouseleave", stopDrag);
        imageBlock.removeEventListener("mouseup", stopDrag);
        imageBlock.removeEventListener("mousemove", drag);
        imageBlock.classList.remove("is--overflows", "is--fits", "is--grabbed");
      });
    });

    return () => {
      dragCleanups.forEach((cleanup) => cleanup());
      gsap.killTweensOf([...introElements, ...headerElements]);
    };
  }, [markdownRemark]);

  return (
    <div className="content-column" ref={contentRef}>
      <aside className="content-column__side-bar">
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
            <OutboundLink
              href={frontmatter.teamUrl}
              target="_blank"
              rel="noreferrer"
              title={frontmatter.team}
            >
              {frontmatter.team}
            </OutboundLink>
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
          <header
            className={`content-section__header project-header${
              frontmatter.headerFlip === true ? ` project-header--flipped` : ``
            }`}
          >
            <h2 className="project-header__title h1">{frontmatter.title}</h2>

            <p className="project-header__overview">{frontmatter.excerpt}</p>

            <div
              className={`project-header__preview${
                frontmatter.previewLandscape === true
                  ? ` project-header__preview--landscape`
                  : ``
              }`}
            >
              <Img fluid={frontmatter.preview.childImageSharp.fluid} />
            </div>
          </header>
        </section>

        <div className="project" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export default ProjectContent;