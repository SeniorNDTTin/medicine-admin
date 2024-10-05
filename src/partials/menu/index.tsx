'use client';

import React from "react";
import { useRouter } from "next/navigation";

import { menus } from "@/variables/menus";

import "./menu.css";

function Menu() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(`${path}`);
  }

  return (
    <React.Fragment>
      <ul className="menu">
        {menus.map((item, index) => (
          <li className="menu-item" key={index} onClick={() => handleClick(item.path)}>
            <div className="menu-icon">
              < item.icon />
            </div>

            <div className="menu-content">{item.title}</div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Menu;