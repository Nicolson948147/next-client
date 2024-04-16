"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CirclePlus } from "lucide-react";
import food from "@/../public/images/food.png";
import { useRouter } from "next/navigation";

function CardItem() {
  const router = useRouter();
  return (
    <Card
      className="max-w-[496px] flex flex-row justify-between items-center pr-6 cursor-pointer"
      onClick={(event) => {
        event.stopPropagation();
        router.push("/product/1");
      }}
    >
      <div className="basis-1/2">
        <CardHeader>
          <CardTitle>Royal Cheese Burger with extra Fries</CardTitle>
          <CardDescription>
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>GBP 23.10</p>
        </CardContent>
      </div>
      <div className="w-[150px] h-[150px] flex justify-center items-center relative rounded-md overflow-hidden">
        <Image
          className="z-0"
          alt="card"
          src={food}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div
          className="absolute w-[50px] h-[50px] bg-white opacity-80 flex justify-center items-center bottom-0 right-0 rounded-tl-3xl cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            console.log("Add to cart");
          }}
        >
          <CirclePlus />
        </div>
      </div>
    </Card>
  );
}

export default CardItem;
