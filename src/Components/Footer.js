import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail, GrInstagram } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Shubham Hugay</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/shubhamhugay?tab=repositories"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/shubh_o_0/" target="_blank">
          <GrInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-hugay-251a32217"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
