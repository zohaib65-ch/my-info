import React from "react";
import { ChatContainer } from "@/components/chat/chat-container";

export default function Home() {
  return (
    <main className="relative min-h-screen h-dvh w-full flex flex-col items-center justify-center bg-zinc-50/60 dark:bg-black text-zinc-900 dark:text-zinc-50 p-2 sm:p-4 md:p-6 overflow-hidden selection:bg-violet-500/20 selection:text-violet-600">
      {/* Subtle ambient lighting gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] left-[15%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-violet-500/8 via-indigo-500/5 to-transparent blur-3xl dark:from-violet-600/10 dark:via-indigo-600/5" />
        <div className="absolute top-[45%] -right-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-blue-500/8 via-violet-500/5 to-transparent blur-3xl dark:from-blue-600/10 dark:via-violet-600/5" />
      </div>

      {/* Full-height Modern Chatbot Interface */}
      <div className="w-full h-full max-w-4xl flex flex-col">
        <ChatContainer className="h-full w-full max-h-none border-zinc-200/80 dark:border-zinc-800 shadow-2xl" />
      </div>
    </main>
  );
}
