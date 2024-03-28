"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PostCard from "./PostCard";
import PostSection from "./PostSection";
export default function TabBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const contentHeight = `calc(100vh)`; // Adjust 100px and 64px according to your footer and bottom navbar heights

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
            label="All"
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
            label="House design"
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
            label="Proposals"
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
            label="show your house"
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
            label="Contractors"
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
            label="Labours"
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
            label="Masons"
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
          <PostCard />
        </button>
      </div>
      {/* Content for Tab One */}
      {value === 0 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            paddingBottom: "100px",
            backgroundColor: "#f0f0f0",
            overflowY: "auto",
          }}
        >
          <div className="pl-0 pr-0 md:pl-36 md:pr-36">
            <PostSection />
            <PostSection />
            <PostSection />
            <PostSection />
          </div>
        </div>
      )}
      {/* Content for Tab Two */}
      {value === 1 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            backgroundColor: "#f0f0f0",
            paddingBottom: "100px",
          }}
        >
          <div className="pl-0 pr-0 md:pl-36 md:pr-36">
            <PostSection />
          </div>
        </div>
      )}
      {/* Content for Tab Three */}
      {value === 2 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            backgroundColor: "#f0f0f0",
            paddingBottom: "100px",
          }}
        >
          <div className="pl-0 pr-0 md:pl-36 md:pr-36">
            <PostSection />
          </div>
        </div>
      )}
      {/* Content for Tab Four */}
      {value === 3 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            backgroundColor: "#f0f0f0",
            paddingBottom: "100px",
          }}
        >
          <div className="pl-0 pr-0 md:pl-36 md:pr-36">
            <PostSection />
          </div>
        </div>
      )}
      {/* Content for Tab Five */}
      {value === 4 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            backgroundColor: "#f0f0f0",
            paddingBottom: "100px",
          }}
        >
          <div className="pl-0 pr-0 md:pl-36 md:pr-36">
            <PostSection />
          </div>
        </div>
      )}
      {/* Content for Tab Six */}
      {value === 5 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            backgroundColor: "#f0f0f0",
            paddingBottom: "100px",
          }}
        >
          <div className="pl-0 pr-0 md:pl-36 md:pr-36">
            <PostSection />
          </div>
        </div>
      )}
      {/* Content for Tab Seven */}
      {value === 6 && (
        <div
          style={{
            width: "100%",
            height: contentHeight,
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            backgroundColor: "#f0f0f0",
            paddingBottom: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="pl-0 pr-0 md:pl-36 md:pr-36">
            <PostSection />
          </div>
        </div>
      )}
    </div>
  );
}
