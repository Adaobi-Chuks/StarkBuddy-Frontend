import React from "react";

const Message = ({ type, text }) => (
    <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}>
        <div className="p-3 bg-[#31c08c] text-black rounded-lg inline-block">
            {text}
        </div>
    </div>
);

export default Message;