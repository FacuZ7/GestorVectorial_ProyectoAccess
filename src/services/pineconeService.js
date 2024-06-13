import { pineconeClient, indexName } from '../config/pineconeConfig.js';

export async function upsertEmbeddings(id, embeddings) {
    const index = pineconeClient.Index(indexName);
    console.log("upsertEmbeddings: ", index)
    await index.upsert([{ id, values: embeddings }]);
}

export async function getEmbedding(id) {
    const index = pineconeClient.Index(indexName);
    console.log("getEmbedding: ", index)
    const result = await index.fetch([id]);
    return result;
}
