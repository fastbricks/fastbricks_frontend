import React from "react";
import { Card, Typography } from "@mui/material";
import RentalCategory from "@/components/RentalCategory/RentalCategory";
function RentalSection() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center justify-items-center gap-10 p-2 sm:p-5 items-center md:flex-row sm:gap-16">
        <div className="w-full md:2/4 ">
          <Typography className=" font-sans font-semibold text-[26px] leading-[40px] text-gray-600 pb-5 sm:text-[36px] pl-2 sm:pl-0 pr-2 sm:pr-0 sm:leading-[44px] sm:text-gray-800 hidden md:block">
            Give contracts for different <br />
            services
          </Typography>
          <RentalCategory />
        </div>
        <div className="w-full md:2/4 rounded-lg md:h-full p-0 sm:p-2 ">
          <img src="/rentals.png" />
        </div>
      </div>
    </div>
  );
}

export default RentalSection;
