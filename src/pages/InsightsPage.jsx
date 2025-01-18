import React from "react";
import PageTemplate from "../components/PageTemplate";

const InsightsPage = () => {
    return (
        <PageTemplate
            title="Token Insights"
            placeholder="Enter a contract address..."
            endpoint="/api/insights"
        />
    );
};

export default InsightsPage;