"use client";
import React from "react";
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
function Servicecard() {
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
      items: 2,
    },
  };
  return (
    <Box
      sx={{
        width: "100%",

        backgroundColor: "#fff",
      }}
    >
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
        <Carousel responsive={responsive}>
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

export default Servicecard;
