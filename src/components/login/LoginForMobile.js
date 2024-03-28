import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import Link from "next/link";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Card, Box, TextField } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { FcGoogle } from "react-icons/fc";

const accountInitialValue = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};
export default function LoginForMobile() {
  const [account, toggleaccount] = useState(accountInitialValue.login);

  const toggleSignup = () => {
    toggleaccount(accountInitialValue.signup);
  };
  const toggleSignin = () => {
    toggleaccount(accountInitialValue.login);
  };

  return (
    <Box
      sx={{
        backgroundColor: "",
        width: "100vw",
        height: "100vh",
        boxShadow: "0px -1px 5cap 0px rgba(150, 150, 150, 0.2)",

        // overflowX: "hidden",
        backgroundImage: "url(/login/loginred1-.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "100%",
        paddingTop: "50px",
      }}
    >
      <FirstCard sx={{}}>
        <div style={{ display: "grid", justifyContent: "center" }}>
          {account.view === "login" ? (
            <Box>
              <Box className="login_box" sx={{ display: "flex" }}>
                <div
                  sx={{
                    display: "grid",
                    margin: "5px",
                    padding: "10px",
                  }}
                >
                  <AppBar
                    sx={{
                      position: "relative",
                      backgroundColor: "#fff",
                      boxShadow: "none",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingLeft: 2,
                    }}
                  >
                    <Toolbar className="flex justify-center w-full">
                      <Typography className="text-gray-600 font-bold text-lg">
                        Login to continue
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <Box
                    sx={{
                      display: "grid",
                      padding: "10px 20px 20px 20px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Enter Phone number"
                      variant="outlined"
                      color="warning"
                    />
                    <TermBoxStyle>
                      By continuing, you agree to Fastbricks&apos;s &nbsp;
                      <StyledLink href={{}}>Terms of Use</StyledLink>
                      &nbsp; and&nbsp;
                      <StyledLink href={{}}>Privacy Policy</StyledLink>.
                    </TermBoxStyle>
                    <div className="flex justify-center w-full justify-items-center items-center">
                      <Button
                        variant="contained"
                        className="bg-orange-500 absolute flex bottom-0 w-[80%] m-2 p-3 "
                        disableElevation
                        sx={{
                          backgroundColor: "red",
                          ":hover": {
                            backgroundColor: "#fb5d0e",
                          },
                        }}
                      >
                        Request OTP
                      </Button>
                    </div>
                  </Box>
                </div>
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "grid",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Divider>
                  {" "}
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: 13.5,
                      fontWeight: 600,
                    }}
                  >
                    New to Fastbricks?
                  </Typography>
                </Divider>

                <div onClick={toggleSignup}>
                  <Button autoFocus>
                    <span style={{ textTransform: "none", color: "#fd9696" }}>
                      Create Your Fastbricks account
                    </span>
                  </Button>
                </div>
              </Box>
            </Box>
          ) : (
            <Box>
              <Box className="login_box" sx={{ display: "flex" }}>
                <div
                  sx={{
                    display: "grid",
                    margin: "5px",
                    padding: "10px",
                  }}
                >
                  <AppBar
                    sx={{
                      position: "relative",
                      backgroundColor: "#fff",
                      boxShadow: "none",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingLeft: 2,
                    }}
                  >
                    <Toolbar className="flex justify-center w-full">
                      <Typography className="text-gray-600 font-bold text-lg">
                        Welcome! you are new here!
                      </Typography>
                    </Toolbar>
                  </AppBar>

                  <Box
                    sx={{
                      display: "grid",
                      padding: "10px 20px 20px 20px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Enter Phone number"
                      variant="outlined"
                      color="warning"
                    />
                    <TermBoxStyle>
                      By continuing, you agree to Fastbricks&apos;s &nbsp;
                      <StyledLink href={{}}>Terms of Use</StyledLink>
                      &nbsp; and&nbsp;
                      <StyledLink href={{}}>Privacy Policy</StyledLink>.
                    </TermBoxStyle>
                    <div className="flex justify-center w-full justify-items-center items-center">
                      <Button
                        variant="contained"
                        className="bg-orange-500 flex absolute bottom-0 w-[80%] m-2 p-3 "
                        disableElevation
                        sx={{
                          backgroundColor: "red",
                          ":hover": {
                            backgroundColor: "#fb5d0e",
                          },
                        }}
                      >
                        continue
                      </Button>
                    </div>
                  </Box>
                </div>
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "grid",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Divider>
                  <Typography sx={{ color: "black", fontSize: 13.5 }}>
                    Existing User?
                  </Typography>
                </Divider>
                <div onClick={toggleSignin}>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      backgroundColor: "#fff",
                      height: "100%",
                      width: "100%",
                      color: "#fd9696",
                      ":hover": {
                        backgroundColor: "#eee",
                      },
                    }}
                  >
                    <span style={{ textTransform: "none", color: "#fd9696" }}>
                      Sign in
                    </span>
                  </Button>
                </div>
              </Box>
            </Box>
          )}

          <div className="flex justify-center justify-items-center w-full">
            <button className="flex items-center border-[1px] border-gray-300 justify-center gap-5 bg-gray-50 pt-3 rounded-lg pb-3 pl-5 pr-5">
              <div className="">
                <FcGoogle />
              </div>
              <Typography>Sign in with google</Typography>
            </button>
          </div>
        </div>
      </FirstCard>
    </Box>
  );
}
const FirstCard = styled(Box)(({ theme }) => ({
  zIndex: 999,

  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100vh",
  },
}));
const TermBoxStyle = styled(Box)(({ theme }) => ({
  color: "#878787",
  fontSize: 17.5,
  fontWeight: 400,
  marginTop: "18px",
  marginBottom: "8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: 10.5,
    marginTop: "8px",
    marginBottom: "5px",
  },
}));
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fd9696;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
