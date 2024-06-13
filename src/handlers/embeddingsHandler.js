import { generateEmbeddings } from '../services/openaiService.js';
import { upsertEmbeddings, getEmbedding } from '../services/pineconeService.js';

export async function manageEmbeddings(id, text) {
    let embedding = await getEmbedding(id);

    if (!embedding || embedding.vectors.length === 0) {
        const newEmbedding = await generateEmbeddings(text);
        await upsertEmbeddings(id, newEmbedding);
        embedding = newEmbedding;
    }

    return embedding;
}
