import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import dynamic from "next/dynamic";
import styles from "./postCard.module.css";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ReactQuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  // Import ReactQuill dynamically
  ssr: false, // Exclude it from server-side rendering
});
import Image from "next/image";

export default function PostCard() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [value, setValue] = React.useState("");
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <AddBoxIcon
        className="text-orange-500 text-4xl scale-125"
        onClick={handleClickOpen("paper")}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className="text-center">
          Create new post
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"} sx={{ height: "100vh" }}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="border w-[100%] h-20 flex justify-center mb-2">
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <div className="flex justify-center items-center justify-items-center flex-col">
                <span className="text-gray-500 capitalize">Choose image</span>
                <button className="">
                  <label htmlFor="image">
                    <Image src="/image.png" alt="" width={16} height={16} />
                  </label>
                </button>
              </div>
            </div>

            <div className="h-[100vh]">
              <div className="">
                <ReactQuillNoSSRWrapper
                  className="h-[50vh] w-full"
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  placeholder="Tell your story..."
                />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className=" flex justify-around items-center justify-items-center w-full">
            <div className="">
              <select className="" onChange={(e) => setCatSlug(e.target.value)}>
                <option value="style">House design</option>
                <option value="fashion">Proposals</option>
                <option value="food">show your house</option>
                <option value="culture">Contractors</option>
                <option value="travel">Labours</option>
                <option value="coding">Masons</option>
              </select>
            </div>
            <Button
              onClick={handleClose}
              className="bg-orange-500 text-white hover:bg-orange-500"
            >
              Post
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
