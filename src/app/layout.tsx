import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata({});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={recursive.className}>
        <ApolloWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            <div className="w-full flex flex-col justify-between items-center bg-slate-50">
              <Navbar />
              <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] w-full">
                {/* <div className="flex flex-row justify-between p-4">
                <Image alt="logo" src={logo} width={40} height={40} />
                <ThemeSwitch />
              </div> */}
                <div className="flex flex-col flex-1 h-full w-full">
                  {children}
                </div>
                <Footer />
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
