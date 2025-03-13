import { style } from "framer-motion/client";
import React from "react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsVisible(true); 
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <>
      {isVisible && 
        <nav className="fixed top-4 left-5 right-0 z-20">
          <img
            className=" absolute top-5 left-5 lg:w-[7%] md:w-[7%] w-[16%]"
            src="./src/assets/image/luffy lb.png"
            alt=""
          />
        </nav>
      }
    </>
  );
}
