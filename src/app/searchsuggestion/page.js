"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import List from "@mui/material/List";
import Slide from "@mui/material/Slide";
import styles from "@/components/Navbar/mobileNav.module.css";

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
};

export default function SearchSuggestion() {
  const router = useRouter();

  // useEffect(() => {
  //   const handleAndroidBackButton = (event) => {
  //     if (event.key === "Backspace" || event.key === "Back") {
  //       event.preventDefault();
  //       if (router.pathname !== "/") {
  //         router.replace("/");
  //       }
  //     }
  //   };

  //   document.addEventListener("keydown", handleAndroidBackButton);

  //   return () => {
  //     document.removeEventListener("keydown", handleAndroidBackButton);
  //   };
  // }, [router]);

  const handleClose = () => {
    router.replace("/");
  };

  return (
    <Dialog fullScreen open={true} TransitionComponent={Transition}>
      <AppBar sx={{ position: "relative", backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="gray"
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
    // <div>search page</div>
  );
}
