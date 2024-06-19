import React from "react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface IProps {
  title: string;
  subtitle: string;
  avatar: string;
  tag?: string;
}

const FollowBrandCard = ({ title, subtitle, avatar, tag }: IProps) => {
  return (
    <div>
      <Separator className="border border-[#E9E9E9]" />
      <div className=" my-[24px] flex flex-row gap-4 justify-between px-4">
        <div className="flex gap-4">
          <div>
            <Avatar className="w-[72px] h-[72px]">
              <AvatarImage src={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="text-customDark text-[14px]">{title}</p>
            <p className="text-customDark text-[18.13px] font-bold mt-2">
              {subtitle}
            </p>
          </div>
        </div>
        {tag && (
          <Button className="text-[10.88px] uppercase rounded-[4px] px-3">
            {tag}
          </Button>
        )}
      </div>
    </div>
  );
};

export default FollowBrandCard;
