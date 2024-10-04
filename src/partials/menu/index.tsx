import { menus } from "@/variables/menus";
import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <React.Fragment>
      <ul className="flex-col">
        {menus.map((item, index) => (
          <li key={index}>
            <Link href={`${item.path}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Menu;