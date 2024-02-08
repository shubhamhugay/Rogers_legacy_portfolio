import React from "react";
import ProjectBox from "./ProjectBox";

import QuatidianStore from "../images/QuatidianStore.png";
import BingersHub from "../images/BingersHub.png";
import visualizationDashboard from "../images/visualizationDashboard.png";
const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={QuatidianStore}
          projectName="quatidianStore"
        />
        <ProjectBox projectPhoto={BingersHub} projectName="bingershub" />
        <ProjectBox
          projectPhoto={visualizationDashboard}
          projectName="VisualizationDashBoard"
        />
      </div>
    </div>
  );
};

export default Projects;
