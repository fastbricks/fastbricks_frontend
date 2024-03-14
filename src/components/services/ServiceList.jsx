"use client";
import React from "react";
import { Card } from "@mui/material";
import Image from "next/image";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "@/components/services/helper/CategoryCustumArrow";
import electric from "@/components/services/assets/electric.png";
// import door from "../assets/door.png";
import home from "@/components/services/assets/home.png";
import kitchen from "@/components/services/assets/kitchen.png";
import plumber from "@/components/services/assets/category/plumber.png";
import mason from "@/components/services/assets/category/mason.png";
import painter from "@/components/services/assets/category/painter.png";
import labour from "@/components/services/assets/category/labour.png";
import machine from "@/components/services/assets/category/machine.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "@/components/services/styles/serviceCategory.module.css";

function ServiceList() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <Card sx={{ borderRadius: 8, backgroundColor: "#d0b3f2", margin: "10px" }}>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        autoPlay={true}
        infinite={true}
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
            <Image src={electric} className={styles.service_category_images} />
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
            <Image src={kitchen} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Modular Kitchen</p>
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
            <Image src={home} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Home Decor</p>
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
      </Carousel>
    </Card>
  );
}

export default ServiceList;
