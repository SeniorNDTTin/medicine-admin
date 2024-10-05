'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { GiMedicinePills } from "react-icons/gi";
import ButtonLogout from "@/app/(auth)/logout/buttonLogout";

import "./header.css";

function Header() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/');
  }

  return (
    <React.Fragment>
      <div className="header">
        <div className="header-logo" onClick={handleNavigate}>
          <div className="header-icon">
            <GiMedicinePills />
          </div>
          <div className="header-content">
            THMs Medicine
          </div>
        </div>
        <div className="header-auth">
          <ButtonLogout />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;