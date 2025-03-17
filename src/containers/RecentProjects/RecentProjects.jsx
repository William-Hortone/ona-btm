import React from "react";
import { HeadText, MovingCart } from "../../components";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./recentProjects.css";
import { projectsData1, projectsData2 } from "../../constants/recentProjects";

const RecentProjects = () => {
  return (
    <div className="py-8 bg-secondary app__r-projects">
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

      {/* <div className="app__r-projects_container"></div> */}
      <MovingCart data={projectsData1} direction="left" />
      <MovingCart data={projectsData2} direction="right" />
    </div>
  );
};

export default RecentProjects;
