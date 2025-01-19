const isValidTokenAddress = (address) => {
    const tokenAddressRegex = /^0x([A-Fa-f0-9]{40})$/;
    return tokenAddressRegex.test(address);
};

export {
    isValidTokenAddress
}