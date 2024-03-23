"use client";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Card, styled, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Card className="footer-wrapper">
        <div className="social">
          <div>
            <h1>SOCIAL</h1>
          </div>
          <div className="">
            <Link
              href="https://www.instagram.com/fastbricks.in/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <Instagram fontSize="large" className="SocialLink" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/fastbricks/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <LinkedIn fontSize="large" className="SocialLink" />
            </Link>
            <Link
              href="https://www.facebook.com/fastbricks.in/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <Facebook fontSize="large" className="SocialLink" />
            </Link>
            <Link
              href="https://www.youtube.com/@fastbricks/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <YouTube fontSize="large" className="SocialLink" />
            </Link>
            <Link
              href="https://www.twitter.com/fastbricks_/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <Twitter fontSize="large" className="SocialLink" />
            </Link>
          </div>
        </div>
        <footer className="footer">
          <div className="footer_container">
            <div className="footer-content">
              <div className="footer-column">
                <h1>About</h1>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <h4>Contact Us</h4>
                </Link>
                <Link href="/about" style={{ textDecoration: "none" }}>
                  <h4>About Us</h4>
                </Link>
                <Link
                  href="https://careers.fastbricks.in/"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  <h4>We&apos;re hiring!</h4>
                  <style jsx>{`
                    h4 {
                      font-size: 25px;
                      font-family: "Oswald", sans-serif;
                      letter-spacing: 0;
                      padding: 0.25em 0 0.325em;
                      display: block;
                      margin: 0 auto;
                      text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

                      /* Clip Background Image */

                      background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png)
                        repeat-y;
                      -webkit-background-clip: text;
                      background-clip: text;

                      /* Animate Background Image */

                      -webkit-text-fill-color: transparent;
                      -webkit-animation: aitf 80s linear infinite;

                      /* Activate hardware acceleration for smoother animations */

                      -webkit-transform: translate3d(0, 0, 0);
                      -webkit-backface-visibility: hidden;
                    }

                    /* Animate Background Image */

                    @-webkit-keyframes aitf {
                      0% {
                        background-position: 0% 50%;
                      }
                      100% {
                        background-position: 100% 50%;
                      }
                    }
                    @media only screen and (min-width: 321px) and (max-width: 768px) {
                      h4 {
                        font-size: 20px;
                        white-space: nowrap;
                      }
                    }
                  `}</style>
                </Link>
              </div>

              <div className="footer-column">
                <h1>Help</h1>

                <Link href={"/payment"} style={{ textDecoration: "none" }}>
                  <h4>Payment</h4>
                </Link>
                <Link href={"/shipping"} style={{ textDecoration: "none" }}>
                  <h4>Shipping</h4>
                </Link>
                <Link
                  href={"/cancellation-return"}
                  style={{ textDecoration: "none" }}
                >
                  <h4>Cancellation & Return</h4>
                </Link>
                <Link href={"/faqs"} style={{ textDecoration: "none" }}>
                  <h4>FAQs</h4>
                </Link>
              </div>
              <div className="footer-column">
                <h1>Policy</h1>

                <Link href={"/return"} style={{ textDecoration: "none" }}>
                  <h4>Return Policy</h4>
                </Link>
                <Link href={"/terms"} style={{ textDecoration: "none" }}>
                  <h4>Terms of Use</h4>
                </Link>
                <Link href={"/security"} style={{ textDecoration: "none" }}>
                  <h4>Security</h4>
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <div className="desc_banner_img">
          <img className="desc_banner_img" src="/banner2.png" alt="" />
        </div>
        <Box
          sx={{
            backgroundColor: "#618E9C",
            textAlign: "center",
            paddingTop: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography className=" text-md text-white font-bold">
              Fastbricks, Your Construction Companion
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#618E9C",
            textAlign: "center",
            paddingBottom: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              color: "#fff",
            }}
          >
            <Typography>&copy;</Typography>
            <Typography className=" text-sm text-white">
              2024 Copyright | <b>Fastbricks</b>
              <vl></vl>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Footer;
// const FooterBoxStyle = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     // marginBottom: "56px",
//   },
// }));
