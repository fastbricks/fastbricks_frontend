"use client";
import { Box, Card, Typography, styled, Paper, Link } from "@mui/material";
import animationData from "../../../Lottie/contact";
import animationData2 from "../../../Lottie/contactanim";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { WhatsApp } from "@mui/icons-material";

import Lottie from "lottie-react";

const LottieBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: 300,
  [theme.breakpoints.down("md")]: {
    height: 400,
    width: "95%",
  },
}));
const LottieBoxTwo = styled(Box)(({ theme }) => ({
  height: 80,
  width: 80,
  [theme.breakpoints.down("md")]: {
    height: 70,
    width: 70,
  },
}));

export default function Contact() {
  return (
    <Box sx={{ backgroundColor: "#f8c8bd65" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "100%",
            marginTop: "20px",
            borderRadius: 5,
            backgroundColor: "transparent",
            height: "80vh",
            elevation: 10,
            position: "relative",
            boxShadow: "none",
          }}
        >
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
              Feel free to contact us!
            </h1>

            <style jsx>
              {`
                h1 {
                  display: inline-block;
                  color: #feffe2;
                  font-family: "Righteous", serif;
                  font-size: 5em;
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
                    font-size: 30px;
                  }
                }
              `}
            </style>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: 2,
            }}
          >
            <Box>
              <LottieBox>
                <Lottie animationData={animationData} />
              </LottieBox>
            </Box>
          </Box>

          <Paper
            elevation={3}
            sx={{
              backgroundColor: "transparent",
              height: 70,
              width: "100%",
              borderColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              position: "absolute",
              bottom: 0,
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                marginTop: 1.4,
              }}
            >
              <LottieBoxTwo>
                <Lottie animationData={animationData2} />
              </LottieBoxTwo>
            </Box>
            <Box
              sx={{
                margin: "8px",
                backgroundColor: "white",
                borderRadius: 2,
                marginTop: 1.4,
              }}
            >
              <Link
                href="https://www.instagram.com/fastbricks.in/"
                target="_blank"
              >
                <InstagramIcon
                  sx={{
                    color: "#F27777",
                    height: "2.3rem",
                    width: "auto",
                    display: "flex",
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                margin: "8px",
                backgroundColor: "white",
                borderRadius: 2,
                marginTop: 1.4,
              }}
            >
              <Link
                href="https://www.facebook.com/fastbricks.in/"
                target="_blank"
              >
                <FacebookIcon
                  sx={{
                    color: "#3C5A99",
                    height: "2.3rem",
                    width: "auto",
                    display: "flex",
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                margin: "8px",
                backgroundColor: "white",
                borderRadius: 2,
                marginTop: 1.4,
              }}
            >
              <Link href="https://wa.me/919667502406" target="_blank">
                <WhatsApp
                  sx={{
                    color: "green",
                    height: "2.3rem",
                    width: "auto",
                    display: "flex",
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{ margin: "9px", backgroundColor: "white", borderRadius: 2 }}
            >
              <Link
                href="https://www.linkedin.com/company/fastbricks/"
                target="_blank"
              >
                <LinkedInIcon
                  sx={{
                    color: "#007AB3",
                    height: "2.3rem",
                    width: "auto",
                    display: "flex",
                  }}
                />
              </Link>
            </Box>
          </Paper>
        </Card>
      </Box>
    </Box>
  );
}
