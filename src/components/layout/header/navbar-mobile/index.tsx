"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../logo";
import { MENU_LIST } from "@/lib/constant";
import Link from "next/link";
import MenuItem from "../menu-item";

const NavbarMobile: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center">
          <Logo />
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {MENU_LIST.map((menu, index) => (
            <div key={`${index}__navbar__mobile`}>
              <MenuItem menu={menu} />
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
