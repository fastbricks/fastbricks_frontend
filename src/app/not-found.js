"use client";
import Lottie from "lottie-react";
import { Box, styled, Button } from "@mui/material";
import Link from "next/link";
import animationData from "../Lottie/stop.json";

export const metadata = {
  title: "Page not found",

  openGraph: {
    title: "Page not found",

    images: "/img/logo@2x.png",
  },
};

export default function NotFound() {
  return (
    <>
      <head>
        <title>Page Not Found</title>
      </head>
      <div className="flex flex-col h-[90vh] items-center text-center justify-center">
        <div className="">
          <Lottie
            animationData={animationData}
            className="h-[50vh]"
            loop={true}
          />
        </div>
        <h6>Page Not Found</h6>
        <style jsx>
          {`
            h6 {
              display: inline-block;
              color: #6f7368;
              font-family: "Righteous", serif;
              font-size: 2em;
              text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
            }
            h6:after {
              content: attr(data-shadow);
              position: absolute;
              top: 0.06em;
              left: 0.06em;
              z-index: -1;
              text-shadow: none;
              background-image: linear-gradient(
                45deg,
                transparent 45%,
                hsla(48, 20%, 90%, 1) 45%,
                hsla(48, 20%, 90%, 1) 55%,
                transparent 0
              );
              background-size: 0.05em 0.05em;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;

              animation: shad-anim 15s linear infinite;
            }

            @keyframes shad-anim {
              0% {
                background-position: 0 0;
              }
              0% {
                background-position: 100% -100%;
              }
            }
            @media only screen and (min-width: 321px) and (max-width: 768px) {
              h6 {
                font-size: 25px;
              }
            }
          `}
        </style>
        <Link href={"/"}>
          <Button
            variant="contained"
            className="bg-[#fa936e] hover:bg-[#fa936e]"
            sx={{
              backgroundColor: "#fa936e",
              marginY: 2,
              ":hover": {
                backgroundColor: "#fa936e",
              },
            }}
          >
            GO TO HOMEPAGE
          </Button>
        </Link>
      </div>
    </>
  );
}
