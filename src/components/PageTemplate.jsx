import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronDown } from "react-icons/fi";

const PageTemplate = ({ title, placeholder }) => {
  // State for managing messages
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  // Ref to the chat container for scrolling
  const chatEndRef = useRef(null);
  const chatBoxRef = useRef(null);

  // Function to handle sending a message
  const handleSend = () => {
    if (input.trim()) {
      // Add the user message
      const newMessages = [...messages, { type: "user", text: input }];
      setMessages(newMessages);

      // Clear input field
      setInput("");

      // Simulate system response after a delay
      setTimeout(() => {
        const systemMessage = {
          type: "system",
          text: "This is an automated response to your message.",
        };
        setMessages((prevMessages) => [...prevMessages, systemMessage]);
      }, 1000); // Simulate a response after 1 second
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Function to handle Enter key for sending messages
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Function to show or hide scroll-to-bottom button
  const handleScroll = (e) => {
    const isScrolledUp = e.target.scrollTop < e.target.scrollHeight - e.target.clientHeight;
    setShowScrollToBottom(isScrolledUp);
  };

  return (
    <div className="bg-black text-white">
      {/* Left Arrow - Hidden on Mobile */}
      <div className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 lg:left-12 items-center justify-center w-20 h-20 border-2 border-[#3fe8ab] rounded-full hover:bg-[#3fe8ab] hover:text-black transition-all">
        <a href="/" className="flex items-center justify-center w-full h-full">
          <FiChevronLeft className="w-12 h-12 transition-transform transform hover:scale-110" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-8 md:px-6 lg:px-8 min-h-[80vh]">
        <h1 className="text-2xl md:text-4xl font-bold text-[#3fe8ab] mb-6 text-center">{title}</h1>
        <div className="relative w-full max-w-4xl bg-[#1c1c1c] rounded-lg shadow-lg p-6 md:p-8 flex flex-col space-y-6">
          {/* Chat Messages - Scrollable Area */}
          <div
            ref={chatBoxRef}
            className="flex-1 overflow-y-auto space-y-6 max-h-[50vh] custom-scrollbar"
            onScroll={handleScroll}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 bg-[#3fe8ab] text-black rounded-lg inline-block`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Scroll to Bottom Button centered below the chat */}
          {showScrollToBottom && (
            <div
              onClick={() => chatEndRef.current.scrollIntoView({ behavior: "smooth" })}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-[#3fe8ab] text-black rounded-full p-3 cursor-pointer hover:bg-[#1c7e67] transition-all"
            >
              <FiChevronDown className="w-8 h-8" />
            </div>
          )}

          {/* Input Box with Send button inside */}
          <div className="flex items-center space-x-2 mt-4 relative w-full">
            <input
              type="text"
              placeholder={placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-2 bg-[#333] text-white rounded-lg focus:outline-none cursor-text z-10"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-[#3fe8ab] text-black font-bold rounded-lg hover:bg-[#1c7e67] transition z-20 absolute right-1 top-0 bottom-0 m-1"
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
