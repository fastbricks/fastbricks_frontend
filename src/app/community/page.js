import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import RootLayout from "../layout";
export default function Community() {
  return (
    <RootLayout showSearch={false}>
      <main className="h-[100vh]">
        <BottomNavBar />
      </main>
    </RootLayout>
  );
}
