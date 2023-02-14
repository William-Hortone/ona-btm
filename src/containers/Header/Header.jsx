import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="app__header section__padding">
      <div className="app__header-container">
        <h1>Vision élargie, Service honnête et de qualité</h1>
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
      </div>
    </div>
  );
};

export default Header;
