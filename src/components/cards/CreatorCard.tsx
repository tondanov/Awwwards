"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface IProps {
  avatar: string;
  imageArr: string[];
  title: string;
  day: string;
  website: string;
  awards: string;
}

const CreatorCard = ({
  avatar,
  imageArr,
  title,
  day,
  website,
  awards,
}: IProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className=" bg-customDark p-8 md:p-[57px] rounded-[8px]">
      <div>
        <div className="flex justify-between gap-4">
          <div>
            <Avatar className="w-[52px] h-[52px]">
              <AvatarImage src={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Carousel
              setApi={setApi}
              className="w-full max-w-xs"
              opts={{
                loop: true,
              }}
              plugins={[plugin.current]}
            >
              <CarouselContent>
                {imageArr.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt="sliding image"
                      className="rounded-l-[1rem]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex gap-[12px] mt-[36px] justify-end">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  className={`w-3 h-3 rounded-full ${
                    current === index + 1 ? "bg-white" : "bg-white/20"
                  }`}
                  key={index}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[30px] mb-[30px] flex justify-between items-start gap-8">
          <div>
            <p className="text-[] text-white">International</p>
            <p className="text-white font-bold text-[52.06px] leading-tight">
              {title}
            </p>
          </div>
          <div className="border border-white/30 p-4 rounded-[8px] ">
            <p className="text-white">Works</p>
            <p className="font-bold text-[20.81px] text-white">{day}</p>
          </div>
        </div>
        <div className="flex justify-between gap-4 ">
          <p className="text-white text-[14px]">{website}</p>
          <p className="text-white text-[14px]">{awards} awards</p>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
