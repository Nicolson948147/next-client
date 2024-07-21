"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  HomeIcon,
  BackpackIcon,
  RocketIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { notFound, usePathname } from "next/navigation";
import { Loader2, User2Icon, UserIcon } from "lucide-react";
import useUser from "@/hooks/useUser";
import WrappedLayout from "../WrappedLayout";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const { user, loading } = useUser();

  if (loading) {
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
    <WrappedLayout>
      <section className="flex">
        <nav className="w-1/5 max-w-xs h-auto p-4 border-r">
          <div className="flex flex-col gap-3 justify-start">
            <Link href="/admin/dashboard">
              <Button
                className="w-full justify-start gap-3"
                variant={
                  pathname === "/admin/dashboard" ? "secondary" : "ghost"
                }
              >
                <HomeIcon />
                Dashboard
              </Button>
            </Link>
            <Link href="/admin/users">
              <Button
                className="w-full justify-start gap-3"
                variant={pathname === "/admin/users" ? "secondary" : "ghost"}
              >
                <PersonIcon />
                Users
              </Button>
            </Link>
            {/* <Link href="/admin/products">
              <Button
                className="w-full justify-start gap-3"
                variant={pathname === "/admin/products" ? "secondary" : "ghost"}
              >
                <BackpackIcon />
                Products
              </Button>
            </Link> */}
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
    </WrappedLayout>
  );
}
