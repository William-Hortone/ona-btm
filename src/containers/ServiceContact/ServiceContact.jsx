import React, { useEffect } from "react";
import "./serviceContact.css";
import images from "../../constants/images";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceContact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__serviceContact">
      <div className="app__serviceContact-left-box">
        <h2>
          Vous souhaitez travailler avec nous? <br /> Contactez-nous pour
          entamer une conversation.
        </h2>
        <a href="/contact" data-aos="fade-up" data-aos-duration="3000">
          <span className="span"> Contactez-nous</span>
          {/* <span className="span" /> */}
        </a>
      </div>
      <div className="app__serviceContact-right-box">
        <div className="app__serviceContact-right-box_img1">
          <img src={images.place1} alt="images office" />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-once="true"
          className="app__serviceContact-right-box_img2"
        >
          <img src={images.place2} alt="images office" />
        </div>
      </div>
    </div>
  );
};

export default ServiceContact;
