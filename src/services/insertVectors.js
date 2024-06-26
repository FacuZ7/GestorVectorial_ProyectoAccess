import { PineconeStore } from '@langchain/pinecone';
import openaiEmbeddings from '../config/embeddingsConfig.js';

const insertVectors = async (splittedDocuments, pineconeIndex) => {

    return await PineconeStore.fromDocuments(splittedDocuments, openaiEmbeddings, {
        pineconeIndex,
        maxConcurrency: 5
    })
}

export default insertVectors;
