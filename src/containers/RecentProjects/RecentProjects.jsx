import React from "react";
import "./recentProjects.css";
import { HeadText } from "../../components";
import { FaArrowRight } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="app__r-projects">
      <div className="app__r-projects_head ">
        <div className="app__r-projects_head-text-box">
          <HeadText title="nos projets récents" />
          <p>
            Présentation de nos récents projets et de certains projets que nous
            mettons à la disposition de nos clients.
          </p>
        </div>
        <div className="app__r-projects_head-btn-box">
          <a href="/projects">
            <button
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              type="button"
              className="custom__button"
            >
              Voir plus
              <FaArrowRight />
            </button>
          </a>
        </div>
      </div>
      <div className="app__r-projects_container">
        <a href="/villa1" className="app__r-projects-items item1">
          <span />
          <div>01 </div>
          {/* <p>Villa écologique en brique de terre</p> */}
        </a>
        <a href="/villa2" className="app__r-projects-items item2">
          <span />
          <div>02 </div>
          {/* <p>Villa des coeurs brises</p> */}
        </a>
        <a href="villa3" className="app__r-projects-items item3">
          <span />
          <div>03 </div>
          {/* <p>Villa des coeurs brises</p> */}
        </a>
        <a href="/house" className="app__r-projects-items item4 ">
          <span />
          <div>04 </div>
          {/* <p>Maison plein pieds de type F5</p> */}
        </a>
        <a href="/villa2" className="app__r-projects-items item5">
          <span />
          <div>05 </div>
          {/* <p>Villa des coeurs brises</p> */}
        </a>
        <a href="/apartment" className="app__r-projects-items item6">
          <span />
          <div>06 </div>
          {/* <p>Appartement de type F3</p> */}
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
