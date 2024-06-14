import * as dotenv from "dotenv";
// import { manageEmbeddings } from './handlers/embeddingsHandler.js';
import { pineconeClient, indexName } from './config/pineconeConfig.js';
import { getEmbedding } from "./services/pineconeService.js";
//import { loadDocuments } from './utils/documentLoader.js';
//import { splitDocuments } from './utils/textSplitter.js';
dotenv.config();

/********************* PRUEBAS PINECONE **************************************/
const listIndexes = await pineconeClient.listIndexes() //=> listar todos mis indices
const index = pineconeClient.index(indexName) //=> busca el indice deseado.
//console.log(listIndexes)
//console.log(index) 

console.log(await getEmbedding("99"))

/************************* loadDocuments *********************************/
// const docs = await loadDocuments("src/data") => encuentra la carpeta de los txts con información.
// console.log(docs)
/************************* splitDocuments *********************************/

// const docs = await loadDocuments("src/data")
// const splittedDocuments = await splitDocuments(docs)

// console.log(splittedDocuments.toString()) //salen cosas raras pero funciona 
//=> esto guardo en PINECONE

/**************************************************************************/






//console.log(listIndexes.Index(indexName))

// 
// const splittedDocs = await splitDocuments(docs)
//continuar desde splitted docs, tengo que continuar lo que haga 
//vectorStore del back y usar pinecone en lugar de Faiss



// async function main() {
//     const id = 'unique-id-for-text';
//     const text = 'Your text to generate embeddings';

//     const embedding = await manageEmbeddings(id, text);
//     console.log('Embedding:', embedding);
// }

// //main().catch(err => console.error(err));
