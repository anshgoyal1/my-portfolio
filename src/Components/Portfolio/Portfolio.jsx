import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import portfolio from "../../img/portfolio.png";
import instagram from "../../img/instagram.jpeg";
import diabetes from "../../img/diabetes.jpg";
import facemask from "../../img/facemask.png";
import chatapp from "../../img/chatapp.jpg";
import winequality from "../../img/winequality.png";
import { themeContext } from "../../Context";
import ProjectCard from "../ProjectCard/ProjectCard";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <ProjectCard
            image={portfolio}
            title="Portfolio"
            tech="React, CSS, HTML"
            description="A portfolio website for myself with complete deployment"
            githubLink="https://github.com/anshgoyal1/my-portfolio"
            projectLink="https://ansh-0portfolio.netlify.app/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            image={instagram}
            title="Instagram Clone"
            tech="Flutter, Dart, Firebase"
            description="A clone of instagram with complete functionality"
            githubLink="https://github.com/anshgoyal1/Instagram_clone"
            projectLink="https://github.com/anshgoyal1/Instagram_clone"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            image={diabetes}
            title="Diabetes Prediction"
            tech="Python, Flask, Heroku, HTML,CSS,Javascript, Bootstrap, Scikit-learn, Machine Learning"
            description="A machine learning model to predict diabetes"
            githubLink="https://github.com/anshgoyal1/diabetes_prediction"
            projectLink="https://diabetes-predictor1.herokuapp.com/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            image={facemask}
            title="Face Mask Detection"
            tech="Python, Flask, Heroku, HTML,CSS,Javascript, Bootstrap, Scikit-learn, Machine Learning,Tensorflow, Keras"
            description="A machine learning model to detect face mask"
            githubLink="https://github.com/anshgoyal1/Face_Mask_Detector"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            image={chatapp}
            title="Chat App"
            tech="Flutter, Dart, Firebase"
            description="A chat app with complete functionality"
            githubLink="https://github.com/anshgoyal1/chat-app"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            image={winequality}
            title="Wine Quality Prediction"
            tech="Python, Flask, Heroku, HTML,CSS,Javascript, Bootstrap, Scikit-learn, Machine Learning"
            description="A machine learning model to predict wine quality"
            githubLink="https://github.com/anshgoyal1/wine_quality_prediction"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
