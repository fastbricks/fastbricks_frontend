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
    <div className=" justify-between items-center absolute text-white left-0 rounded-[50%] p-2 scale-150 hidden">
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
    <div className="hidden justify-between items-center absolute text-white right-0 rounded-[50%] p-2 scale-150">
      <ChevronRightIcon onClick={() => onClick()} className="" />
    </div>
  );
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button>
      <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button>
    </div>
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4>These buttons can be positioned anywhere you want on the screen</h4>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};
