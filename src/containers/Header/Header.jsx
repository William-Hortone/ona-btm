import React from "react";
import "./header.css";
// import images from "../../constants/images";
import { motion as m } from "framer-motion";
import { container, item } from "../../components/animation";
import { LoadingText } from "../../components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app__header section__padding">
      <div className="app__header-container">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="header_text-container"
        >
          <div className="header_title-box ">
            <m.h2 variants={item}>Vision élargie,</m.h2>
          </div>
          <div className="header_title-box">
            <m.h2 variants={item}>Service honnête </m.h2>
          </div>
          <div className="header_title-box">
            <m.h2 variants={item}>et de qualité</m.h2>
          </div>
        </m.div>
        <p className="p__opensans">
          Notre objectif est de fournir des projets de qualité à temps
        </p>
        <div className="app__header-btm-container">
          <Link to="/about">
            <button type="button" className="custom__button">
              En Savoir Plus
            </button>
          </Link>
          <Link to="/contact">
            <button type="button" className="custom__btn">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <span className="box-blur"></span>
    </div>
  );
};

export default Header;
