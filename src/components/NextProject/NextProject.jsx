import React from "react";
import { images } from "../../constants";
import "./nextProject.css";
import { data } from "../../constants";

const NextProject = () => {
  return (
    <div className="app__nextProject">
      <div className="container">
        <a href="#" className="content-slider first">
          <p>Autre Projet</p>
          <div className="slider_container">
            <div className="wrapper">
              <span className="span_text">Will Fashion</span>
              <div className="span_image">
                <img src={images.villa5} alt="" />
              </div>
              <span className="span_text">Nous appartient</span>
              <div className="span_image">
                <img src={images.villa1} alt="" />
              </div>
            </div>
            <div className="wrapper">
              <span className="span_text">Will Fashion</span>
              <div className="span_image">
                <img src={images.villa5} alt="" />
              </div>
              <span className="span_text">Nous appartient</span>
              <div className="span_image">
                <img src={images.villa1} alt="" />
              </div>
            </div>

            {/* <div className="wrapper">
              <span className="span_text">Will Fashion</span>
              <div className="span_image">
                <img src={images.villa5} alt="" />
              </div>
              <span className="span_text">Nous appartient </span>
              <div className="span_image">
                <img src={images.villa5} alt="" />
              </div>
            </div> */}
          </div>
        </a>
        <a href="#" className="content-slider first">
          <p>Nous Contacter</p>
          <div className="slider_container">
            <div className="wrapper">
              <span className="span_text">Will Fashion</span>
              <div className="span_image">
                <img src={images.villa5} alt="" />
              </div>
              <span className="span_text">Nous appartient</span>
              <div className="span_image">
                <img src={images.villa1} alt="" />
              </div>
            </div>
            <div className="wrapper">
              <span className="span_text">Will Fashion</span>
              <div className="span_image">
                <img src={images.villa5} alt="" />
              </div>
              <span className="span_text">Nous appartient</span>
              <div className="span_image">
                <img src={images.villa1} alt="" />
              </div>
            </div>

            {/* <div className="wrapper">
              <span className="span_text">Will Fashion</span>
              <div className="span_image">
                <img src={images.villa5} alt="" />
              </div>
              <span className="span_text">Nous appartient </span>
              <div className="span_image">
                <img src={images.villa5} alt="" />
              </div>
            </div> */}
          </div>
        </a>
      </div>
      {/* <div className="app__nextProject-first-box"></div> */}
      <div className="app__nextProject-second-box">
        <p>Ona Batiment@2023 </p>
        <p>By William Hortone </p>
      </div>
    </div>
  );
};

export default NextProject;
