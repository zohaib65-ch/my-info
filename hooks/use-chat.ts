import { useState, useCallback } from "react";
import { Message, ChatApiResponse } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (contentToSend?: string) => {
      const text = (contentToSend ?? input).trim();
      if (!text || isLoading) return;

      // Optimistically add user message
      const userMessage: Message = {
        id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        role: "user",
        content: text,
        createdAt: new Date()
      };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content
            }))
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        }

        const data = (await response.json()) as ChatApiResponse;

        if (!data.success || !data.message) {
          throw new Error(data.error || "Failed to receive valid assistant response");
        }

        const assistantMessage: Message = {
          id: data.message.id,
          role: "assistant",
          content: data.message.content,
          createdAt: new Date(data.message.createdAt)
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        console.error("Failed to send message:", err);
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An unexpected error occurred while contacting the assistant.";
        setError(errorMessage);

        // Fallback message so user isn't stuck with an empty bubble
        const errorFallbackMessage: Message = {
          id: `err_${Date.now()}`,
          role: "assistant",
          content: "Sorry, I encountered a temporary connection issue. Please try asking your question again.",
          createdAt: new Date()
        };
        setMessages((prev) => [...prev, errorFallbackMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages]
  );

  const clearChat = useCallback(() => {
    setMessages([]);
    setInput("");
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    messages,
    input,
    setInput,
    isLoading,
    error,
    sendMessage,
    clearChat
  };
}
