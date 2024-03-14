import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import Machinecategory from "@/components/services/Machinecategory";
import Quick from "@/components/services/Quick";
import ServiceCategory from "@/components/services/ServiceCategory";
import ServiceList from "@/components/services/ServiceList";
import ServiceSlider from "@/components/services/ServiceSlider";
import Servicecard from "@/components/services/Servicecard";

// import Machinecategory from "@/components/services/Machinecategory";
// import Servicecard from "@/components/services/Servicecard";
// import Sliderrental from "@/components/services/Slider/Sliderrental";
// import Quick from "@/components/services/Quick";
// import ServiceCategory from "@/components/services/ServiceCategory";
// import ServiceList from "@/components/services/ServiceList";
// import ServiceSlider from "@/components/services/ServiceSlider";
import adv from "@/components/services/assets/adv.png";
import poster from "@/components/services/assets/poster.png";
import { Box, Button } from "@mui/material";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <div>
        <ServiceCategory />
        <Box sx={{ margin: "5px" }}>
          <ServiceSlider />
        </Box>
        <Box
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
        </div>
      </div>
      <BottomNavBar />
    </>
  );
}
