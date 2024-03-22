// "use client";
import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import ServiceCategory from "@/components/CategoryService/ServiceCategory";
import HomeCarousel from "@/components/HomeCraousel/HomeCarousel";
import Machinecategory from "@/components/services/Machinecategory";
import Quick from "@/components/services/Quick";

import ServiceCard from "@/components/services/ServiceCard";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import { Card, Typography } from "@mui/material";
import TypeAnimationComp from "@/components/TypeAnimation/TypeAnimation";
import Poster from "@/components/featured/Poster";
import PosterSecond from "@/components/featured/PosterSecond";
export const metadata = {
  title: "Fastbricks | Build Strong",
  description: "Fastbricks - with you in your construction journey ",
  url: "https://fastbricks.in/",
  metadataBase: new URL("https://fastbricks.in/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  openGraph: {
    title: "Fastbricks | Build Strong",
    description: "Fastbricks - with you in your construction journey ",
    url: "https://fastbricks.in/",
    metadataBase: new URL("https://fastbricks.in/"),
    images: "/img/logo@2x.png",
  },
};

export default function Home() {
  return (
    <main className="pl-0 pr-0 md:pl-20 md:pr-20">
      <div>
        <BottomNavBar />
        <div className="w-full flex flex-col justify-center justify-items-center gap-10 p-5 items-center md:flex-row sm:gap-16">
          <div className="w-full md:2/4">
            <Typography className=" font-sans font-semibold text-[26px] leading-[40px] text-gray-600 pb-5 sm:text-[36px] pl-2 sm:pl-0 pr-2 sm:pr-0 sm:leading-[44px] sm:text-gray-800 hidden md:block">
              Give contracts for different <br />
              services
            </Typography>
            <ServiceCategory />
          </div>
          <Card className="w-full md:2/4 rounded-lg md:h-full p-0 sm:p-2">
            <HomeCarousel />
          </Card>
        </div>

        <ServiceCard />
        <Poster />
        <PosterSecond />
        <Quick />

        <div style={{ paddingTop: "8px" }}>
          <Machinecategory />
        </div>
      </div>
    </main>
  );
}
