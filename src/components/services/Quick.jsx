"use client";
import { Box, Card, Rating } from "@mui/material";
import React, { useState } from "react";

import Image from "next/image";
import electrician from "@/components/services/assets/electric.png";
import door from "@/components/services/assets/door.png";
import home from "@/components/services/assets/home.png";
import kitchen from "@/components/services/assets/kitchen.png";
import styles from "@/components/services/styles/serviceCategory.module.css";
function Quick() {
  const [value, setValue] = useState(2);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(3);
  const [value3, setValue3] = useState(1);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.quickbox}>
        <div className={styles.quickGridBox}>
          <Card className={styles.quickCard}>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <Card className={styles.services_box_s}>
                <Image
                  src={electrician}
                  className={styles.service_category_images}
                />
              </Card>
              <p className={styles.machine_font}>Electrician</p>

              <Rating
                name="simple-controlled"
                value={value2}
                //   size="large"
                onChange={(event, newValue) => {
                  setValue2(newValue);
                }}
              />
              <p>(4k)</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className={styles.machine_font}>Rs. 500 </p>
                <p>per hrs</p>
              </div>
            </div>
          </Card>
          <Card className={styles.quickCard}>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <Card className={styles.services_box_s}>
                <Image src={door} className={styles.service_category_images} />
              </Card>
              <p className={styles.machine_font}>Door</p>

              <Rating
                name="simple-controlled"
                value={value3}
                //   size="large"
                onChange={(event, newValue) => {
                  setValue3(newValue);
                }}
              />
              <p>(4k)</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className={styles.machine_font}>Rs. 500 </p>
                <p>per hrs</p>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.quickGridBox}>
          <Card className={styles.quickCard}>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <Card className={styles.services_box_s}>
                <Image src={home} className={styles.service_category_images} />
              </Card>
              <p className={styles.machine_font}>Electrician</p>

              <Rating
                name="simple-controlled"
                value={value2}
                //   size="large"
                onChange={(event, newValue) => {
                  setValue2(newValue);
                }}
              />
              <p>(4k)</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className={styles.machine_font}>Rs. 500 </p>
                <p>per hrs</p>
              </div>
            </div>
          </Card>
          <Card className={styles.quickCard}>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <Card className={styles.services_box_s}>
                <Image
                  src={kitchen}
                  className={styles.service_category_images}
                />
              </Card>
              <p className={styles.machine_font}>Electrician</p>

              <Rating
                name="simple-controlled"
                value={value3}
                //   size="large"
                onChange={(event, newValue) => {
                  setValue3(newValue);
                }}
              />
              <p>(4k)</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className={styles.machine_font}>Rs. 500 </p>
                <p>per hrs</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Box>
  );
}

export default Quick;
