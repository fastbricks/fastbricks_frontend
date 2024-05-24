// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import {
//   CustomLeftArrow,
//   CustomRightArrow,
// } from "@/components/services/helper/carouselarrowButton";

// function HomeCarousel() {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 1,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   const data = [
//     {
//       id: "1",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/fastbricks-blog-666fb.appspot.com/o/mockup-engineer-zoom.jpeg?alt=media&token=180abf5d-9ea3-4af2-8822-264d3602f000",
//     },
//     {
//       id: "2",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/fastbricks-blog-666fb.appspot.com/o/mockupreal.jpeg?alt=media&token=81276a33-c081-468d-9675-1dd9ffba67f4",
//     },
//   ];
//   return (
//     <div>
//       <Carousel
//         responsive={responsive}
//         autoPlay={true}
//         infinite={true}
//         autoPlaySpeed={10000}
//         className=" sm:h-[82vh] h-[200px] rounded-lg"
//         customLeftArrow={<CustomLeftArrow />}
//         customRightArrow={<CustomRightArrow />}
//         showDots={true}
//         dotListClass="custom-dot-list"
//         customDot={<CustomDot />}
//       >
//         {data.map((data) => {
//           return (
//             <div key={data.id} className=" w-full object-fill">
//               <img
//                 className="object-contain h-[100vh] sm:object-cover sm:h-[100vh]"
//                 src={data.image}
//                 alt="banner"
//                 loading="lazy"
//               />
//             </div>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// }

// export default HomeCarousel;
// const CustomDot = ({ onClick, active }) => {
//   return (
//     <div className=" rounded-md">
//       <button
//         className={`${
//           active ? "bg-red-300 rounded-md" : " bg-[#ffffff58]"
//         } w-10 h-2 transition-all duration-300 rounded-md`}
//         onClick={() => onClick()}
//       ></button>
//     </div>
//   );
// };
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClipLoader } from "react-spinners";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "@/components/services/helper/carouselarrowButton";

function HomeCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const data = [
    {
      id: "1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fastbricks-blog-666fb.appspot.com/o/mockup-engineer-zoom.jpeg?alt=media&token=180abf5d-9ea3-4af2-8822-264d3602f000",
    },
    {
      id: "2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fastbricks-blog-666fb.appspot.com/o/mockupreal.jpeg?alt=media&token=81276a33-c081-468d-9675-1dd9ffba67f4",
    },
  ];

  const [loading, setLoading] = useState(Array(data.length).fill(true)); // Array to manage loading state for each image

  const handleImageLoad = (index) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={10000}
        className="sm:h-[82vh] h-[200px] rounded-lg"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        showDots={true}
        dotListClass="custom-dot-list"
        customDot={<CustomDot />}
      >
        {data.map((item, index) => (
          <div key={item.id} className="w-full object-fill relative">
            {loading[index] && (
              <div className="absolute inset-0 flex justify-center items-center">
                <ClipLoader
                  size={50}
                  color={"#f87171"}
                  loading={loading[index]}
                />
              </div>
            )}
            <img
              className={`object-contain h-[100vh] sm:object-cover sm:h-[100vh] ${
                loading[index] ? "opacity-0" : "opacity-100"
              }`}
              src={item.image}
              alt="banner"
              loading="lazy"
              onLoad={() => handleImageLoad(index)} // Set loading to false when image is loaded
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

const CustomDot = ({ onClick, active }) => {
  return (
    <div className="rounded-md">
      <button
        className={`${
          active ? "bg-red-300 rounded-md" : "bg-[#ffffff58]"
        } w-10 h-2 transition-all duration-300 rounded-md`}
        onClick={() => onClick()}
      ></button>
    </div>
  );
};

export default HomeCarousel;
