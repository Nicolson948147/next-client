"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeIcon, BackpackIcon, RocketIcon } from "@radix-ui/react-icons";
import { notFound, usePathname } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const { getUser, isLoading } = useKindeBrowserClient();

  const user = getUser();

  if (isLoading) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!user || user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return notFound();
  }

  return (
    <section className="flex">
      <nav className="w-1/5 max-w-xs h-auto p-4 border-r">
        <div className="flex flex-col gap-3 justify-start">
          <Link href="/admin/dashboard">
            <Button
              className="w-full justify-start gap-3"
              variant={pathname === "/admin/dashboard" ? "secondary" : "ghost"}
            >
              <HomeIcon />
              Dashboard
            </Button>
          </Link>
          <Link href="/admin/products">
            <Button
              className="w-full justify-start gap-3"
              variant={pathname === "/admin/products" ? "secondary" : "ghost"}
            >
              <BackpackIcon />
              Products
            </Button>
          </Link>
          <Link href="/admin/orders">
            <Button
              className="w-full justify-start gap-3"
              variant={pathname === "/admin/orders" ? "secondary" : "ghost"}
            >
              <RocketIcon />
              Orders
            </Button>
          </Link>
        </div>
      </nav>

      <div className="p-4 w-full">{children}</div>
    </section>
  );
}
