import React from "react";
import PageTemplate from "../components/PageTemplate";

const TransactionPage = () => {
    return (
        <PageTemplate
            title="Transaction Details"
            placeholder="Enter a transaction hash..."
            endpoint="/api/transaction"
        />
    );
};

export default TransactionPage;