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
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: "transparent", padding: 0, margin: 0 }, // Change the indicator color here
          }}
          sx={{
            backgroundColor: "white",
            padding: 0,
            margin: 0,
          }}
        >
          <Tab
            label="A"
            sx={{
              textTransform: "capitalize",

              "&.Mui-selected": {
                color: "orange",
                backgroundColor: "#fff7f7",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              },
            }}
          />
          <Tab
            label="B"
            sx={{
              textTransform: "capitalize",

              "&.Mui-selected": {
                color: "orange",
                backgroundColor: "#fff7f7",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              },
            }}
          />
          <Tab
            label="C"
            sx={{
              textTransform: "capitalize",

              "&.Mui-selected": {
                color: "orange",
                backgroundColor: "#fff7f7",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              },
            }}
          />
          <Tab
            label="D"
            sx={{
              textTransform: "capitalize",

              "&.Mui-selected": {
                color: "orange",
                backgroundColor: "#fff7f7",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              },
            }}
          />
          <Tab
            label="E"
            sx={{
              textTransform: "capitalize",

              "&.Mui-selected": {
                color: "orange",
                backgroundColor: "#fff7f7",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              },
            }}
          />
          <Tab
            label="F"
            sx={{
              textTransform: "capitalize",

              "&.Mui-selected": {
                color: "orange",
                backgroundColor: "#fff7f7",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              },
            }}
          />
          <Tab
            label="G"
            sx={{
              textTransform: "capitalize",

              "&.Mui-selected": {
                color: "orange",
                backgroundColor: "#fff7f7",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              },
            }}
          />
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
