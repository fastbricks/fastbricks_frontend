"use client";
import { useState } from "react";
import React, { useRef } from "react";

import { Box, Card, Typography, styled, Paper, Link } from "@mui/material";
import animationData from "../../../Lottie/contact";
import animationData2 from "../../../Lottie/contactanim";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { WhatsApp } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

import Lottie from "lottie-react";

const LottieBoxTwo = styled(Box)(({ theme }) => ({
  height: 80,
  width: 80,
  [theme.breakpoints.down("md")]: {
    height: 70,
    width: 70,
  },
}));

export default function Contact() {
  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b4arawb",
        "template_c9opggj",
        form.current,
        "2uS6cWxVGAyvXKx12"
      )
      .then(
        (response) => {
          if (response.status === 200) {
            setIsSubmitted(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
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
                color: gray;
                font-family: "Righteous", serif;
                font-size: 5em;
                text-shadow: 0.02em 0.02em 0 #000;
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
        <Wrapper>
          <img src="/contact.jpg" className="w-[30rem]" alt="contact" />
          <div className=" flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
              {!isSubmitted ? (
                <form onSubmit={sendEmail} ref={form}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <div className="text-center text-orange-600">
                  <p>Thank you for your submission!</p>
                  <p>We will get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
        </Wrapper>

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
  );
}

const Wrapper = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  marginTop: 2,
  padding: "10px",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
}));
