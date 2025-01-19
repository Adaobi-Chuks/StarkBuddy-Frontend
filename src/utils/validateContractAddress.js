const isValidContractAddress = (address) => {
    const contractAddressRegex = /^0x([A-Fa-f0-9]{40})$/;
    return contractAddressRegex.test(address);
};

export {
    isValidContractAddress
}