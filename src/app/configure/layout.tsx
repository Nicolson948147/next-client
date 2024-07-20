"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import React from "react";
import WrappedLayout from "../WrappedLayout";

function ConfigureLayout({ children }: { children: React.ReactNode }) {
  return (
    <WrappedLayout>
      <MaxWidthWrapper className="flex-1 flex flex-col w-full">
        <Steps />
        {children}
      </MaxWidthWrapper>
    </WrappedLayout>
  );
}

export default ConfigureLayout;
