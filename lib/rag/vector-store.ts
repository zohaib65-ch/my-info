import { PORTFOLIO_DOCUMENTS, KnowledgeChunk } from "./portfolio-knowledge";

export interface ScoredChunk extends KnowledgeChunk {
  similarity: number;
}

interface EmbeddedChunk extends KnowledgeChunk {
  embedding: number[];
}

// In-memory cache for embedded knowledge base chunks
let documentEmbeddingsCache: EmbeddedChunk[] | null = null;
let isIndexingPromise: Promise<EmbeddedChunk[]> | null = null;

/**
 * Calculates cosine similarity between two numeric vectors.
 */
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length || vecA.length === 0) return 0;

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  if (denominator === 0) return 0;
  return dotProduct / denominator;
}

/**
 * Calls Google Gemini Embedding API to generate vector for text.
 */
export async function generateGeminiEmbedding(
  text: string,
  apiKey: string
): Promise<number[]> {
  const model = process.env.GEMINI_EMBEDDING_MODEL || "gemini-embedding-001";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:embedContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: {
        parts: [{ text: text.trim() }]
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Embedding API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  if (!data?.embedding?.values) {
    throw new Error("Invalid embedding response format from Gemini API");
  }

  return data.embedding.values as number[];
}

/**
 * Initializes and caches vector embeddings for all portfolio knowledge documents.
 */
export async function getOrIndexKnowledgeBase(
  apiKey: string
): Promise<EmbeddedChunk[]> {
  if (documentEmbeddingsCache && documentEmbeddingsCache.length === PORTFOLIO_DOCUMENTS.length) {
    return documentEmbeddingsCache;
  }

  if (isIndexingPromise) {
    return isIndexingPromise;
  }

  isIndexingPromise = (async () => {
    try {
      console.log(
        `[RAG] Generating vector embeddings for ${PORTFOLIO_DOCUMENTS.length} portfolio documents...`
      );

      const embedded: EmbeddedChunk[] = await Promise.all(
        PORTFOLIO_DOCUMENTS.map(async (doc) => {
          const textToEmbed = `${doc.title}\n${doc.content}`;
          const embedding = await generateGeminiEmbedding(textToEmbed, apiKey);
          return {
            ...doc,
            embedding
          };
        })
      );

      console.log("[RAG] Portfolio vector store indexed successfully in parallel.");
      documentEmbeddingsCache = embedded;
      return embedded;
    } catch (err) {
      console.error("[RAG] Error embedding portfolio knowledge base:", err);
      // Reset so subsequent attempts can retry
      isIndexingPromise = null;
      throw err;
    }
  })();

  return isIndexingPromise;
}

/**
 * Fallback keyword/token score retrieval if vector API is temporarily unavailable
 */
function keywordSimilarity(query: string, text: string): number {
  const queryTokens = query.toLowerCase().split(/\W+/).filter(Boolean);
  const target = text.toLowerCase();
  let matches = 0;

  for (const token of queryTokens) {
    if (token.length > 2 && target.includes(token)) {
      matches++;
    }
  }

  return queryTokens.length > 0 ? matches / queryTokens.length : 0;
}

const queryEmbeddingCache = new Map<string, number[]>();

/**
 * Retrieves the Top-K most relevant portfolio context chunks for a user query.
 */
export async function retrieveContext(
  query: string,
  apiKey: string,
  topK: number = 3
): Promise<ScoredChunk[]> {
  try {
    // 1. Ensure knowledge base is embedded and cached
    const indexedDocs = await getOrIndexKnowledgeBase(apiKey);

    // 2. Check query embedding cache or generate new embedding
    const normalizedQuery = query.toLowerCase().trim();
    let queryEmbedding = queryEmbeddingCache.get(normalizedQuery);

    if (!queryEmbedding) {
      queryEmbedding = await generateGeminiEmbedding(query, apiKey);
      queryEmbeddingCache.set(normalizedQuery, queryEmbedding);
    }

    // 3. Score every chunk using cosine similarity
    const scored: ScoredChunk[] = indexedDocs.map((doc) => ({
      ...doc,
      similarity: cosineSimilarity(queryEmbedding!, doc.embedding)
    }));

    // 4. Sort descending by similarity
    scored.sort((a, b) => b.similarity - a.similarity);

    // 5. Return Top-K chunks
    return scored.slice(0, topK);
  } catch (error) {
    console.warn(
      "[RAG] Vector retrieval failed, falling back to lexical search:",
      error
    );

    // Fallback: Lexical token search
    const fallbackScored: ScoredChunk[] = PORTFOLIO_DOCUMENTS.map((doc) => ({
      ...doc,
      similarity: keywordSimilarity(query, `${doc.title} ${doc.content}`)
    }));

    fallbackScored.sort((a, b) => b.similarity - a.similarity);
    return fallbackScored.slice(0, topK);
  }
}
