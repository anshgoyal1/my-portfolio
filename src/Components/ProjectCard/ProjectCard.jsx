import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={props.image} alt="CoverImage" style={{ width: "17rem" }} />
      </div>
      <div className="ProfileName">
        <span>{props.title}</span>
        <span>{props.tech}</span>
        <span>{props.description}</span>
      </div>

      <div className="followStatus">
        <hr />
        <a href={props.githubLink}>
          <button className="button p-button" style={{ color: "white" }}>
            Github
          </button>
        </a>
        <a href={props.projectLink}>
          <button className="button p-button" style={{ color: "white" }}>
            Link
          </button>
        </a>
        <hr />
      </div>

      <span></span>
    </div>
  );
};

export default ProjectCard;
