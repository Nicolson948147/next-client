import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import phoneTemplateDark from "@/../public/phone-template-dark-edges.png";
import phoneTemplateWhite from "@/../public/phone-template-white-edges.png";

interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string | StaticImageData;
  dark?: boolean;
}

function Phone({ className, imgSrc, dark = false, ...props }: PhoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        className="pointer-events-none select-none z-50"
        src={dark ? phoneTemplateDark : phoneTemplateWhite}
        alt="phone-s"
      />
      <div className="absolute -z-10 inset-0">
        <Image
          fill
          className="object-cover min-h-full min-w-full"
          src={imgSrc}
          alt="overlay phone"
        ></Image>
      </div>
    </div>
  );
}

export default Phone;
