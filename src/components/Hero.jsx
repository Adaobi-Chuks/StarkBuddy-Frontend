import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center min-h-[40vh]">
            <h1 className="text-6xl font-bold text-[#3fe8ab] mb-20">StarkBuddy</h1>
            <p className="text-lg max-w-2xl text-white">
                Your AI-powered assistant for actionable insights on the StarkNet blockchain. <br />
                Chat with StarkBuddy, interact with our Twitter and Telegram agents. <br />
                Track transactions, analyze tokens, and stay informed with real-time updates.
            </p>
        </section>
    );
};

export default Hero;