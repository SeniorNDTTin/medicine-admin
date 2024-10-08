'use client';

import React from "react";
import ProtectedRoute from "@/components/protectedRoute";
import ProductsTable from "./productsTable";

function Products() {
  return (
    <ProtectedRoute>
      <ProductsTable />
    </ProtectedRoute>
  )
}

export default Products;