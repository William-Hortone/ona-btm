import React from "react";
import "./navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  return (
    <div className="app__navbar ">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo img" />
      </div>
      {/* <div className="app__navbar-links"> */}
      <ul className="app__navbar-links">
        <li className="navbar__link">
          <a href="#">Accueil</a>
        </li>
        <li className="navbar__link">
          <a href="#">A propos </a>
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
    // </div>
  );
};

export default Navbar;
