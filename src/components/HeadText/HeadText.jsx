import React from "react";
import "./headText.css";

const HeadText = ({ title }) => {
  return (
    <div className="app__headText">
      <h1>{title}</h1>
    </div>
  );
};

export default HeadText;
