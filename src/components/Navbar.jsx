import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between px-4 py-4 md:px-6 md:py-6">
            <div className="flex items-center">
                <img
                    src="/assets/StarkBuddyNoBG.png"
                    alt="StarkBuddy Logo"
                    className="h-12 w-12 md:h-16 md:w-16 mr-2 md:mr-4"
                />
                <span className="text-lg md:text-2xl font-bold text-[#3fe8ab]">StarkBuddy</span>
            </div>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 mt-4 md:mt-0">
                <li>
                    <a
                        href="https://x.com/StarkBuddy_ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 md:px-4 md:py-2 bg-[#3fe8ab] text-white rounded-lg hover:bg-[#32d097] transform transition-all"
                    >
                        <FaTwitter className="text-xl md:text-2xl" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://t.me/starkBuddy_ai_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 md:px-4 md:py-2 bg-[#3fe8ab] text-white rounded-lg hover:bg-[#32d097] transform transition-all"
                    >
                        <FaTelegram className="text-xl md:text-2xl" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;