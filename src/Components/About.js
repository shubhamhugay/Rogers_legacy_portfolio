import React from "react";
import Skills from "./Skills.js";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { GrContact, GrInstagram, GrMail } from "react-icons/gr";
// import Tilt from "react-parallax-tilt";
// import Lottie from "lottie-react";
// import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hey there! I'm <b>Shubham hugay</b> hailing from the city of Mumbai,
            Maharashtra.
            <br />
            Graduated with a <b>Bachelors Degree in IT</b> in <b> 2023</b>.{" "}
            <br />
            <br />
            In my Arsenal i wield some Dope Techs mainly -
            <b> JAVA, SPRINGBOOT and SQL </b> and also acquired several other
            skills throughout my journey.
            <br />
            <br />
            But hey, life isn't just about <b>coding!</b> When I'm not slinging
            code, you'll find me lost in the pages of a <b>Good Books</b> or
            strumming away on my <b>guitar</b>, chasing melodies and stories
            alike.
            <br />
            <br />
            <br />
            <br />
            <b>
              <FaPhone />
            </b>
            :- 7020976150
            <br />
            <b>
              {" "}
              <GrMail />
            </b>{" "}
            Shubhamhugay1@gmail.com
            <br />
            <br />
            <a
              href="https://github.com/shubhamhugay?tab=repositories"
              target="_blank"
            >
              <FaGithub />
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="https://www.instagram.com/shubh_o_0/" target="_blank">
              <GrInstagram />
            </a>
          </p>
        </div>

        <div>
          {/* <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt> */}
        </div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="Javascript" />
        <Skills skill="Java" />
        <Skills skill="Springboot" />
        <Skills skill="React" />

        <Skills skill="hibernate" />
        <Skills skill="sql" />

        <Skills skill="Git" />
        <Skills skill="Github" />

        <Skills skill="Postman" />

        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;
