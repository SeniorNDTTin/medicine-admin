import React from "react";
import ProtectedRoute from "@/components/protectedRoute";
import TypeTable from "./typeTable";

function Types() {
  return (
    <ProtectedRoute>
      <TypeTable />
    </ProtectedRoute>
  );
}

export default Types;