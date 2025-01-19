import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft } from "react-icons/fi";
import Message from "./Message";
import ScrollToBottomButton from "./ScrollToBottomButton";
import ChatInput from "./ChatInput";

const PageTemplate = ({ title, placeholder }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const chatEndRef = useRef(null);
  const chatBoxRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { type: "user", text: input }];
      setMessages(newMessages);
      setInput("");
      setTimeout(() => {
        const systemMessage = {
          type: "system",
          text: "This is an automated response to your message.",
        };
        setMessages((prevMessages) => [...prevMessages, systemMessage]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleScroll = (e) => {
    const isScrolledUp = e.target.scrollTop < e.target.scrollHeight - e.target.clientHeight;
    setShowScrollToBottom(isScrolledUp);
  };

  return (
    <div className="bg-black text-white">
      <div className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 lg:left-12 items-center justify-center w-20 h-20 border-2 border-[#3fe8ab] rounded-full hover:bg-[#3fe8ab] hover:text-black transition-all">
        <a href="/" className="flex items-center justify-center w-full h-full">
          <FiChevronLeft className="w-12 h-12 transition-transform transform hover:scale-110" />
        </a>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-8 md:px-6 lg:px-8 min-h-[80vh]">
        <h1 className="text-sm md:text-4xl font-bold text-[#3fe8ab] mb-6 text-center">{title}</h1>
        <div className="relative w-full max-w-4xl bg-[#1c1c1c] rounded-lg shadow-lg p-6 md:p-8 flex flex-col space-y-6">
          <div
            ref={chatBoxRef}
            className="flex-1 overflow-y-auto space-y-6 max-h-[50vh] custom-scrollbar"
            onScroll={handleScroll}
          >
            {messages.map((message, index) => (
              <Message key={index} type={message.type} text={message.text} />
            ))}
            <div ref={chatEndRef} />
          </div>

          {showScrollToBottom && <ScrollToBottomButton onClick={() => chatEndRef.current.scrollIntoView({ behavior: "smooth" })} />}
          <ChatInput value={input} placeholder={placeholder} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress} onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;