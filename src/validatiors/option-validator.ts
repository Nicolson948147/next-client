// bg-blue-950 border-blue-950 text-blue-950
// bg-rose-900 border-rose-900 text-rose-900
// bg-zinc-900 border-zinc-900 text-zinc-900

import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@/__generated__/graphql";
import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: CaseColor.Black, tw: "zinc-900" },
  { label: "Blue", value: CaseColor.Blue, tw: "blue-950" },
  { label: "Rose", value: CaseColor.Rose, tw: "rose-900" },
] as const;

export const MODELS = {
  name: "Models",
  options: [
    { label: "Iphone X", value: PhoneModel.Iphonex },
    { label: "Iphone Xs", value: PhoneModel.Iphonexs },
    { label: "Iphone Xr", value: PhoneModel.Iphonexr },
    { label: "Iphone 11", value: PhoneModel.Iphone11 },
    { label: "Iphone 11 Pro", value: PhoneModel.Iphone11pro },
    { label: "Iphone 11 Pro Max", value: PhoneModel.Iphone11proMax },
    { label: "Iphone 12", value: PhoneModel.Iphone12 },
    { label: "Iphone 12 Mini", value: PhoneModel.Iphone12mini },
    { label: "Iphone 12 Pro", value: PhoneModel.Iphone12pro },
    { label: "Iphone 12 Pro Max", value: PhoneModel.Iphone12proMax },
    { label: "Iphone 13", value: PhoneModel.Iphone13 },
    { label: "Iphone 13 Mini", value: PhoneModel.Iphone13mini },
    { label: "Iphone 13 Pro", value: PhoneModel.Iphone13pro },
    { label: "Iphone 13 Pro Max", value: PhoneModel.Iphone13proMax },
    { label: "Iphone 14", value: PhoneModel.Iphone14 },
    { label: "Iphone 14 Pro", value: PhoneModel.Iphone14pro },
    { label: "Iphone 14 Pro Max", value: PhoneModel.Iphone14proMax },
    { label: "Iphone 15", value: PhoneModel.Iphone15 },
    { label: "Iphone 15 Pro", value: PhoneModel.Iphone15pro },
    { label: "Iphone 15 Pro Max", value: PhoneModel.Iphone15proMax },
  ],
};

export const MATERIAL = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: CaseMaterial.Silicone,
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: CaseMaterial.Polycarbonate,
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
      value: CaseFinish.Smooth,
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured finish",
      value: CaseFinish.Textured,
      description: "Soft grip texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
