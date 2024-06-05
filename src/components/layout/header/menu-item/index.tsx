import { TMenuItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuItemProps = {
  className?: string;
  menu: TMenuItem;
};

const MenuItem: React.FC<MenuItemProps> = ({ className, menu }) => {
  const pathname = usePathname();

  return (
    <Link
      href={menu.path}
      className={cn(
        "capitalize font-medium hover:text-accent-hover transition-all",
        pathname === menu.path && "text-accent border-b-2 border-accent",
        className
      )}
    >
      {menu.name}
    </Link>
  );
};

export default MenuItem;
