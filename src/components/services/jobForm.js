"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import JobOpening from "./jobOpening";
import {
  Box,
  Card,
  Typography,
  styled,
  InputBase,
  Button,
} from "@mui/material";
import Link from "next/link";
import { Style } from "@mui/icons-material";
import Lottie from "react-lottie";
import animationData from "../../Lottie/joinus";
const LottieBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: 300,
  [theme.breakpoints.down("md")]: {
    height: 100,
    width: 100,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <LottieBox>
          <Lottie options={defaultOptions} />
        </LottieBox>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            boxShadow: "none",
            backgroundColor: "#86B2BB",
            fontWeight: "bold",
            color: "blue",
            width: "200px",
            height: "50px",
            ":hover": {
              boxShadow: "none",
              backgroundColor: "#86B2BB99",
              fontWeight: "bold",
            },
          }}
        >
          <h5>Apply Now</h5>
          <style jsx>{`
            h5 {
              font-size: 25px;
              font-family: "Oswald", sans-serif;
              letter-spacing: 0;
              padding: 0.25em 0 0.325em;
              display: block;
              margin: 0 auto;
              text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

              /* Clip Background Image */

              background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png)
                repeat-y;
              -webkit-background-clip: text;
              background-clip: text;

              /* Animate Background Image */

              -webkit-text-fill-color: transparent;
              -webkit-animation: aitf 80s linear infinite;

              /* Activate hardware acceleration for smoother animations */

              -webkit-transform: translate3d(0, 0, 0);
              -webkit-backface-visibility: hidden;
            }

            /* Animate Background Image */

            @-webkit-keyframes aitf {
              0% {
                background-position: 0% 50%;
              }
              100% {
                background-position: 100% 50%;
              }
            }
            @media only screen and (min-width: 321px) and (max-width: 768px) {
              h5 {
                font-size: 20px;
                white-space: nowrap;
              }
            }
          `}</style>
        </Button>
      </Box>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className="navbar_jobDialog">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/img/logo.png" alt="fastbricks" />
              <style jsx>
                {`
                  img {
                    width: 55px;
                    height: 90%;
                  }
                  @media only screen and (min-width: 321px) and (max-width: 768px) {
                    img {
                      width: 30px;
                      height: 90%;
                    }
                  }
                `}
              </style>
              <div className="nav_logo_text">
                <p className="fastbricks_text1">FAST</p>
                <p className="fastbricks_text2">BRICKS</p>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: 0,
              }}
            >
              <Link href="/About" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    padding: 2,
                    ":hover": {
                      color: "#fd9696",
                      cursor: "pointer",
                    },
                  }}
                  color="red"
                >
                  About us
                </Typography>
              </Link>
              <Link href="/Contact" style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  sx={{
                    padding: 2,
                    ":hover": {
                      color: "#fd9696",
                      cursor: "pointer",
                    },
                  }}
                  color="red"
                >
                  Contact us
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Wrapper>
          <MainBox>
            <CardBox></CardBox>
            <CardBoxForm>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#fd9696",
                    fontSize: "1.875rem",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  We are hiring!
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Apply now!
                </Typography>
              </Box>

              <Box
                sx={{
                  margin: 2,
                  marginBottom: 0.5,
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: ".875rem",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Full name
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InputBase
                  fullWidth={false}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    color: "#fd9696",
                    borderRadius: 2,
                    paddingLeft: 1,
                    paddingRight: 1,
                    border: 2,
                    borderColor: "#fff",
                    width: "90%",
                    height: "2.8em",
                    ":hover": { borderColor: "#fd9696" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  margin: 2,
                  marginBottom: 0.5,
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: ".875rem",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Email
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InputBase
                  fullWidth={false}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    color: "#fd9696",
                    borderRadius: 2,
                    paddingLeft: 1,
                    paddingRight: 1,
                    border: 2,
                    borderColor: "#fff",
                    width: "90%",
                    height: "2.8em",
                    ":hover": { borderColor: "#fd9696" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  margin: 2,
                  marginBottom: 0.5,
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: ".875rem",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Phone number
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InputBase
                  fullWidth={false}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    color: "#fd9696",
                    borderRadius: 2,
                    paddingLeft: 1,
                    paddingRight: 1,
                    border: 2,
                    borderColor: "#fff",
                    width: "90%",
                    height: "2.8em",
                    ":hover": { borderColor: "#fd9696" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  margin: 2,
                  marginBottom: 0.5,
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: ".875rem",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Link to your Resume
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InputBase
                  fullWidth={false}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    color: "#fd9696",
                    borderRadius: 2,
                    paddingLeft: 1,
                    paddingRight: 1,
                    border: 2,
                    borderColor: "#fff",
                    width: "90%",
                    height: "2.8em",
                    ":hover": { borderColor: "#fd9696" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <JobOpening />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 3,
                  marginRight: 3,
                }}
              >
                <TermBoxStyle>
                  By continuing, you agree to Fastbricks&apos;s &nbsp;
                  <StyledLink href={{}}>Terms of Use</StyledLink>&nbsp;
                  and&nbsp;
                  <StyledLink href={{}}>Privacy Policy</StyledLink>.
                </TermBoxStyle>
              </Box>
              <Box
                sx={{
                  margin: 2,
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    padding: "8px 33px",
                    pl: 5,
                    backgroundColor: "#fd9696",
                    boxShadow: " 0px 4px 5px 0px rgb(255 255 255 / 14%)",
                    "&:hover": {
                      backgroundColor: "#fd9696",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#fd9696",
                    fontSize: ".875rem",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  WE WILL BE IN TOUCH SOON!
                </Typography>
              </Box>
            </CardBoxForm>
          </MainBox>
        </Wrapper>
      </Dialog>
    </div>
  );
}
const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const CardBoxForm = styled(Card)(({ theme }) => ({
  backgroundColor: "#ffffff83",
  borderRadius: 10,
  height: 660,
  width: "35vw",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    width: "95vw",
    marginTop: 0,
    height: 660,
    zIndex: 50,
  },
}));
const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: 10,
  height: 720,
  width: "55vw",
  [theme.breakpoints.down("md")]: {
    width: 0,
    height: 0,
    zIndex: 0,
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundImage: "url(/img/Intersection_33@2x.png)",
  backgroundRepeat: "no-repeat",
  paddingBottom: "0px",
  backgroundColor: "#f8c8bd65",
  backgroundSize: "cover",
  marginTop: "56px",
  [theme.breakpoints.down("md")]: {
    backgroundImage: "url(/img/Intersection_33@2x.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: "8vh",
    paddingBottom: "90px",
  },
}));
const TermBoxStyle = styled(Box)(({ theme }) => ({
  color: "black",
  fontSize: 17.5,
  fontWeight: 400,
  marginTop: "2px",
  marginBottom: "0px",
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
