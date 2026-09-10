"use client";

import React, { useRef, useEffect } from "react";
import { useChat } from "@/hooks/use-chat";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatMessage } from "@/components/chat/chat-message";
import { ChatWelcome } from "@/components/chat/chat-welcome";
import { ChatInput } from "@/components/chat/chat-input";
import { TypingIndicator } from "@/components/chat/typing-indicator";

interface ChatContainerProps {
  className?: string;
}

export function ChatContainer({ className }: ChatContainerProps) {
  const {
    messages,
    input,
    setInput,
    isLoading,
    sendMessage,
    clearChat
  } = useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth auto-scroll to the bottom whenever messages change or loading triggers
  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior, block: "end" });
    }
  };

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages, isLoading]);

  const handleSuggestionSelect = (prompt: string) => {
    sendMessage(prompt);
  };

  const handleInputSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    sendMessage();
  };

  return (
    <div
      className={`relative flex flex-col h-full max-h-[820px] w-full max-w-3xl mx-auto rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-xl shadow-zinc-500/5 dark:shadow-black/40 overflow-hidden ${
        className ?? ""
      }`}
    >
      {/* Header */}
      <ChatHeader
        onClearChat={clearChat}
        messageCount={messages.length}
        disabled={isLoading}
      />

      {/* Message Scroll Area */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4 py-5 space-y-5 scroll-smooth custom-scrollbar"
      >
        {messages.length === 0 ? (
          <ChatWelcome
            onSelectSuggestion={handleSuggestionSelect}
            disabled={isLoading}
          />
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {/* Typing indicator rendered as assistant message */}
            {isLoading && <TypingIndicator />}

            {/* Anchor element to scroll into view */}
            <div ref={messagesEndRef} className="h-2" />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 sm:p-4 bg-gradient-to-t from-white via-white/95 to-white/50 dark:from-zinc-950 dark:via-zinc-950/95 dark:to-zinc-950/50 border-t border-zinc-200/70 dark:border-zinc-800/70">
        <ChatInput
          input={input}
          setInput={setInput}
          onSubmit={handleInputSubmit}
          isLoading={isLoading}
        />
        <div className="flex items-center justify-between px-2 pt-2 text-[11px] text-zinc-600 dark:text-zinc-400">
          <span>
            Press <kbd className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-[10px] text-zinc-700 dark:text-zinc-300">Enter</kbd> to send,{" "}
            <kbd className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-[10px] text-zinc-700 dark:text-zinc-300">Shift + Enter</kbd> for newline
          </span>
          <span className="hidden sm:inline text-zinc-600 dark:text-zinc-400">
            Powered by Portfolio AI
          </span>
        </div>
      </div>
    </div>
  );
}
