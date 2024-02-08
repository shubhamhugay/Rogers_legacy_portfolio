import React from "react";
import Lottie from "lottie-react";
import wheel from "../LottieFiles/wheel.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import { CiCoffeeCup } from "react-icons/ci";
import menpng from "../images/menpng.png";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Holla!</h1>
          <h1>
            I'M <b>Shubham hugay</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={wheel} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of developing a website. I want to do work that
            challenges me as a developer & work that I can be proud of.
            <br /> -Rogers
            <br />
            <br />I have long journey in <b>java</b> and also Acquired do-Able
            knowlegde in <b>Frontend</b> currently enhancing my skills in
            <b> Java </b> Full stack.
            <br />
            Also, I love <b> Black coffee</b>
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="menpng" src={menpng} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
