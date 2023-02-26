import React from "react";
import "./recentProjects.css";
import { HeadText } from "../../components";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link to="/projects">
            <button
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              type="button"
              className="custom__button"
            >
              Voir plus
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="app__r-projects_container">
        <Link to="/villa1" className="app__r-projects-items item1">
          <span />
          <div>01 </div>
        </Link>
        <Link to="/villa2" className="app__r-projects-items item2">
          <span />
          <div>02 </div>
        </Link>
        <Link to="villa3" className="app__r-projects-items item3">
          <span />
          <div>03 </div>
        </Link>
        <Link to="/house" className="app__r-projects-items item4 ">
          <span />
          <div>04 </div>
        </Link>
        <Link to="/villa2" className="app__r-projects-items item5">
          <span />
          <div>05 </div>
        </Link>
        <Link to="/apartment" className="app__r-projects-items item6">
          <span />
          <div>06 </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
