import React from "react";
import FollowBrandCard from "../cards/FollowBrandCard";
import { Separator } from "../ui/separator";
import Image from "next/image";

const FollowBrandSection = () => {
  const newsData = [
    {
      title: "Element of the Day",
      subtitle: "Longpress feature",
      avatar: "/images/fb_1.png",
      tag: "fresh",
    },
    {
      title: "News - December 20, 2023",
      subtitle: "28K Making Carlos Alcaraz",
      avatar: "/images/fb_3.png",
    },
    {
      title: "News - December 15, 2023",
      subtitle: "JOIN THE AWWWARDS JURY 2024",
      avatar: "/images/fb_5.png",
    },
    {
      title: "News - December 13, 2023",
      subtitle: "Somefolk® Digital Goods",
      avatar: "/images/fb_7.png",
    },
  ];

  const newsData2 = [
    {
      title: "Agency",
      subtitle: "Achitects",
      avatar: "/images/fb_2.png",
      tag: "INTERNATIONAL",
    },
    {
      title: "Studio",
      subtitle: "OHMY",
      avatar: "/images/fb_4.png",
      tag: "INTERNATIONAL",
    },
    {
      title: "Freelance - Unites States",
      subtitle: "Jose Hurtado",
      avatar: "/images/fb_6.png",
    },
    {
      title: "Studio - Unites States",
      subtitle: "Claudio Guglieri",
      avatar: "/images/fb_8.png",
    },
  ];

  return (
    <section className=" bg-inherit mt-10">
      <div>
        <p className="text-[14.25px] text-customDark mb-[17px]">
          News and Updates
        </p>
        <div className="flex justify-between md:items-end flex-col md:flex-row gap-4">
          <p className="text-[1.5rem] md:text-[51.08px] text-customDark font-bold">
            Follow what's brand
            <br /> new in digital desing.
          </p>
          <p className="text-[14.25px] text-customDark">
            Don't miss the <b>latest </b>happenings on <b>awwwards</b>.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-[105px]  gap-[58px]">
        <section className="flex-grow">
          <p className="font-bold text-[14.38px] mb-[33px]"> w.news</p>
          <div className="flex flex-col gap-1">
            {newsData.map((data, title) => (
              <FollowBrandCard {...data} key={title} />
            ))}
          </div>
        </section>

        <section className="flex-grow">
          <p className="font-bold text-[14.38px] mb-[33px]">
            {" "}
            w.creators - close to you
          </p>
          <div className="flex flex-col gap-1">
            {newsData2.map((data, title) => (
              <FollowBrandCard {...data} key={title} />
            ))}
          </div>
        </section>

        <section className="">
          <p className="font-bold text-[14.38px] mb-[33px]">Featured</p>
          <Separator className="border border-[#E9E9E9]" />
          <div>
            <Image
              src="/images/fb_large.png"
              width={566.94}
              height={304.97}
              alt="picture"
            />
          </div>
          <p className="text-[14.38px] text-customDark mt-[40px]">
            Coming soon!
          </p>
          <p className="text-[18.44px] font-bold">
            6 new honors to celebrate Web Design Excellence.
          </p>
        </section>
      </div>
    </section>
  );
};

export default FollowBrandSection;
