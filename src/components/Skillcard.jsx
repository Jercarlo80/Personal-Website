import React from "react";

export default function Skillcard({ image, title }) {
  return (
    <div
      className="
      w-[20rem] sm:w-[24rem] md:w-[32rem] h-[22rem] sm:h-[30rem] md:h-[15rem] 
      rounded-xl shadow-[#950101] shadow-lg drop-shadow-sm "
    >
      <div className="w-full h-full flex flex-row p-2 sm:p-2">
        {/* Image Section */}
        <img
          className="w-full h-[10rem] sm:h-[12rem] md:h-[14rem] rounded-lg opacity-75 object-cover"
          src={image}
          alt={title}
        />
        {/* Content Section */}
      </div>
    </div>
  );
}
