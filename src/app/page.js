// "use client";
import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import ServiceCategory from "@/components/CategoryService/ServiceCategory";
import HomeCarousel from "@/components/HomeCraousel/HomeCarousel";
import Machinecategory from "@/components/services/Machinecategory";
import Quick from "@/components/services/Quick";
// import ServiceCategory from "@/components/services/ServiceCategory";
import ServiceList from "@/components/services/ServiceList";
import ServiceSlider from "@/components/services/ServiceSlider";
import Servicecard from "@/components/services/Servicecard";
import adv from "@/components/services/assets/adv.png";
import poster from "@/components/services/assets/poster.png";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { Card, Typography } from "@mui/material";
import TypeAnimationComp from "@/components/TypeAnimation/TypeAnimation";
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
        <div className="w-full flex flex-col justify-center justify-items-center gap-20 p-5 items-center md:flex-row">
          <div className="w-full md:2/4">
            <Typography className=" font-sans font-semibold text-[36px] leading-[44px] text-gray-800 pb-5">
              Give construction contracts for different services
            </Typography>
            <ServiceCategory />
          </div>
          <Card className="w-full md:2/4 rounded-lg md:h-full p-2">
            <HomeCarousel />
          </Card>
        </div>

        {/* <Box
          sx={{
            display: "normal",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "white",
            padding: "5px",
          }}
        >
          <p
            style={{
              fontFamily: "sans-serif",
              fontWeight: 500,
              fontSize: "25px",
              paddingLeft: "15px",
            }}
          >
            Trending Services
          </p>
          <ServiceList />
        </Box>
        <Box sx={{ padding: "10px" }}>
          <div className="container_service_adv">
            <Image src={adv} className="img" />
            <div className="center_services_box_adv">
              <Box className="service_content_text_adv">
                <p>Upto 10% Off On Home Decor Service</p>
              </Box>

              <Button
                variant="contained"
                className="service_content_button_adv"
              >
                Book Now
              </Button>
            </div>
          </div>
        </Box>
        <Quick />
        <div style={{ paddingTop: "8px" }}>
          <Machinecategory />

          <Box sx={{ marginTop: "5px" }}>
            <Servicecard />
          </Box>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Image src={poster} className="img" />
        </div> */}
      </div>
    </main>
  );
}
