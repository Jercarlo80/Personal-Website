import React from "react";

export default function Educard({ image, title, degree, year, gpa, }) {
  return (
    <div
      className="
      w-[20rem] sm:w-[24rem] md:w-[32rem] h-[22rem] sm:h-[30rem] md:h-[28rem] 
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
          <h1 className="font-semibold text-[1.4rem] sm:text-[1.8rem] md:text-[2rem]">
            {title}
          </h1>
          <h2 className="text-[1rem] sm:text-[1.2rem] font-extralight">
            {degree}
          </h2>
          <h3 className="text-[1rem] sm:text-[1.2rem] font-extralight">
            {year}
          </h3>
          <h3 className="text-[1rem] sm:text-[1.2rem] font-extralight">
            <span className="font-bold">{gpa}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
