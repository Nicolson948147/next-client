import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import logo from "./../../public/icons/logo.svg";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoiShop",
  description: "MoiShop - The best place to buy your favorite products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full flex flex-col justify-between items-center bg-slate-50">
            <Navbar />
            <div className="w-[80%] max-w-screen-xl">
              {/* <div className="flex flex-row justify-between p-4">
                <Image alt="logo" src={logo} width={40} height={40} />
                <ThemeSwitch />
              </div> */}
              {children}
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
