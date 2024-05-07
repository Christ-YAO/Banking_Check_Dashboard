import Link from "next/link";
import { Section } from "../_components/Section";
import { SignUp } from "../_components/SignUp";
import { DoorOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


export default function Page() {
  return (
    <Section className="h-screen grid place-content-center relative">
      <Link href={"/"}
        className="absolute p-4 bg-accent top-4 left-4  rounded-full hover:brightness-90 transition-all"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
                <DoorOpen  />
            </TooltipTrigger>
            <TooltipContent>
              <p>Retour à l&apos;accueil</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      <SignUp />
    </Section>
  );
}
