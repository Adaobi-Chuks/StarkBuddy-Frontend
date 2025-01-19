import { isValidContractAddress } from "../validateContractAddress";

const generateInsightsPayload = (input, username) => {
    if (isValidContractAddress(input.trim())) {
        return {
            userName: username,
            name: username,
            tokenAddress: input
        };
    } else {
        return "Invalid address.";
    }
};

const formatInsightsReply = (data) => {
    return data.response.text;
};

export {
    generateInsightsPayload,
    formatInsightsReply
}