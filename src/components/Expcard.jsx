import React from "react";

export default function Expcard({
  image,
  company,
  time,
  location,
  status,
  role,
}) {
  return (
    <div className="flex flex-row gap-x-4">
      <div
        className="
        w-[20rem] sm:w-[24rem] md:w-[40rem] h-[25rem] sm:h-[30rem] md:h-[13rem] 
        rounded-xl shadow-[#950101] shadow-lg drop-shadow-sm"
      >
        <div className="w-full h-full md:flex md:flex-row flex flex-col p-2 sm:p-2 pt-2 sm:pt-2">
          {/* Image Section */}
          <img
            className="w-full md:w-[15rem] h-[10rem] sm:h-[12rem] md:h-[12rem] opacity-90 rounded-lg object-cover"
            src={image}
            alt={company}
          />
          {/* Content Section */}
          <div className="w-full h-full flex flex-col gap-y-2 pt-[1.2rem] pl-[1.2rem]">
            <h1 className="text-[1.5rem] font-bold">{role}</h1>
            <div className="flex flex-row gap-x-2">
              <h1 className="md:text-[1.2rem] text-[1rem] font-semibold">{company}</h1>
              <h1 className="md:text-[1.2rem] text-[1rem] font-semibold">{status}</h1>
            </div>
            <h1 className="font-extralight">{time}</h1>
            <h1 className="font-extralight">{location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
