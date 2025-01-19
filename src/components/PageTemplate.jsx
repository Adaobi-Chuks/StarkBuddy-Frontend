import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const PageTemplate = ({ title, placeholder, endpoint }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Left Arrow */}
      <div className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 lg:left-12 items-center justify-center w-20 h-20 border-2 border-[#3fe8ab] rounded-full hover:bg-[#3fe8ab] hover:text-black transition-all">
        <a
          href="/"
          className="flex items-center justify-center w-full h-full"
        >
          <FiChevronLeft className="w-12 h-12 transition-transform transform hover:scale-110" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl font-bold text-[#3fe8ab] mb-6 text-center">{title}</h1>
        <div className="w-full max-w-4xl bg-[#1c1c1c] rounded-lg shadow-lg p-6 md:p-8 flex flex-col space-y-6">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-6">
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
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder={placeholder}
              className="w-full md:flex-1 px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none"
            />
            <button
              className="px-4 py-3 bg-[#3fe8ab] text-black font-bold rounded-lg hover:bg-[#1c7e67] transition cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;