"use client";
import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { PiCubeDuotone } from "react-icons/pi";
import { TbClipboardText } from "react-icons/tb";
import { FaClipboard } from "react-icons/fa";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(getPageIndex(pathname));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  function getPageIndex(route) {
    switch (route) {
      case "/":
        return 0;
      case "/":
        return 1;
      case "/bookings":
        return 2;
      case "/cart":
        return 3;
      default:
        return 0;
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/");
        break;

      case 1:
        router.push("/");
        break;
      case 2:
        router.push("/bookings");
        break;
      case 3:
        router.push("/cart");
        break;
      default:
        break;
    }
  };

  if (!isMobile) {
    return null; // Render nothing on desktop
  }

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0px",
        left: 0,
        zIndex: 999,
        // backgroundColor: "#FFEFEB",
        backgroundColor: "#fff",
        boxShadow: "0px -1px 10px 0 rgba(0, 0, 0, 20%)",
        "& .MuiBottomNavigationAction-root": {
          fontSize: "1.7rem",
        },
      }}
      value={value}
      elevation={500}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        value={0}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 0 ? "#FD9696" : "gray",
            fontWeight: value === 0 ? "bold" : "normal",
            fontFamily: "sans-serif",
          },
        }}
        icon={
          value === 0 ? (
            <GoHomeFill style={{ color: "#FD9696" }} />
          ) : (
            <GoHome style={{ color: "#f7adad" }} />
          )
        }
      />
      <BottomNavigationAction
        label="Orders"
        value={1}
        icon={
          value === 1 ? (
            <FaBoxOpen style={{ color: "#FD9696" }} />
          ) : (
            <PiCubeDuotone style={{ color: "#f7adad" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 2 ? "#FD9696" : "gray",
            fontWeight: value === 2 ? "bold" : "normal",
          },
        }}
      />
      <BottomNavigationAction
        label="Bookings"
        value={2}
        icon={
          value === 2 ? (
            <FaClipboard style={{ color: "#FD9696" }} />
          ) : (
            <TbClipboardText style={{ color: "#f7adad" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 1 ? "#FD9696" : "gray",
            fontWeight: value === 1 ? "bold" : "normal",
            fontFamily: "sans-serif",
          },
        }}
      />

      <BottomNavigationAction
        label="Cart"
        value={3}
        icon={
          value === 3 ? (
            <FaCartShopping style={{ color: "#FD9696" }} />
          ) : (
            <IoCartOutline style={{ color: "#f7adad" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 3 ? "#FD9696" : "gray",
            fontWeight: value === 3 ? "bold" : "normal",
            fontFamily: "serif",
          },
        }}
      />
    </BottomNavigation>
  );
}

export default BottomNavBar;
