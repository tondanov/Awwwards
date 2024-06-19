import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface IProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundType: number;
}

const ShareWorkCard = ({
  title,
  subtitle,
  buttonText,
  backgroundType,
}: IProps) => {
  return (
    <div>
      <div
        className={`${
          backgroundType === 1 ? "bg-sw-1" : "bg-sw-2"
        } rounded-[16px] p-4 md:p-[50px] flex flex-col gap-8 h-[500px]`}
      >
        <p className="text-white text-[14px]">{title}</p>
        <p className="text-[51.3px] text-white">{subtitle}</p>
        <div>
          <Button variant="secondary">{buttonText}</Button>
        </div>

        <div className="text-end">
          <p className="text-white mt-[100px]">Got questions? Read our FAQs</p>
          <div className="flex justify-end">
            <Image
              src="/images/underline.png"
              alt="stylish underline"
              width={34.47}
              height={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareWorkCard;
