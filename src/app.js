import * as dotenv from "dotenv";
import { loadDocuments } from './utils/documentLoader.js';
import { splitDocuments } from './utils/textSplitter.js';
import managePineconeIndex from "./services/managePineconeIndex.js";
import indexHasVectors from "./utils/indexHasVectors.js";
import insertVectors from "./services/insertVectors.js";
dotenv.config();

const pineconeIndex = await managePineconeIndex();
const hasVectors = await indexHasVectors(pineconeIndex)

if (!hasVectors){
    const docs = await loadDocuments(process.env.KNOWLEDGE_PATH);
    const splittedDocuments = await splitDocuments(docs);
    await insertVectors(splittedDocuments, pineconeIndex)
} 
