import { ScoredChunk } from "./vector-store";

export interface ChatMessageParam {
  role: "user" | "assistant";
  content: string;
}

export interface GeminiGenerateOptions {
  messages: ChatMessageParam[];
  contextChunks: ScoredChunk[];
  apiKey: string;
  model?: string;
}

/**
 * Calls Google Gemini API with system instructions, retrieved context, and conversation history.
 */
export async function generateGeminiAnswer({
  messages,
  contextChunks,
  apiKey,
  model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite"
}: GeminiGenerateOptions): Promise<string> {
  // Format retrieved context into structured knowledge text
  const formattedContext = contextChunks
    .map(
      (chunk, index) =>
        `[Context ${index + 1} - ${chunk.title}]:\n${chunk.content}`
    )
    .join("\n\n");

  const systemInstructionText = `
You are the official interactive AI Portfolio Assistant for Muhammad Zohaib, a Full Stack & AI Engineer.
Your mission is to represent Zohaib professionally, warmly, and accurately to recruiters, clients, founders, and engineers.

Guidelines:
1. Ground your answers in the following verified portfolio context. Do NOT fabricate skills, technologies, or past projects not mentioned in the context.
2. If asked a question that cannot be answered from the provided portfolio context, answer politely and suggest contacting Zohaib directly.
3. Clean Formatting & Active Links:
   - For live websites and projects, always format as clean, clickable markdown links: e.g. [TruckFlowHQ](https://www.truckflowhq.com/) - Description. Do not place asterisks immediately adjacent to URLs.
   - When asked about his projects, showcase his live production platforms (such as TruckFlowHQ, DIGIMAG, JobCrap, Minest, MeatsZoo, 90J Pages, Start2Write, Digitaly) along with his Fiverr freelance gig.
   - Use clear bullet points and bold titles. Keep responses visually organized, sleek, and pleasant to read.
4. Maintain a confident, helpful, and engineering-savvy tone.

--- VERIFIED PORTFOLIO CONTEXT ---
${formattedContext}
---------------------------------
`.trim();

  // Map messages to Gemini's required contents format ('user' | 'model')
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }]
  }));

  const payload = {
    systemInstruction: {
      parts: [{ text: systemInstructionText }]
    },
    contents,
    generationConfig: {
      temperature: 0.6,
      topP: 0.9,
      maxOutputTokens: 600
    }
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Gemini API error (${response.status}):`, errorBody);

    // If model name needs fallback
    if (response.status === 404 && model !== "gemini-3.8-flash") {
      console.log("Retrying with fallback model gemini-3.8-flash...");
      return generateGeminiAnswer({
        messages,
        contextChunks,
        apiKey,
        model: "gemini-3.8-flash"
      });
    }

    throw new Error(`Gemini API error ${response.status}: ${errorBody}`);
  }

  const data = await response.json();
  const candidate = data.candidates?.[0];
  const responsePart = candidate?.content?.parts?.[0];
  const generatedText = responsePart?.text;

  if (!generatedText) {
    throw new Error("No text returned by Gemini API candidate.");
  }

  return generatedText.trim();
}
