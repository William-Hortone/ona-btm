import React from "react";
import "./headImage.css";

const HeadImage = ({ img, title }) => {
  return (
    <div className="app__headImage">
      <img src={img} alt="images of building" />
      <span>{title}</span>
      <div />
    </div>
  );
};

export default HeadImage;
