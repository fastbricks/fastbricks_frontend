"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardset from "./Cardset";
import one from "@/components/services/assets/cardimage/1.png";
import two from "@/components/services/assets/cardimage/2.png";
import three from "@/components/services/assets/cardimage/3.png";
import four from "@/components/services/assets/cardimage/4.png";
import five from "@/components/services/assets/cardimage/5.png";
import six from "@/components/services/assets/cardimage/6.png";
import seven from "@/components/services/assets/cardimage/7.png";
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

      <span
        style={{
          fontSize: "25px",
          marginInline: "15px",
          fontFamily: "sans-serif",
        }}
      >
        Services on Rent
      </span>
      <Box>
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
