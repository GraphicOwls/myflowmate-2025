import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const squarePointVariants = cva(
  "absolute bg-accent outline-[1px] outline-stone-400 w-[12px] h-[12px] transition-all z-20",
  {
    variants: {
      position: {
        bottomLeft: "bottom-[-6px] left-[-6px]",
        bottomRight: "bottom-[-6px] right-[-7px]",
        topLeft: "top-[-6px] left-[-6px]",
        topRight: "top-[-6px] right-[-7px]",
      },
    },
    defaultVariants: {
      position: "bottomLeft",
    },
  },
);

function SquarePoint({ className, position, ...props }) {
  return (
    <div
      className={cn(squarePointVariants({ position, className }))}
      {...props}
    />
  );
}

export { SquarePoint, squarePointVariants };
