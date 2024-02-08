import React from "react";
import Skills from "./Skills.js";
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
            Hi, my name is <b>Shubham hugay</b> and I am from Mumbai,
            Maharashtra. I'm a <b>developer</b> and a certified java full stack
            student <b>Bachelors in IT</b>. <br />
            <br />I have developed several self project and I love to create
            interesting projects with beautiful designs.
            <br />
            Apart from coding I love to read books and play guitar .
            <a href="https://www.instagram.com/shubh_o_0/" target="_blank">
              Instagram.
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
