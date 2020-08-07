import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import IconArrow from "../images/svg-plugin/icon-arrow.svg";

function Modal({ children }) {
  gsap.registerPlugin(ScrollTrigger);

  let modalContainer = useRef(null);

  useEffect(() => {
    const modalScroll = modalContainer;
    const projectSection = ".project > * > *";

    gsap.defaults({ ease: "power3.out" });
    gsap.set(projectSection, { duration: 1, y: 50, opacity: 0.5 });

    ScrollTrigger.batch(projectSection, {
      scroller: modalScroll,
      onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1 }),
      start: "top 95%",
    });
  });
  return (
    <div className="modal__wrapper" ref={(el) => (modalContainer = el)}>
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
