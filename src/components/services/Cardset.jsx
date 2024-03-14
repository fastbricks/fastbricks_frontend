import React from "react";
import { Box, Card, styled } from "@mui/material";
import Image from "next/image";

function Cardset(props) {
  return (
    <Box>
      <div>
        <WrapperCard>
          {" "}
          {/* <Card
          sx={{
            borderRadius: 5,
            position: "absolute",
            fontWeight: "bold",
            textAlign: "right",
            backgroundColor: "red",
            height: "3vh",
            width: "11vh",
          }}
        >
          <span style={{ color: "white", fontSize: "15px" }}>Rent now!!</span>
        </Card> */}
          <Image
            src={props.img}
            alt=""
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
  [theme.breakpoints.down("md")]: {},
}));
