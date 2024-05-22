import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import CaseMoi from "@/../public/case_moi.png";

import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "../ui/button";

function LoginModal({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog onOpenChange={setIsShow} open={isShow}>
      <DialogContent className="absolute z-[9999999]">
        <DialogHeader>
          <div className="relative mx-auto w-24 h-24 mb-2">
            <Image src={CaseMoi} alt="logo" fill className="object-contain" />
          </div>
          <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
            Login to continue
          </DialogTitle>
          <DialogDescription className="text-base text-center py-2">
            <span className="font-medium text-zinc-900">
              Your configuration was saved!
            </span>{" "}
            , please login to complete your order.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
          <LoginLink
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Login
          </LoginLink>
          <RegisterLink
            className={buttonVariants({
              variant: "default",
            })}
          >
            Sign up
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
