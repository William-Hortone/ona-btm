import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import "./navbar.css";

import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#FF7A3D" : "white",
    };
  };

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo img" />
      </div>
      <div className="app__navbar-links-container">
        <ul className="app__navbar-links">
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/">
              Accueil
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/about">
              A propos
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/services">
              Services
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/contact">
              Contact
            </NavLink>
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
              <FaTimes
                color="#fff"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />
            </div>
            <ul className="app__navbar-smallScreen-links">
              <li className="navbar__link">
                <a href="/">Accueil</a>
              </li>
              <li className="navbar__link">
                <a href="/about"> A propos </a>
              </li>
              <li className="navbar__link">
                <a href="/services">Services</a>
              </li>
              <li className="navbar__link">
                <a href="/projects">Projects</a>
              </li>
              <li className="navbar__link">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
