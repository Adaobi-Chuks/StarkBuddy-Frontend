import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const PageTemplate = ({ title, placeholder, endpoint }) => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Arrow */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 md:left-6 lg:left-12 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 border-2 border-[#3fe8ab] rounded-full hover:bg-[#3fe8ab] hover:text-black transition-all">
        <a
          href="/"
          className="flex items-center justify-center w-full h-full"
        >
          <FiChevronLeft className="w-12 h-12 md:w-16 md:h-16 transition-transform transform hover:scale-110" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-[#3fe8ab] mb-6">{title}</h1>
        <div className="w-full max-w-2xl bg-[#1c1c1c] rounded-lg shadow-lg p-4 flex flex-col space-y-4">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4">
            <div className="text-left">
              <div className="p-3 bg-[#3fe8ab] text-black rounded-lg inline-block">
                System message
              </div>
            </div>
            <div className="text-right">
              <div className="p-3 bg-[#1c7e67] text-white rounded-lg inline-block">
                User message
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="flex items-center space-x-2 mt-4 relative">
            <input
              type="text"
              placeholder={placeholder}
              className="flex-1 px-4 py-2 bg-[#333] text-white rounded-lg focus:outline-none cursor-text z-10"
            />
            <button
              className="px-4 py-2 bg-[#3fe8ab] text-black font-bold rounded-lg hover:bg-[#1c7e67] transition cursor-pointer z-20"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-16 p-4">
        {/* Optional Content */}
      </div>
    </div>
  );
};

export default PageTemplate;