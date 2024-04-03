import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import dynamic from "next/dynamic";
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
            {/* <div className="border w-[100%] h-20 flex justify-center mb-2">
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
            </div> */}
            <div className="col-span-full mb-2">
              <label
                for="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Choose Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 hover:text-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[60vh]">
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
