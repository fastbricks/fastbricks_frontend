"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function jobOpening() {
  const currencies = [
    {
      value: "FD",
      label: "Frontend Developer",
    },
    {
      value: "Flutter",
      label: "Flutter Developer",
    },
    {
      value: "FSD",
      label: "Full stack Developer (MERN)",
    },
    {
      value: "BD",
      label: "Backend Developer ",
    },
    {
      value: "SMM",
      label: "Social media marketing ",
    },
    {
      value: "UI",
      label: "UI/UX Developer ",
    },
  ];
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          mt: 3,
          width: "20rem",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Job Openings"
          defaultValue="Job"
          sx={{
            width: "100%",
            color: "#fd9696",
            ":hover": {
              borderColor: "#fd9696",
            },
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}

export default jobOpening;
