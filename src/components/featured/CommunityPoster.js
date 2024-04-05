"use client";
import poster from "@/components/services/assets/community.png";
import posterMobile from "@/components/services/assets/posterMobile.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function CommunityPoster() {
  return (
    <div>
      <hr className="bg-gray-100 p-1 block sm:hidden" />
      <Link href={"/community"}>
        <div className=" p-2 hidden sm:block cursor-pointer mb-5">
          <Image src={poster} className="rounded" />
        </div>
      </Link>
    </div>
  );
}

export default CommunityPoster;
