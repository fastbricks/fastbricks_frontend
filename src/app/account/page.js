import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import { BsPerson } from "react-icons/bs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const metadata = {
  title: "My Account",
};
export default function Account() {
  return (
    <main className="h-[100vh]">
      <section className="  flex justify-center">
        <div className=" p-2 rounded bg-[#f5f5f5]">
          <div className="bg-white flex flex-col justify-center items-center rounded">
            <div className="flex items-center justify-center mt-5">
              <div className="w-10 h-10">
                <AccountCircleIcon className="scale-150" />
              </div>
              <div className=" w-2/3 pl-5">
                <h1 className="font-semibold font-sans">Hey User!</h1>
                <p className=" font-sans">
                  Login or Signup to get access to your account.
                </p>
              </div>
            </div>
            <button className="bg-orange-400 p-3 rounded text-white w-[90%] mt-5 mb-5">
              Login
            </button>
          </div>
        </div>
      </section>
      <BottomNavBar />
    </main>
  );
}
