import 'dotenv/config';
import { manageEmbeddings } from './handlers/embeddingsHandler.js';
import { pineconeClient } from './config/pineconeConfig.js';
import { loadDocuments } from './utils/documentLoader.js';
import { splitDocuments } from './utils/textSplitter.js';
const listIndexes = await pineconeClient.listIndexes()

console.log(listIndexes)
const docs = await loadDocuments("src/data")
const splittedDocs = await splitDocuments(docs)
//continuar desde splitted docs, tengo que continuar lo que haga 
//vectorStore del back y usar pinecone en lugar de Faiss



// async function main() {
//     const id = 'unique-id-for-text';
//     const text = 'Your text to generate embeddings';

//     const embedding = await manageEmbeddings(id, text);
//     console.log('Embedding:', embedding);
// }

// //main().catch(err => console.error(err));
