"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
function TypeAnimationComp() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "civil workers",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "labour",
          1000,
          "contractors",
          1000,
          "masons",
          1000,
          "painters",
          1000,
        ]}
        wrapper="span"
        speed={30}
        // style={{ fontSize: "", display: "" }}

        repeat={Infinity}
      />
    </div>
  );
}

export default TypeAnimationComp;
