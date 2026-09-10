import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ className, size = "md", children, ...props }: AvatarProps) {
  const sizeClasses = {
    sm: "h-7 w-7 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-11 w-11 text-base"
  }[size];

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-xl overflow-hidden font-medium border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs",
        sizeClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function AvatarFallback({ className, children, ...props }: AvatarFallbackProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 font-medium",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
