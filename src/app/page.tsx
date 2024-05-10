/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import food from "@/../public/images/food.png";
import CaseMoi from "@/../public/case_moi.png";
import CaseMoiLogo from "@/../public/case_moi_logo.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import ImgTestimonials1 from "@/../public/testimonials/1.jpg";
import YourImageHere from "@/../public/your-image.png";
import Line from "@/../public/line.png";
import Horse from "@/../public/horse.jpg";
import HorsePhone from "@/../public/horse_phone.jpg";
import Arrow from "@/../public/arrow.png";
import UserAvt1 from "@/../public/users/user-1.png";
import UserAvt2 from "@/../public/users/user-2.png";
import UserAvt3 from "@/../public/users/user-3.png";
import UserAvt4 from "@/../public/users/user-4.jpg";
import UserAvt5 from "@/../public/users/user-5.jpg";
import { Icons } from "@/components/Icons";
import Reviews from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      {/* Hero */}
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-32 left-0 -top-20  hidden lg:block">
                <Image
                  src={CaseMoi}
                  alt="banner"
                  className="w-full rounded-xl"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on{" "}
                <span className="bg-primary text-white rounded-xl px-4">
                  Custom
                </span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap text-gray-900">
                Capture your memories with your loved{" "}
                <span className="font-bold">one-of-one</span> on a phone case.
                MoiShop allows you to create your own custom phone case with
                your favorite image.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left text-gray-700">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    High quality print, durable and long lasting
                  </li>
                  <li className="flex gap-1.5 items-center text-left text-gray-700">
                    <Check className="h-5 w-5 shrink-0 text-primary" />5
                    different phone case types to choose from
                  </li>
                  <li className="flex gap-1.5 items-center text-left text-gray-700">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    Fast delivery to your door
                  </li>
                  <li className="flex gap-1.5 items-center text-left text-gray-700">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    Modern Iphone supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    src={UserAvt1}
                    alt="user"
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={UserAvt2}
                    alt="user"
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={UserAvt3}
                    alt="user"
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={UserAvt4}
                    alt="user"
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={UserAvt5}
                    alt="user"
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className=" h-4 w-4 text-primary fill-primary" />
                  <Star className=" h-4 w-4 text-primary fill-primary" />
                  <Star className=" h-4 w-4 text-primary fill-primary" />
                  <Star className=" h-4 w-4 text-primary fill-primary" />
                  <Star className=" h-4 w-4 text-primary fill-primary" />
                </div>
                <p className="mt-2 text-sm text-gray-500 font-semibold">
                  4.9/5
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src={YourImageHere}
                alt="your imge"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block "
              />
              <Image
                src={Line}
                alt="line"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone imgSrc={ImgTestimonials1} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* End Hero */}
      {/* Value */}
      <section className=" py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                {" "}
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-primary " />
              </span>{" "}
              say
            </h2>
            <Image
              src={CaseMoiLogo}
              alt="test"
              className="w-32 order-0 lg:order-2"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20 ">
              <div className="gap-0.5 flex mb-2">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
              </div>
              <div className="text-lg leading-8">
                <p className="text-gray-500 text-sm font-semibold">
                  "The quality of the phone case is amazing. I love the print
                  and the material is very durable. And{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the images is supper clear
                  </span>
                  ,I would definitely recommend it to my friends."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={UserAvt1}
                  alt="avt"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">David</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-primary" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20 ">
              <div className="gap-0.5 flex mb-2">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
              </div>
              <div className="text-lg leading-8">
                <p className="text-gray-500 text-sm font-semibold">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  doloremque necessitatibus dolorum adipisci,
                  <span className="p-0.5 bg-slate-800 text-white">
                    et non possimus explicabo, facilis voluptatibus ipsum
                    veritatis
                  </span>
                  . Excepturi iure qui eum, amet magnam est mollitia
                  doloremque?"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={UserAvt2}
                  alt="avt"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">Liam</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-primary" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20 ">
              <div className="gap-0.5 flex mb-2">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
                <Star className="h-5 w-5 text-primary fill-primary" />
              </div>
              <div className="text-lg leading-8">
                <p className="text-gray-500 text-sm font-semibold">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  doloremque necessitatibus dolorum adipisci,
                  <span className="p-0.5 bg-slate-800 text-white">
                    et non possimus explicabo, facilis voluptatibus ipsum
                    veritatis
                  </span>
                  . Excepturi iure qui eum, amet magnam est mollitia
                  doloremque?"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={UserAvt3}
                  alt="avt"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">Grace</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-primary" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-48">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-accent">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get{" "}
                <span className="relative px-2 bg-primary rounded-xl">
                  {" "}
                  your own case
                </span>{" "}
                now
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image
                src={Arrow}
                alt="haha"
                className="absolute top-[25rem] md:top-1/2] -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <Image
                  src={Horse}
                  alt="banner"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>
              <Phone imgSrc={HorsePhone} className="w-60" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit text-gray-700">
              <Check className="h-5 w-5 text-primary inline mr-1.5" />
              Hight-quality silicone material
            </li>
            <li className="w-fit text-gray-700">
              <Check className="h-5 w-5 text-primary inline mr-1.5" />
              Scratch and fingerprint resistant coating
            </li>
            <li className="w-fit text-gray-700">
              <Check className="h-5 w-5 text-primary inline mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit text-gray-700">
              <Check className="h-5 w-5 text-primary inline mr-1.5" />5
              different phone case types to choose from
            </li>
            <div className="flex justify-center ">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your own case now <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
