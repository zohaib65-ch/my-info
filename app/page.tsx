import React from "react";
import { ChatContainer } from "@/components/chat/chat-container";
import { Sparkles, Terminal, Code2, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-zinc-50/50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-violet-500/20 selection:text-violet-600">
      {/* Ambient background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[25%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-500/8 via-indigo-500/5 to-transparent blur-3xl dark:from-violet-600/10 dark:via-indigo-600/5" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-500/8 via-violet-500/5 to-transparent blur-3xl dark:from-blue-600/10 dark:via-violet-600/5" />
      </div>

      {/* Top Navbar */}
      <header className="w-full border-b border-zinc-200/70 dark:border-zinc-850/80 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 flex items-center justify-center font-bold text-xs shadow-xs">
              MZ
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Muhammad Zohaib
              </span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 -mt-0.5">
                Full Stack &amp; AI Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Badge variant="outline" className="text-[11px] text-zinc-600 dark:text-zinc-400 gap-1">
                <Code2 className="h-3 w-3 text-violet-500" />
                Next.js &bull; TypeScript
              </Badge>
              <Badge variant="outline" className="text-[11px] text-zinc-600 dark:text-zinc-400 gap-1">
                <Sparkles className="h-3 w-3 text-indigo-500" />
                Gemini Ready
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Showcase */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center justify-center">
        {/* Intro text */}
        <div className="text-center max-w-2xl mb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-400">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-medium mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Portfolio Demo</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Chat with Zohaib&apos;s Portfolio AI
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto">
            Explore my experience, technical skills, engineering philosophy, and projects through an intelligent conversational interface.
          </p>
        </div>

        {/* Chatbot Interface Container */}
        <div className="w-full flex-1 flex flex-col items-center justify-center min-h-[560px] h-[640px] max-h-[780px]">
          <ChatContainer className="h-full w-full" />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200/70 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40 py-4 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-zinc-400" />
            <span>Clean Architecture &bull; Ready for RAG + Google Gemini</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Next.js 16</span>
            <span>&bull;</span>
            <span>React 19</span>
            <span>&bull;</span>
            <span>Tailwind CSS</span>
            <span>&bull;</span>
            <span>Lucide React</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
