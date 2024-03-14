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
            backgroundColor: "#f7c8bd",
            width: "100vw",
            overflowX: "hidden",
            backgroundImage: "url(/login/loginred1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: "100%",
          }}
        >
          <AppBar
            sx={{
              position: "relative",
              //   backgroundColor: "#f7c8bd",
              backgroundColor: "transparent",

              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 2,
            }}
          >
            <IconButton
              edge="start"
              color="red"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Toolbar sx={{}}>
              <BootstrapDialogTitle>
                <div className="nav_left">
                  <div
                    style={{
                      display: "flex",
                      gap: 5,
                    }}
                  >
                    <h3 style={{ color: "red", fontWeight: 900 }}>
                      Fast
                      <span style={{ color: "brown", fontWeight: 900 }}>
                        bricks
                      </span>
                    </h3>
                    <img
                      src="/img/logo.png"
                      className="nav_logo"
                      alt="fastbricks"
                      style={{ transform: "scale(1.5)", marginRight: "10px" }}
                    />
                  </div>
                </div>
              </BootstrapDialogTitle>
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
                            Sign up
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
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
const FirstCard = styled(Box)(({ theme }) => ({
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "white",
  zIndex: 999,
  //   borderTopLeftRadius: "30px",
  //   borderTopRightRadius: "30px",
  //   transform: "scale3d(1.05, 1.05, 1)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    // borderTopLeftRadius: "30px",
    // borderTopRightRadius: "30px",
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
