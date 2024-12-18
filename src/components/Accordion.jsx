import React, { useState } from "react";

export default function Accordion({ title, content }){
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border border-gray-300 rounded-lg mb-4 shadow-md">
      {/* Accordion Header */}
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-[#FF0000] to-[#950101] text-white font-bold rounded-lg focus:outline-none"
      >
        <span>{title}</span>
        <span className="transform transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-max-height duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-white text-black text-sm">{content}</div>
      </div>
    </div>
  );
};