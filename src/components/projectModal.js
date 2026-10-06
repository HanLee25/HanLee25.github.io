import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectContent from "./projectContent";

import IconArrow from "../images/svg-plugin/icon-arrow.svg";

gsap.registerPlugin(ScrollTrigger);

function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const scrollRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const scrollContainer = scrollRef.current;
    const projectSections = scrollContainer.querySelectorAll(".project > * > *");
    gsap.defaults({ ease: "power3.out" });
    gsap.set(projectSections, { duration: 1, y: 50, opacity: 0.5 });
    const triggers = ScrollTrigger.batch(projectSections, {
      scroller: scrollContainer,
      onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1 }),
      start: "top 95%",
    });

    document.body.classList.add("modal-body--opened");
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-body--opened");
      document.body.style.overflow = previousOverflow;
      triggers.forEach((trigger) => trigger.kill());
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    };
  }, [onClose]);

  const closeOnBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div className="showcase-modal modal__overlay" onMouseDown={closeOnBackdrop}>
      <div
        className="modal__content"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.frontmatter.title}
      >
        <div className="modal__wrapper" ref={scrollRef}>
          <button
            className="modal__close button button--svg"
            type="button"
            aria-label="Close project"
            ref={closeButtonRef}
            onClick={onClose}
          >
            <span className="sr-only">Back</span>
            <IconArrow className="icon" aria-label="Back" />
          </button>

          <ProjectContent
            key={project.frontmatter.slug}
            markdownRemark={project}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;