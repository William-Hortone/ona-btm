import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "./contact.css";
import { Navbar } from "../../containers";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_gwc2cvj", // Replace with your EmailJS Service ID
        "template_hortone",
        // Replace with your EmailJS Template ID
        form.current,
        "ucL7ZCbnHctpnLKBb" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          alert("Message envoyé avec succès !");
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error("Email Error:", error.text);
          alert("Une erreur est survenue. Veuillez réessayer.");
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="app__contact"
    >
      <Navbar />
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
            <div className="text-white">
              <p className="text-white">+33 695469273</p>
              <p className="text-white">+241 74382648 / 065150664</p>
              <p className="text-white">onabatiment@gmail.com</p>
            </div>
            <div>
              <p className="text-white">Nzeng-Ayong / Libreville</p>
            </div>
          </div>
        </div>
        <div className="app__contact-container_right-box">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Nom</label>
            <input className="bg-transparent" type="text" id='name' name="user_name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required />

            <button
              type="submit"
              className="custom__button"
              disabled={isLoading}
            >
              {isLoading ? "Envoi..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
      <div className="contact-copyright">
        <p className="text-white">© Ona Batiment 2025</p>
        <p className="text-white">developed By <a target="blank" className="font-bold text-orange-600" href="https://wan-tech.vercel.app">WanTech</a> </p>
      </div>
      <span className="blur-span" />
    </motion.div>
  );
};

export default Contact;
