const isValidTokenAddress = (address) => {
    const tokenAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    return tokenAddressRegex.test(address);
};

export {
    isValidTokenAddress
}