import React from "react";

import { FiChevronDown } from "react-icons/fi";

const ScrollToBottomButton = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-[#3fe8ab] text-black rounded-full p-3 cursor-pointer hover:bg-[#1c7e67] transition-all"
  >
    <FiChevronDown className="w-8 h-8" />
  </div>
);

export default ScrollToBottomButton;
