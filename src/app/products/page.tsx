'use client';

import React, { useEffect } from "react";
import ProductsTable from "./productsTable";
import { setCookie } from "@/helpers/cookies";

function Products() {
  useEffect(() => {
    setCookie("token", "sadfjdsafkj", 100);
  }, []);

  return (
    <React.Fragment>
      <ProductsTable />
    </React.Fragment>
  )
}

export default Products;