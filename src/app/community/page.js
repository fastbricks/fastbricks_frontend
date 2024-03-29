import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import RootLayout from "../layout";
import TabBar from "@/components/community/TabBar";
export const metadata = {
  title: "Fastbricks | Community of skilled construction professionals",
  description:
    "Fastbricks Community of contractors, labours, masons, architects and many more where you can show your skills to the world and you can show your house to the world and can post construction proposals also.",
  url: "https://fastbricks.in/community",
  metadataBase: new URL("https://fastbricks.in/community"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  openGraph: {
    title: "Fastbricks | Community of skilled construction professionals",
    description:
      "Fastbricks Community of contractors, labours, masons, architects and many more where you can show your skills to the world and you can show your house to the world and can post construction proposals also.",
    url: "https://fastbricks.in/community",
    metadataBase: new URL("https://fastbricks.in/community"),
    images: "/img/logoServiceLarge.png",
  },
};

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
