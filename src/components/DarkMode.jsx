import React, { useEffect, useState } from "react";
import lightmode from "../../src/assets/light-mode-button.png";
import darkmode from "../../src/assets/dark-mode-button.png";
import { useTheme } from "./ThemeContext";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <img
        src={darkmode}
        alt="Dark Mode Icon"
        onClick={toggleTheme}
        className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme !== "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={lightmode}
        alt="Light Mode Icon"
        onClick={toggleTheme}
        className="w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
