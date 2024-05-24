// import React, { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemButton from "@mui/material/ListItemButton";
// import List from "@mui/material/List";
// import { styled } from "@mui/material/styles";

// import Divider from "@mui/material/Divider";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
// import Slide from "@mui/material/Slide";
// import PropTypes from "prop-types";
// import Link from "next/link";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import { Card, Box, TextField } from "@mui/material";
// import WestIcon from "@mui/icons-material/West";
// import { FcGoogle } from "react-icons/fc";

// const accountInitialValue = {
//   login: {
//     view: "login",
//   },
//   signup: {
//     view: "signup",
//   },
// };
// export default function LoginForMobile() {
//   const [account, toggleaccount] = useState(accountInitialValue.login);

//   const toggleSignup = () => {
//     toggleaccount(accountInitialValue.signup);
//   };
//   const toggleSignin = () => {
//     toggleaccount(accountInitialValue.login);
//   };

//   return (
//     <div className=" bg-white">
//       <FirstCard>
//         <div className=" flex items-center justify-center justify-items-center flex-col">
//           {/* {account.view === "login" ? (
//             <Box>
//               <Box className="login_box" sx={{ display: "flex" }}>
//                 <div
//                   sx={{
//                     display: "grid",
//                     margin: "5px",
//                     padding: "10px",
//                   }}
//                 >
//                   <AppBar
//                     sx={{
//                       position: "relative",
//                       backgroundColor: "#fff",
//                       boxShadow: "none",
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "space-between",
//                       paddingLeft: 2,
//                     }}
//                   >
//                     <Toolbar className="flex justify-center w-full">
//                       <Typography className="text-gray-600 font-bold text-lg">
//                         Login to continue
//                       </Typography>
//                     </Toolbar>
//                   </AppBar>
//                   <Box
//                     sx={{
//                       display: "grid",
//                       padding: "10px 20px 20px 20px",
//                     }}
//                   >
//                     <TextField
//                       id="outlined-basic"
//                       label="Enter Phone number"
//                       variant="outlined"
//                       color="warning"
//                     />
//                     <TermBoxStyle>
//                       By continuing, you agree to Fastbricks&apos;s &nbsp;
//                       <StyledLink href={{}}>Terms of Use</StyledLink>
//                       &nbsp; and&nbsp;
//                       <StyledLink href={{}}>Privacy Policy</StyledLink>.
//                     </TermBoxStyle>
//                     <div className="flex justify-center w-full justify-items-center items-center">
//                       <Button
//                         variant="contained"
//                         className="bg-orange-500 absolute flex bottom-0 w-[80%] m-2 p-3 "
//                         disableElevation
//                         sx={{
//                           backgroundColor: "red",
//                           ":hover": {
//                             backgroundColor: "#fb5d0e",
//                           },
//                         }}
//                       >
//                         Request OTP
//                       </Button>
//                     </div>
//                   </Box>
//                 </div>
//               </Box>
//               <Box
//                 sx={{
//                   justifyContent: "center",
//                   display: "grid",
//                   alignItems: "center",
//                   marginTop: "10px",
//                 }}
//               >
//                 <Divider>
//                   {" "}
//                   <Typography
//                     sx={{
//                       color: "black",
//                       fontSize: 13.5,
//                       fontWeight: 600,
//                     }}
//                   >
//                     New to Fastbricks?
//                   </Typography>
//                 </Divider>

//                 <div onClick={toggleSignup}>
//                   <Button autoFocus>
//                     <span style={{ textTransform: "none", color: "#fd9696" }}>
//                       Create Your Fastbricks account
//                     </span>
//                   </Button>
//                 </div>
//               </Box>
//             </Box>
//           ) : (
//             <Box>
//               <Box className="login_box" sx={{ display: "flex" }}>
//                 <div
//                   sx={{
//                     display: "grid",
//                     margin: "5px",
//                     padding: "10px",
//                   }}
//                 >
//                   <AppBar
//                     sx={{
//                       position: "relative",
//                       backgroundColor: "#fff",
//                       boxShadow: "none",
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "space-between",
//                       paddingLeft: 2,
//                     }}
//                   >
//                     <Toolbar className="flex justify-center w-full">
//                       <Typography className="text-gray-600 font-bold text-lg">
//                         Welcome! you are new here!
//                       </Typography>
//                     </Toolbar>
//                   </AppBar>

