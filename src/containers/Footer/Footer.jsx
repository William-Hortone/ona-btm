import React from "react";
import "./footer.css";
import images from "../../constants/images";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="app__footer section__paddsing">
      <div className="app__footer-container">
        <div className="app__footer-first-box">
          <img src={images.logo} alt="logo images" />
          <div>
            <p>
              Natus eget occaecati, lobortis, vestibulum nam eros, risus lacinia
              lacus.Lorem accusantium
            </p>
            <div className="footer-icons">
              <FaFacebookF />
            </div>
          </div>
        </div>
        <div className="app__footer-second-box">
          <h3>Our Services</h3>
          <p>Architecture</p>
          <p>Site Planning</p>
          <p>Landscape Design</p>
        </div>
        <div className="app__footer-third-box">
          <h3>Contact Details</h3>
          <p>125, Central Square,New York</p>
          <p>91 123-456-7890/91</p>
          <p>91 123-456-7890/91</p>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Ona Batiment © 2023</p>
        <p>Developed By William Hortone</p>
      </div>
    </div>
  );
};

export default Footer;
