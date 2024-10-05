'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GiMedicinePills } from "react-icons/gi";

import "./header.css";

function Header() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/');
  }

  const handleLogout = () => {
    router.push('/login');
  }

  return (
    <React.Fragment>
      <div className="header">
        <div className="header-logo" onClick={handleNavigate}>
          <div className="header-icon">
            <GiMedicinePills />
          </div>
          <div className="header-content">
            THM's Medicine
          </div>
        </div>
        <div className="header-auth">
          <Button variant="destructive" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;