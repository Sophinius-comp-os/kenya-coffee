"use client ";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center focus:outline-none"
    >
      {theme === "dark" ? (
        <div className="mr-2 text-4xl text-[#4a576E]">
          <RiSunLine />
        </div>
      ) : (
        <div className="mr-2 text-4xl text-gray-700">
          <span className="text-[#4a576E]">
            <RiMoonClearLine />
          </span>
        </div>
      )}
    </button>
  );
}

export default ThemeToggler;
