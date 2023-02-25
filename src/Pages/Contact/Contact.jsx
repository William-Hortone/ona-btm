import React, { useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import emailjs from "@emailjs/browser";
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

  // const routeVariants = {
  //   hidden: {
  //     opacity: 0,
  //     x: -100,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   exit: {
  //     opacity: 0,
  //     x: 100,
  //   },
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86h9uwu",
        "template_meb9jv8",
        // form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      // initial="hidden"
      // animate="visible"
      // exit="exit"
      // variants={routeVariants}
      // transition={{ duration: 0.5 }}
      className="app__contact"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_left-box">
          <h2>Contactez-Nous</h2>
          <div className="contact_section-infos">
            <div>
              <p>+33 695469273</p>
              <p>+241 077761684</p>
              <p>onabatiment@gmail.com</p>
            </div>
            <div>
              <p>Paris / France</p>
              <p>Libreville / Gabon</p>
            </div>
          </div>
        </div>
        <div className="app__contact-container_right-box">
          <form onSubmit={sendEmail}>
            <label id="name">Nom</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="email">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="message">Message</label>
            <textarea
              value={message}
              name="email"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="custom__buttocn">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div className="contact-copyright">
        <p>© Ona Batiment 2023</p>
        <p>By William Hortone</p>
      </div>
      <div className="blur-span"></div>
      {/* <div className="app__contact-container">
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
              <form onSubmit={sendEmail}>
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
                    <FaPhoneAlt style={{ color: "#FF7A3D" }} />
                  </span>
                  <div className="info-contact_text">
                    <h3>Telephones</h3>
                    <p>+33 695469273</p>
                    <p>+241 077761684</p>
                  </div>
                </div>
                <div className="info-contact">
                  <span>
                    <FaMapMarkedAlt style={{ color: "#FF7A3D" }} />
                  </span>
                  <div className="info-contact_text">
                    <h3>Nos Emplacements</h3>
                    <p>Paris,France</p>
                    <p>Libreville, Gabon</p>
                  </div>
                </div>
                <div className="info-contact">
                  <span>
                    <FaEnvelope style={{ color: "#FF7A3D" }} />
                  </span>
                  <div className="info-contact_text">
                    <h3>Notre Email</h3>
                    <p>onabatiment@gmail.com</p>
                  </div>
                </div>
                <div className="info-contact">
                  <span>
                    <FaRegCalendarAlt style={{ color: "#FF7A3D" }} />
                  </span>
                  <div className="info-contact_text">
                    <h3>Nos horaires</h3>
                    <p>Lun-Ven 9H à 17H</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Contact;
