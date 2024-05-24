"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
import { Box, Card, TextField, Divider, Typography } from "@mui/material";
import Link from "next/link";
import LoginForMobile from "@/components/login/LoginForMobile";
import { FcGoogle } from "react-icons/fc";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#fd9696",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const accountInitialValue = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};
// import LoginDialog from "@/components/Navbar/loginDialog";

export default function Login() {
  const [account, toggleaccount] = useState(accountInitialValue.login);

  const toggleSignup = () => {
    toggleaccount(accountInitialValue.signup);
  };
  const toggleSignin = () => {
    toggleaccount(accountInitialValue.login);
  };

  return (
    <>
      <head>
        <title>Login with fastbricks</title>
      </head>
      <Box sx={{ backgroundColor: "white" }}>
        <Wrapper>
          <FirstCard sx={{}}>
            <div style={{ display: "grid", justifyContent: "center" }}>
              <DialogContent>
                {account.view === "login" ? (
                  <Box>
                    <Box className="login_box" sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "grid",
                          margin: "5px",
                          padding: "10px",
                        }}
                      >
                        <Box className="login_Textfield_box">
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: 25,
                              color: "grey",
                              paddingLeft: "20px",
                            }}
                          >
                            Sign in
                          </Typography>
                        </Box>
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
                          <Button
                            variant="contained"
                            disableElevation
                            className="bg-red-500"
                            sx={{
                              margin: "5px 5px",
                              backgroundColor: "#fb5d0e",
                              ":hover": {
                                backgroundColor: "#fb5d0e",
                              },
                            }}
                          >
                            Request OTP
                          </Button>
                        </Box>
                      </Box>
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
                        <Typography sx={{ color: "grey", fontSize: 13.5 }}>
                          New to Fastbricks?
                        </Typography>
                      </Divider>

                      <div onClick={toggleSignup}>
                        <Button autoFocus>
                          <span
                            style={{ textTransform: "none", color: "#fd9696" }}
                          >
                            Create Your Fastbricks account
                          </span>
                        </Button>
                      </div>
                    </Box>
                  </Box>
                ) : (
                  <Box>
                    <Box className="login_box" sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "grid",
                          margin: "5px",
                          padding: "10px",
                        }}
                      >
                        <Box className="login_Textfield_box">
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: 25,
                              color: "grey",
                              paddingLeft: "20px",
                            }}
                          >
                            Welcome! you are new here!
                          </Typography>
                        </Box>
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
                          <Button
                            variant="contained"
                            className="bg-orange-500"
                            disableElevation
                            sx={{
                              margin: "5px 5px",
                              backgroundColor: "red",
                              ":hover": {
                                backgroundColor: "#fb5d0e",
                              },
                            }}
                          >
                            continue
                          </Button>
                        </Box>
                      </Box>
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
                        <Typography sx={{ color: "grey", fontSize: 13.5 }}>
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
                            textTransform: "capitalize",
                            ":hover": {
                              backgroundColor: "#eee",
                            },
                          }}
                        >
                          sign in
                        </Button>
                      </div>
                    </Box>
                  </Box>
                )}
              </DialogContent>
              <div className="pb-16 text-center">
                or
                <div className="flex justify-center justify-items-center w-full">
                  <button className="flex items-center border-[1px] border-gray-300 justify-center gap-5 bg-gray-50 pt-3 rounded-lg pb-3 pl-5 pr-5">
                    <div className="">
                      <FcGoogle className="scale-150" />
                    </div>
                    <Typography>Sign in with google</Typography>
                  </button>
                </div>
              </div>
            </div>
          </FirstCard>
          <SecondCard sx={{}}>
            <img
              src="/login/loginred1.png"
              style={{ width: "100%", height: "100%" }}
            />
          </SecondCard>
        </Wrapper>
        <LoginForMobileCard>
          <LoginForMobile />
        </LoginForMobileCard>
      </Box>
    </>
  );
}
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
const FirstCard = styled(Card)(({ theme }) => ({
  width: "40%",
  height: "100%",
  marginTop: 50,
  marginLeft: 50,
  backgroundColor: "#ffffff",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: 0,
  },
}));
const SecondCard = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "90vh",
  backgroundColor: "#f7c8bd",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  justifyContent: "space-between",
  paddingTop: 0,
  flexDirection: "row",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "flex",
    flexDirection: "column",
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

const LoginForMobileCard = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "none",
  },
}));
