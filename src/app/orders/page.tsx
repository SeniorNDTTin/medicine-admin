"use client";

import React from "react";
import ProtectedRoute from "@/components/protectedRoute";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import OrderTable from "./orderTable";

function Orders() {
  const router = useRouter();

  return (
    <ProtectedRoute>
      <OrderTable />
    </ProtectedRoute>
  );
}

export default Orders;
