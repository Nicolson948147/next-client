import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "@/../public/not-found.png";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <div>
        <Image src={NotFoundImg} alt="not-found" width={500} height={500} />
      </div>
      <Link
        href="/"
        className={buttonVariants({
          variant: "link",
        })}
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Return Home
      </Link>
    </div>
  );
}
