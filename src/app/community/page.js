import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import RootLayout from "../layout";
import TabBar from "@/components/community/TabBar";

export default function Community() {
  return (
    <main>
      <div className="h-[100vh]">
        <div className="flex">
          <TabBar />
        </div>
      </div>
      <BottomNavBar />
    </main>
  );
}
