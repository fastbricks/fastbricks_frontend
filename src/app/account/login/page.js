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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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
    <Box sx={{ backgroundColor: "white" }}>
      <Wrapper>
        <FirstCard sx={{}}>
          <div style={{ display: "grid", justifyContent: "center" }}>
            <BootstrapDialogTitle>
              {/* <div className="nav_left">
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <img
                    src="/img/logo.png"
                    className="nav_logo"
                    alt="fastbricks"
                    style={{ transform: "scale(1.5)", marginRight: "10px" }}
                  />
                  <div className="nav_logo_text">
                    <p className="fastbricks_text1">FAST</p>
                    <p className="fastbricks_text2">BRICKS</p>
                  </div>
                </div>
              </div> */}
            </BootstrapDialogTitle>
            <DialogContent>
              {account.view === "login" ? (
                <Box>
                  <Box className="login_box" sx={{ display: "flex" }}>
                    <Card
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
                        sx={{ display: "grid", padding: "10px 20px 20px 20px" }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Enter Phone number"
                          variant="outlined"
                          color="warning"
                        />
                        <TermBoxStyle>
                          By continuing, you agree to Fastbricks&apos;s &nbsp;
                          <StyledLink href={{}}>Terms of Use</StyledLink>&nbsp;
                          and&nbsp;
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
                    </Card>
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
                      <Typography sx={{ color: "grey", fontSize: 13.5 }}>
                        New to Fastbricks?
                      </Typography>
                    </Divider>

                    <Card onClick={toggleSignup}>
                      <Button autoFocus>
                        <span
                          style={{ textTransform: "none", color: "#fd9696" }}
                        >
                          Create Your Fastbricks account
                        </span>
                      </Button>
                    </Card>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Box className="login_box" sx={{ display: "flex" }}>
                    <Card
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
                          Sign up
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "grid", padding: "10px 20px 20px 20px" }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Enter Phone number"
                          variant="outlined"
                          color="warning"
                        />
                        <TermBoxStyle>
                          By continuing, you agree to Fastbricks&apos;s &nbsp;
                          <StyledLink href={{}}>Terms of Use</StyledLink>&nbsp;
                          and&nbsp;
                          <StyledLink href={{}}>Privacy Policy</StyledLink>.
                        </TermBoxStyle>
                        <Button
                          variant="contained"
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
                    </Card>
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
                    <Card onClick={toggleSignin}>
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
                        sign in
                      </Button>
                    </Card>
                  </Box>
                </Box>
              )}
            </DialogContent>
          </div>
        </FirstCard>
        <SecondCard sx={{}}>
          <img
            src="/login/loginred1.png"
            style={{ width: "100%", height: "92vh" }}
          />
        </SecondCard>
      </Wrapper>
      <LoginForMobileCard>
        <LoginForMobile />
      </LoginForMobileCard>
    </Box>
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
  paddingTop: 5,
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
