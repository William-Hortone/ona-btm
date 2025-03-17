import React from "react";
import "./cardImage.css";

const CardImage = ({ img }) => {
  return (
    <div className="app__cardImage">
      <img src={img} alt="building images" />
      <div></div>
    </div>
  );
};

export default CardImage;
