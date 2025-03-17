import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ Scale: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="app__contact"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_left-box">
          <div className="contact-title-box">
            <motion.h2
              animate={{ y: "0%" }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Contactez-Nous
            </motion.h2>
          </div>
          <div className="contact_section-infos">
            <div>
              <p>+33 695469273</p>
              <p>+241 74382648 / 065150664</p>
              <p>onabatiment@gmail.com</p>
            </div>
            <div>
              <p> Nzeng-Ayong / Libreville</p>
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
      <span className="blur-span" />
    </motion.div>
  );
};

export default Contact;
