import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: "20rem" }} />
      <div className="f-content">
        <a
          style={{ textDecoration: "none" }}
          href="mailto:anshgoyal749@gmail.com"
        >
          <p>anshgoyal749@gmail.com</p>
        </a>
        <div className="f-icons">
          <a href="https://www.instagram.com/_._ansh_._12_.3/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/ansh.goyal.786/">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/anshgoyal1">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/ansh-goyal-03936a191/">
            <Linkedin color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
