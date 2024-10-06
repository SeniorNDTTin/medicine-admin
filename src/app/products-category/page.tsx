import React from "react";
import ProtectedRoute from "@/components/protectedRoute";
import ProductsCategoryTable from "./products-categoryTable";

function ProductsCategory() {
  return (
    <ProtectedRoute>
      <ProductsCategoryTable />
    </ProtectedRoute>
  );
}

export default ProductsCategory;