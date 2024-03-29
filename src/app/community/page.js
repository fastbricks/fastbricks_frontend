import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import RootLayout from "../layout";
import TabBar from "@/components/community/TabBar";
import Head from "next/head";
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
    images: [
      {
        url: "https://fastbricks.in/img/logoServiceLarge.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Community() {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        {metadata.openGraph.images.map((image, index) => (
          <meta property="og:image" content={image.url} key={index} />
        ))}
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
      </Head>
      <div>
        <div className="flex">
          <TabBar />
        </div>
      </div>
      <BottomNavBar />
    </main>
  );
}
