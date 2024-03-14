"use client";
import React from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
// import one from "../../assets/caraousel/1.png";
import two from "../../assets/caraousel/2.jpg";
import three from "../../assets/caraousel/3.jpg";
import four from "../../assets/caraousel/4.jpg";
import five from "../../assets/caraousel/5.jpg";
import six from "../../assets/caraousel/6.jpg";
import seven from "../../assets/caraousel/7.jpg";
import eight from "../../assets/caraousel/d.jpg";
import nine from "../../assets/caraousel/e.jpg";
import ten from "../../assets/caraousel/f.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../../helper/helper/CustomArrow";
function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      showDots={false}
      autoPlaySpeed={5000}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={seven} alt="First slide" />
        </div>
      </div>
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={three} alt="First slide" />
        </div>
      </div>
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={four} alt="First slide" />
        </div>
      </div>
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={five} alt="First slide" />
        </div>
      </div>
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={six} alt="First slide" />
        </div>
      </div>
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={two} alt="First slide" />
        </div>
      </div>
      {/* <div className="container">
        <Image className="img" src={one} alt="First slide" />
      </div> */}
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={eight} alt="First slide" />
        </div>
      </div>
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={nine} alt="First slide" />
        </div>
      </div>
      <div className="container">
        <div className="slider_box">
          <Image className="img" src={ten} alt="First slide" />
        </div>
      </div>
    </Carousel>
  );
}

export default Slider;
