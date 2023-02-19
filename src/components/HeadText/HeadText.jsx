import React from "react";
import "./headText.css";
import { motion as m } from "framer-motion";

const HeadText = ({ title }) => {
  return (
    <div className="app__headText">
      <div className="app__headText-title">
        <m.h1
          animate={{ y: "0%" }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.9, duration: 0.9 }}
        >
          {title}
        </m.h1>
      </div>
    </div>
  );
};

export default HeadText;
