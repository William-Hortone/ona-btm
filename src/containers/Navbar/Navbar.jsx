// import React from "react";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBeer, FaHome } from "react-icons/fa";
import "./navbar.css";

import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar ">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo img" />
      </div>
      <div className="app__navbar-links-container">
        <ul className="app__navbar-links">
          <li className="navbar__link">
            <Link to="/">Accueil</Link>
          </li>
          <li className="navbar__link">
            <Link to="/about"> A propos </Link>
          </li>
          <li className="navbar__link">
            <Link to="/services">Services</Link>
          </li>
          <li className="navbar__link">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navbar__link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="app__navbar-smallScreen">
        <FaBars
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallScreen_overlay slide-bottom">
            <div className="smallSreen-headLine">
              <img src={images.logo} alt="logo img" />
              <FaHome
                color="#fff"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />
            </div>
            <ul className="app__navbar-smallScreen-links">
              <li className="navbar__link">
                <Link to="/">Accueil</Link>
              </li>
              <li className="navbar__link">
                <Link to="/about"> A propos </Link>
              </li>
              <li className="navbar__link">
                <Link to="/services">Services</Link>
              </li>
              <li className="navbar__link">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="navbar__link">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
