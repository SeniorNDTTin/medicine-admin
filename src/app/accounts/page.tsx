'use client';

import React from "react";
import ProtectedRoute from "@/components/protectedRoute";
import AccountsTable from "./accountsTable";

function Accounts() {
  return (
    <ProtectedRoute>
      <AccountsTable />
    </ProtectedRoute>
  )
}

export default Accounts;