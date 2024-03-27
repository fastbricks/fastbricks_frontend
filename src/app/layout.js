import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Fastbricks | Build Strong",
//   description: "Fastbricks - with you in your construction journey ",
// };
// export const viewport = {
//   // themeColor: "#f7c8bd",
// };

export default function RootLayout({ children, showSearch = true }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar showSearch={showSearch} />
        <div className=" mt-0 sm:mt-20">{children}</div>
        {/* <BottomNavBar /> */}
        <div className="marginBottomForMob">
          <Footer />
        </div>
      </body>
    </html>
  );
}
