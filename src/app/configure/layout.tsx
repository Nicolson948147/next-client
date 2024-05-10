"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import React from "react";

function ConfigureLayout({ children }: { children: React.ReactNode }) {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col w-full">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
}

export default ConfigureLayout;
