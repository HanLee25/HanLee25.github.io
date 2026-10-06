import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";

import IconArrow from "../images/svg-plugin/icon-arrow.svg";

gsap.registerPlugin(ScrollTrigger);

function ProjectList({
  edges,
  activeTag,
  filtered = false,
  openInModal = false,
  truncateExcerpt = false,
  trackTeamLinks = false,
}) {
  const projectList = useRef(null);
  const [sortOrder, setSortOrder] = useState("newest");
  const TeamLink = trackTeamLinks ? OutboundLink : "a";
  const modalState = openInModal ? { modal: true } : undefined;
  const sortedEdges = [...edges].sort((first, second) => {
    const firstDate = first.node.frontmatter.sortDate;
    const secondDate = second.node.frontmatter.sortDate;
    const direction = sortOrder === "newest" ? -1 : 1;

    return direction * firstDate.localeCompare(secondDate);
  });

  useEffect(() => {
    const projects = projectList.current.children;

    gsap.defaults({ ease: "power3.out" });
    gsap.set(projects, { y: 50, opacity: 0.5 });

    const batchTriggers = ScrollTrigger.batch(projects, {
      onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1 }),
      start: "top bottom",
    });

    const stickyHeaderTrigger = ScrollTrigger.create({
      trigger: projectList.current,
      start: "top -40px",
      end: "bottom top",
      endTrigger: ".main",
      toggleClass: {
        targets: ".header__wrapper",
        className: "header__wrapper--floating",
      },
    });

    return () => {
      batchTriggers.forEach((trigger) => trigger.kill());
      stickyHeaderTrigger.kill();
      gsap.killTweensOf(projects);
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [sortOrder]);

  return (
    <div className="project-list">
      <div className="project-list__toolbar">
        <label className="hidden" htmlFor="project-list-sort">
          Sort by
        </label>
        <select
          className="project-list__sort-select"
          id="project-list-sort"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div
        className={`work-list${filtered ? " work-list--filtered" : ""}`}
        ref={projectList}
      >
        {sortedEdges.map((edge) => {
        const { frontmatter } = edge.node;
        const image = frontmatter.cover.childImageSharp.fluid;

        return (
          <article key={frontmatter.slug} className="work-list__item">
            <Link
              to={frontmatter.slug}
              className={`work-list__link${openInModal ? "" : " button button--link"}`}
              state={modalState}
            >
              {openInModal ? (
                <div className="work-list__thumbnail">
                  <Img fluid={image} />
                </div>
              ) : (
                <Img fluid={image} className="work-list__thumbnail" />
              )}
            </Link>

            <div className="work-list__detail">
              <header className="work-list__header">
                <h3 className="work-list__title h4">{frontmatter.title}</h3>

                <small className="work-list__meta">
                  <time dateTime={frontmatter.sortDate}>{frontmatter.date}</time>
                  {` `}at{` `}
                  <TeamLink
                    href={frontmatter.teamUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {frontmatter.team}
                  </TeamLink>
                </small>
              </header>

              <p
                className={`work-list__description${truncateExcerpt ? " paragrahp-truncate" : ""}`}
              >
                {frontmatter.excerpt}
              </p>

              {frontmatter.tags ? (
                <ul className="work-list__tags inline-list">
                  {frontmatter.tags.map((tag) => (
                    <li key={tag + "tag"} className="inline-list__item">
                      <span
                        className={`tag${tag === activeTag ? " tag--active" : ""}`}
                      >
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="flex justify-end mt-4">
                <Link
                  to={frontmatter.slug}
                  className="button button--addon button--link"
                  state={modalState}
                >
                  <span className="button--addon__label">More</span>
                  <span className="button--addon__icon">
                    <IconArrow
                      className="icon icon--xs icon--flipped"
                      aria-label="Open this project"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </article>
        );
        })}
      </div>
    </div>
  );
}

ProjectList.propTypes = {
  edges: PropTypes.array.isRequired,
  activeTag: PropTypes.string,
  filtered: PropTypes.bool,
  openInModal: PropTypes.bool,
  truncateExcerpt: PropTypes.bool,
  trackTeamLinks: PropTypes.bool,
};

export default ProjectList;