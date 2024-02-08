import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Shubham Hugay</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className="footerLinks">
        <a href="" target="_blank">
          <FaGithub />
        </a>
        <a href="" target="_blank">
          <FaLinkedin />
        </a>
        <a href="" target="_blank">
          <GrMail />
        </a>
        <a href="" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
