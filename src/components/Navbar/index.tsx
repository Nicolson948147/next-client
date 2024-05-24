"use client";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KINDE_USER_ID } from "@/lib/contants";

function Navbar() {
  const { getUser } = useKindeBrowserClient();

  const user = getUser();

  const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-xl transition-all ">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 ">
          <Link
            href="/"
            className="flex z-[40] font-semibold tracking-[1px] text-gray-900 text-lg"
          >
            case<span className="text-primary text-">moishop</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <h1 className="text-gray-900 text-xl">
                  Hi,{" "}
                  <span className="text-primary">
                    {user?.given_name ?? "--"}
                  </span>
                </h1>
                <LogoutLink
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-gray-900",
                  })}
                  onClick={() => {
                    localStorage.removeItem(KINDE_USER_ID);
                  }}
                >
                  Sign out
                </LogoutLink>
                {isAdmin ? (
                  <Link
                    href="/admin/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                      className: "text-gray-900",
                    })}
                  >
                    Dashboard 🤝
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <RegisterLink
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-gray-900",
                  })}
                >
                  Sign up
                </RegisterLink>
                <LoginLink
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-gray-900",
                  })}
                >
                  Login
                </LoginLink>
                <div className="h-8 w-px hidden sm:block bg-zinc-200"></div>
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
