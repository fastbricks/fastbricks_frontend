import React from "react";
import poster from "@/components/services/assets/posterNew.png";
import posterMobile from "@/components/services/assets/posterMobile.png";
import Image from "next/image";

function Poster() {
  return (
    <div>
      <div className="mt-5 p-2 hidden sm:block cursor-pointer mb-5">
        <Image
          src={poster}
          className="rounded"
          alt="poster"
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div className="mt-5 p-5 block sm:hidden cursor-pointer mb-5 ">
        <Image
          src={posterMobile}
          className="rounded-lg"
          alt="poster"
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <hr className="bg-gray-100 p-1 block sm:hidden" />
    </div>
  );
}

export default Poster;
