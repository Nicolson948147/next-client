"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function WrappedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] w-full">
        <div className="flex flex-col flex-1 h-full w-full">{children}</div>
        <Footer />
      </main>
    </>
  );
}

export default WrappedLayout;
