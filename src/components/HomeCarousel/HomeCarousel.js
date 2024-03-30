"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "@/components/services/helper/carouselarrowButton";

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
    { id: "1", image: "/homeSlider/mockup-engineer-zoom.jpeg" },
    { id: "2", image: "/homeSlider/mockupreal.jpeg" },
  ];
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={10000}
        className=" sm:h-[82vh] h-[200px] rounded-lg"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        showDots={true}
        dotListClass="custom-dot-list"
        customDot={<CustomDot />}
      >
        {data.map((data) => {
          return (
            <div key={data.id} className=" w-full object-fill">
              <img
                className="object-contain h-[80vh] sm:object-cover sm:h-[90vh]"
                src={data.image}
                alt="slide"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
const CustomDot = ({ onClick, active }) => {
  return (
    <div className=" rounded-md">
      <button
        className={`${
          active ? "bg-red-300 rounded-md" : " bg-[#ffffff58]"
        } w-10 h-2 transition-all duration-300`}
        onClick={() => onClick()}
      ></button>
    </div>
  );
};
