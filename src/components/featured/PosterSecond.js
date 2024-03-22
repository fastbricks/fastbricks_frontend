import React from "react";
import Image from "next/image";
import adv from "@/components/services/assets/advNew.png";
import advMobile from "@/components/services/assets/advMobile.png";
function PosterSecond() {
  return (
    <div>
      <div className="mt-5 p-2 hidden sm:block cursor-pointer">
        <Image src={adv} className="rounded" />
      </div>
      <div className="mt-5 p-5 block sm:hidden cursor-pointer">
        <Image src={advMobile} className="rounded-lg" />
      </div>
    </div>
  );
}

export default PosterSecond;
