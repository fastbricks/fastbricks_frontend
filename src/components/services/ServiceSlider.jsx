"use client";
import React from "react";
import Image from "next/image";
import jcb from "@/components/services/assets/carousel/jcb.png";
import cm from "@/components/services/assets/carousel/cm.png";
import ct from "@/components/services/assets/carousel/ct.png";
import cmt from "@/components/services/assets/carousel/cmt.png";
import wpm from "@/components/services/assets/carousel/wpm.png";
import fw from "@/components/services/assets/carousel/fw.png";
import t from "@/components/services/assets/carousel/t.png";
import one from "@/components/services/assets/slider/1.png";
import two from "@/components/services/assets/slider/2.png";
import three from "@/components/services/assets/slider/3.png";
import four from "@/components/services/assets/slider/4.png";
import five from "@/components/services/assets/slider/5.png";
import six from "@/components/services/assets/slider/6.png";
import seven from "@/components/services/assets/slider/7.png";
import eight from "@/components/services/assets/slider/8.png";
import nine from "@/components/services/assets/slider/9.png";
import ten from "@/components/services/assets/slider/10.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "@/components/services/helper/carouselarrowButton";
import styles from "@/components/services/styles/serviceCategory.module.css";
import { Box, Button } from "@mui/material";
function ServiceSlider() {
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
      autoPlaySpeed={5000}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      <div className="container_service">
        <Image className="img_service" src={one} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Interior Designer</p>
            <p>starting at</p>
            <p>Rs. 400</p>
            <p>for 10 min</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={two} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Mason</p>
            <p>starting at</p>
            <p>Rs. 700</p>
            <p>for 1 day</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={four} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Plumber starting</p>
            <p>starting at</p>
            <p>Rs. 149</p>
            <p>for 10 min</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={three} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Architect</p>
            <p>starting at</p>
            <p>Rs. 10000</p>
            <p>per project</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={five} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Labour</p>
            <p>starting at</p>
            <p>Rs. 500</p>
            <p>per day</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={six} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Tile Setter</p>
            <p>starting at</p>
            <p>Rs. 500</p>
            <p>per day</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={seven} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Carpenter</p>
            <p>starting at</p>
            <p>Rs. 800</p>
            <p>per day</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={eight} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Contractor</p>
            <p>starting at</p>
            <p>at reasonable</p>
            <p>price</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={nine} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Contractor</p>
            <p>starting at</p>
            <p>Rs. 800</p>
            <p>for 2hrs</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="img_service" src={ten} alt="First slide" />
        <div className="center_services_box">
          <Box className="service_content_text">
            <p>Get Welder</p>
            <p>starting at</p>
            <p>Rs. 800</p>
            <p>for 2hrs</p>
          </Box>
          <Box className="">
            <Button variant="contained" className="service_content_button">
              Book Now
            </Button>
          </Box>
        </div>
      </div>
      <div className="container_service">
        <Image className="imgC" src={jcb} alt="First slide" />
      </div>
      <div className="container_service">
        <Image className="imgC" src={cm} alt="First slide" />
      </div>
      <div className="container_service">
        <Image className="imgC" src={ct} alt="First slide" />
      </div>
      <div className="container_service">
        <Image className="imgC" src={cmt} alt="First slide" />
      </div>
      <div className="container_service">
        <Image className="imgC" src={wpm} alt="First slide" />
      </div>
      <div className="container_service">
        <Image className="imgC" src={t} alt="First slide" />
      </div>
      <div className="container_service">
        <Image className="imgC" src={fw} alt="First slide" />
      </div>
    </Carousel>
  );
}

export default ServiceSlider;
