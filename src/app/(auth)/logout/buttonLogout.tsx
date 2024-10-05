'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";

function ButtonLogout() {
  const router = useRouter();
  const { setIsLogin } = useAuth();

  const handleLogout = () => {
    setIsLogin(false);
    router.push('/login');
  }

  return (
    <Button variant="destructive" onClick={handleLogout}>Logout</Button>
  )
}

export default ButtonLogout;  