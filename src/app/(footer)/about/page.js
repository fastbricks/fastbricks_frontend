"use client";
import YoutubeEmbed from "@/Lottie/youtubeEmbedded";
import { Box, Card, Typography, styled } from "@mui/material";

import Lottie from "lottie-react";

import animationData from "../../../Lottie/stop";
import animationData2 from "../../../Lottie/cons";
import animationData3 from "../../../Lottie/d1";
import animationData4 from "../../../Lottie/d2";

const LottieBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: 300,
  [theme.breakpoints.down("md")]: {
    height: 100,
    width: 100,
  },
}));

const LottieBoxTwo = styled(Box)(({ theme }) => ({
  height: 500,
  width: 500,
  [theme.breakpoints.down("md")]: {
    height: 350,
    width: 350,
  },
}));
const LottieBoxThree = styled(Box)(({ theme }) => ({
  height: 300,
  width: 300,
  [theme.breakpoints.down("md")]: {
    height: 180,
    width: 180,
  },
}));
const LottieBoxFour = styled(Box)(({ theme }) => ({
  height: 300,
  width: 300,
  [theme.breakpoints.down("md")]: {
    height: 150,
    width: 150,
  },
}));

export default function About() {
  return (
    <>
      <Box sx={{ backgroundColor: "#f8c8bd6s5" }} className="bg-gray-50">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h1
              sx={{
                color: "#8C52FF",
                fontSize: "1.875rem",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Fastbricks
            </h1>
            <LottieBox>
              <Lottie
                animationData={animationData}
                className="flex justify-center items-center"
                loop={true}
              />
            </LottieBox>
            <style jsx>
              {`
                h1 {
                  display: inline-block;
                  color: #feffe2;
                  font-family: "Righteous", serif;
                  font-size: 12em;
                  text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
                }
                h1:after {
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
                  h1 {
                    font-size: 40px;
                  }
                }
              `}
            </style>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LottieBoxTwo>
              <Lottie
                animationData={animationData2}
                className="flex justify-center items-center"
                loop={true}
              />
            </LottieBoxTwo>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <LottieBoxThree>
              <Lottie
                animationData={animationData3}
                className="flex justify-center items-center"
                loop={true}
              />
            </LottieBoxThree>
            <div className="about_card">
              <Card
                sx={{
                  width: "80%",
                  height: "80%",
                  backgroundColor: "#b5f7c553",
                }}
              >
                <Typography
                  sx={{ padding: "10px", fontWeight: 500 }}
                  className="about_text"
                >
                  <b>Fastbricks</b> is a platform which is on an expedition to
                  change the way construction is going on in India. We ensure
                  better construction materials, services and machineries to our
                  customers.
                </Typography>
              </Card>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="about_card">
            <Card
              sx={{
                width: "80%",
                height: "80%",
                backgroundColor: "#b5f7c553",
              }}
            >
              <Typography
                sx={{ padding: "10px", fontWeight: 500 }}
                className="about_text"
              >
                We provide every required thing in construction journey of our
                customer whether it is construction materials like bricks,
                cement, tiles, marble, floorings, reinforcement, sanitary &
                safety services, paints, sand & gravel, soil etc
              </Typography>
            </Card>
          </div>
          <LottieBoxFour>
            <Lottie
              animationData={animationData4}
              className="flex justify-center items-center"
              loop={true}
            />
          </LottieBoxFour>
        </Box>
        <Box
          ox
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <div className="about_card">
            <Card
              sx={{
                width: "80%",
                height: "80%",
                backgroundColor: "#b5f7c553",
              }}
            >
              <Typography
                sx={{ padding: "10px", fontWeight: 500 }}
                className="about_text"
              >
                <b>Fastbricks</b> will be the first-choice construction partner
                providing all construction materials, services, machinery
                rentals to customer throughout the world.
              </Typography>
            </Card>
          </div>
        </Box>
        <div className="video-responsive ">{/* <YoutubeEmbed /> */}</div>
      </Box>
    </>
  );
}
