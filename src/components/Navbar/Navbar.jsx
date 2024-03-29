"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Menu from "./Menu";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });

import { MdOutlineAccountCircle } from "react-icons/md";
import "./Navbar.css";
import styles from "./mobileNav.module.css";
import SearchBar from "./SearchBar";
import TabBar from "../community/TabBar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchContainerFixed, setSearchContainerFixed] = useState(false);
  const [upperDivHidden, setUpperDivHidden] = useState(false);
  const isCommunityPage = pathname === "/community";
  const isLoginPage = pathname === "/account/login";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Fix the search container when scrolling down
      setSearchContainerFixed(
        prevScrollPos < currentScrollPos && currentScrollPos > 60
      );

      // Hide the upper div when scrolling down
      setUpperDivHidden(prevScrollPos < currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  if (!isMobile) {
    return (
      <div className="navbar">
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="nav_left">
            <Image
              src="/img/logo.png"
              className="nav_logo"
              alt="fastbricks"
              width={120}
              height={50}
            />
            <div className="nav_logo_text">
              <p className="fastbricks_text1">
                <span className={anton.className}>FAST</span>
              </p>
              <p className="fastbricks_text2">
                <span className={anton.className}>BRICKS</span>
              </p>
            </div>
          </div>
        </a>
        <div className="center">
          <button className="search-container relative">
            <SearchBar display={"none"} />
          </button>
          <button
            className="search_icon"
            onClick={() => router.push("/searchsuggestion")}
          >
            <SearchIcon />
          </button>
          <div>
            <Link href={"/account/login"} style={{ textDecoration: "none" }}>
              <h3 title="Login" className="login">
                Login
              </h3>
            </Link>
          </div>
          <div className="">
            <Link
              href={"https://seller.fastbricks.in/"}
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <div>
                <h1 className="seller">
                  <StorefrontIcon className="cart-icon" />
                  Become a Partner
                </h1>
              </div>
            </Link>
          </div>
          {/* <div className="right">
            <Link href={"/cart"} style={{ textDecoration: "none" }}>
              <div className="cart">
                <ShoppingCartOutlinedIcon className="cart-icon" />
                <h1 className="seller">Cart</h1>
              </div>
            </Link>
          </div> */}
          <div className="navbar-menu">
            <Menu />
          </div>
        </div>
      </div>
    ); // Render nothing on desktop
  }

  return (
    <div>
      <div
        className={`${styles.navbarMobile} ${
          upperDivHidden ? styles.hide : ""
        }`}
      >
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              paddingBottom: "5px",

              gap: "70px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              {/* <div className={styles.navbarMenu}>
                  <Menu />
                </div> */}
              <a href="/" style={{ textDecoration: "none" }}>
                <div className={styles.nav_left}>
                  <Image
                    src="/img/logo.png"
                    alt="fastbricks"
                    width={40}
                    height={40}
                  />
                  <div className={styles.logo_text}>
                    <p className={styles.fastbricks_text}>
                      <span className={anton.className}>FAST</span>
                    </p>
                    <p className={styles.fastbricks_text2}>
                      <span className={anton.className}>BRICKS</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Link
                href={"/account/login"}
                style={{
                  textDecoration: "none",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h3 title="Login" className={styles.login}>
                  <MdOutlineAccountCircle
                    style={{
                      fontSize: "1.3rem",
                      paddingRight: "2px",
                    }}
                  />
                  Login
                </h3>
              </Link>

              <div className={styles.navbarMenu}>
                <Menu />
              </div>
            </div>
          </div>

          <div
            style={{
              display: isCommunityPage || isLoginPage ? "none" : "flex",

              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              paddingBottom: "5px",
              paddingTop: "5px",
            }}
          >
            <div className={styles.searchContainer}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* searchContainer  */}

      <div
        style={{
          backgroundColor: "#fff",
          display: isCommunityPage || isLoginPage ? "none" : "flex",
          paddingTop: 5,
          paddingBottom: 5,
          zIndex: 9999,
          justifyContent: "center",
        }}
        className={`${""} ${searchContainerFixed ? styles.fixed : styles.mt}`}
      >
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      </div>

      {/* TabBar for community Page */}
      {/* <div
        style={{
          backgroundColor: "#fff",
          display: isCommunityPage ? "flex" : "none",
          paddingTop: 5,
          paddingBottom: 5,
          zIndex: 9999,
          justifyContent: "center",
        }}
        className={`${""} ${searchContainerFixed ? styles.fixed : styles.mt}`}
      >
        <TabBar />
      </div> */}
    </div>
  );
};

export default Navbar;
