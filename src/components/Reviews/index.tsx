"use client";
import React, { useEffect } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image, { StaticImageData } from "next/image";
import whatpeoplebuying from "@/../public/what-people-are-buying.png";
import testimonials1 from "@/../public/testimonials/1.jpg";
import testimonials2 from "@/../public/testimonials/2.jpg";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "../Phone";

const PHONES = [
  testimonials1,
  testimonials2,
  testimonials1,
  testimonials2,
  testimonials1,
  testimonials2,
];

function splitArray<T>(arr: Array<T>, size: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < arr.length; i++) {
    const index = i % size;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(arr[i]);
  }

  return result;
}

interface ReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string | StaticImageData;
}

const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
  const POSSIBLE_DELAYS = ["0", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];

  const delay =
    POSSIBLE_DELAYS[Math.floor(Math.random() * POSSIBLE_DELAYS.length)];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay: delay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} className="" />
    </div>
  );
};

const ReviewColumn = ({
  className = "",
  reviews,
  reviewClassName,
  msPerPixel = 0,
}: {
  className?: string;
  reviews: Array<string | StaticImageData>;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [columnHeight, setColumnHeight] = React.useState(0);

  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(containerRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {[...reviews, ...reviews].map((review, index) => (
        <Review
          key={index}
          className={reviewClassName?.(index % reviews.length)}
          imgSrc={review}
        />
      ))}
    </div>
  );
};

const ReviewGrid = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const [col1, col2, col3] = splitArray(PHONES, 3);
  const col4 = splitArray(col3, 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            msPerPixel={10}
            className="hidden md:block"
            reviews={[...col1, ...col4.flat(), ...col2]}
            reviewClassName={(reviewIndex) => {
              return cn({
                "md:hidden": reviewIndex > col1.length + col4[0].length,
                "lg:hidden": reviewIndex > col1.length,
              });
            }}
          />
          <ReviewColumn
            msPerPixel={15}
            className="hidden md:block"
            reviews={[...col2, ...col4[1]]}
            reviewClassName={(reviewIndex) =>
              reviewIndex >= col2.length ? "lg:hidden" : ""
            }
          />
          <ReviewColumn
            msPerPixel={10}
            className="hidden md:block"
            reviews={col4.flat()}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100"></div>
    </div>
  );
};

function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        src={whatpeoplebuying}
        alt="user"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}

export default Reviews;
