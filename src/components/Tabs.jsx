import React, { useState } from "react";

export default function Tabs ({ tabs }) {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab index

  return (
    <div className="md:w-full w-[75%] h-screen max-w-[70rem] mt-4">
      {/* Tabs Header */}
      <div className="flex border-b-2 border-[#950101]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 md:text-lg text-sm font-semibold focus:outline-none ${
              activeTab === index
                ? "text-white bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-t-lg"
                : "text-gray-600 hover:text-white"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-2 bg-black shadow-md rounded-b-lg text-white">
        {tabs[activeTab] && <p>{tabs[activeTab].content}</p>}
      </div>
    </div>
  );
};