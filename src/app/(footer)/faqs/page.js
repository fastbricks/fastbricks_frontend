"use client";
import AccordionComponent from "@/components/common/AccordionComponent";
import { Card, styled, Box, Typography, Button } from "@mui/material";
export default function Faqs() {
  return (
    <div style={{ padding: "10px 10px" }}>
      <Container>
        <Wrapper style={{}}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "sans-serif", fontWeight: 800 }}
          >
            Frequently Asked
            <br /> Questions ?
          </Typography>
          <Box sx={{ paddingRight: "50px" }}>
            <Typography sx={{ paddingTop: "10px" }}>
              Fastbricks Help Center resolves construction services and rentals
              issues promptly.Get help with services, rentals, and more.
              Simplify construction marketplace experience.
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="warning"
            className="bg-orange-500"
            sx={{ paddingTop: "10px", margin: "10px 0px" }}
          >
            Read more
          </Button>
          <Box sx={{ paddingTop: "10px" }}>
            <img src="/faq.jpg" alt="" width={"100%"} />
          </Box>
        </Wrapper>
        <div style={{ padding: "10px" }}>
          <AccordionComponent />
          <AccordionComponent />
          <AccordionComponent />
          <AccordionComponent />
        </div>
      </Container>
    </div>
  );
}
const Container = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    justifyItems: "space-around",
    alignItems: "start",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  width: "60%",
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "20px",
  },
}));
