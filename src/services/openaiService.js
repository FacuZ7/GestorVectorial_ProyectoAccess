import openaiEmbeddings from '../config/openaiConfig.js';

export async function generateEmbeddings(text) {
    const embeddings = await openaiEmbeddings.embed(text);
    return embeddings;
}
