import { NextResponse } from "next/server";
import { retrieveContext } from "@/lib/rag/vector-store";
import { generateGeminiAnswer } from "@/lib/rag/gemini-client";
import { getMockResponse } from "@/lib/mock-data";
import { ChatApiRequest, ChatApiResponse } from "@/types/chat";

/**
 * POST /api/chat
 *
 * Real-Time RAG Pipeline:
 * 1. Validates incoming message history from the client.
 * 2. Extracts latest user prompt.
 * 3. Embeds prompt using Google Gemini Embedding API (`gemini-embedding-001`).
 * 4. Runs Cosine Similarity search over portfolio knowledge vectors to retrieve Top-K relevant context.
 * 5. Synthesizes a grounded system prompt with verified context.
 * 6. Generates high-fidelity, real-time AI response with Google Gemini (`gemini-3.6-flash`).
 * 7. Returns response to Chat UI with metadata and timestamps.
 */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatApiRequest;

    if (!body || !body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request. 'messages' array is required."
        },
        { status: 400 }
      );
    }

    const latestMessage = body.messages[body.messages.length - 1];
    const userPrompt = (latestMessage.content || "").trim();

    const apiKey = process.env.GEMINI_API_KEY;

    let aiAnswer: string;

    if (apiKey) {
      try {
        console.log(`[RAG] Processing query: "${userPrompt.substring(0, 50)}..."`);

        // 1. Retrieve Top-3 relevant context chunks using semantic vector search
        const contextChunks = await retrieveContext(userPrompt, apiKey, 3);
        console.log(
          `[RAG] Retrieved ${contextChunks.length} context chunks. Top match: ${contextChunks[0]?.title} (score: ${contextChunks[0]?.similarity.toFixed(3)})`
        );

        // 2. Call Google Gemini with retrieved context and message history
        aiAnswer = await generateGeminiAnswer({
          messages: body.messages,
          contextChunks,
          apiKey
        });
      } catch (geminiError) {
        console.error("[RAG] Gemini generation failed, falling back to local knowledge base:", geminiError);
        aiAnswer = getMockResponse(userPrompt);
      }
    } else {
      console.warn("[RAG] GEMINI_API_KEY not found in environment, using local knowledge base fallback.");
      aiAnswer = getMockResponse(userPrompt);
    }

    const responsePayload: ChatApiResponse = {
      success: true,
      message: {
        id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        role: "assistant",
        content: aiAnswer,
        createdAt: new Date().toISOString()
      }
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error("Error in /api/chat route handler:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error while processing chat request."
      },
      { status: 500 }
    );
  }
}
