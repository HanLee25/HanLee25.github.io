import React, { useEffect, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
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

      if (isOverflown) {
        const wrapper = document.createElement("div");
        wrapper.className = "image-block-nav";
        imageBlock.parentNode.insertBefore(wrapper, imageBlock);
        wrapper.appendChild(imageBlock);

        const makeButton = (dir) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = `image-block-nav__button image-block-nav__button--${dir}`;
          button.setAttribute("aria-label", dir === "prev" ? "Scroll left" : "Scroll right");
          button.innerHTML = dir === "prev" ? "&larr;" : "&rarr;";
          button.addEventListener("click", () => {
            imageBlock.scrollBy({
              left: (dir === "prev" ? -1 : 1) * imageBlock.clientWidth * 0.6,
              behavior: "smooth",
            });
          });
          wrapper.appendChild(button);
          return button;
        };
        const prev = makeButton("prev");
        const next = makeButton("next");

        const updateArrows = () => {
          const max = imageBlock.scrollWidth - imageBlock.clientWidth;
          const canPrev = imageBlock.scrollLeft > 4;
          const canNext = imageBlock.scrollLeft < max - 4;
          prev.classList.toggle("is--visible", canPrev);
          next.classList.toggle("is--visible", canNext);
          imageBlock.classList.toggle("is--clipped-start", canPrev);
          imageBlock.classList.toggle("is--clipped-end", canNext);
        };
        updateArrows();
        imageBlock.addEventListener("scroll", updateArrows, { passive: true });
        window.addEventListener("resize", updateArrows);
        dragCleanups.push(() => {
          imageBlock.removeEventListener("scroll", updateArrows);
          window.removeEventListener("resize", updateArrows);
          if (wrapper.parentNode) {
            wrapper.parentNode.insertBefore(imageBlock, wrapper);
            wrapper.remove();
          }
        });
      }

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
        imageBlock.classList.remove(
          "is--overflows",
          "is--fits",
          "is--grabbed",
          "is--clipped-start",
          "is--clipped-end"
        );
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
            <GatsbyImage
              image={frontmatter.cover.childImageSharp.gatsbyImageData}
              alt={frontmatter.title}
            />
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

            <div>
                <p className="project-header__overview">{frontmatter.excerpt}</p>

                {frontmatter.impacts?.length ? (
                <ul className="inline-list">
                    {frontmatter.impacts.map((impact) => (
                    <li key={impact} className="inline-list__item">
                        <span className="tag tag--highlight">{impact}</span>
                    </li>
                    ))}
                </ul>
                ) : null}
            </div>

            <div
              className={`project-header__preview${
                frontmatter.previewLandscape === true
                  ? ` project-header__preview--landscape`
                  : ``
              }`}
            >
              <GatsbyImage
                image={frontmatter.preview.childImageSharp.gatsbyImageData}
                alt=""
              />
            </div>
          </header>
        </section>

        <div className="project" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export default ProjectContent;