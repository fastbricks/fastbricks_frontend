import Avatar from "@mui/material/Avatar";
import Image from "next/image";

function UserAvatar() {
  return (
    <Avatar className="relative h-8 w-8">
      <Image
        src="https://images.unsplash.com/photo-1603239564387-c5b5ea6f635e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fill
        alt=""
        className="rounded-full object-cover"
      />
    </Avatar>
  );
}

export default UserAvatar;
