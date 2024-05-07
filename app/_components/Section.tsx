import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{className?: string}>) => {
    return (
        <section className={cn("max-w-6xl px-6 sm:pl-9 md:px-4 md:pl-4 m-auto", props.className)}>{props.children}</section>
    )
}