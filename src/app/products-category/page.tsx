import React from "react";
import ProductsCategoryTable from "./products-categoryTable";
import ProtectedRoute from "@/components/protectedRoute";

function ProductsCategory() {
  return (
    <ProtectedRoute>
      <ProductsCategoryTable />
    </ProtectedRoute>
  );
}

export default ProductsCategory;