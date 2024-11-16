"use client";

import React from "react";
import ProtectedRoute from "@/components/protectedRoute";
import ProductsTable from "./productsTable";
import { Button } from "antd";
import { useRouter } from "next/navigation";

function Products() {
  const router = useRouter();

  const onClickAdd = () => {
    router.push("/products/add");
  }

  return (
    <ProtectedRoute>
      <div style={
        {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }
      }>
        <Button
          onClick={onClickAdd}
          type="primary"
          style={{
            backgroundColor: "green",
            padding: "20px",
            fontWeight: "bold"
          }}
        >
          Thêm
        </Button>
      </div>

      <ProductsTable />
    </ProtectedRoute>
  );
}

export default Products;
