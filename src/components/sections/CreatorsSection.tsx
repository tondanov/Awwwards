import React from "react";
import Image from "next/image";
import NomineeCard from "../cards/NomineeCard";
import { ArrowRight } from "lucide-react";
import CreatorCard from "../cards/CreatorCard";

const CreatorsSection = () => {
  const creatorData = [
    {
      avatar: "/images/c_a_1.png",
      imageArr: ["/images/c_1.png", "/images/c_2.png", "/images/c_3.png"],
      title: "Crafted",
      day: "09",
      website: "craftedny.com",
      awards: "3",
    },
    {
      avatar: "/images/c_a_2.png",
      imageArr: ["/images/c_2.png", "/images/c_1.png", "/images/c_3.png"],
      title: "Adoratorio Studio",
      day: "59",
      website: "adoratorio.com",
      awards: "54",
    },
    {
      avatar: "/images/c_a_3.png",
      imageArr: ["/images/c_3.png", "/images/c_2.png", "/images/c_1.png"],
      title: "Immersive Garden",
      day: "76",
      website: "immersive-g.com",
      awards: "74",
    },
  ];

  return (
    <section>
      <div className="text-center">
        <p className="text-[14.38px] text-customDark">Directory</p>
        <div className="">
          <div className="relative text-[4rem] md:text-[164px] font-bold text-customDark inline-block">
            W.CREATORS
            <div className="hidden md:block absolute -right-16 bottom-0">
              <Image
                src="/images/star.png"
                alt="star"
                width={109.78}
                height={110}
              />
            </div>
          </div>
        </div>
        <p>Active creators in your country.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32 md:mt-[100px]">
        {creatorData.map((creator, index) => (
          <CreatorCard {...creator} key={index} />
        ))}
      </div>

      <div className="flex items-center gap-[19px] justify-center mt-32">
        <p>
          Connect with over <b>5,185</b> Agencies and Professionals
        </p>
        <ArrowRight />
        <div>
          <p className="text-[18.28px] font-bold mb-2">
            <a href="#">View Directory</a>
          </p>
          <Image
            src="/images/nm_underline.png"
            alt="stylish underline"
            width={152.23}
            height={2}
          />
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
