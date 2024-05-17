import React from "react";
import { Box, Card, styled } from "@mui/material";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Cardset({ img }) {
  return (
    <Box>
      <div>
        <WrapperCard>
          <LazyLoadImage
            src={img}
            alt=""
            className="rounded-lg "
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        </WrapperCard>
      </div>
    </Box>
  );
}

export default Cardset;
const WrapperCard = styled(Box)(({ theme }) => ({
  padding: "10px",
  objectFit: "cover",
  height: 300,
  [theme.breakpoints.down("md")]: {
    height: 200,
  },
}));
