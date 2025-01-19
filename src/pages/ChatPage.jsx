import React from "react";
import PageTemplate from "../components/PageTemplate";

const ChatPage = () => {
    return (
        <PageTemplate
            title="Chat with StarkBuddy"
            placeholder="Ask anything..."
            endpoint="/api/chat"
        />
    );
};

export default ChatPage;