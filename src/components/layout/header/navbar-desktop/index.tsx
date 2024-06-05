"use client";

import { MENU_LIST } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const NavbarDesktop: React.FC = () => {
  return (
    <nav className="flex gap-8">
      {MENU_LIST.map((menu, index) => (
        <Link href={menu.path} key={`${index}__navbar__desktop`}>
          {menu.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarDesktop;
