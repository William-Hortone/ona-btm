import React from "react";
import "./recentProjects.css";
import { HeadText } from "../../components";

const RecentProjects = () => {
  return (
    <div className="app__r-projects">
      <div className="app__r-projects_head section__paddidng">
        <div className="app__r-projects_head-text-box">
          <HeadText title="nos projets récents" />
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
          <div>01 </div>
          {/* <p>Villa écologique en brique de terre</p> */}
        </a>
        <a href="" className="app__r-projects-items item2">
          <span />
          <div>02 </div>
          {/* <p>Villa des coeurs brises</p> */}
        </a>
        <a href="" className="app__r-projects-items item3">
          <span />
          <div>03 </div>
          {/* <p>Villa des coeurs brises</p> */}
        </a>
        <a href="" className="app__r-projects-items item4 ">
          <span />
          <div>04 </div>
          {/* <p>Maison plein pieds de type F5</p> */}
        </a>
        <a href="" className="app__r-projects-items item5">
          <span />
          <div>05 </div>
          {/* <p>Villa des coeurs brises</p> */}
        </a>
        <a href="" className="app__r-projects-items item6">
          <span />
          <div>06 </div>
          {/* <p>Appartement de type F3</p> */}
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
