import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import RootLayout from "../layout";
import TabBar from "@/components/community/TabBar";

export default function Community() {
  return (
    <main>
      <div>
        <div className="flex">
          <TabBar />
        </div>
      </div>
      <BottomNavBar />
    </main>
  );
}
