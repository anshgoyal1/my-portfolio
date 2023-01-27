import React from "react";
import "./ProjectCard.css";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const ProjectCard = (props) => {
  return (
    <div className="p-card">
      <img src={props.image} alt="" />
      <div>
        <h5 className="p-heading">{props.title}</h5>
        <p className="p-technologies">{props.tech} </p>
        <p className="p-description">{props.description}</p>
        <div className="p-links">
          <a href={props.githubLink}>
            <FaGithub className="p-icons" />
          </a>
          <a href={props.projectLink} className="p-icons">
            <FaExternalLinkAlt className="p-icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
