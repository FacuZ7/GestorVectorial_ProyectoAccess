import * as dotenv from "dotenv";
// import { manageEmbeddings } from './handlers/embeddingsHandler.js';
import { pineconeClient, indexName } from './config/pineconeConfig.js';
import openaiEmbeddings from "./config/embeddingsConfig.js";
import { PineconeStore } from "@langchain/pinecone";
import { loadDocuments } from './utils/documentLoader.js';
import { splitDocuments } from './utils/textSplitter.js';
dotenv.config();



console.log(process.env.PINECONE_INDEX_DIMENSION)
console.log(typeof Number(process.env.PINECONE_INDEX_DIMENSION))
/********************* PRUEBAS PINECONE **************************************/
// const listIndexes = await pineconeClient.listIndexes() //=> listar todos mis indices
// const index = pineconeClient.index(indexName) //=> busca el indice deseado.
// console.log("todos los indices: ", listIndexes)
// console.log("el indice buscado: ", index) 


/************************* loadDocuments *********************************/
// const docs = await loadDocuments("src/data") => encuentra la carpeta de los txts con información.
// console.log(docs)
/************************* splitDocuments *********************************/

// const docs = await loadDocuments("src/data")
// const splittedDocuments = await splitDocuments(docs)

// console.log(splittedDocuments.toString()) //salen cosas raras pero funciona 
//=> esto guardo en PINECONE

/************************************* ESTO SIRVE PARA CREAR LOS EMBEDDINGS Y GUARDARLOS EN PINECONE *************************************/
// const pineconeIndex = pineconeClient.index(indexName)
// const docs = await loadDocuments(process.env.KNOWLEDGE_PATH)
// const splittedDocuments = await splitDocuments(docs)

// console.log(splittedDocuments.toString())   //salen cosas raras pero funciona 
//                                             //=> esto guardo en PINECONE

// const vectorStore = await PineconeStore.fromDocuments(splittedDocuments, openaiEmbeddings, {
//     pineconeIndex,
//     maxConcurrency: 5
// })

/*********************************************************************************************************************************/
// SI HAY RESULT, SIGNIFICA QUE CREÓ EL INDICE Y LO DEVUELVE.
// SI EL INDICE EXISTE, NO LO CREA Y DEVUELVE UNDEFINED PORQUE NO HIZO NADA.
// const result = await pineconeClient.createIndex({
//   name: indexName,
//   dimension: process.env.PINECONE_INDEX_DIMENSION,
//   metric: 'cosine',
//   spec: { 
//     serverless: { 
//       cloud: process.env.PINECONE_CLOUD, 
//       region: process.env.PINECONE_REGION 
//     }
//   },
//   suppressConflicts: true
// }); 


// console.log(result)

// todo junto y en orden
// const docs = await loadDocuments(process.env.KNOWLEDGE_PATH)
// const splittedDocuments = await splitDocuments(docs)

// await pineconeClient.createIndex({
//     name: indexName,
//     dimension: 1536,
//     metric: 'cosine',
//     spec: { 
//     serverless: { 
//         cloud: process.env.PINECONE_CLOUD, 
//         region: process.env.PINECONE_REGION 
//     }
//     },
//     suppressConflicts: true,
//     waitUntilReady: true
// })

// const pineconeIndex = pineconeClient.index(indexName)

// const data = await pineconeIndex.describeIndexStats();
// console.log(data.totalRecordCount != 0)



// const vectorStore = await PineconeStore.fromDocuments(splittedDocuments, openaiEmbeddings, {
//     pineconeIndex,
//     maxConcurrency: 5
// })










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
