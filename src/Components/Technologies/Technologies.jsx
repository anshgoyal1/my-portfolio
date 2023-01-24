import React from "react";
import Skill from "../Skill/Skill";
import "./Technologies.css";

// TODO Make Technologies
const Technologies = () => {
  return (
    <div className="technologies" id="skills">
      <div className="t-heading">
        <span> Skills</span>
        <span>&</span>
        <span>Technologies</span>
      </div>
      <div className="subOuter">
        <div className="skills">
          <h1 className="t-firstHeading">Programming Languages</h1>
          <div className="t-grid">
            <Skill
              name="JavaScript"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <Skill
              name="HTML"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <Skill
              name="CSS"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <Skill
              name="Sass"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            />
            <Skill
              name="C++"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            />
            <Skill
              name="Dart"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
            />
            <Skill
              name="Python"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            />
            <Skill
              name="MySQL"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            />
            <Skill
              name="PostgreSQL"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
          </div>
          <h1>Libraries and Frameworks</h1>
          <div className="t-grid">
            <Skill
              name="React"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <Skill
              name="Redux"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />
            <Skill
              name="Node.js"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <Skill
              name="Next.js"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
            />
            <Skill
              name="Express"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
            <Skill
              name="MongoDB"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            />

            <Skill
              name="Flask"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
            />
            <Skill
              name="Flutter"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
            />

            <Skill
              name="jQuery"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
            />
            <Skill
              name="Bootstrap"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
            />
            <Skill
              name="Material UI"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            />
            <Skill
              name="Tailwindcss"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            />
          </div>
          <h1>Tools and Platforms</h1>
          <div className="t-grid">
            <Skill
              name="Git"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <Skill
              name="Github"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
            <Skill
              name="Heroku"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
            />
            <Skill
              name="Firebase"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            />
            <Skill
              name="VSCode"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            />
            <Skill
              name="Anaconda"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg"
            />
            <Skill
              name="Android Studio"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
            />
            <Skill
              name="Android"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            />
            <Skill
              name="Canva"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
            />
            <Skill
              name="jupyter"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
            />
            <Skill
              name="Linux"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />
            <Skill
              name="ubuntu"
              img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
