"use client";
import React from "react";
import { Box, Card, Paper, Typography } from "@mui/material";
import Image from "next/image";
import electrician from "@/components/services/assets/category/electrician.png";
import plumber from "@/components/services/assets/category/plumber.png";
import mason from "@/components/services/assets/category/mason.png";
import labour from "@/components/services/assets/category/labour.png";
import machine from "@/components/services/assets/category/machine.png";
import carpenter from "@/components/services/assets/category/carpenter.png";
import tile from "@/components/services/assets/category/tile.png";
import home from "@/components/services/assets/category/home.png";
import arch from "@/components/services/assets/category/arch.png";
import painter from "@/components/services/assets/category/painter.png";
import styles from "@/components/services/styles/serviceCategory.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "@/components/services/helper/CategoryCustumArrow";
function ServiceCategory() {
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
    <Box
      sx={{
        backgroundColor: "#fff",
        paddingTop: "10px",
        boxShadow: "rgba(48, 47, 48, 0.133) 1px 1px 1px 1px",
      }}
    >
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        autoPlaySpeed={5000}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Box>
              <div className={styles.service_category_icon_design}></div>
              <div className={styles.service_category_icon_design}></div>
            </Box>
            <Box>
              <div className={styles.service_category_icon_design}></div>
              <div className={styles.service_category_icon_design}></div>
            </Box>
          </div>
          <p className={styles.machine_font}>Categories</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image
              src={electrician}
              className={styles.service_category_images}
            />
          </div>
          <p className={styles.machine_font}>Electrician</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={plumber} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Plumber</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={mason} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Mason</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={labour} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Labour</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={machine} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Machine Operator</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={carpenter} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>carpenter</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={tile} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Tile work</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={arch} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Architect</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={painter} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Painter</p>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.services_box}>
            <Image src={home} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Home Decor</p>
        </div>
      </Carousel>
    </Box>
  );
}

export default ServiceCategory;
