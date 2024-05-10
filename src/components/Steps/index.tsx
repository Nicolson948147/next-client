"use client";
import { usePathname } from "next/navigation";
import React from "react";
import CaseMoiLogo from "@/../public/case_moi_logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

const STEPS = [
  {
    id: "upload",
    name: "Step 1: Add your image",
    description: "Choose an image to upload",
    url: "/upload",
  },
  {
    id: "design",
    name: "Step 2: Design your thing",
    description: "Customize your image",
    url: "/design",
  },
  {
    id: "preview",
    name: "Step 3: Review your thing",
    description: "Check out your design",
    url: "/preview",
  },
];

function Steps() {
  const pathName = usePathname();

  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, index) => {
        const isCurrent = pathName.endsWith(step.url);
        const isComplete = STEPS.slice(index + 1).some((step) =>
          pathName.endsWith(step.url)
        );

        const imgPath = CaseMoiLogo;

        return (
          <li key={step.id} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  {
                    "bg-zinc-700": isCurrent,
                    "bg-primary": isComplete,
                  }
                )}
                aria-hidden="true"
              ></span>
              <span
                className={cn(
                  index !== 0 ? "lg:pl-9" : " ",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}
              >
                <span className="flex-shrink-0">
                  <Image
                    src={imgPath}
                    className={cn(
                      "flex h-20 w-20 object-contain justify-center items-center",
                      {
                        "border-none": isComplete,
                        "border-zinc-700": isCurrent,
                      }
                    )}
                    alt="te"
                  />
                </span>
                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-primary": isComplete,
                      "text-zinc-700": isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {step.description}
                  </span>
                </span>
              </span>
              {/* hehe */}
              {index !== 0 ? (
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default Steps;
