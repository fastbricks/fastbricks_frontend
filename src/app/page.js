// "use client";
import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";

import ServiceCard from "@/components/services/Servicecard";

import Poster from "@/components/featured/Poster";
import PosterSecond from "@/components/featured/PosterSecond";
import Testimonials from "@/components/Testimonials/Testimonials";
import RootLayout from "./layout";
import ServiceSection from "@/components/featured/ServiceSection";
import RentalSection from "@/components/featured/RentalSection";
import CommunityPoster from "@/components/featured/CommunityPoster";
export const metadata = {
  title: "Fastbricks - Build Strong",
  description: "Fastbricks - with you in your construction journey ",
  url: "https://fastbricks.in/",
  metadataBase: new URL("https://fastbricks.in/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  openGraph: {
    title: "Fastbricks | Build Strong",
    description: "Fastbricks - with you in your construction journey ",
    url: "https://fastbricks.in/",
    metadataBase: new URL("https://fastbricks.in/"),
    images: "/first.png",
  },
};

export default function Home() {
  return (
    <main className="pl-0 pr-0 md:pl-20 md:pr-20">
      <div>
        <ServiceSection />
        <Poster />
        <RentalSection />
        <ServiceCard />
        <PosterSecond />
        <Testimonials />
        <CommunityPoster />
      </div>
      <BottomNavBar />
    </main>
  );
}
