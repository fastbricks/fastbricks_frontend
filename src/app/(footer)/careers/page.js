"use client";
import animationData from "@/Lottie/hire";
import Lottie from "lottie-react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../../../helper/CustumArrowproduct";
import { Box, Card, Typography, styled } from "@mui/material";
import JobFormDialog from "@/components/JobForm/jobForm";

const CardBox = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(to bottom right, #ffffff83,#ffffff)",
  height: 300,
  width: "100%",
  // marginTop: 10,
  // display: "flex",
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    marginTop: 0,
    height: "50vh",
    zIndex: 50,
    backgroundColor: "#f2f2f2",
    // display: "flex",
    // justifyContent: "center",
    textAlign: "center",
    // alignItems: "center",
  },
}));
const CardBoxTwo = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(to bottom right, #ffffff83,#ffffff)",
  height: 800,
  width: "100%",
  backgroundImage: "url(/career/c1.jpg)",
  backgroundRepeat: "no-repeat",

  backgroundSize: "100% 100%",
  // marginTop: 10,
  // display: "flex",
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    marginTop: 0,
    height: 800,
    zIndex: 50,
    backgroundSize: "cover",

    backgroundColor: "#f2f2f2",
    // display: "flex",
    // justifyContent: "center",
    textAlign: "center",
    // alignItems: "center",
  },
}));
const CardImage = styled(Card)(({ theme }) => ({
  height: "250px",
  width: "300px",
  marginTop: 20,
  marginBottom: 20,
  marginLeft: 20,
  backgroundColor: "transparent",
  [theme.breakpoints.down("md")]: {
    marginTop: 20,
    marginLeft: 20,
    height: "250px",
    width: "90vw",
  },
}));
const CardBoxSlider = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff83",
  borderRadius: 10,
  height: 300,
  width: "100%",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    marginTop: 0,
    height: 300,
    zIndex: 50,
  },
}));
const LottieBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: 300,
  [theme.breakpoints.down("md")]: {
    height: 200,
    width: 200,
  },
}));
const BoxFirst = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  // backgroundColor: "#f7c8bd",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  color: "#010b55",
  fontWeight: 900,
  fontSize: 50,
  fontFamily: "sans-serif",
  fontStyle: "italic",
  marginLeft: "40px",
  [theme.breakpoints.down("md")]: {
    color: "#010b55",
    fontWeight: 900,
    fontSize: 25,
    fontFamily: "sans-serif",
    fontStyle: "italic",
    marginLeft: "40px",
  },
}));
const Logo = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100px",
  },
}));
const FirstText = styled(Typography)(({ theme }) => ({
  color: "#010b5586",
  fontWeight: 900,
  fontSize: 25,
  fontFamily: "sans-serif",
  fontStyle: "italic",
  [theme.breakpoints.down("md")]: {
    color: "#010b5586",
    fontWeight: 900,
    fontSize: 20,
    fontFamily: "sans-serif",
    fontStyle: "italic",
  },
}));
const TagLine = styled(Typography)(({ theme }) => ({
  color: "#010b55",
  fontWeight: 900,
  fontSize: 50,
  fontFamily: "sans-serif",
  fontStyle: "italic",
  [theme.breakpoints.down("md")]: {
    color: "#010b55",
    fontWeight: 800,
    fontSize: 40,
    fontFamily: "sans-serif",
    fontStyle: "italic",
  },
}));

export default function Career() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box sx={{ backgroundColor: "#f8c8bd65" }}>
      <CardBox>
        <BoxFirst sx={{}}>
          <LottieBox>
            <Lottie animationData={animationData} />
          </LottieBox>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Logo src="/img/logo.png" alt="fastbricks" />
            <Box>
              <FirstText>Lets Build</FirstText>
              <Text>TOGETHER</Text>
            </Box>
          </Box>
        </BoxFirst>
      </CardBox>
      <CardBoxSlider>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          infinite={true}
          autoPlay={10000}
        >
          <CardImage>
            <img />
          </CardImage>
          <CardImage>
            <img />
          </CardImage>
          <CardImage>
            <img />
          </CardImage>
          <CardImage>
            <img />
          </CardImage>
        </Carousel>
      </CardBoxSlider>
      <CardBoxTwo>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "30px",
          }}
        >
          <TagLine sx={{}}>Ideate. Implement. Create. Fail. Innovate.</TagLine>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <TagLine>Never</TagLine>
            <Typography
              sx={{
                marginLeft: 5,
                color: "green",
                fontWeight: 900,
                fontSize: 50,
                fontFamily: "sans-serif",
                fontStyle: "italic",
              }}
            >
              GIVEUP
            </Typography>
          </Box>
        </div>
      </CardBoxTwo>
      <div
        style={{
          textAlign: "center",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <h1 style={{ color: "#010b55" }}>
          Constructing a powerful force for change
        </h1>

        <BoxFour
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 40,
            gap: 40,
          }}
        >
          <Card sx={{ backgroundColor: "#b5f7c553" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            vitae non cumque praesentium recusandae hic adipisci, odio
            reprehenderit laborum corporis, voluptates sit cupiditate tempore
            asperiores ullam? Veniam quae cupiditate autem ducimus,
            voluptatibus, ipsam atque adipisci asperiores iusto vitae commodi
            molestiae, porro nostrum quas. Ipsa nam, veritatis deleniti aliquam
            hic tempore!
          </Card>
          <Card sx={{ backgroundColor: "#b5f7c553" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            vitae non cumque praesentium recusandae hic adipisci, odio
            reprehenderit laborum corporis, voluptates sit cupiditate tempore
            asperiores ullam? Veniam quae cupiditate autem ducimus,
            voluptatibus, ipsam atque adipisci asperiores iusto vitae commodi
            molestiae, porro nostrum quas. Ipsa nam, veritatis deleniti aliquam
            hic tempore!
          </Card>
        </BoxFour>
      </div>
      <Box
        sx={{
          backgroundImage: "url(/career/careerimage.jpg)",
          height: 1000,
          backgroundRepeat: "no-repeat",

          backgroundSize: "100% 100%",

          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          // alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 50 }}
        >
          Together We Create
        </Typography>
        <Typography
          sx={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 40 }}
        >
          Join Us
        </Typography>
      </Box>

      <Box>
        <JobFormDialog />
      </Box>
    </Box>
  );
}
const BoxStyle = styled(Box)`
  display: flex;
`;
const BoxFour = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: 40,
  gap: 40,
  // backgroundColor: "#f7c8bd",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
