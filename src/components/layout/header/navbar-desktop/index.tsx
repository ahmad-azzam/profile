"use client";

import { MENU_LIST } from "@/lib/constant";
import React from "react";
import MenuItem from "../menu-item";

const NavbarDesktop: React.FC = () => {
  return (
    <nav className="flex gap-8">
      {MENU_LIST.map((menu, index) => (
        <div key={`${index}__navbar__desktop`}>
          <MenuItem menu={menu} />
        </div>
      ))}
    </nav>
  );
};

export default NavbarDesktop;
