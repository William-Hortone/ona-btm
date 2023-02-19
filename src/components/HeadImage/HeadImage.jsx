import React from "react";
import "./headImage.css";
import { motion as m } from "framer-motion";

const HeadImage = ({ img, title }) => {
  return (
    <div className="app__headImage">
      <img src={img} alt="images of building" />

      <div className="title_box">
        <m.h1
          animate={{ y: "0%" }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {title}
        </m.h1>
      </div>
      <div className="headImage-blur" />
    </div>
  );
};

export default HeadImage;
