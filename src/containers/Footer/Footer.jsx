import React from "react";
import images from "../../constants/images";
import { FaFacebookF } from "react-icons/fa";
// import { FaCaretRight } from " react-icons/fa";
import {
  FaCaretRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

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
              <a
                target="blank"
                className="facebook"
                href="https://www.facebook.com/ONABATIMENTG"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <div className="app__footer-second-box">
          <h3>Nos Services</h3>
          <p>
            <FaCaretRight color="#ff7a3d" />
            Services Travaux
          </p>
          <p>
            <FaCaretRight color="#ff7a3d" />
            Bureau d'études GO
          </p>
          <p>
            <FaCaretRight color="#ff7a3d" />
            Service Clé En Main
          </p>
          <p>
            <FaCaretRight color="#ff7a3d" />
            Conception Architecturale
          </p>
        </div>
        <div className="app__footer-third-box">
          <h3>Contacts</h3>
          <p>
            <FaMapMarkedAlt color="#ff7a3d" /> Nzeng-Ayong / Libreville
          </p>
          <p>
            <FaWhatsapp color="#ff7a3d" />
            +33 695469273
          </p>
          <p>
            <FaPhoneAlt color="#ff7a3d" />
            +241 74382648 / 065150664
          </p>
          <p>
            <FaEnvelope color="#ff7a3d" />
            onabatiment@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Ona Batiment © 2025</p>
        <p>
          <a target="blank" href="https://wan-tech.vercel.app">
            Developed By <span style={{color: "#df6127"}}>  WanTech </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
