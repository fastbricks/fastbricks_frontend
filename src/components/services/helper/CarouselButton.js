"use client";
import React, { useState, useEffect } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const CustomLeftArrow = ({ onClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  if (isMobile) {
    return null; // Render nothing on mobile
  }

  return (
    <div className="flex justify-between items-center absolute text-white left-0 rounded-[50%] p-2 scale-150">
      <ChevronLeftIcon onClick={() => onClick()} className="" />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  if (isMobile) {
    return null; // Render nothing on mobile
  }

  return (
    <div className="flex justify-between items-center absolute text-white right-0 rounded-[50%] p-2 scale-150">
      <ChevronRightIcon onClick={() => onClick()} className="" />
    </div>
  );
};

export { CustomLeftArrow, CustomRightArrow };
