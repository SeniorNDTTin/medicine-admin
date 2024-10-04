'use client'

import React from "react";
import { Button } from "@/components/ui/button"

import "./header.css";

function Header() {
  const handleClick = () => {
    console.log("OK");
  }

  return (
    <React.Fragment>
      <div className="header">
        <div>IMG</div>
        <div>
          <Button variant="destructive" onClick={handleClick}>Logout</Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;