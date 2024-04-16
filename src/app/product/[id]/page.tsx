"use client";
import Image from "next/image";
import React from "react";
import food from "@/../public/images/food.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, Minus, Plus, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

function Detail() {
  const router = useRouter();
  const { toast } = useToast();
  const [current, setCurrent] = React.useState(1);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col lg:flex-row gap-6 mt-10">
        <div className="basis-1/2 flex justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <div className="w-[300px] h-[300px] flex justify-center items-center relative rounded-md overflow-hidden">
                      <Image
                        className="z-0"
                        alt="card"
                        src={food}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="basis-1/2">
          <Label className="block text-2xl font-semibold">
            Royal Cheese Burger with extra Fries
          </Label>
          <div></div>
          <Label className="block mt-4 text-xl font-semibold">
            Giá: 1.000.000 VND
          </Label>
          <Label className="block mt-4 text-xl font-semibold">
            Giới thiệu sản phẩm:
          </Label>
          <Label className="block mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea
            delectus quis ex provident error doloribus exercitationem quas
            minima eligendi pariatur, quaerat ab, sunt deleniti unde tempore
            atque vero iusto.
          </Label>
          <div className="flex justify-start items-center gap-4 mt-4">
            <Label className="block text-xl font-semibold">Số lượng:</Label>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                if (current === 1) return;
                setCurrent((prev) => prev - 1);
              }}
            >
              <Minus />
            </Button>
            <Label className="block text-xl font-semibold">{current}</Label>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setCurrent((prev) => prev + 1);
              }}
            >
              <Plus />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between my-10 gap-4">
        <Button
          size="lg"
          className="rounded-2xl"
          variant="ghost"
          onClick={() => {
            router.back();
          }}
        >
          <ArrowLeftIcon />
          <div className="w-2" />
          Quay lại
        </Button>
        <div className="flex gap-4 justify-between">
          <Button
            size="lg"
            className="rounded-2xl"
            onClick={() => {
              toast({
                title: "Thêm vào giỏ hàng thành công!",
                description: "Sản phẩm đã được thêm vào giỏ hàng của bạn",
              });
            }}
          >
            <Plus />
            <div className="w-2" />
            Thêm vào giỏ hàng
          </Button>
          <Button
            size="lg"
            className="rounded-2xl"
            variant="outline"
            onClick={() => {
              router.push("/product/orders");
            }}
          >
            <ShoppingCart />
            <div className="w-2" />
            Đặt hàng ngay
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
