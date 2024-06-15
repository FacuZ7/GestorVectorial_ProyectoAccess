import * as dotenv from "dotenv";
import { loadDocuments } from './utils/documentLoader.js';
import { splitDocuments } from './utils/textSplitter.js';
import createPineconeIndex from "./services/createPineconeIndex.js";
import indexHasVectors from "./utils/indexHasVectors.js";
import insertVectors from "./services/insertVectors.js";
dotenv.config();


const docs = await loadDocuments(process.env.KNOWLEDGE_PATH);
const splittedDocuments = await splitDocuments(docs);

const pineconeIndex = await createPineconeIndex();

const hasVectors = await indexHasVectors(pineconeIndex)

console.log("hay vectores?: ", hasVectors)

if (!hasVectors){
    console.log("No hay vectores en el index, los creo.")
    await insertVectors(splittedDocuments, pineconeIndex)
}