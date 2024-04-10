"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

export default function ThemeSwitch() {
  const pathname = usePathname();
  const { setTheme, theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(
      theme === "system"
        ? systemTheme === "light"
          ? "light"
          : "dark"
        : theme === "light"
        ? "light"
        : "dark"
    );
  }, [theme, systemTheme]);

  return (
    <div className="flex justify-center items-center gap-4">
      {pathname !== "/login" ? (
        <Link href="/login">
          <Button className="rounded-2xl">
            <User size={14} />
            Login
          </Button>
        </Link>
      ) : null}
      <Label htmlFor="theme-mode">
        {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
      </Label>
      <Switch
        onCheckedChange={(checked) => {
          if (checked) {
            setTheme("light");
            return;
          }
          setTheme("dark");
        }}
        checked={currentTheme === "light"}
        id="theme-mode"
      />
    </div>
  );
}
