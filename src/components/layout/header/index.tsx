import Link from "next/link";
import React from "react";
import NavbarDesktop from "./navbar-desktop";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Azzam<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <NavbarDesktop />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
