import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import IconArrow from "../images/svg-plugin/icon-arrow.svg";

function Modal({ children }) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const modalScroll = ".modal__wrapper";
    const projectSection = ".project > * > *";

    gsap.defaults({ ease: "power3.out" });
    gsap.set(projectSection, { duration: 1, y: 150, opacity: 0.5, scroller: modalScroll });

    ScrollTrigger.batch(projectSection, {
      scroller: modalScroll,
      onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1 }),
      start: "top 95%",
    });
  });
  return (
    <div className="modal__wrapper">
      <Link
        to="/works"
        className="modal__close button button--svg"
        state={{
          noScroll: true,
        }}
      >
        <span className="sr-only">Back</span>
        <IconArrow className="icon" aria-label="Back" />
      </Link>

      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
