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

function ServiceCategory() {
  return (
    <div className="border-0 border-gray-200 sm:border p-2 rounded-lg">
      <Typography className="pl-5 text-lg text-gray-500 pb-5 md:pb-0 font-bold">
        What are you looking for?
      </Typography>
      <div className=" rounded grid grid-cols-3  sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3">
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
      </div>
    </div>
  );
}

export default ServiceCategory;
