"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeIcon, BackpackIcon, RocketIcon } from "@radix-ui/react-icons";
import { notFound, usePathname } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const { getUser } = useKindeBrowserClient();

  const user = getUser();

  if (!user || user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return notFound();
  }

  return (
    <section className="flex">
      <nav className="w-1/5 max-w-xs h-screen p-4 border-r">
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

      <div className="m-4">{children}</div>
    </section>
  );
}
