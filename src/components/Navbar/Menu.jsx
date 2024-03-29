"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FaBoxOpen } from "react-icons/fa6";
import { AppBar, BottomNavigation, Button, Typography } from "@mui/material";
import Image from "next/image";
import LoginDialog from "./loginDialog";
import Link from "next/link";
import { TbCategoryFilled } from "react-icons/tb";
import { AccountCircle } from "@mui/icons-material";
import Person2Icon from "@mui/icons-material/Person2";
import { TbClipboardText } from "react-icons/tb";

export default function Menu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      onClick={toggleDrawer(anchor, true)}
    >
      <Box sx={{ marginTop: "55px" }}>
        {/* <AppBar position="static" className="navbar_menu"> */}
        <div className="navbar_menu">
          {/* <LoginDialog
            title="Login & Signup"
            tagType="Typography"
            className="menu_login_text"
          /> */}
          <a
            href={"/account/login"}
            style={{ textDecoration: "none" }}
            onClick={toggleDrawer(anchor, false)}
          >
            <h3
              title="Login"
              tagType="Typography"
              className="menu_login_text"
              onClick={toggleDrawer(anchor, false)}
            >
              Login & Signup
            </h3>
          </a>
          <AccountCircle sx={{ color: "white" }} />
        </div>
        {/* </AppBar> */}

        <List>
          <ListItem disablePadding>
            <ListItemButton href="/bookings">
              <ListItemIcon>
                <TbClipboardText className="cart-icon" />
              </ListItemIcon>
              <ListItemText>Bookings</ListItemText>
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton href="/cart">
              <ListItemIcon>
                <ShoppingCartOutlinedIcon className="cart-icon" />
              </ListItemIcon>
              <ListItemText>My Cart</ListItemText>
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton href="/account">
              <ListItemIcon>
                <Person2Icon className="cart-icon" />
              </ListItemIcon>
              <ListItemText>My Account</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              href={"https://seller.fastbricks.in/"}
              target="blank"
            >
              <ListItemIcon>
                <StorefrontIcon className="cart-icon" />
              </ListItemIcon>
              <ListItemText>Become a Seller</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

        <BottomNavigation
          position="static"
          sx={{
            width: "250px",
            backgroundColor: "#f8c8bd65",
            position: "absolute",
            bottom: "0px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              justifyContent: "space-evenly",
              width: "100%",
              ":hover": {
                backgroundColor: "white",
              },
            }}
          >
            <Image src="/playstore.png" width={30} height={30} alt="" />
            <div className="nav_logo_text">
              <p
                style={{ color: "red", fontFamily: "Anton", fontSize: "20px" }}
              >
                FAST
              </p>
              <p
                style={{
                  color: "brown",
                  fontFamily: "Anton",
                  fontSize: "20px",
                }}
              >
                BRICKS
              </p>
            </div>
          </Button>
        </BottomNavigation>
      </Box>
    </Box>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            allowSwipeInChildren={true}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
