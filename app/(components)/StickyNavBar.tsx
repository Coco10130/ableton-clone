"use client";

import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const StickyNavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavBar ? "transform-none" : "-translate-y-full"
        }`}
      >
        <NavBar />

        <div className="bg-white bg-opacity-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex space-x-8 p-4">
            <a href="#" className="text-red font-bold">
              About
            </a>
            <a href="#" className="text-black font-bold">
              About
            </a>
            <a href="#" className="text-black font-bold">
              About
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyNavBar;
