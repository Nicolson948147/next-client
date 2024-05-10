// bg-blue-950 border-blue-950 text-blue-950
// bg-rose-900 border-rose-900 text-rose-900
// bg-zinc-900 border-zinc-900 text-zinc-900

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-900" },
] as const;

export const MODELS = {
  name: "Models",
  options: [
    { label: "Iphone X", value: "iphonex" },
    { label: "Iphone 11", value: "iphone11" },
    { label: "Iphone 12", value: "iphone12" },
    { label: "Iphone 13", value: "iphone13" },
    { label: "Iphone 14", value: "iphone14" },
    { label: "Iphone 15", value: "iphone15" },
  ],
};

export const MATERIAL = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISH = {
  name: "finish",
  options: [
    {
      label: "Smooth finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured finish",
      value: "textured",
      description: "Soft grip texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