//                   <Box
//                     sx={{
//                       display: "grid",
//                       padding: "10px 20px 20px 20px",
//                     }}
//                   >
//                     <TextField
//                       id="outlined-basic"
//                       label="Enter Phone number"
//                       variant="outlined"
//                       color="warning"
//                     />
//                     <TermBoxStyle>
//                       By continuing, you agree to Fastbricks&apos;s &nbsp;
//                       <StyledLink href={{}}>Terms of Use</StyledLink>
//                       &nbsp; and&nbsp;
//                       <StyledLink href={{}}>Privacy Policy</StyledLink>.
//                     </TermBoxStyle>
//                     <div className="flex justify-center w-full justify-items-center items-center">
//                       <Button
//                         variant="contained"
//                         className="bg-orange-500 flex absolute bottom-0 w-[80%] m-2 p-3 "
//                         disableElevation
//                         sx={{
//                           backgroundColor: "red",
//                           ":hover": {
//                             backgroundColor: "#fb5d0e",
//                           },
//                         }}
//                       >
//                         continue
//                       </Button>
//                     </div>
//                   </Box>
//                 </div>
//               </Box>
//               <Box
//                 sx={{
//                   justifyContent: "center",
//                   display: "grid",
//                   alignItems: "center",
//                   marginTop: "10px",
//                 }}
//               >
//                 <Divider>
//                   <Typography sx={{ color: "black", fontSize: 13.5 }}>
//                     Existing User?
//                   </Typography>
//                 </Divider>
//                 <div onClick={toggleSignin}>
//                   <Button
//                     variant="contained"
//                     disableElevation
//                     sx={{
//                       backgroundColor: "#fff",
//                       height: "100%",
//                       width: "100%",
//                       color: "#fd9696",
//                       ":hover": {
//                         backgroundColor: "#eee",
//                       },
//                     }}
//                   >
//                     <span style={{ textTransform: "none", color: "#fd9696" }}>
//                       Sign in
//                     </span>
//                   </Button>
//                 </div>
//               </Box>
//             </Box>
//           )} */}
//           <div>
//             <img src="/lg.png" alt="" />
//           </div>
//           <div className="flex items-center border border-gray-300 rounded p-4 w-3/4 justify-around mb-2">
//             <FcGoogle className="scale-150" />
//             <Typography>Sign in with google</Typography>
//           </div>
//           <h1 className="">OR</h1>
//           <div className="text-center mb-2 mt-4">
//             <h1 className="text-xl font-semibold text-gray-700">
//               Enter Your Phone Number
//             </h1>
//           </div>

//           <div className="flex items-center border border-gray-300 rounded px-4 py-2 w-3/4">
//             <span className="text-gray-500 text-lg">+91</span>
//             <input
//               type="number"
//               placeholder="xxx-xxx-xxxx"
//               className="flex-grow outline-none p-2 text-gray-800"
//             />
//           </div>
//           <button class="mt-4 w-3/4 text-white bg-[#f87171d9] rounded px-4 py-4 hover:bg-[#f87171]">
//             Send OTP
//           </button>
//         </div>
//       </FirstCard>
//     </div>
//   );
// }
// const FirstCard = styled(Box)(({ theme }) => ({
//   zIndex: 999,
//   justifyContent: "center",
//   display: "flex",
//   alignItems: "center",
//   justifyItems: "center",
//   [theme.breakpoints.down("md")]: {
//     width: "100%",
//     height: "100",
//   },
// }));

"use client";
import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";
import { FcGoogle } from "react-icons/fc";
import Typography from "@mui/material/Typography";

const FirstCard = styled(Box)(({ theme }) => ({
  zIndex: 999,
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100",
  },
}));

export default function LoginForMobile() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className=" bg-white">
      <FirstCard>
        <div className=" flex items-center justify-center justify-items-center flex-col">
          <LazyLoadImage
            src="/lg.png"
            alt="Logo"
            className="rounded-lg"
            style={{ width: "100%", height: "auto" }}
            placeholder={
              <div className="flex justify-center items-center h-full">
                <ClipLoader size={50} color={"#f87171"} loading={loading} />
              </div>
            }
            onLoad={handleImageLoad}
          />
          <div className="flex items-center border border-gray-300 rounded p-4 w-3/4 justify-around mb-2">
            <FcGoogle className="scale-150 " />
            <Typography>Sign in with google</Typography>
          </div>
          <h1 className="">OR</h1>
          <div className="text-center mb-2 mt-4">
            <h1 className="text-xl font-semibold text-gray-700">
              Enter Your Phone Number
            </h1>
          </div>

          <div className="flex items-center border border-gray-300 rounded px-4 py-2 w-3/4">
            <span className="text-gray-500 text-lg">+91</span>
            <input
              type="number"
              placeholder="XXX-XXX-XXXX"
              className="flex-grow outline-none p-2 text-gray-800"
            />
          </div>
          <button className="mt-4 w-3/4 text-white bg-[#f87171d9] rounded px-4 py-4 hover:bg-[#f87171]">
            Send OTP
          </button>
        </div>
      </FirstCard>
    </div>
  );
}
