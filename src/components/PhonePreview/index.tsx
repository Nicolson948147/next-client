"use client";
import React, { useEffect, useRef } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";
import clearPhone from "@/../public/clearphone.png";

function PhonePreview({
  croppedImage = "https://utfs.io/f/938f62ab-6f25-459c-9367-426906b27b86-u6878f.png",
  color,
}: {
  croppedImage: string;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [renderedDimensions, setRenderedDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setRenderedDimensions({ width, height });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const caseBgColor = (() => {
    let color = "bg-zinc-950";
    if (color === "blue") {
      color = "bg-blue-950";
    }
    if (color === "rose") {
      color = "bg-rose-950";
    }
    return color;
  })();

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <img
          src={croppedImage}
          width={renderedDimensions.width / (3000 / 637)}
          className={cn(
            `phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]`,
            caseBgColor
          )}
        />
      </div>
      <div className="relative h-full w-full z-40 ">
        <Image
          fill
          alt="phone"
          src={clearPhone}
          className="pointer-events-none h-full w-full antialiased rounded-md"
        ></Image>
      </div>
    </AspectRatio>
  );
}

export default PhonePreview;
