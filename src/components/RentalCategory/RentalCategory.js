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
import styles from "@/components/services/styles/serviceCategory.module.css";

import wpm from "@/components/services/assets/category/wpm.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function RentalCategory() {
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
    // <div className="border-0 border-gray-200 sm:border p-2 rounded-lg ">
    //   <Typography className="pl-5 text-lg text-gray-500 pb-5 md:pb-0 font-bold">
    //     What are you looking for?
    //   </Typography>
    //   <div className=" rounded grid grid-cols-3  sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 items-center ">
    //     <div
    //       style={{
    //         display: "grid",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div className={styles.services_box}>
    //         <Image
    //           src={constructiontruck}
    //           className={styles.service_category_images}
    //         />
    //       </div>
    //       <p className={styles.machine_font}>Construction Truck</p>
    //     </div>

    //     <div
    //       style={{
    //         display: "grid",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div className={styles.services_box}>
    //         <Image src={cmtruck} className={styles.service_category_images} />
    //       </div>
    //       <p className={styles.machine_font}>Concrete Mixer</p>
    //     </div>

    //     <div
    //       style={{
    //         display: "grid",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div className={styles.services_box}>
    //         <Image src={bulldozer} className={styles.service_category_images} />
    //       </div>
    //       <p className={styles.machine_font}>Bulldozer</p>
    //     </div>

    //     <div
    //       style={{
    //         display: "grid",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div className={styles.services_box}>
    //         <Image
    //           src={concretemixer}
    //           className={styles.service_category_images}
    //         />
    //       </div>
    //       <p className={styles.machine_font}>Concrete Mixer</p>
    //     </div>

    //     <div
    //       style={{
    //         display: "grid",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div className={styles.services_box}>
    //         <Image
    //           src={foamwork}
    //           className={styles.service_category_images}
    //           style={{ borderRadius: "50%" }}
    //         />
    //       </div>
    //       <p className={styles.machine_font}>Foamwork</p>
    //     </div>

    //     <div
    //       style={{
    //         display: "grid",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div className={styles.services_box}>
    //         <Image
    //           src={tractor}
    //           className={styles.service_category_images}
    //           style={{ borderRadius: "50%" }}
    //         />
    //       </div>
    //       <p className={styles.machine_font}>Tractor</p>
    //     </div>

    //     <div
    //       style={{
    //         display: "grid",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div className={styles.services_box}>
    //         <Image
    //           src={shuttering}
    //           className={styles.service_category_images}
    //           style={{ borderRadius: "50%" }}
    //         />
    //       </div>
    //       <p className={styles.machine_font}>Shuttering</p>
    //     </div>
    //     <div
    //       style={{
    //         display: "grid",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         textAlign: "center",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div className={styles.services_box}>
    //         <Image
    //           src={wpm}
    //           className={styles.service_category_images}
    //           style={{ borderRadius: "50%" }}
    //         />
    //       </div>
    //       <p className={styles.machine_font}>Wall plastering Machine</p>
    //     </div>
    //   </div>
    // </div>
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
            <Image
              src={constructiontruck}
              className={styles.service_category_images}
            />
          </div>
          <p className={styles.machine_font}>Truck</p>
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
            <Image src={cmtruck} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Construction truck</p>
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
            <Image src={bulldozer} className={styles.service_category_images} />
          </div>
          <p className={styles.machine_font}>Bulldozer</p>
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
              src={concretemixer}
              className={styles.service_category_images}
            />
          </div>
          <p className={styles.machine_font}>
            Concrete <br className="block sm:hidden" /> Mixer
          </p>
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
              src={foamwork}
              className={styles.service_category_images}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <p className={styles.machine_font}>Foamwork</p>
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
              src={tractor}
              className={styles.service_category_images}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <p className={styles.machine_font}>Tractor</p>
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
              src={shuttering}
              className={styles.service_category_images}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <p className={styles.machine_font}>Shuttering</p>
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
              src={wpm}
              className={styles.service_category_images}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <p className={styles.machine_font}>
            Plastering <br className="block sm:hidden" />
            Machine
          </p>
        </div>
      </div>
    </div>
  );
}

export default RentalCategory;
