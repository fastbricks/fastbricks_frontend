import Avatar from "@mui/material/Avatar";
import Image from "next/image";

function UserAvatar() {
  return (
    <Avatar className="relative h-10 w-10">
      <Image
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        fill
        alt=""
        className="rounded-full object-cover"
      />
    </Avatar>
  );
}

export default UserAvatar;
