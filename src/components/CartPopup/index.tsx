import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import food from "@/../public/images/food.png";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CartPopup() {
  const router = useRouter();
  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer">
        <Button
          className="rounded-2xl"
          onClick={() => {
            router.push("/product/orders");
          }}
        >
          <ShoppingCart />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="min-w-[400px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Ảnh</TableHead>
              <TableHead>Tên</TableHead>
              <TableHead className="text-right">Giá</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <Image
                  className="z-0"
                  alt="card"
                  width={36}
                  height={36}
                  src={food}
                />
              </TableCell>
              <TableCell className="max-w-[200px] truncate">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                tempora nihil, corporis reiciendis quasi delectus atque! Illum
                omnis, deleniti perspiciatis pariatur ipsa possimus aperiam
                accusamus ducimus minus, perferendis natus optio.
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="mt-4">
          <Link href="/product/orders">
            <Button className="w-full">Xem giỏ hàng</Button>
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default CartPopup;
