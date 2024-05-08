import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

function Navbar() {
  const user = 1;
  const isAdmin = true;
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
                <Link
                  href="/signout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-gray-900",
                  })}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
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
                <Link
                  href="/signup"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-gray-900",
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href="/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-gray-900",
                  })}
                >
                  Login
                </Link>
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
