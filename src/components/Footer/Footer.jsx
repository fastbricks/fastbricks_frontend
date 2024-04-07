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
import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isCommunityPage = pathname === "/community";
  const [isMobile, setIsMobile] = useState(false);
  const isAccountPage = pathname === "/account";
  const isBookingPage = pathname === "/bookings";

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  if (!isMobile) {
    return (
      <Box
        sx={{ marginTop: "30px", display: isCommunityPage ? "none" : "flex" }}
      >
        <Card className="footer-wrapper" style={{ display: "block" }}>
          <div className="py-6 bg-[#fd9696] items-center justify-items-center justify-around flex md:items-center md:justify-around border-b-[5px] border-white">
            <span className="text-2xl font-extrabold text-white sm:text-center font-serif">
              SOCIAL
            </span>
            <div className="flex mt-0 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <Link
                href="https://www.instagram.com/fastbricks.in/"
                target="blank"
                style={{ color: "#fff" }}
              >
                <Instagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/fastbricks/"
                target="blank"
                style={{ color: "#fff" }}
              >
                <LinkedIn />
              </Link>
              <Link
                href="https://www.facebook.com/fastbricks.in/"
                target="blank"
                style={{ color: "#fff" }}
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.youtube.com/@fastbricks/"
                target="blank"
                style={{ color: "#fff" }}
              >
                <YouTube />
              </Link>
              <Link
                href="https://www.twitter.com/fastbricks_/"
                target="blank"
                style={{ color: "#fff" }}
              >
                <Twitter />
              </Link>
            </div>
          </div>

          <footer className="bg-[#E49295] ">
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 justify-center items-center justify-items-center">
                <div>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <img src="/footer-image.png" />
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-bold uppercase text-white">
                    Company
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <Link href="/about" style={{ textDecoration: "none" }}>
                        <h4>About Us</h4>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://blog.fastbricks.in/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <h4>Blog</h4>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/community"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <h4>Community</h4>
                      </Link>
                    </li>
                    <li className="mb-4">
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
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-bold uppercase text-white">
                    Help
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <Link
                        href={"/payment"}
                        style={{ textDecoration: "none" }}
                      >
                        <h4>Payment</h4>
                      </Link>
                    </li>

                    <li className="mb-4">
                      <Link
                        href={"/cancellation-return"}
                        style={{ textDecoration: "none" }}
                      >
                        <h4>Cancellation & Return</h4>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href={"/faqs"} style={{ textDecoration: "none" }}>
                        <h4>FAQs</h4>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/contact" style={{ textDecoration: "none" }}>
                        <h4>Contact Us</h4>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="mb-6 text-sm font-bold uppercase text-white">
                    Policy
                  </h1>

                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <Link
                        href={"/privacy-policy"}
                        style={{ textDecoration: "none" }}
                      >
                        <h4>Privacy Policy</h4>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href={"/terms"} style={{ textDecoration: "none" }}>
                        <h4>Terms of Use</h4>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href={"/security"}
                        style={{ textDecoration: "none" }}
                      >
                        <h4>Security</h4>
                      </Link>
                    </li>
                  </ul>
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
  }
  return (
    <Box
      sx={{
        marginTop: "30px",
        display:
          isCommunityPage || isAccountPage || isBookingPage ? "none" : "flex",
      }}
    >
      <Card className="footer-wrapper" style={{ display: "block" }}>
        <div className="py-6 bg-[#fd9696] items-center justify-items-center justify-around flex md:items-center md:justify-around border-b-[5px] border-white">
          <span className="text-2xl font-extrabold text-white sm:text-center font-serif">
            SOCIAL
          </span>
          <div className="flex mt-0 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link
              href="https://www.instagram.com/fastbricks.in/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/fastbricks/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://www.facebook.com/fastbricks.in/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.youtube.com/@fastbricks/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <YouTube />
            </Link>
            <Link
              href="https://www.twitter.com/fastbricks_/"
              target="blank"
              style={{ color: "#fff" }}
            >
              <Twitter />
            </Link>
          </div>
        </div>

        <footer className="bg-[#E49295] ">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 justify-center items-center justify-items-center">
              <div>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <img src="/footer-image.png" />
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold uppercase text-white">
                  Company
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <Link href="/about" style={{ textDecoration: "none" }}>
                      <h4>About Us</h4>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="https://blog.fastbricks.in/"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Blog</h4>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/community"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Community</h4>
                    </Link>
                  </li>
                  <li className="mb-4">
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
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold uppercase text-white">
                  Help
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <Link href={"/payment"} style={{ textDecoration: "none" }}>
                      <h4>Payment</h4>
                    </Link>
                  </li>

                  <li className="mb-4">
                    <Link
                      href={"/cancellation-return"}
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Cancellation & Return</h4>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      <h4>Contact Us</h4>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={"/faqs"} style={{ textDecoration: "none" }}>
                      <h4>FAQs</h4>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="mb-6 text-sm font-bold uppercase text-white">
                  Policy
                </h1>

                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <Link
                      href={"/privacy-policy"}
                      style={{ textDecoration: "none" }}
                    >
                      <h4>Privacy Policy</h4>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={"/terms"} style={{ textDecoration: "none" }}>
                      <h4>Terms of Use</h4>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={"/security"} style={{ textDecoration: "none" }}>
                      <h4>Security</h4>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <div className="desc_banner_img">
          <img
            className="desc_banner_img"
            src="/banner2.png"
            alt=""
            style={{ width: "-webkit-fill-available" }}
          />
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
