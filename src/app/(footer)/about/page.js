"use client";
import YoutubeEmbed from "@/Lottie/youtubeEmbedded";
import { Box, Card, Typography, styled } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import Lottie from "lottie-react";
import { IoChatbox } from "react-icons/io5";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import animationData from "../../../Lottie/stop";
import animationData2 from "../../../Lottie/cons";
import animationData3 from "../../../Lottie/d1";
import animationData4 from "../../../Lottie/d2";
import Testimonials from "@/components/Testimonials/Testimonials";

import { metadata } from "@/components/Footer/metaData";

const LottieBoxTwo = styled(Box)(({ theme }) => ({
  height: 500,
  width: 500,
  [theme.breakpoints.down("md")]: {
    height: 350,
    width: 350,
  },
}));

export default function About() {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
      </head>
      <section className=" bg-white flex flex-col md:flex md:flex-row p-0 md:p-10">
        <div className=" p-5 md:pl-12 w-full md:w-1/2 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 ">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-2xl hidden sm:block">
            <b>Fastbricks</b> is a platform which is on an expedition to change
            the way construction is going on in India. We ensure better
            construction materials, services and machineries to our customers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-xl">
            We are transforming construction materials, machineries and services
            through technology
          </p>
          <button className="bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Explore More
          </button>
        </div>

        <div className=" pl-5 pr-5 h-1/2 w-full md:w-2/3">
          <img
            className="w-full h-full  bg-cover rounded-lg"
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us Background"
          />
        </div>
      </section>
      <section className="bg-white mt-10 p-0 md:p-10">
        <div className="grid justify-between justify-items-center align-middle md:flex p-5">
          <div className="p-5 flex flex-col justify-center w-full md:w-1/2">
            <p className=" text-4xl font-extrabold font-sans p-5">
              Our Mission
            </p>
            <p>
              Fastbricks is a platform which is on an expedition to change the
              way construction is going on in India. We ensure better
              construction materials, services and machineries to our customers.
            </p>
          </div>
          <div className="p-5 w-full md:w-1/2 flex justify-center ">
            <div className="flex justify-center justify-items-center border-0 shadow-none p-0 items-center flex-col sm:p-5">
              <Link
                href={"https://blog.fastbricks.in/"}
                style={{ width: "100%" }}
              >
                <Card className="p-5 m-2 flex items-center gap-5 w-[100%]">
                  <NewspaperIcon className="scale-150" />
                  <Typography className="text-blue-gray-900 font-sans text-lg">
                    Read our Articles
                  </Typography>
                </Card>
              </Link>
              <Link
                href={"https://fastbricks.in/contact"}
                style={{ width: "100%" }}
              >
                <Card className="p-5 m-2 flex items-center gap-5 w-[100%]">
                  <ConnectWithoutContactIcon className="scale-150" />
                  <Typography className="text-blue-gray-900 font-sans text-lg">
                    Contact us
                  </Typography>
                </Card>
              </Link>
              <Link
                href={"https://fastbricks.in/community"}
                style={{ width: "100%" }}
              >
                <Card className="p-5 m-2 flex items-center gap-5 w-[100%]">
                  <IoChatbox className="scale-150" />
                  <Typography className="text-blue-gray-900 font-sans text-lg">
                    Join Our community
                  </Typography>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex  flex-col items-center p-0 justify-center md:flex-row md:p-10">
        <div className="w-full h-96 bg-gray-200 md:w-1/2 flex justify-center items-center">
          <div>
            <Lottie
              animationData={animationData3}
              className="flex justify-center items-center w-96"
              loop={true}
            />
          </div>
        </div>
        <div className=" h-96 flex items-center">
          <div className=" w-80 md:w-96 h-80 bg-[#212a39] relative right-0 md:right-20 flex items-center p-10 bottom-20 md:bottom-0">
            <Typography className="text-white font-sans text-lg ">
              <b>Fastbricks</b> is a platform which is on an expedition to
              change the way construction is going on in India. We ensure better
              construction materials, services and machineries to our customers.
            </Typography>
          </div>
        </div>
      </section>
      <Box sx={{ backgroundColor: "#f8c8bd6s5" }} className="bg-gray-50">
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

        <section className="flex  flex-col items-center p-0 justify-center md:flex-row md:p-10">
          <div className="w-full h-96 bg-gray-200 md:w-1/2 flex justify-center items-center">
            <div>
              <Lottie
                animationData={animationData4}
                className="flex justify-center items-center w-96 p-10 sm:p-0"
                loop={true}
              />
            </div>
          </div>
          <div className=" h-96 flex items-center">
            <div className=" w-80 md:w-96 h-80 bg-[#212a39] relative right-0 md:right-20 flex items-center p-10 bottom-20 md:bottom-0">
              <Typography className="text-white font-sans text-lg ">
                We provide every required thing in construction journey of our
                customer whether it is construction materials like bricks,
                cement, tiles, marble, floorings, reinforcement, sanitary &
                safety services, paints, sand & gravel, soil etc
              </Typography>
            </div>
          </div>
        </section>

        <section className="bg-white mt-10">
          <div className="grid justify-center justify-items-center align-middle md:flex">
            <div className="p-5 flex flex-col justify-center">
              <div></div>
            </div>
            <div className="p-5 w-full md:w-2/4 flex justify-center ">
              <div className="flex justify-center justify-items-center border-0 shadow-none p-5 items-center">
                <Typography className="text-blue-gray-900 font-sans text-lg">
                  <b>Fastbricks</b> will be the first-choice construction
                  partner providing all construction services, machinery rentals
                  to customer.
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <div className="video-responsive ">{/* <YoutubeEmbed /> */}</div>
      </Box>
      <section>
        <Testimonials />
      </section>
    </>
  );
}
