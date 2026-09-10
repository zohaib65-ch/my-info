import React from "react";
import { Bot, Sparkles } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChatSuggestions } from "@/components/chat/chat-suggestions";

interface ChatWelcomeProps {
  onSelectSuggestion: (prompt: string) => void;
  disabled?: boolean;
}

export function ChatWelcome({ onSelectSuggestion, disabled }: ChatWelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center my-auto py-6 px-4 text-center max-w-xl mx-auto w-full animate-in fade-in zoom-in-95 duration-300">
      {/* Assistant Icon with ambient glow */}
      <div className="relative mb-4">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-violet-600/30 to-indigo-600/30 blur-md opacity-75 animate-pulse" />
        <Avatar
          size="lg"
          className="relative h-14 w-14 rounded-2xl bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-850 dark:to-zinc-900 border border-violet-500/30 text-violet-600 dark:text-violet-400 shadow-md flex items-center justify-center"
        >
          <Bot className="h-7 w-7" />
        </Avatar>
      </div>

      {/* Greeting Badge */}
      <div className="mb-2">
        <Badge
          variant="secondary"
          className="bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20 px-3 py-1 font-medium"
        >
          <Sparkles className="h-3 w-3 mr-1 text-violet-500 inline" />
          Interactive Portfolio Assistant
        </Badge>
      </div>

      {/* Title & Introduction */}
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
        Hi! I&apos;m Zohaib&apos;s AI assistant.
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mb-6 leading-relaxed">
        Ask me anything about his skills, experience, projects, services, or modern technology stack.
      </p>

      {/* Suggested Questions Area */}
      <div className="w-full text-left">
        <ChatSuggestions
          onSelectSuggestion={onSelectSuggestion}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
