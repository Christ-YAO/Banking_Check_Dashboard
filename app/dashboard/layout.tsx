"use client";

import SideNav from "@/app/ui/dashboard/sidenav";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden pr-3">
      <div
        className={clsx("w-full flex-none md:w-64 relative transition-all", {
          "md:w-[100px]": pressed,
        })}
      >
        <div
          onClick={() => setPressed(!pressed)}
          className="bg-transparent hover:bg-accent/50 border-none outline-none text-black absolute z-50 -right-6 top-6 hidden md:block cursor-pointer"
        >
          {pressed ? (
            <PanelRightClose className="text-blue-600" />
          ) : (
            <PanelLeftClose className="text-blue-600" />
          )}
        </div>
        <SideNav pressed={pressed} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
