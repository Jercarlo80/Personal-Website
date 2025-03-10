import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { MdPerson, MdWork } from "react-icons/md";

export default function Navigation() {
  const navItems = [
    { name: "Home", link: "/", icon: <AiFillHome size={28} /> },
    { name: "About Me", link: "/about", icon: <MdPerson size={28} /> },
    { name: "Portfolio", link: "/portfolio", icon: <MdWork size={28} /> },
    { name: "Contact", link: "/contact", icon: <AiFillContacts size={28} /> },
  ]; 

  const location = useLocation(); 
  const activePage = location.pathname; 

  return (
    <div className="fixed w-full h-[5rem] cursor-pointer bg-[#020301] z-10">
      <div className="flex flex-row items-center w-full h-full">
        {/* Brand Name */}
        <h1 className="md:w-[6.9rem] w-full md:justify-start justify-center flex md:flex text-[1.6rem] font-bold md:ml-[6rem] ml-0 md:rounded-none rounded-b-2xl bg-gradient-to-r from-[#FF0000] to-[#950101] text-transparent bg-clip-text">
          Jercarlo
        </h1>

        {/* Navigation Menu - Desktop View (Hanya Teks) */}
        <div className="hidden text-white md:flex flex-row gap-x-[2rem] w-full justify-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`group relative cursor-pointer transition-all duration-300 ${
                activePage === item.link ? "font-bold text-white" : "font-extralight"
              }`}
            >
              <h1 className="text-lg">{item.name}</h1>
              <div
                className={`absolute left-0 top-[2.2rem] ${
                  activePage === item.link ? "w-full" : "w-0"
                } h-[2px] bg-gradient-to-r from-[#800000] to-[#950101] rounded-lg transition-all duration-300 group-hover:w-full`}
              ></div>
            </Link>
          ))}
        </div>

        {/* Navigation Menu - Mobile View (Hanya Ikon) */}
        <div className="md:hidden w-full fixed bottom-0 left-0 bg-[#121212] border-t border-gray-700 shadow-lg rounded-t-3xl">
          <div className="flex justify-between items-center w-full h-[4.5rem] px-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`flex flex-col items-center justify-center text-gray-400 transition-all duration-300 ${
                  activePage === item.link ? "text-white scale-110" : ""
                }`}
              >
                {item.icon}
                <div
                  className={`h-[3px] w-0 bg-red-500 rounded-full mt-1 transition-all duration-300 ${
                    activePage === item.link ? "w-4" : "w-0"
                  }`}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
