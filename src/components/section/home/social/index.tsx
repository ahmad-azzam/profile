import { SOCIAL_LIST } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type SocialProps = {
  containerStyle?: string;
  iconStyle?: string;
};

const Social: React.FC<SocialProps> = ({ containerStyle, iconStyle }) => {
  return (
    <div className={cn("", containerStyle)}>
      {SOCIAL_LIST.map((social, index) => (
        <Link
          key={`${index}__home__social`}
          href={social.url}
          className={cn("", iconStyle)}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
