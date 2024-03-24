"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SearchPageMobileView from "@/components/SearchBar/SearchPageMobileView";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import styles from "@/components/Navbar/mobileNav.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function SearchSuggestion({ isMobile }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackdropClick = (event) => {
    // Prevent closing when clicking on the dialog screen
    event.stopPropagation();
  };
  useEffect(() => {
    if (!isMobile) {
      router.replace("/not-found");
    }
  }, []);

  // return <SearchPageMobileView />;
  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      BackdropProps={{
        onClick: handleBackdropClick,
      }}
    >
      <AppBar sx={{ position: "relative", backgroundColor: "red" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <div className={styles.searchContainer}>
            <SearchIcon />
            <input type="text" placeholder="Search for" />

            <MicIcon />
          </div>
        </Toolbar>
      </AppBar>
      <List></List>
    </Dialog>
  );
}
