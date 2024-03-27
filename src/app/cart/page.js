"use client";
import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import GroupedButton from "@/components/cart/ButtonGroup";
import Image from "next/image";
import { Box, Card, Typography, styled, Grid, Button } from "@mui/material";
import cart from "@/assets/cart.png";

const cartItems = [
  // {
  //   id: "1",
  //   title: "Tiles- 40mm * 60mm ",
  //   image: "/img/logo.png",
  //   Seller: "Ray materials",
  //   price: "500",
  //   mrp: "600",
  //   discount: "100",
  // },
];

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
`;
const Heading = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
`;
const HeadingText = styled(Typography)`
  color: #878787;
`;

const ContainerOrderDetails = styled(Box)`
  padding: 15px 24px;
  background-color: #fff !important;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;
const Price = styled(Box)`
  float: right;
`;
const Discount = styled(Typography)`
  color: green;
  font-weight: 500;
`;
export default function Cart() {
  const fassured = "";
  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftGrid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((items) => {
              return (
                <Component key={items.id}>
                  <LeftComponent>
                    <img
                      src={items.image}
                      alt=""
                      style={{ height: 110, width: 110 }}
                    />
                    <GroupedButton />
                  </LeftComponent>
                  <Box>
                    <Typography>{items.title}</Typography>
                    <SmallText>
                      {items.Seller}
                      <Box component="span">
                        <img
                          src={fassured}
                          style={{ width: 50, marginLeft: 10 }}
                        />
                      </Box>
                    </SmallText>
                    <Typography style={{ margin: "20px 0px" }}>
                      <Box
                        component="span"
                        style={{ fontSize: 25, fontWeight: 600 }}
                      >
                        ₹{items.price}
                      </Box>
                      &nbsp;&nbsp;&nbsp;
                      <Box component="span" style={{ color: "#878787" }}>
                        <strike>{items.mrp}</strike>
                      </Box>
                      &nbsp;&nbsp;&nbsp;
                      <Box component="span" style={{ color: "#388E3C" }}>
                        {items.discount} off
                      </Box>
                    </Typography>
                    <Button sx={{ color: "#fa936e" }}>Remove</Button>
                  </Box>
                </Component>
              );
            })}
          </LeftGrid>
          <Grid
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
            // style={{ backgroundColor: "#fff" }}
          >
            <div>
              <Heading>
                <HeadingText>Price Details</HeadingText>
              </Heading>
              <ContainerOrderDetails>
                <Typography>
                  Price ({cartItems?.length} item)
                  <Price component="span">₹1200</Price>
                </Typography>
                <Typography>
                  Discount ({cartItems?.length} item)
                  <Price component="span">-₹200</Price>
                </Typography>
                <Typography>
                  Delivery Charges ({cartItems?.length} item)
                  <Price component="span">₹10</Price>
                </Typography>
                <Typography variant="h6">
                  Total amount ({cartItems?.length} item)
                  <Price component="span">₹1010</Price>
                </Typography>
                <Discount>You will save 200 on this order</Discount>
              </ContainerOrderDetails>
            </div>
            <Box
              sx={{
                padding: "10px 10px",
                boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
                borderTop: "1px solid #f0f0f0",
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
            >
              <OrderButton>Place Order</OrderButton>
            </Box>
          </Grid>
        </Container>
      ) : (
        <div className="h-[80vh] flex justify-center items-center">
          <div
            className=" flex justify-center items-center flex-col
          "
          >
            <Image src={cart} className=" h-64 w-56" />
            <Typography className="font-bold font-sans text-xl">
              Oops!
            </Typography>
            <Typography className="font-bold font-sans text-lg">
              Your cart is currently empty.
            </Typography>
          </div>
        </div>
      )}

      <BottomNavBar />
    </>
  );
}

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",

  [theme.breakpoints.down("md")]: {
    padding: "10px 10px",
    marginTop: "56px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 10px",
    marginTop: "0px",
  },
}));
const Component = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #f0f0f0",
  display: "flex",
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {},
}));
const LeftComponent = styled(Box)(({ theme }) => ({
  margin: "20px",
  display: "flex",

  flexDirection: "column",
  [theme.breakpoints.down("md")]: {},
}));

const SmallText = styled(Typography)(({ theme }) => ({
  color: "#878787",
  fontSize: "14px",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {},
}));

const LeftGrid = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",

  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
    paddingRight: "0px",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
    paddingRight: "0px",
  },
}));
const OrderButton = styled(Button)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  backgroundColor: " #fa936e !important",
  color: "#fff !important",
  borderRadius: "4px",
  padding: "10px",
  width: " 100%",

  [theme.breakpoints.down("sm")]: {
    width: " 100%",
    padding: "15px",
  },
  [theme.breakpoints.down("md")]: {},
}));
