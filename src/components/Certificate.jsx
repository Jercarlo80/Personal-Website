import React from "react";
import { IoOpenOutline } from "react-icons/io5";

export default function Certificate({ image, title, company, year, skill }) {
  return (
    <div
      className="
      w-[20rem] sm:w-[24rem] md:w-[32rem] h-[30rem] sm:h-[30rem] md:h-[45rem] 
      rounded-xl shadow-[#950101] shadow-lg drop-shadow-sm"
    >
      <div className="w-full h-full flex flex-col p-2 sm:p-2">
        {/* Image Section */}
        <img
          className="w-full h-[10rem] sm:h-[12rem] md:h-[24rem] rounded-lg opacity-75 object-cover"
          src={image}
          alt={title}
        />
        {/* Content Section */}
        <div className="flex flex-col w-full h-full mt-4 gap-y-2 sm:gap-y-3 px-2 sm:px-4">
          <h1 className="font-semibold text-[1.4rem] sm:text-[1.8rem] md:text-[2rem]">
            {title}
          </h1>
          <h2 className="text-[1rem] sm:text-[1.2rem] font-extralight">
            {company}
          </h2>
          <h3 className="text-[1rem] sm:text-[1.2rem] font-extralight">
            {year}
          </h3>
          <h3 className="text-[1rem] sm:text-[1.2rem] font-extralight">
            <span className="font-bold">Skill: {skill}</span>
          </h3>
          <a
            href="https://drive.google.com/drive/u/0/folders/1AdUdQBDd9p_QpiiaKXvenzIOvHqbCdzO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="md:w-[27rem] w-[18rem] md:h-[4rem] h-[3rem] md:mt-0 mt-4 [box-shadow:0_10px_0_#FF0000] active:translate-y-[5px] active:[box-shadow:0_5px_0_#FF0000] bg-gradient-to-b from-[#FF0000] to-[#950101] rounded-3xl">
              <div className="w-full h-full flex flex-row justify-center items-center gap-x-4 text-white">
                <h1 className="text-[1.4rem] font-bold">Show Credential</h1>
                <IoOpenOutline color="white" size={40} />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
