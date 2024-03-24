import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchPage from "../SearchBar/SearchPage";

function SearchBar({ display, disabled }) {
  const words = [
    "'civil workers'",
    "'labour'",
    "'contractors'",
    "'masons'",
    "'painters'",
  ]; // Example array of words
  const fixedText = "Search for "; // Fixed text
  const [placeholder, setPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  let timeoutId;

  useEffect(() => {
    const typingAnimation = () => {
      const word = words[currentIndex];
      if (typingIndex < word.length) {
        setPlaceholder((prev) => prev + word[typingIndex]);
        setTypingIndex((prev) => prev + 1);
        timeoutId = setTimeout(typingAnimation, 20000); // Adjust typing speed here
      } else {
        // Delay before clearing the placeholder and moving to the next word
        setTimeout(() => {
          setTypingIndex(0);
          setPlaceholder(fixedText);
          setCurrentIndex((currentIndex + 1) % words.length);
        }, 1000); // Adjust delay between words here
      }
    };

    // Start typing animation when component mounts
    typingAnimation();

    // Cleanup function to clear timeout if component unmounts
    return () => clearTimeout(timeoutId);
  }, [currentIndex, typingIndex, fixedText, words]);

  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div
      onClick={toggleCard}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <SearchIcon />
      <input
        type="text"
        placeholder={placeholder}
        disabled={false}
        className="cursor-pointer"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      ></div>
      {isCardOpen && <SearchPage />}
      <div className="left-32 absolute flex">
        {/* <h1>&apos;</h1>
        <h1>&apos;</h1> */}
      </div>
      <MicIcon style={{ display: display }} />
    </div>
  );
}

export default SearchBar;
