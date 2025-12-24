"use client"

import * as React from "react"
// import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

// Since I don't want to install radix-ui/react-separator if I can avoid it for now, 
// I'll implement a simple div version unless I check if radix is installed. 
// Checking package.json... it wasn't there.
// So I will make a simple version without Radix dependency to avoid errors.

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" }
>(
  (
    { className, orientation = "horizontal", ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = "Separator"

export { Separator }
