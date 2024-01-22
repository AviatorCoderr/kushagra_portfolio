import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 30; // Adjust this value based on your needs

            setIsVisible(scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <div className={`fixed p-3 left-[3%] right-[3%] w-[93%] flex z-30 transition-all duration-500 ${isVisible ? "bg-black":""} text-white `}>
      <div className="ml-10 p-2 text-3xl flex">
        <img className="h-full flex" src="/static/images/ks.png"></img>
      </div>
        <ul className="flex mr-20 ml-auto">
          <li className="mx-5 m-2 text-lg group">
            <button className="relative overflow-hidden pt-2">
            Home
            <span className="absolute inset-x-0 bottom-0 h-[5%] group-hover:w-full bg-white"></span>
            </button>
          </li>
          <li className="mx-5 m-2 text-lg group">
            <button className="relative overflow-hidden pt-2">
            About
            <span className="absolute inset-x-0 bottom-0 h-[5%] group-hover:w-full bg-white"></span>
            </button>
          </li>
          <li className="mx-5 m-2 text-lg group">
            <button className="relative overflow-hidden pt-2">
            Skills
            <span className="absolute inset-x-0 bottom-0 h-[5%] group-hover:w-full bg-white"></span>
            </button>
          </li>
          <li className="ml-5 m-2 text-lg group">
            <button className="relative overflow-hidden pt-2">
            Contact
            <span className="absolute inset-x-0 bottom-0 h-[5%] group-hover:w-full bg-white"></span>
            </button>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;