import React from "react";
import "./cardImage.css";
import images from "../../constants/images";
// import { images } from "../../constants/images";

const CardImage = () => {
  return (
    <div className="app__cardImage">
      <img src={images.building1} alt="building images" />
      <div></div>
    </div>
  );
};

export default CardImage;
