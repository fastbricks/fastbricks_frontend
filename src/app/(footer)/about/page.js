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

// export const metadata = {
//   title: "Fastbricks | About us",

//   url: "https://fastbricks.in/about",
//   metadataBase: new URL("https://fastbricks.in/about"),
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-US",
//       "de-DE": "/de-DE",
//     },
//   },

//   openGraph: {
//     title: "Fastbricks | About us",

//     url: "https://fastbricks.in/about",
//     metadataBase: new URL("https://fastbricks.in/about"),
//     images: "/img/logo@2x.png",
//   },
// };

export default function About() {
  return (
    <>
      <section className=" bg-white flex flex-col md:flex md:flex-row">
        <div className=" p-5 md:pl-12 w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <b>Fastbricks</b> is a platform which is on an expedition to change
            the way construction is going on in India. We ensure better
            construction materials, services and machineries to our customers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Learn More
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
      <section className="bg-white mt-10">
        <div className="grid justify-between justify-items-center align-middle md:flex p-5">
          <div className="p-5 flex flex-col justify-center w-full md:w-1/2">
            <p className=" text-4xl font-extrabold font-sans p-5">
              Our Mission
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              facilis atque ullam aut nulla maiores perferendis voluptates,
              corporis velit quod debitis aperiam non totam excepturi natus
              suscipit quisquam dolorum eveniet consectetur nostrum quas soluta
              fugiat saepe blanditiis. Aperiam nam porro voluptas hic, omnis
              error voluptate sunt delectus fuga debitis nihil.
            </p>
          </div>
          <div className="p-5 w-full md:w-1/2 flex justify-center ">
            <div className="flex justify-center justify-items-center border-0 shadow-none p-0 items-center flex-col sm:p-5">
              <Card className="p-5 m-2">
                <Typography className="text-blue-gray-900 font-sans text-lg">
                  <b>Fastbricks</b> is a platform which is on an expedition to
                  change the way construction is going on in India. We ensure
                  better construction materials, services and machineries to our
                  customers.
                </Typography>
              </Card>
              <Card className="p-5 m-2">
                <Typography className="text-blue-gray-900 font-sans text-lg">
                  <b>Fastbricks</b> is a platform which is on an expedition to
                  change the way construction is going on in India. We ensure
                  better construction materials, services and machineries to our
                  customers.
                </Typography>
              </Card>
              <Card className="p-5 m-2">
                <Typography className="text-blue-gray-900 font-sans text-lg">
                  <b>Fastbricks</b> is a platform which is on an expedition to
                  change the way construction is going on in India. We ensure
                  better construction materials, services and machineries to our
                  customers.
                </Typography>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="flex  flex-col items-center p-0 justify-center md:flex-row md:p-10">
        <div className="w-full h-96 bg-gray-100 md:w-1/2">
          <div>
            <Lottie
              animationData={animationData3}
              className="flex justify-center items-center w-96"
              loop={true}
            />
          </div>
        </div>
        <div className=" h-96 flex items-center">
          <div className="w-96 h-80 bg-[#212a39] relative right-20 flex items-center p-10">
            <Typography className="text-white font-sans text-lg ">
              <b>Fastbricks</b> is a platform which is on an expedition to
              change the way construction is going on in India. We ensure better
              construction materials, services and machineries to our customers.
            </Typography>
          </div>
        </div>
      </section>
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
          <section className="bg-white mt-10">
            <div className="grid justify-center justify-items-center align-middle md:flex">
              <div className="p-5 flex flex-col justify-center">
                <div>
                  <Lottie
                    animationData={animationData3}
                    className="flex justify-center items-center w-96"
                    loop={true}
                  />
                </div>
              </div>
              <div className="p-5 w-full md:w-2/4 flex justify-center ">
                <div className="flex justify-center justify-items-center border-0 shadow-none p-5 items-center">
                  <Typography className="text-blue-gray-900 font-sans text-lg">
                    <b>Fastbricks</b> is a platform which is on an expedition to
                    change the way construction is going on in India. We ensure
                    better construction materials, services and machineries to
                    our customers.
                  </Typography>
                </div>
              </div>
            </div>
          </section>
        </Box>
        <section className="bg-white mt-10">
          <div className="grid justify-center justify-items-center align-middle md:flex">
            <div className="p-5 flex flex-col justify-center">
              <div>
                <Lottie
                  animationData={animationData4}
                  className="flex justify-center items-center w-96 p-10 sm:p-0"
                  loop={true}
                />
              </div>
            </div>
            <div className="p-5 w-full md:w-2/4 flex justify-center ">
              <div className="flex justify-center justify-items-center border-0 shadow-none p-5 items-center">
                <Typography className="text-blue-gray-900 font-sans text-lg">
                  We provide every required thing in construction journey of our
                  customer whether it is construction materials like bricks,
                  cement, tiles, marble, floorings, reinforcement, sanitary &
                  safety services, paints, sand & gravel, soil etc
                </Typography>
              </div>
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
    </>
  );
}
