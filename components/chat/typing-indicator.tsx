import React from "react";
import { Bot, Sparkles } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 w-full animate-in fade-in-50 duration-300">
      <Avatar
        size="md"
        className="bg-gradient-to-tr from-indigo-500/10 via-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5"
      >
        <Bot className="h-4 w-4" />
      </Avatar>

      <div className="flex flex-col gap-1.5 max-w-[85%]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">
            Zohaib AI
          </span>
          <span className="flex items-center gap-1 text-[10px] text-violet-600 dark:text-violet-400 font-medium">
            <Sparkles className="h-2.5 w-2.5 animate-spin" />
            Generating response
          </span>
        </div>

        <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-zinc-100/90 dark:bg-zinc-850 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-xs">
          <div className="flex items-center gap-1.5 py-0.5">
            <span
              className="h-2 w-2 rounded-full bg-violet-500 animate-bounce"
              style={{ animationDelay: "0ms", animationDuration: "1000ms" }}
            />
            <span
              className="h-2 w-2 rounded-full bg-violet-500 animate-bounce"
              style={{ animationDelay: "180ms", animationDuration: "1000ms" }}
            />
            <span
              className="h-2 w-2 rounded-full bg-violet-500 animate-bounce"
              style={{ animationDelay: "360ms", animationDuration: "1000ms" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
