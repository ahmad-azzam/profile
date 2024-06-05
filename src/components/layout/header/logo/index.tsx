import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/">
      <h1 className={cn("text-4xl font-semibold", className)}>
        Azzam<span className="text-accent">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
