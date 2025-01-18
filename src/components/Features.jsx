import React from "react";
import Card from "./Card";

const Features = () => {
    const features = [
        {
            title: "Chat with StarkBuddy",
            description: "Engage with our AI agent to explore StarkNet data, answer queries, and gain actionable insights.",
            link: "/chat",
        },
        {
            title: "Token Insights",
            description: "Analyze any token using its contract address to discover trends, performance, and statistics.",
            link: "/insights",
        },
        {
            title: "Transaction Details",
            description: "Retrieve comprehensive details of transactions using their hashes for deep analysis.",
            link: "/transactions",
        },
    ];

    return (
        <section className="py-12  px-20 bg-black text-white">
            <div className="container ml-auto">
                <div className="grid gap-24 md:grid-cols-3"> {/* Increased gap */}
                    {features.map((feature, index) => (
                        <Card key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;