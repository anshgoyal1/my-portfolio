import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Logo from "../Logo/logo";

export const Navbar = () => {
  function handleClick() {
    var element = document.getElementById("contact");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <Logo />
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              smooth={true}
              to="Navbar"
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li>About</li>
            </Link>
            <Link spy={true} smooth={true} to="skills">
              <li>Skills</li>
            </Link>
            <Link spy={true} smooth={true} to="Experience">
              <li>Experience</li>
            </Link>
            <Link spy={true} smooth={true} to="Portfolio">
              <li>Projects</li>
            </Link>
          </ul>
        </div>
        <button className="button" onClick={handleClick}>
          {" "}
          Contact
        </button>
      </div>
    </div>
  );
};
