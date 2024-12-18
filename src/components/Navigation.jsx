import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ]; // Array menu navigasi

  const location = useLocation(); // Mendapatkan URL aktif
  const activePage = location.pathname; // Path URL aktif

  return (
    <div className="fixed w-full h-[5rem] cursor-pointer bg-black z-10">
      <div className="flex flex-row items-center w-full h-full">
        {/* Brand Name */}
        <h1 className="md:w-[6.9rem] w-full md:justify-start justify-center flex md:flex text-[1.6rem] font-bold md:ml-[6rem] ml-0 md:rounded-none rounded-b-2xl bg-gradient-to-r from-[#FF0000] to-[#950101] text-transparent bg-clip-text">
          Jercarlo
        </h1>
        {/* Navigation Menu */}
        <div className=" hidden text-white md:flex flex-row gap-x-[2rem] w-full justify-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link} // Link ke path
              className={`group relative cursor-pointer transition-all duration-300 ${
                activePage === item.link
                  ? "font-bold text-white"
                  : "font-extralight"
              }`}
            >
              <h1 className="text-lg">{item.name}</h1>
              <div
                className={`absolute left-0 top-[2.2rem] ${
                  activePage === item.link ? "w-full" : "w-0"
                } h-[2px] bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-lg transition-all duration-300 group-hover:w-full`}
              ></div>
            </Link>
          ))}
        </div>
        {/* Navigation Menu - Mobile View */}
        <div className="md:hidden w-full fixed bottom-0 left-0 bg-gradient-to-r from-[#FF0000] to-[#950101] border-t border-stone-50 rounded-t-3xl">
          <div className="flex justify-between items-center w-full h-[4rem] px-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`flex flex-col items-center justify-center text-white transition-all duration-300 ${
                  activePage === item.link ? "font-bold" : "font-extralight"
                }`}
              >
                <h1 className="text-lg">{item.name}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
