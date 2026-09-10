import React, { useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
  isLoading: boolean;
  placeholder?: string;
}

export function ChatInput({
  input,
  setInput,
  onSubmit,
  isLoading,
  placeholder = "Ask about Zohaib's experience, skills, projects..."
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea height to match content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        160
      )}px`;
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        onSubmit();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-end gap-2 p-2 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-sm backdrop-blur-sm focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all duration-200"
    >
      <div className="flex-1 min-w-0 pl-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          aria-label="Message input"
          className="w-full resize-none bg-transparent py-1.5 text-sm text-zinc-900 placeholder:text-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 max-h-36 leading-relaxed"
        />
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isLoading}
          aria-label="Send message"
          className="h-8 w-8 rounded-xl bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500 shadow-xs transition-transform active:scale-95 disabled:pointer-events-none disabled:opacity-40"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </form>
  );
}
