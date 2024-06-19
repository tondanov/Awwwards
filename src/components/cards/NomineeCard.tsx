import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface IProps {
  image: string;
  productName: string;
  avatar: string;
  authorName: string;
}

const NomineeCard = ({ image, productName, avatar, authorName }: IProps) => {
  return (
    <div>
      <div className="mb-[28px]">
        <Image
          src={image}
          alt="nominee banner"
          width={589.33}
          height={441.98}
          className="rounded-[1rem]"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <b className="font-bold text-[22.31px]">{productName}</b>
        <span>by</span>
        <div>
          <Avatar className="w-[32px] h-[32px]">
            <AvatarImage src={avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p className="text-[21.94px] font-bold">{authorName}</p>
          <Image
            src="/images/nm_underline.png"
            alt="stylish underline"
            width={152.23}
            height={2}
          />
        </div>
        <span>PRO</span>
      </div>
    </div>
  );
};

export default NomineeCard;
