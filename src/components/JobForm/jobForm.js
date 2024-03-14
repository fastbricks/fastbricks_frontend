// import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
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

import Lottie from "lottie-react";

import animationData from "../../Lottie/joinus";
const LottieBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: 300,
  [theme.breakpoints.down("md")]: {
    height: 200,
    width: 200,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobFormDialog() {
  const currencies = [
    {
      value: "FD",
      label: "Frontend Developer",
    },
    {
      value: "Flutter",
      label: "Flutter Developer",
    },
    {
      value: "FSD",
      label: "Full stack Developer (MERN)",
    },
    {
      value: "BD",
      label: "Backend Developer ",
    },
    {
      value: "SMM",
      label: "Social media marketing ",
    },
    {
      value: "UI",
      label: "UI/UX Developer ",
    },
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const form = useRef();
  const AlertBox = () => {
    router.push("/thankyou");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b4arawb",
        "template_28o3hlg",
        form.current,
        "2uS6cWxVGAyvXKx12"
      )
      .then(
        (response) => {
          if (response.status === 200) {
            AlertBox();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <ApplyBox>
        <LottieBox>
          <Lottie animationData={animationData} />
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
      </ApplyBox>

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
              <Link href="/about" style={{ textDecoration: "none" }}>
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
              <Link href="/contact" style={{ textDecoration: "none" }}>
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
              <form
                action="#"
                className="space-y-8"
                ref={form}
                onSubmit={sendEmail}
              >
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
                    name="fullname"
                    required
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
                    name="from_email"
                    required
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
                    name="phone"
                    required
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
                    name="resume"
                    required
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
                  <Box
                    // component="form"
                    name="job"
                    sx={{
                      "& .MuiTextField-root": {
                        mt: 3,
                        width: "20rem",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        name="job"
                        required={true}
                        label="Job Openings"
                        defaultValue="Job"
                        sx={{
                          width: "100%",
                          color: "#fd9696",
                          ":hover": {
                            borderColor: "#fd9696",
                          },
                        }}
                      >
                        {currencies.map((option) => (
                          <MenuItem
                            key={option.value}
                            value={option.value}
                            name="job"
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </Box>
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
                    type="submit"
                    value="Send"
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
              </form>
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
const ApplyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "100px",
  },
}));
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
