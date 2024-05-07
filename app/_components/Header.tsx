"use client";
import { Section } from "./Section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ToggleMenu } from "./ToggleMenu";
import { SignIn } from "./SignIn";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 py-4 backdrop-blur-md z-50">
      <Section className="flex items-center">
        <Link
          href={"/"}
          className="text-lg font-bold text-accent px-1 sm:px-3 relative"
        >
          <Image
            src="/images/Logo.png"
            alt="logo"
            className="w-14 md:w-20 rounded-full"
            width={100}
            height={24}
            priority
          />
        </Link>
        <div className="flex-1" />
        <div className="md:flex items-center lg:gap-10 text-primary text-sm md:text-[13px] lg:text-[15px] hidden">
          <div className="flex items-center gap-4">
            <Link
              href={"/"}
              className={clsx(
                " hover:border-b hover:border-dashed border-primary px-2 py-1 transition",
                {
                  "bg-accent border-b border-primary": pathname === "/",
                }
              )}
            >
              Accueil
            </Link>
            <Link
              href={"/about"}
              className={clsx(
                " hover:border-b hover:border-dashed border-primary px-2 py-1 transition",
                {
                  "bg-accent border-b border-primary": pathname === "/about",
                }
              )}
            >
              A Propos
            </Link>
            <Link
              href={"/contact"}
              className={clsx(
                " hover:border-b hover:border-dashed border-primary px-2 py-1 transition",
                {
                  "bg-accent border-b border-primary": pathname === "/contact",
                }
              )}
            >
              Contact
            </Link>
          </div>
          <div className="lg:flex-1"></div>
          <div className="font-semibold">
            <Link
              href="/signup"
              title=""
              className={cn(
                "size-6 px-6 py-4 text-blue-600 rounded-xl mx-4 bg-accent hover:bg-slate-200 transition-all"
              )}
            >
              S&apos;inscrire
            </Link>
            {/* <Link
              href="/"
              title=""
              className={cn(
                "size-6 px-6 py-4 text-white rounded-xl mx-4 bg-blue-600 hover:bg-blue-700 transition-all"
              )}
            >
              Se connecter
            </Link> */}
            <SignIn className="size-6 px-6 py-4 w-[140px] h-[50px] text-white rounded-xl mx-4 bg-blue-600 hover:bg-blue-700 hover:text-white transition-all text-sm md:text-[13px] lg:text-[15px]" />
          </div>
        </div>

        <div className="md:hidden mr-6">
          <ToggleMenu />
        </div>
      </Section>
    </header>
  );
};
