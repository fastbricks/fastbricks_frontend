"use client";
import { useState } from "react";
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
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    router.push("/"); // Navigate to the home screen
  };

  return (
    <Dialog fullScreen open={true}>
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
  );
}
