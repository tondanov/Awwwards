import React from "react";
import Image from "next/image";
import NomineeCard from "../cards/NomineeCard";
import { ArrowRight } from "lucide-react";

const NomineesSection = () => {
  const nomineeData = [
    {
      image: "/images/nm_1.png",
      productName: "RRE",
      avatar: "/images/nm_a_1.png",
      authorName: "Studio Freight",
    },
    {
      image: "/images/nm_2.png",
      productName: "Memphis Milano",
      avatar: "/images/nm_a_2.png",
      authorName: "Nicholas Ruggeri",
    },
    {
      image: "/images/nm_3.png",
      productName: "kidSuper World",
      avatar: "/images/nm_a_3.png",
      authorName: "basement studio",
    },
  ];

  return (
    <section>
      <div className="text-center">
        <p className="text-[14.38px] text-customDark">Latest</p>
        <div className="">
          <div className="relative text-[4rem] md:text-[164px] font-bold text-customDark inline-block">
            NOMINEES
            <div className="hidden md:block absolute -right-9 bottom-4">
              <Image
                src="/images/yellow_rectangle.png"
                alt="yellow rectangle"
                width={143.78}
                height={58}
              />
            </div>
          </div>
        </div>
        <p>
          Vote for the latest websites on <br /> awwwards
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between mt-8 md:mt-[100px]">
        {nomineeData.map((nominee, index) => (
          <NomineeCard {...nominee} key={index} />
        ))}
      </div>

      <div className="flex justify-end mt-[50px] mb-[80px]">
        <Image
          src="/images/chevron_right_button.png"
          alt="button"
          width={40}
          height={40}
        />
      </div>

      <div className="flex items-center gap-[19px] justify-center">
        <p>Check out all submitted websites</p>
        <ArrowRight />
        <div>
          <p className="text-[18.28px] font-bold mb-2">
            <a href="#">View Nominees</a>
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

export default NomineesSection;
