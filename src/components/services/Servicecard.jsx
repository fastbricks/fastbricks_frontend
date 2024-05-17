"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardset from "./Cardset";

import {
  CustomLeftArrow,
  CustomRightArrow,
} from "./helper/carouselarrowButton";
function ServiceCard() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.3,
    },
  };
  const one = "/rentalSlider/1.png";
  const two = "/rentalSlider/2.png";
  const three = "/rentalSlider/3.png";
  const four = "/rentalSlider/4.png";
  const five = "/rentalSlider/5.png";
  const six = "/rentalSlider/6.png";
  const seven = "/rentalSlider/7.png";
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "#fff",
      }}
    >
      <hr className="bg-gray-100 p-1 block sm:hidden" />
      <Box className="pt-8">
        <span
          style={{
            fontSize: "25px",
            marginInline: "15px",
            fontFamily: "sans-serif",
          }}
        >
          Services on Rent
        </span>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          className="rounded-lg bg-white pb-5"
          showDots={true}
          dotListClass="custom-dot-list"
          customDot={<CustomDot />}
        >
          <Box>
            <Cardset img={one} />
          </Box>
          <Box>
            <Cardset img={two} />
          </Box>
          <Box>
            <Cardset img={three} />
          </Box>
          <Box>
            <Cardset img={four} />
          </Box>
          <Box>
            <Cardset img={five} />
          </Box>
          <Box>
            <Cardset img={six} />
          </Box>
          <Box>
            <Cardset img={seven} />
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
}

export default ServiceCard;

const CustomDot = ({ onClick, active }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  if (!isMobile) {
    return null; //render nothing on desktop
  }

  return (
    <div className="bg-white rounded-md">
      <button
        className={`${
          active ? "bg-red-300 rounded-md" : "bg-gray-100 "
        } w-4 h-2 transition-all duration-300 `}
        onClick={() => onClick()}
      ></button>
    </div>
  );
};
