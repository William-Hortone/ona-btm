import React from "react";
import "./footer.css";
import images from "../../constants/images";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="app__footer ">
      <div className="app__footer-container">
        <div className="app__footer-first-box">
          <img src={images.logo} alt="logo images" />
          <div>
            <p>
              Entreprise générale de bâtiment , basée à Paris et au Gabon dans
              la province de l’Estuaire.
            </p>
            <div className="footer-icons">
              <FaFacebookF />
            </div>
          </div>
        </div>
        <div className="app__footer-second-box">
          <h3>Nos Services</h3>
          <p>Architecture</p>
          <p>Site Planning</p>
          <p>Landscape Design</p>
        </div>
        <div className="app__footer-third-box">
          <h3>Contacts</h3>
          <p>Paris,France / Libreville, Gabon</p>
          <p>+33 695469273</p>
          <p>+241 077761684</p>
          <p>onabatiment@gmail.com</p>
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
