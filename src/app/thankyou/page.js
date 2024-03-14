"use client";
import Lottie from "lottie-react";
import { Box, styled, Button, Typography } from "@mui/material";

import animationData from "../../Lottie/tk.json";

const LottieBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: 300,
  [theme.breakpoints.down("md")]: {
    height: 200,
    width: 200,
  },
}));

export default function Thankyou() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        height: "90vh",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="min-h-screen">
        <LottieBox>
          <Lottie
            animationData={animationData}
            className="h-[70vh]"
            loop={true}
          />
          <h3>Thank you for reaching out. We &apos;ll get back to you soon </h3>
        </LottieBox>
      </div>
    </div>
  );
}
