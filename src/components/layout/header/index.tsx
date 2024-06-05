import Link from "next/link";
import React from "react";
import NavbarDesktop from "./navbar-desktop";
import { Button } from "@/components/ui/button";
import NavbarMobile from "./navbar-mobile";
import Logo from "./logo";

const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <div className="hidden xl:flex items-center gap-8">
          <NavbarDesktop />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
