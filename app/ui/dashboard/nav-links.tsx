"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  BarChartBig,
  Files,
  Home,
  PackageCheck,
  Save,
  TicketCheck,
  Users,
} from "lucide-react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  {
    name: "Mon cheqier",
    href: "/dashboard/chequier",
    icon: Files,
  },
  {
    name: "Pré-confirmation",
    href: "/dashboard/pre-confirm",
    href2: "/dashboard/pre-confirm/*",
    icon: PackageCheck,
  },
  {
    name: "Suivi chèques",
    href: "#",
    icon: TicketCheck,
    subLink1: "/dashboard/save-check",
    subLink2: "/dashboard/check-status",
  },
];

type NavLinksProps = {
  pressed: boolean;
};

export default function NavLinks(props: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 relative group transition-all",
              {
                "bg-sky-100 text-blue-600": pathname === link.href || pathname === link?.href2 || pathname === link?.subLink1 || pathname === link?.subLink2,
                "md:justify-center": props.pressed,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p
              className={clsx("hidden md:block", {
                "md:hidden": props.pressed,
                "text-blue-600": pathname === link.href,
              })}
            >
              {link.name}
            </p>
            <br />
            {link.name === "Suivi chèques" && (
              <div
                className={clsx(
                  "hidden flex-col gap-2 absolute top-12 left-0 md:left-auto md:-right-52 md:top-0 py-[10px] md:py-2 rounded-lg px-[10px] bg-gray-50 z-50 transition-all group-hover:flex sm:w-48 md:w-auto border"
                )}
              >
                <Link
                  href={"/dashboard/save-check"}
                  className={clsx(
                    "h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 border",
                    {
                      "bg-sky-100 text-blue-600 border border-sky-600":
                        pathname === "/dashboard/save-check",
                      "md:justify-center": props.pressed,
                    }
                  )}
                >
                  <Link
                    href="/dashboard/save-check"
                    className="flex items-center gap-2"
                  >
                    <Save className="w-5" />
                    <p className="text-xs sm:text-sm text-nowrap">Enregistrer chèques</p>
                  </Link>
                </Link>
                <Link
                  href={"/dashboard/check-status"}
                  className={clsx(
                    "h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 border",
                    {
                      "bg-sky-100 text-blue-600 border border-sky-600":
                        pathname === "/dashboard/check-status",
                      "md:justify-center": props.pressed,
                    }
                  )}
                >
                  <Link
                    href="/dashboard/check-status"
                    className="flex items-center gap-2"
                  >
                    <BarChartBig className="w-5" />
                    <p className="text-xs sm:text-sm">Etat chèques</p>
                  </Link>
                </Link>
              </div>
            )}
          </Link>
        );
      })}
    </>
  );
}
