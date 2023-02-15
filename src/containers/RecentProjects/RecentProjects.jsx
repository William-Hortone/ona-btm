import React from "react";
import "./recentProjects.css";
import { HeadText } from "../../components";

const RecentProjects = () => {
  return (
    <div className="app__r-projects">
      <div className="app__r-projects_head">
        <div className="app__r-projects_head-text-box">
          <HeadText title="Our Recent Projects" />
          <p>
            You can use these sections to highlight the features of heading. Use
            these paragraphs to focus on the topic you want. Make sure you keep
            it short and attractive
          </p>
        </div>
        <div className="app__r-projects_head-btn-box">
          <button type="button" className="custom__button">
            Voir plus
          </button>
        </div>
      </div>
      <div className="app__r-projects_container">
        <a href="" className="app__r-projects-items item1">
          <span />
        </a>
        <a href="" className="app__r-projects-items item2">
          <span />
        </a>
        <a href="" className="app__r-projects-items item3">
          <span />
        </a>
        <a href="" className="app__r-projects-items item4 ">
          <span />
        </a>
        <a href="" className="app__r-projects-items item5">
          <span />
        </a>
        <a href="" className="app__r-projects-items item6">
          <span />
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
