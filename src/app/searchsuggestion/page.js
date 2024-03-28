"use client";

import { useRouter } from "next/navigation";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import List from "@mui/material/List";
import Slide from "@mui/material/Slide";
import styles from "@/components/Navbar/mobileNav.module.css";
import WestIcon from "@mui/icons-material/West";
const Transition = (props) => {
  return <Slide direction="up" {...props} />;
};

export default function SearchSuggestion() {
  const router = useRouter();

  const handleClose = () => {
    router.replace("/");
  };

  return (
    <Dialog fullScreen open={true} TransitionComponent={Transition}>
      <AppBar
        sx={{
          position: "relative",
          backgroundColor: "#fff",
          boxShadow: "0px -1px 5cap 0px rgba(150, 150, 150, 0.2)",
          padding: "5px",
        }}
      >
        <Toolbar className="flex justify-between">
          <IconButton
            edge="start"
            color="gray"
            onClick={handleClose}
            aria-label="close"
          >
            <WestIcon />
          </IconButton>
          <div className={styles.searchContainer}>
            <SearchIcon />
            <input type="text" placeholder="Search for ..." />
            <MicIcon />
          </div>
        </Toolbar>
      </AppBar>
      <List></List>
    </Dialog>
  );
}
