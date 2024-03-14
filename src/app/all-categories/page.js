import "../tailwind.css";
// import "./categories.module.css";
import { Box, Card, Typography, styled } from "@mui/material";

// const Wrapper = styled(Box)(({ theme }) => ({
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   justifyItems: "center",
//   alignItems: "center",
//   [theme.breakpoints.down("md")]: {
//     minHeight: "70vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-around",
//     justifyItems: "space-around",
//     alignItems: "space-around",
//   },
// }));
export const metadata = {
  title: "All Categories",
  description:
    "Buy Construction materials  Online at Fastbricks online store. Best price on bricks,tiles,cements,concrete,steal,iron etc.",
  openGraph: {
    title: "All Categories",
    description:
      "Buy Construction materials  Online at Fastbricks online store. Best price on bricks,tiles,cements,concrete,steal,iron etc.",
    url: "https://fastbricks.in/all-categories",
    metadataBase: new URL("https://fastbricks.in/"),
    images: "/img/logo@2x.png",
  },
};
const category = [
  {
    id: "1",
    categoryName: "Cement",
    image: "/category/cement.png",
    color: "bg-blue-300",
  },
  {
    id: "2",
    categoryName: "Bricks",
    image: "/category/bricks.png",
    color: "bg-red-300",
  },
  {
    id: "3",
    categoryName: "Sand & Concrete",
    image: "/category/sand.png",
    color: "bg-green-300",
  },
  {
    id: "4",
    categoryName: "Floor materials",
    image: "category/tiles.png",
    color: "bg-yellow-300",
  },
  {
    id: "5",
    categoryName: "Paint",
    image: "/category/paint.png",
    color: "bg-emerald-300",
  },
  {
    id: "6",
    categoryName: "Tools & Equipments",
    image: "/category/safety.png",
    color: "bg-amber-500",
  },
  {
    id: "7",
    categoryName: "Doors & Windows",
    image: "/category/door.jpg",
    color: "bg-lime-300",
  },
  {
    id: "8",
    categoryName: "Plastics & Pipes",
    image: "/category/plastic.png",
    color: "bg-cyan-300",
  },
  {
    id: "9",
    categoryName: "Glass",
    image: "/category/glass.png",
    color: "bg-indigo-300",
  },
  {
    id: "10",
    categoryName: "Steel & Iron",
    image: "/category/reinforcement.png",
    color: "bg-pink-300",
    subcategory: [
      {
        name: "Iron",
      },
    ],
  },
  {
    id: "11",
    categoryName: "Soil",
    image: "/category/soil.png",
    color: "bg-blue-300",
  },
  {
    id: "12",
    categoryName: "Stone",
    image: "/category/stone.png",
    color: "bg-red-300",
  },

  // {
  //   id: "14",
  //   categoryName: "cement",
  //   image: "/category/glass.png",
  //   color: "bg-purple-300",
  // },
  // {
  //   id: "15",
  //   categoryName: "cement",
  //   image: "/category/furniture.png",
  //   color: "bg-amber-500",
  // },
  // {
  //   id: "16",
  //   categoryName: "cement",
  //   image: "/category/sculpture.png",
  //   color: "bg-yellow-300",
  // },
  // {
  //   id: "17",
  //   categoryName: "cement",
  //   image: "/category/foamwork.png",
  //   color: "bg-indigo-300",
  // },
  // {
  //   id: "18",
  //   categoryName: "cement",
  //   image: "/category/constructiontools.png",
  //   color: "bg-orange-300",
  // },
];
export default function AllCategories() {
  return (
    <div className="grid place-items-center min-h-screen lg:pt-10 xs:pt-10 md:pt-14 bg-white">
      <div className="p-4 max-w-5xl grid gap-3 xs:grid-cols-2 xs:p-4 md:grid-cols-4 lg:gap-6 sm:p-4 lg:p-8">
        <h1 className="text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-1 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl xs:place-items-center">
          <span className="md:col-span-2">Explore Your Choice</span>
        </h1>
        <p className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg font-semibold">
          Buy Construction materials Online at Fastbricks online store. Best
          price on bricks, tiles, cements, concrete, steal, iron etc.
        </p>

        {category.map((data) => {
          return (
            <div key={data.id}>
              <div
                className={`h-16 xs:h-auto xs:square relative bg-white hover:bg-white rounded-t-lg cursor-pointer border-x-[2px] border-[#f7c8bd] border-t-[2px] p-2 sm:p-5 `}
              >
                <div className="p-1 gap-1 relative justify-center justify-items-center text-center place-items-center flex items-center flex-col bg-[#f7c8bd] border-white rounded-lg h-40 ">
                  <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: "scale(1.2)", opacity: 0.1 }}
                  >
                    <rect
                      x="159.52"
                      y="175"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 159.52 175)"
                      fill="white"
                    />
                    <rect
                      y="107.48"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 0 107.48)"
                      fill="white"
                    />
                  </svg>
                  <div className=" h-40 row-span-1 ">
                    <img
                      src={data.image}
                      className="h-full w-full object-contain"
                      alt=""
                    />
                  </div>
                  {/* <div className="text row-span-1 font-semibold text-xl">
                  <p className=""> {id.categoryName}</p>
                </div> */}
                </div>
              </div>
              <div className="group relative cursor-pointer  ">
                <div
                  className={`flex items-center justify-between px-2 rounded-b-lg  bg-white border-s-[2px] border-[#f7c8bd] border-e-[2px] border-b-[5px]`}
                >
                  <div className="menu-hover py-2 text-base font-medium text-black lg:mx-4">
                    <p className=""> {data.categoryName}</p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible ">
                  {/* <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"> */}
                  {data?.subcategory?.map((sub, index) => (
                    <div
                      key={index}
                      className="hover:bg-white my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >
                      {sub.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
