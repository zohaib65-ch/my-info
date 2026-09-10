import React from "react";
import { Bot, RotateCcw, Sparkles } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ChatHeaderProps {
  onClearChat: () => void;
  messageCount: number;
  disabled?: boolean;
}

export function ChatHeader({
  onClearChat,
  messageCount,
  disabled = false
}: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md sticky top-0 z-10">
      {/* Assistant Identity & Status */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar
            size="md"
            className="bg-gradient-to-tr from-violet-600 to-indigo-600 text-white border-0 shadow-sm"
          >
            <Bot className="h-4 w-4" />
          </Avatar>
          {/* Pulsing online status indicator dot */}
          <span
            className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center"
            title="Online and available"
            aria-label="Online status"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white dark:border-zinc-900 bg-emerald-500" />
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <h1 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Zohaib&apos;s Assistant
            </h1>
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 h-4 border-violet-500/30 text-violet-600 dark:text-violet-400 font-medium"
            >
              <Sparkles className="h-2.5 w-2.5 mr-0.5 inline" />
              AI
            </Badge>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Online &amp; ready to help</span>
          </div>
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-1">
        {messageCount > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClearChat}
            disabled={disabled}
            aria-label="Restart conversation"
            className="h-8 px-2.5 text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 gap-1.5 rounded-lg"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset chat</span>
          </Button>
        )}
      </div>
    </div>
  );
}
