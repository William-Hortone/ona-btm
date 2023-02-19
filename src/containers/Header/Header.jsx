import React from "react";
import "./header.css";
import images from "../../constants/images";
import { motion as m } from "framer-motion";
// import { container, item } from "../../components/animation";

const Header = () => {
  return (
    <div className="app__header section__padding">
      <m.div className="app__header-container">
        <div
        // variants={container}
        // initial="hidden"
        // animate="show"
        // className="header_text-container"
        >
          <div className="header_title-box">
            <m.h2>Vision élargie,</m.h2>
          </div>
          <div className="header_title-box">
            <m.h2>Service honnête </m.h2>
          </div>
          <div className="header_title-box">
            <m.h2>et de qualité</m.h2>
          </div>
        </div>
        <p className="p__opensans">
          Our goal then and now is to provide quality on time projects
        </p>
        <div className="app__header-btm-container">
          <a href="/about">
            <button type="button" className="custom__button">
              En Savoir Plus
            </button>
          </a>
          <a href="/contact">
            <button type="button" className="custom__btn">
              Contact
            </button>
          </a>
        </div>
      </m.div>
      <div className="box-blur"></div>
    </div>
  );
};

export default Header;
