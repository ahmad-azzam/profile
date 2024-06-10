"use client";

import { STAT_LIST } from "@/lib/constant";
import { cn } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

const Stats: React.FC = () => {
  return (
    <section className="pt-4 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {STAT_LIST.map((stat, index) => (
            <div
              key={`${index}__stats`}
              className="flex-1 flex gap-4 items-center xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                decimals={stat.num % 1 !== 0 ? 1 : 0}
                separator=" "
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={cn(
                  "leading-snug text-white/80",
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                )}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
