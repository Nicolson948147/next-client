import Image from "next/image";
import banner from "@/../public/images/banner.png";
import { Label } from "@/components/ui/label";
import CardItem from "@/components/CardItem";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-row">
        <Image alt="logo" src={banner} />
      </div>
      <div className="my-10">
        <Label className="text-3xl">Sản phẩm</Label>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <CardItem key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
