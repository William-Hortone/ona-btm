import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./nextProject.css";

const NextProject = ({
  nextProjectImg1,
  nextProjectImg2,
  nextProjectTitle1,
  nextProjectTitle2,
  nextProjectLink,
}) => {
  return (
    <div className="app__nextProject">
      <div className="container">
        <Link to={nextProjectLink} className="content-slider first">
          <p>Autre Projet</p>
          <div className="slider_container">
            <div className="wrapper">
              <span>{nextProjectTitle1}</span>
              <div className="div_image">
                <img src={nextProjectImg1} alt="images of house" />
              </div>
              <span>{nextProjectTitle2}</span>
              <div className="div_image">
                <img src={nextProjectImg2} alt="images of house" />
              </div>
            </div>
            <div className="wrapper">
              <span>{nextProjectTitle1}</span>
              <div className="div_image">
                <img src={nextProjectImg1} alt="images of house" />
              </div>
              <span>{nextProjectTitle2}</span>
              <div className="div_image">
                <img src={nextProjectImg2} alt="images of house" />
              </div>
            </div>
          </div>
        </Link>
        <Link to="/contact" className="content-slider">
          <p>Nous Contacter</p>
          <div className="slider_container">
            <div className="wrapper">
              <span>Vous souhaitez</span>
              <div className="div_image">
                <img src={images.place2} alt="photo of restaurant" />
              </div>
              <span>travailler avec nous?</span>
              <div className="div_image">
                <img src={images.place3} alt="photo of restaurant" />
              </div>
              <span>Contactez-nous</span>
              <div className="div_image">
                <img src={images.place1} alt="photo of restaurant" />
              </div>
            </div>
            <div className="wrapper">
              <span>Vous souhaitez</span>
              <div className="div_image">
                <img src={images.place2} alt="photo of restaurant" />
              </div>
              <span>travailler avec nous?</span>
              <div className="div_image">
                <img src={images.place3} alt="photo of restaurant" />
              </div>
              <span>Contactez-nous</span>
              <div className="div_image">
                <img src={images.place1} alt="photo of restaurant" />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="app__nextProject-second-box">
        <p>Ona Batiment@2023 </p>
        <p>By William Hortone </p>
      </div>
    </div>
  );
};

export default NextProject;
