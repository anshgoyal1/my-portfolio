import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./FloatingDiv.css";

export const FloatingDiv = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="floating-div">
      <img src={props.image} alt="Crown" className="floating-div-img" />
      <span style={darkMode ? { color: "black" } : { color: "" }}>
        {props.txt1}
        <br />
        {props.txt2}
      </span>
    </div>
  );
};
