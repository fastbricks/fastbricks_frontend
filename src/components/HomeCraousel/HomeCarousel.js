"use client";
import React from "react";
import Image from "next/image";
// import jcb from "@/components/services/assets/carousel/jcb.png";
// import cm from "@/components/services/assets/carousel/cm.png";
// import ct from "@/components/services/assets/carousel/ct.png";
// import cmt from "@/components/services/assets/carousel/cmt.png";
// import wpm from "@/components/services/assets/carousel/wpm.png";
// import fw from "@/components/services/assets/carousel/fw.png";
// import t from "@/components/services/assets/carousel/t.png";
// import one from "@/components/services/assets/slider/1.png";
// import two from "@/components/services/assets/slider/2.png";
// import three from "@/components/services/assets/slider/3.png";
// import four from "@/components/services/assets/slider/4.png";
// import five from "@/components/services/assets/slider/5.png";
// import six from "@/components/services/assets/slider/6.png";
// import seven from "@/components/services/assets/slider/7.png";
// import eight from "@/components/services/assets/slider/8.png";
// import nine from "@/components/services/assets/slider/9.png";
// import ten from "@/components/services/assets/slider/10.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "@/components/services/helper/carouselarrowButton";

import styles from "@/components/services/styles/serviceCategory.module.css";
import { Box, Button } from "@mui/material";
import ServiceCategory from "../CategoryService/ServiceCategory";
function HomeCarousel() {
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
  const data = [
    { id: "1", image: "/serviceMockup1-zoom.jpeg" },
    { id: "1", image: "/serviceMockup2-zoom.jpeg" },
    // { id: "1", image: "/carousel/ct.png" },
    // { id: "1", image: "/carousel/jcb.png" },
    // { id: "1", image: "/carousel/wpm.png" },
  ];
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={5000}
        className=" sm:h-[82vh] h-[30vh] rounded-lg"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {data.map((data) => {
          return (
            <div key={data.id}>
              <img
                className="object-cover h-[80vh] md:object-cover sm:h-[90vh]"
                src={data.image}
                alt="First slide"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
