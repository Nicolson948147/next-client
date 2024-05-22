import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(price);
};

export const constructMetadata = ({
  title = "CaseMoiShop - custom high-quality phone cases",
  description = "Create your own custom high-quality phone cases with CaseMoiShop. Upload your own images, add text, and choose from a variety of colors and styles.",
  image = "/",
  icon = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icon?: string;
}) => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      handle: "@CaseMoiShop",
      site: "@CaseMoiShop",
      cardType: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@lexnguyen",
    },
  };
};
