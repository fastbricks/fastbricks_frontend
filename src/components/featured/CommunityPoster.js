"use client";
import poster from "@/components/services/assets/community.png";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

function CommunityPoster() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);
  if (!isMobile) {
    return (
      <div className="">
        <hr className="bg-gray-100 p-1 block sm:hidden" />
        <Link href={"/community"}>
          <div className=" p-2  cursor-pointer mb-5">
            <Image src={poster} className="rounded" />
          </div>
        </Link>
      </div>
    );
  }
  return null;
}

export default CommunityPoster;
