import React, { useContext } from "react";
import "./About.css";
import Card from "../Card/Card";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Ansh_goyal_resume2.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="about" id="About">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span> Me</span>
        <span>
          I am currently pursuing B.Tech in Chemical Engineering at IIT BHU.
          <br /> I have keen interest in Web Development, DS & Algo
          <br /> and I also do competitive programming occasionally.
          <br /> I am an ardent follower of the latest technologies
          <br /> and I can also do a bit of back-end.
          <br />I am also good at mobile app development using Flutter.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Heartemoji}
            heading={"Programming Languages"}
            detail={" C++, Python, JavaScript, HTML, CSS, Dart"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Libraries & Frameworks"}
            detail={
              "React, Node.js, Express.js, Flutter, Bootstrap, Material UI, Redux, Next.js, Mongo DB, Flask, jQuery, Bootstrap, TailwindCSS"
            }
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Tools & Softwares"}
            detail={
              "Git, Github, Heroku, Firebase, VSCode, Anaconda, Android studio, Android, Canva, Jupyter, Linux, Ubuntu."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
