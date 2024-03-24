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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
export default function LoginForMobile() {
  const [open, setOpen] = React.useState(false);
  const [account, toggleaccount] = useState(accountInitialValue.login);

  const toggleSignup = () => {
    toggleaccount(accountInitialValue.signup);
  };
  const toggleSignin = () => {
    toggleaccount(accountInitialValue.login);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          height: "90vh",
        }}
      >
        <img src="/login/notloginn.jpg" style={{ width: "400px" }} />

        <Box sx={{ textAlign: "center" }}>
          <h3>You are not logged in yet</h3>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            className="bg-orange-500"
            sx={{
              backgroundColor: "#fa936e",
              marginY: 2,
              ":hover": {
                backgroundColor: "#fa936e",
              },
            }}
          >
            Login Now
          </Button>
        </Box>
      </Box>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box
          sx={{
            backgroundColor: "",
            width: "100vw",
            boxShadow: "0px -1px 5cap 0px rgba(150, 150, 150, 0.2)",

            overflowX: "hidden",
            backgroundImage: "url(/login/loginred1-.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: "100%",
          }}
        >
          <AppBar
            sx={{
              position: "relative",
              backgroundColor: "#fff",
              boxShadow: "0px -1px 5cap 0px rgba(150, 150, 150, 0.2)",
              // boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 2,
            }}
          >
            <Toolbar className="flex justify-center w-full">
              <IconButton
                edge="start"
                color="gray"
                onClick={handleClose}
                aria-label="close"
                className="absolute left-0"
              >
                <WestIcon />
              </IconButton>

              <Typography className="text-gray-600 font-bold text-lg">
                Login to continue
              </Typography>
            </Toolbar>
          </AppBar>
          <FirstCard sx={{}}>
            <div style={{ display: "grid", justifyContent: "center" }}>
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
      </Dialog>
    </React.Fragment>
  );
}
const FirstCard = styled(Box)(({ theme }) => ({
  zIndex: 999,

  [theme.breakpoints.down("md")]: {
    width: "100%",
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
