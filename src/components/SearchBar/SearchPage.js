import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SearchPageMobileView from "./SearchPageMobileView";
import { useRouter } from "next/navigation";

function SearchPage() {
  const [open, setOpen] = React.useState(true);
  const [scroll, setScroll] = React.useState("paper");
  const [isMobile, setIsMobile] = React.useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  if (!isMobile) {
    router.replace("/searchsuggestion");
  }
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose} scroll={scroll}>
        <DialogContent dividers={scroll === "paper"}></DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default SearchPage;
