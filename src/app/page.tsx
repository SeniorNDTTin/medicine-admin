import React from "react";
import ChartSale from "./chartSale";
import ProtectedRoute from "@/components/protectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="mb-8">
        <h2 className="title-component">Tổng Quan Doanh Số</h2>
        <ChartSale />
      </div>
    </ProtectedRoute>
  );
}