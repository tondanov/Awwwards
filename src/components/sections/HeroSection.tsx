import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative overflow-hidden dark:bg-[#0B0B0F] bg-[#080B0F] w-full">
      <MacbookScroll src={`/images/linear.webp`} showGradient={false} />

      <div className="absolute text-[64px] font-bold text-white/10 top-[5.5rem] right-[9rem]">
        Aww
      </div>
      <div className="absolute text-[64px] font-bold text-white top-[6rem] right-0 rotate-90">
        wards
      </div>
    </div>
  );
}

export default HeroSection;
