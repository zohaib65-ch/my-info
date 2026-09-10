import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-zinc-50 hover:bg-zinc-800 shadow-sm dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 dark:bg-zinc-800/70 dark:text-zinc-100 dark:hover:bg-zinc-800",
        outline:
          "border border-zinc-200 bg-transparent hover:bg-zinc-100/60 text-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900/60",
        ghost:
          "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100 text-zinc-600 dark:text-zinc-400",
        subtle:
          "bg-zinc-100/70 border border-zinc-200/80 text-zinc-700 hover:bg-zinc-200/70 hover:text-zinc-900 dark:bg-zinc-900/60 dark:border-zinc-850 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/80 dark:hover:text-white"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-11 rounded-xl px-6 text-base",
        icon: "h-9 w-9 rounded-xl p-0",
        iconSm: "h-7 w-7 rounded-lg p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { buttonVariants };
