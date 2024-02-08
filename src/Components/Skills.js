import React from "react";
// import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiJava } from "react-icons/di";
import { SiHibernate, SiMysql, SiPostman, SiSpringboot } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Springboot: <SiSpringboot />,
    Java: <DiJava />,
    hibernate: <SiHibernate />,
    sql: <SiMysql />,

    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
