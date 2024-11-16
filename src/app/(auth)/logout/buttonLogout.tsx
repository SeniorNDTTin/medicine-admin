'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import { deleteCookie } from "@/helpers/cookies";

function ButtonLogout() {
  const router = useRouter();
  const { setIsLogin } = useAuth();

  const handleLogout = () => {
    setIsLogin(false);
    deleteCookie("token");
    router.push('/login');
  }

  return (
    <Button variant="destructive" onClick={handleLogout}>Đăng xuất</Button>
  )
}

export default ButtonLogout;  