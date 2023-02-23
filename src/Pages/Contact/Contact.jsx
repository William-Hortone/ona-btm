import React, { useState } from "react";
import { motion as m } from "framer-motion";
import images from "../../constants/images";
import { HeadImage, HeadText } from "../../components";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="app__contact">
      <HeadImage title="Contact" img={images.building9} />
      <div className="app__contact-container">
        <div className="app__contact-container_title">
          <HeadText title="Nous joindre" />
          <p>
            Add a couple of lines that tell users how easily they can get in
            touch with you. People prefer services where they can contact
            providers right away.
          </p>
          <div className="app__contact-container-boxes">
            <div className="app__contact-container_left-box">
              <h2>Nous Envoyer Un Message</h2>
              {/* <form action="">
                <input type="text" placeholder="Nom" required />
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Objet" required />
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </form> */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  placeholder="Nom"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  value={email}
                  placeholder="Adresse email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  value={message}
                  placeholder="Votre message"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="custom__button">
                  Envoyer
                </button>
              </form>
            </div>
            <div className="app__contact-container_right-box">
              <h2> Infos Contacts </h2>
              <div className="info-contact_boxes">
                <div className="info-contact">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <div className="info-contact_text">
                    <h3>Telephone</h3>
                    <p>+33 695469273</p>
                    <p>+241 077761684</p>
                  </div>
                </div>
                <div className="info-contact">
                  <span>
                    <FaMapMarkedAlt />
                  </span>
                  <div className="info-contact_text">
                    <h3>Nos Emplacements</h3>
                    <p>Paris,France</p>
                    <p>Libreville, Gabon</p>
                  </div>
                </div>
                <div className="info-contact">
                  <span>
                    <FaEnvelope />
                  </span>
                  <div className="info-contact_text">
                    <h3>Notre Email</h3>
                    <p>onabatiment@gmail.com</p>
                  </div>
                </div>
                <div className="info-contact">
                  <span>
                    <FaRegCalendarAlt />
                  </span>
                  <div className="info-contact_text">
                    <h3>Telehone</h3>
                    <p>Lun-Ven 9H à 17H</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
