'use client';

import React, { useEffect } from "react";
import ProductsTable from "./productsTable";
import { setCookie } from "@/helpers/cookies";
import ProtectedRoute from "@/components/protectedRoute";

function Products() {
  useEffect(() => {
    setCookie("token", "sadfjdsafkj", 100);
  }, []);

  return (
    <ProtectedRoute>
      <ProductsTable />
    </ProtectedRoute>
  )
}

export default Products;