import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User, Copy, Check, ExternalLink } from "lucide-react";
import { Message } from "@/types/chat";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const formatTimestamp = (date: Date) => {
    try {
      const d = date instanceof Date ? date : new Date(date);
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return "";
    }
  };

  return (
    <div
      className={cn(
        "group flex w-full gap-3 transition-opacity animate-in fade-in duration-200",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {/* Assistant Avatar */}
      {!isUser && (
        <Avatar
          size="md"
          className="bg-gradient-to-tr from-indigo-500/10 via-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5"
        >
          <Bot className="h-4 w-4" />
        </Avatar>
      )}

      {/* Message Content Bubble */}
      <div
        className={cn(
          "flex flex-col gap-1 max-w-[88%] sm:max-w-[82%]",
          isUser ? "items-end" : "items-start"
        )}
      >
        {/* Name and Timestamp Header */}
        <div className="flex items-center gap-2 px-1">
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            {isUser ? "You" : "Zohaib AI"}
          </span>
          <span className="text-[10px] text-zinc-600 dark:text-zinc-400">
            {formatTimestamp(message.createdAt)}
          </span>
        </div>

        {/* Bubble */}
        <div
          className={cn(
            "relative rounded-2xl px-4 py-3 text-sm transition-all shadow-xs w-full",
            isUser
              ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 rounded-tr-sm"
              : "bg-zinc-100/95 dark:bg-zinc-900/95 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-sm"
          )}
        >
          <div className="break-words leading-relaxed">
            {isUser ? (
              <p className="whitespace-pre-wrap">{message.content}</p>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Render clickable links with external icon and badge style
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 underline underline-offset-3 hover:bg-violet-500/10 px-1 py-0.5 rounded transition-all group/link"
                    >
                      <span>{children}</span>
                      <ExternalLink className="h-3 w-3 opacity-70 group-hover/link:opacity-100 transition-opacity shrink-0" />
                    </a>
                  ),
                  // Styled headings
                  h1: ({ children }) => (
                    <h1 className="text-base font-bold text-zinc-900 dark:text-zinc-50 mt-2 mb-1">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-50 mt-3 mb-1">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider text-violet-600 dark:text-violet-400 mt-3 mb-1.5 border-b border-zinc-200/60 dark:border-zinc-800 pb-1">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-2 last:mb-0 leading-relaxed text-zinc-800 dark:text-zinc-200">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-1.5 my-2.5 list-disc list-outside ml-4 text-zinc-800 dark:text-zinc-200">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-1.5 my-2.5 list-decimal list-outside ml-4 text-zinc-800 dark:text-zinc-200">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed pl-1">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-zinc-950 dark:text-zinc-50">
                      {children}
                    </strong>
                  ),
                  code: ({ children }) => (
                    <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 font-mono text-[0.85em] text-violet-700 dark:bg-zinc-800 dark:text-violet-300">
                      {children}
                    </code>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-violet-500 pl-3 my-2 text-zinc-600 dark:text-zinc-400 italic">
                      {children}
                    </blockquote>
                  )
                }}
              >
                {message.content}
              </ReactMarkdown>
            )}
          </div>

          {/* Action buttons (Copy) for Assistant messages */}
          {!isUser && (
            <div className="mt-2.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
              <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                Portfolio Assistant
              </span>
              <Button
                type="button"
                variant="ghost"
                size="iconSm"
                onClick={handleCopy}
                aria-label={copied ? "Copied message" : "Copy message"}
                className="h-6 px-1.5 gap-1 rounded-md text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      Copied
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span className="text-[10px]">Copy</span>
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* User Avatar */}
      {isUser && (
        <Avatar
          size="md"
          className="bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 shrink-0 mt-0.5"
        >
          <User className="h-4 w-4" />
        </Avatar>
      )}
    </div>
  );
}
