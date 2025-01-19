import { isValidContractAddress } from "../validateContractAddress";

const generateInsightsPayload = (input, username) => {
    if (isValidContractAddress(input.trim())) {
        return {
            userName: "28",
            name: "ug",
            text: input
        };
    } else {
        return "Invalid address.";
    }
};

const formatInsightsReply = (data) => {
    return data.results.map(item => `${item.title}: ${item.description}`).join("\n");
};

export {
    generateInsightsPayload,
    formatInsightsReply
}