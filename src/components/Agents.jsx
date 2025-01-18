import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Agent = () => {
    return (
        <div className="flex justify-center items-center h-full py-8 mb-14">
            <ul className="flex space-x-20">
                <li>
                    <a
                        href="https://x.com/StarkBuddy_ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-[#3fe8ab] text-white text-2xl rounded-lg space-x-3 hover:bg-[#32d097] transform hover:scale-110 transition-all"
                    >
                        <FaTwitter className="text-4xl" />
                        <span>Twitter Agent</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://t.me/starkBuddy_ai_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-[#3fe8ab] text-white text-2xl rounded-lg space-x-3 hover:bg-[#32d097] transform hover:scale-110 transition-all"
                    >
                        <FaTelegram className="text-4xl" />
                        <span>Telegram Agent</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Agent;