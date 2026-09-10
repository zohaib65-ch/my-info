export type MessageRole = "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
}

export interface SuggestedQuestion {
  id: string;
  label: string;
  prompt: string;
  category?: string;
}

export interface ChatApiRequest {
  messages: Array<{
    role: MessageRole;
    content: string;
  }>;
}

export interface ChatApiResponse {
  success: boolean;
  message: {
    id: string;
    role: "assistant";
    content: string;
    createdAt: string;
  };
  error?: string;
}
