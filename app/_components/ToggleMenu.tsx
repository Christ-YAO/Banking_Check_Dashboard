import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List } from "lucide-react";
import Link from "next/link";
import { SignIn } from "./SignIn";

export function ToggleMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <List />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-6 md:hidden">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/"}>
            <DropdownMenuItem className=" cursor-pointer">
              Accueil
              {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </Link>
          <Link href={"/about"}>
            <DropdownMenuItem className=" cursor-pointer">
              A propos
              {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </Link>
          <Link href={"/contact"}>
            <DropdownMenuItem className=" cursor-pointer">
              Contact
              {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </Link>
          {/* <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="h-24 flex flex-col items-start gap-3 pt-1">
          <Link href={"/signup"} className="border pl-4 w-[121px] pr-[29px] hover:bg-accent transition-all py-[7.5px] rounded-lg text-sm font-normal">
            {/* <DropdownMenuItem className=" cursor-pointer"> */}
              S&apos;inscrire
            {/* </DropdownMenuItem> */}
          </Link>
          {/* <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> */}
          {/* <Link href={"/"}> */}
            {/* <DropdownMenuItem className=" cursor-pointer"> */}
              <SignIn className="font-normal" />
              {/* <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut> */}
            {/* </DropdownMenuItem> */}
          {/* </Link> */}
        </DropdownMenuGroup>
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
