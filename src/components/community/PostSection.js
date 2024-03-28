import React from "react";
import UserAvatar from "./UserAvatar";
import Image from "next/image";
function PostSection() {
  return (
    <div className="flex flex-col space-y-2.5 bg-white mb-10">
      <div className="flex items-center justify-between px-3 sm:px-0">
        <div className="flex space-x-3 items-center p-2 justify-between w-[100%]">
          <div className="flex gap-5">
            <UserAvatar />
            <div className="text-sm">
              <p className="space-x-1 flex items-center gap-5">
                <span className="font-semibold">{"Ray"}</span>

                {/* <Timestamp createdAt={post.createdAt} /> */}
              </p>
              <p className="text-xs text-neutral-500 font-medium">
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
          <span className="font-medium text-neutral-500 text-xs  ">Labour</span>
        </div>
      </div>
      <div className="relative h-[450px] w-full overflow-hidden rounded-none sm:rounded-md">
        <img
          src="https://images.unsplash.com/photo-1603239564387-c5b5ea6f635e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="sm:rounded-md object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default PostSection;
