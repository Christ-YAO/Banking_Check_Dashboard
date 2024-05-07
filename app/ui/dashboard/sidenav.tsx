import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import Image from "next/image";
import { Power } from "lucide-react";
import clsx from "clsx";

type SideNavProps = {
  pressed: boolean;
};

export default function SideNav(props: SideNavProps) {
  return (
    <div
      className={clsx(
        "flex h-full flex-col px-3 py-4 md:px-2 relative",
        {
          // "w-[100px] transition-all": props.pressed,
        }
      )}
    >
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Image
            src="/images/Logo.png"
            alt="logo"
            className="w-14 md:w-20 m-auto brightness-0 rounded-full"
            width={100}
            height={24}
            priority
          />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks pressed={props.pressed} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button
            className={clsx(
              "flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "md:justify-center": props.pressed,
              }
            )}
          >
            <Power className="w-6" />
            <div
              className={clsx("hidden md:block", {
                "md:hidden": props.pressed,
              })}
            >
              Sign Out
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
