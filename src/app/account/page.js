import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import { BsPerson } from "react-icons/bs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InfoIcon from "@mui/icons-material/Info";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GavelIcon from "@mui/icons-material/Gavel";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Person2Icon from "@mui/icons-material/Person2";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Divider } from "@mui/material";
import Link from "next/link";
import EditProfile from "@/components/account/EditProfile";
import SavedAddress from "@/components/account/SavedAddress";
export const metadata = {
  title: "My Account",
};
export default function Account() {
  return (
    <main className="pl-0 pr-0 md:pl-20 md:pr-20 bg-[#f5f5f5]">
      <section className="flex justify-center  pl-5 pr-5 pb-2 pt-2 rounded bg-[#f5f5f5]">
        <div className=" rounded w-full md:w-1/2">
          <div className="bg-white flex flex-col justify-center items-center rounded">
            <div className="flex items-center justify-center mt-5">
              <div className="w-10 h-10">
                <AccountCircleIcon className="scale-150 text-gray-400" />
              </div>
              <div className=" w-2/3 pl-5">
                <h1 className="font-semibold font-sans">Hey User!</h1>
                <p className=" font-sans text-gray-500">
                  Login or Signup to get access to your account.
                </p>
              </div>
            </div>
            <Link
              href={"https://fastbricks.in/account/login"}
              className="w-[90%] mt-5 mb-5"
            >
              <button className="bg-red-300 p-3 rounded text-white w-[100%] font-bold">
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center  pl-5 pr-5 rounded bg-[#f5f5f5]">
        <div className=" w-full md:w-1/2">
          <div className="bg-white justify-center items-center rounded pl-5 pr-5 pb-5 pt-2 ">
            <h1 className="font-sans pb-2 font-bold text-lg text-gray-700">
              Account settings
            </h1>
            <Divider />
            <div className="flex flex-row justify-between items-center pb-5 pt-5 cursor-pointer ">
              <Person2Icon className="scale-150 text-gray-400" />
              <EditProfile />
            </div>
            <Divider />

            <div className="flex flex-row justify-between items-center pt-5">
              <MyLocationIcon className="scale-150 text-gray-400" />

              <SavedAddress />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center  pl-5 pr-5 rounded bg-[#f5f5f5] pt-2">
        <div className=" w-full md:w-1/2">
          <div className="bg-white justify-center items-center rounded pl-5 pr-5 pb-5 pt-2 ">
            <h1 className="font-sans pb-2 font-bold text-lg text-gray-700">
              Get Help
            </h1>
            <Divider />
            <Link href={"https://fastbricks.in/faqs"}>
              <div className="flex flex-row justify-between items-center pb-5 pt-5 cursor-pointer">
                <LiveHelpIcon className="scale-150 text-gray-400" />
                <h1 className="font-semibold font-sans text-gray-500 hover:text-gray-600">
                  Frequently asked questions
                  <ChevronRightIcon />
                </h1>
              </div>
            </Link>
            <Divider />
            <Link href={"https://fastbricks.in/terms"}>
              <div className="flex flex-row justify-between items-center pt-5 pb-5">
                <GavelIcon className="scale-150 text-gray-400" />
                <h1 className="font-semibold font-sans text-gray-500 hover:text-gray-600">
                  Terms and Policies
                  <ChevronRightIcon />
                </h1>
              </div>
            </Link>
            <Divider />
            <Link href={"https://fastbricks.in/contact"}>
              <div className="flex flex-row justify-between items-center pt-5">
                <ConnectWithoutContactIcon className="scale-150 text-gray-400" />
                <h1 className="font-semibold font-sans text-gray-500 hover:text-gray-600">
                  Contact us
                  <ChevronRightIcon />
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center  pl-5 pr-5 rounded bg-[#f5f5f5] pt-2">
        <div className=" w-full md:w-1/2">
          <div className="bg-white justify-center items-center rounded pl-5 pr-5 pb-5 pt-2 ">
            <h1 className="font-sans pb-2 font-bold text-lg text-gray-700">
              Earn with Fastbricks
            </h1>
            <Divider />
            <Link href={"https://seller.fastbricks.in/"} target="_blank">
              <div className="flex flex-row justify-between items-center pt-5 cursor-pointer">
                <StorefrontIcon className="scale-150 text-gray-400" />
                <h1 className="font-semibold font-sans text-gray-500 hover:text-gray-600">
                  Become a partner
                  <ChevronRightIcon />
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center  pl-5 pr-5 pt-2 pb-5 rounded bg-[#f5f5f5]">
        <div className=" w-full md:w-1/2">
          <div className="bg-white justify-center items-center rounded pl-5 pr-5 pb-5 pt-2 ">
            <h1 className="font-sans pb-2 font-bold text-lg text-gray-700">
              Others
            </h1>
            <Divider />
            <Link href={"/about"}>
              <div className="flex flex-row justify-between items-center pb-5 pt-5 cursor-pointer">
                <InfoIcon className="scale-150 text-gray-400" />
                <h1 className="font-semibold font-sans text-gray-500 hover:text-gray-600">
                  About Fastbricks <ChevronRightIcon />
                </h1>
              </div>
            </Link>
            <Divider />
            <Link href={"https://blog.fastbricks.in/"} target="_blank">
              <div className="flex flex-row justify-between items-center pt-5 ">
                <NewspaperIcon className="scale-150 text-gray-400 " />
                <h1 className="font-semibold font-sans text-gray-500 hover:text-gray-600">
                  Read Articles
                  <ChevronRightIcon />
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <BottomNavBar />
    </main>
  );
}
