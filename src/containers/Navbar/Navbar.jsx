// import React from "react";
import React, { Component, useState } from "react";
import "./navbar.css";
import images from "../../constants/images";
import { FaBars, FaBeer, FaHome } from "react-icons/fa";

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
            <a href="#">Accueil</a>
          </li>
          <li className="navbar__link">
            <a href="#"> A propos </a>
          </li>
          <li className="navbar__link">
            <a href="#">Services</a>
          </li>
          <li className="navbar__link">
            <a href="#">Projects</a>
          </li>
          <li className="navbar__link">
            <a href="#">Contact</a>
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
                <a href="">Accueil</a>
              </li>
              <li className="navbar__link">
                <a href=""> A propos </a>
              </li>
              <li className="navbar__link">
                <a href="">Services</a>
              </li>
              <li className="navbar__link">
                <a href="">Projects</a>
              </li>
              <li className="navbar__link">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
