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
          <img src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={instagram} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={facemask} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={diabetes} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chatapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={winequality} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
