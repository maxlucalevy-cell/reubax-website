import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-700 text-white shadow-[0_12px_28px_rgba(14,116,144,0.18)] hover:-translate-y-0.5 hover:bg-cyan-800 hover:shadow-[0_18px_34px_rgba(14,116,144,0.22)]",
        secondary:
          "bg-slate-950 text-white shadow-[0_12px_26px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-[0_18px_34px_rgba(15,23,42,0.16)]",
        ghost:
          "bg-transparent text-slate-700 hover:bg-white/90 hover:text-slate-950",
        outline:
          "border border-white/20 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/15",
        subtle:
          "border border-slate-200 bg-white text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-sm",
        xl: "h-14 px-7 text-[0.95rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
