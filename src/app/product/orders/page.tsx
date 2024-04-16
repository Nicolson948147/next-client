"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import food from "@/../public/images/food.png";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { SlashIcon } from "@radix-ui/react-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import OrderForm from "./OrderForm";

export default function OrdersPage() {
  const router = useRouter();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/product/orders">Giỏ hàng</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-4">
        <div className="basis-2/3">
          <div className="py-4">
            <div className="flex justify-between items-center gap-4">
              <div className="basis-1/5 flex justify-center items-center rounded-md overflow-hidden">
                <Label className="font-semibold">Ảnh sản phẩm</Label>
              </div>
              <div className="basis-1/5 text-center">
                <Label className="font-semibold">Tên sản phẩm</Label>
              </div>
              <div className="basis-1/5 text-center">
                <Label className="font-semibold">Giá</Label>
              </div>
              <div className="basis-1/5 text-center">
                <Label className="font-semibold">Số lượng</Label>
              </div>
              <div className="basis-1/5 text-center">
                <Label className="font-semibold">Thao tác</Label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-h-[calc(100vh-250px)] overflow-y-auto">
            {Array.from({ length: 10 }).map((_, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center gap-4">
                    <div className="basis-1/5 h-[100px] flex justify-center items-center rounded-md overflow-hidden">
                      <Image className="z-0" alt="card" src={food} />
                    </div>
                    <div className="basis-1/5 text-center">
                      <Label>Lorem ipsum dolor sit amet consectetur.</Label>
                    </div>
                    <div className="basis-1/5 text-center">200000 VND</div>
                    <div className="basis-1/5 text-center">3</div>
                    <div className="basis-1/5 text-center">
                      <Button variant="default" size="icon" onClick={() => {}}>
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="basis-1/3">
          <Card className="p-4">
            <Label className="block text-3xl font-semibold">
              Tổng cộng (3)
            </Label>
            <Label className="block text-xl font-semibold mt-4">
              Giá: 2000000 VND
            </Label>
            <Button
              className="mt-4 w-full"
              variant="default"
              size="lg"
              onClick={() => {
                setIsOpenDrawer(true);
              }}
            >
              Đặt hàng
            </Button>
          </Card>
        </div>
      </div>
      <OrderForm
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />
    </div>
  );
}
