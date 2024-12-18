import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrivateinternetaccess } from "react-icons/si";

export default function Portfoliocard({ image, title, description, link }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Data tools untuk looping
  const tools = [
    { id: 1, name: "HTML5", color: "#F16529", icon: <FaHtml5 size={40} /> },
    { id: 2, name: "CSS3", color: "#2965F1", icon: <FaCss3Alt size={40} /> },
    {
      id: 3,
      name: "JavaScript",
      color: "#F7E018",
      icon: <IoLogoJavascript size={40} />,
    },
    { id: 4, name: "React", color: "#61DAFB", icon: <FaReact size={40} /> },
    {
      id: 5,
      name: "Tailwind",
      color: "#38B2AC",
      icon: <RiTailwindCssFill size={40} />,
    },
  ];

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div
      className="
      w-[20rem] sm:w-[24rem] md:w-[32rem] h-[32rem] sm:h-[30rem] md:h-[42rem] 
      rounded-xl shadow-[#950101] shadow-lg drop-shadow-sm"
    >
      <div className="w-full h-full flex flex-col p-2 sm:p-2">
        {/* Image Section */}
        <img
          className="w-full h-[10rem] sm:h-[12rem] md:h-[14rem] rounded-lg opacity-75 object-cover"
          src={image}
          alt={title}
        />
        {/* Content Section */}
        <div className="flex flex-col w-full h-full mt-4 gap-y-2 sm:gap-y-3 px-2 sm:px-4">
          <h1 className="font-semibold text-[1.2rem] sm:text-[1.8rem] md:text-[2rem]">
            {title}
          </h1>
          <div className="h-[9rem] sm:h-[9rem] md:h-[16rem] overflow-y-scroll">
            <p className="text-[1rem] sm:text-[1.2rem] text-justify font-extralight">
              {description}
            </p>
          </div>
          <div className="flex flex-row w-full md:h-[4rem] h-[1rem] md:mt-3 mt-4 justify-between">
            {/* Check Tools Button */}
            <button
              className="
              flex flex-row justify-center items-center gap-x-3 w-[10rem] sm:w-[10rem]
              h-[3rem] mx-auto sm:mx-0 bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-full
              [box-shadow:0_10px_0_#FF0000] active:translate-y-[5px] active:[box-shadow:0_5px_0_#FF0000]"
              onClick={togglePopup}
            >
              Check Tools
            </button>

            {/* GitHub Button */}
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex flex-row justify-center items-center gap-x-3 w-[5rem] sm:w-[5rem]
                h-[3rem] mx-auto sm:mx-0 bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-full
                [box-shadow:0_10px_0_#FF0000] active:translate-y-[5px] active:[box-shadow:0_5px_0_#FF0000]"
              >
                <IoLogoGithub size={32} />
              </a>
            ) : (
              <div
                className="
                flex flex-row justify-center items-center gap-x-3 w-[5rem] sm:w-[5rem]
                h-[3rem] mx-auto sm:mx-0 bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-full
                [box-shadow:0_10px_0_#FF0000] active:translate-y-[5px] active:[box-shadow:0_5px_0_#FF0000]"
              >
                <span className="text-white">
                  <SiPrivateinternetaccess size={40} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup dengan looping tools */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center gap-y-4 z-50">
          <div className="flex flex-col justify-start items-start gap-y-4 w-[20rem] sm:w-[24rem] md:w-[30rem] h-auto bg-[#1A1A1D] rounded-lg p-2 shadow-lg">
            <h1 className="font-bold p-4 text-[1.2rem]">
              Tools System Information
            </h1>
            {/* Looping untuk menampilkan setiap tool */}
            <div className="flex flex-row md:w-[28rem] w-[17rem] h-[5rem] ml-4 overflow-x-auto overflow-hidden">
              {tools.map((tool) => (
                <div key={tool.id} className="w-full">
                  <div
                    className="flex flex-row justify-center items-center w-[9rem] h-[3.5rem] shadow-lg ml-4 rounded-2xl"
                    style={{ backgroundColor: tool.color }}
                  >
                    {tool.icon}
                    <h1 className="text-[1rem] font-bold ml-2">{tool.name}</h1>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-4 mb-4 px-4 py-2 bg-[#FF0000] ml-4 text-white rounded-lg shadow-md hover:bg-[#950101]"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
