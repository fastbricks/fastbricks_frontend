"use client";
import React from "react";
import { Box, Card, Paper, Typography } from "@mui/material";
import Image from "next/image";
import constructiontruck from "@/components/services/assets/category/constructiontruck.png";
import cmtruck from "@/components/services/assets/category/cmtruck.png";
import bulldozer from "@/components/services/assets/category/bulldozer.png";
import concretemixer from "@/components/services/assets/category/concretemixer.png";
import foamwork from "@/components/services/assets/category/foamwork.png";
import tractor from "@/components/services/assets/category/tractor.png";
import shuttering from "@/components/services/assets/category/shuttering.png";
import wpm from "@/components/services/assets/category/wpm.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import {
//   CustomLeftArrow,
//   CustomRightArrow,
// } from "@/components/services/helper/CategoryCustumArrow";
function Machinecategory() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <Box sx={{ backgroundColor: "#ffe" }}>
      <Carousel
        responsive={responsive}
        customLeftArrow={<></>}
        customRightArrow={<></>}
      >
        <Card className="category-card">
          <div className="firstbox">
            <Image src={constructiontruck} className="image-box" />
          </div>
          <div className="secondbox">
            <p className="category-heading">Construction Truck</p>
          </div>
        </Card>
        <Card className="category-card">
          {" "}
          <div className="firstbox">
            <Image src={cmtruck} className="image-box" />
          </div>
          <div className="secondbox">
            <p className="category-heading">Concrete Mixer</p>
          </div>
        </Card>
        <Card className="category-card">
          {" "}
          <div className="firstbox">
            <Image src={bulldozer} className="image-box" />
          </div>
          <div className="secondbox">
            <p className="category-heading">Bulldozer</p>
          </div>
        </Card>
        <Card className="category-card">
          {" "}
          <div className="firstbox">
            <Image src={concretemixer} className="image-box" />
          </div>
          <div className="secondbox">
            <p className="category-heading">Concrete Mixer</p>
          </div>
        </Card>
        <Card className="category-card">
          {" "}
          <div className="firstbox">
            <Image src={foamwork} className="image-box" />
          </div>
          <div className="secondbox">
            <p className="category-heading">Foamwork</p>
          </div>
        </Card>
        <Card className="category-card">
          {" "}
          <div className="firstbox">
            <Image src={tractor} className="image-box" />
          </div>
          <div className="secondbox">
            <p className="category-heading">Tractor</p>
          </div>
        </Card>
        <Card className="category-card">
          {" "}
          <div className="firstbox">
            <Image src={shuttering} className="image-box" />
          </div>
          <div className="secondbox">
            <p className="category-heading">Shuttering</p>
          </div>
        </Card>
        <Card className="category-card">
          {" "}
          <div className="firstbox">
            <Image src={wpm} className="image-box" />
          </div>
          <div className="secondbox">
            <p className="category-heading">Wall plastering Machine</p>
          </div>
        </Card>
      </Carousel>
    </Box>
  );
}

export default Machinecategory;
