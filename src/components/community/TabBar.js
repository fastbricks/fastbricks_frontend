"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddBoxIcon from "@mui/icons-material/AddBox";
export default function TabBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const contentHeight = `calc(100vh - 100px - 64px)`; // Adjust 100px and 64px according to your footer and bottom navbar heights

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div className="flex w-[100vw] p-2 justify-around">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: "red" }, // Change the indicator color here
          }}
          sx={{
            backgroundColor: "white",
            padding: 0,
            margin: 0,
          }}
        >
          <Tab label="Item One" sx={{ "&.Mui-selected": { color: "red" } }} />
          <Tab label="Item Two" sx={{ "&.Mui-selected": { color: "red" } }} />
          <Tab label="Item Three" sx={{ "&.Mui-selected": { color: "red" } }} />
          <Tab label="Item Four" sx={{ "&.Mui-selected": { color: "red" } }} />
          <Tab label="Item Five" sx={{ "&.Mui-selected": { color: "red" } }} />
          <Tab label="Item Six" sx={{ "&.Mui-selected": { color: "red" } }} />
          <Tab label="Item Seven" sx={{ "&.Mui-selected": { color: "red" } }} />
        </Tabs>
        <button className="">
          <AddBoxIcon className="text-orange-500 text-4xl " />
        </button>
      </div>
      {/* Content for Tab One */}
      {value === 0 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            padding: "20px",
            backgroundColor: "#f0f0f0",
          }}
        >
          firstpage
        </div>
      )}
      {/* Content for Tab Two */}
      {value === 1 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            padding: "20px",
            backgroundColor: "#f0f0f0",
          }}
        >
          Content for Tab Two
        </div>
      )}
      {/* Content for Tab Three */}
      {value === 2 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            padding: "20px",
            backgroundColor: "#f0f0f0",
          }}
        >
          Content for Tab Three
        </div>
      )}
      {/* Content for Tab Four */}
      {value === 3 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            padding: "20px",
            backgroundColor: "#f0f0f0",
          }}
        >
          Content for Tab Four
        </div>
      )}
      {/* Content for Tab Five */}
      {value === 4 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            padding: "20px",
            backgroundColor: "#f0f0f0",
          }}
        >
          Content for Tab Five
        </div>
      )}
      {/* Content for Tab Six */}
      {value === 5 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            padding: "20px",
            backgroundColor: "#f0f0f0",
          }}
        >
          Content for Tab Six
        </div>
      )}
      {/* Content for Tab Seven */}
      {value === 6 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            padding: "20px",
            backgroundColor: "#f0f0f0",
          }}
        >
          Content for Tab Seven
        </div>
      )}
    </div>
  );
}
