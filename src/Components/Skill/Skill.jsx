import React from "react";
import "./Skill.css";

const Skill = (props) => {
  return (
    <div className="skill">
      <p>{props.name}</p>
      <img src={props.img} alt={props.name} />
    </div>
  );
};

export default Skill;
