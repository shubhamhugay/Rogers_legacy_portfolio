import React from "react";
import { FaGithub } from "react-icons/fa";
// import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    quatidianStoreDesc:
      "This website is a store which sales Ancient artifacts online. i have utilized springboot and angular with Mysql.",
    quatidianStoreGithub:
      "https://github.com/shubhamhugay/QuatidianStore_Frontend",

    VisualizationDashBoardDesc:
      "A website which  plots the data of city intensity population, etc. on different type of graphs using chart js and react and created api with springboot  from backend ",
    VisualizationDashBoardGithub:
      "https://github.com/shubhamhugay/VisualizationDashboard-main",

    bingershubDesc:
      "For Movie People this website would be the usefull one it show all the latest movies details and trending with reviews . utilized IMDB api for data fetch and iterated over differnt pages using react",
    bingershubGithub: "https://github.com/shubhamhugay/bingershub",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        {/* <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default ProjectBox;
