import React from "react";
import ChartSale from "./chartSale";

export default function Dashboard() {
  return (
    <React.Fragment>
      <div className="mb-8">
        <h2 className="title-component">Sales Dashboard</h2>
        <ChartSale />
      </div>
    </React.Fragment>
  );
}