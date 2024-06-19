import React from "react";
import Marquee from "react-fast-marquee";

const HeaderSection = () => {
  const data = [
    "Mythic Codex — James Onterio - 7.26 —",
    "Mythic Codex — Paul Rodrick - 7.26 —",
    "Mythic Codex — Smith Rawson - 7.26 —",
    "Mythic Codex — Jake Paul - 7.26 —",
    "Mythic Codex — Mike Tyson - 7.26 —",
    "Mythic Codex — Ryan Garcia - 7.26 —",
    "Mythic Codex — Khabib N. - 7.26 —",
    "Mythic Codex — Justin P. - 7.26 —",
  ];
  return (
    <div>
      <p className=" font-bold text-[3rem] md:text-[164px] md:pt-8 text-customDark text-center">
        Awwwards
      </p>
      <div className="mb-[66px]">
        <Marquee pauseOnHover gradient>
          {data.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HeaderSection;
