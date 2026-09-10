import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { DEFAULT_SUGGESTIONS } from "@/lib/mock-data";
import { SuggestedQuestion } from "@/types/chat";

interface ChatSuggestionsProps {
  onSelectSuggestion: (prompt: string) => void;
  suggestions?: SuggestedQuestion[];
  disabled?: boolean;
}

export function ChatSuggestions({
  onSelectSuggestion,
  suggestions = DEFAULT_SUGGESTIONS,
  disabled = false
}: ChatSuggestionsProps) {
  return (
    <div className="w-full space-y-2.5">
      <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 px-0.5">
        <Sparkles className="h-3.5 w-3.5 text-violet-500" />
        <span>Suggested questions</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelectSuggestion(suggestion.prompt)}
            className="group relative flex items-start gap-2.5 p-3 text-left rounded-xl border border-zinc-200/90 bg-white/70 hover:bg-zinc-50 hover:border-violet-500/40 dark:bg-zinc-900/60 dark:border-zinc-800 dark:hover:border-violet-500/40 dark:hover:bg-zinc-850/80 transition-all duration-200 shadow-2xs hover:shadow-xs disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
          >
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-violet-500/10 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              <MessageCircle className="h-3 w-3" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {suggestion.label}
              </span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Click to ask
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
