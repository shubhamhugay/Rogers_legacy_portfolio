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
          <h1>Hola!</h1>
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
            I really enjoy making websites. I like taking on challenging
            projects that make me think as a developer and that I can feel proud
            of when they're finished.
            <br /> I've been learning <b>Java</b> for a while now, and I've also
            picked up some basic frontend skills.
            <br />
            Right now, I'm focusing on getting even better at Java Full Stack.
            <br />
            Oh, and I'm a big fan of <b>black coffee!</b>
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="illustration" src={menpng} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
