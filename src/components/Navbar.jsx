import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
                <img
                    src="/src/assets/StarkBuddyNoBG.png"
                    alt="StarkBuddy Logo"
                    className="h-16 w-16 mr-4"
                />
                <span className="text-2xl font-bold text-[#3fe8ab]">StarkBuddy</span>
            </div>
            <ul className="flex space-x-20 text-xl mr-20">
                <li>
                    <a
                        href="https://x.com/StarkBuddy_ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-[#3fe8ab] text-white rounded-lg space-x-2 hover:bg-[#3fe8ab] transform hover:scale-105 transition-all"
                    >
                        <FaTwitter className="text-2xl" />
                        {/* <span>Twitter</span> */}
                    </a>
                </li>
                <li>
                    <a
                        href="https://t.me/starkBuddy_ai_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-[#3fe8ab] text-white rounded-lg space-x-2 hover:bg-[#3fe8ab] transform hover:scale-105 transition-all"
                    >
                        <FaTelegram className="text-2xl" />
                        {/* <span>Telegram</span> */}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;