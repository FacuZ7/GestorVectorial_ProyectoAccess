import * as dotenv from "dotenv";
import { loadDocuments } from './utils/documentLoader.js';
import { splitDocuments } from './utils/textSplitter.js';
import managePineconeIndex from "./services/managePineconeIndex.js";
import indexHasVectors from "./utils/indexHasVectors.js";
import insertVectors from "./services/insertVectors.js";
import generateVectors from "./utils/generateVectors.js";
import saveVectorsReference from "./services/saveVectorsReference.js";

dotenv.config();

const pineconeIndex = await managePineconeIndex();
const hasVectors = await indexHasVectors(pineconeIndex)

/* 

En vez de preguntar si hay vectores, debería traer todos los documentos que SI existen en mongo 
y preguntar si el que quiero insertar no existe entre los devueltos, recien ahi le hago embedding y etc...

*/ 
if (!hasVectors){
    console.time()
    console.log("No hay vectores en el index, los creo.")
    const docs = await loadDocuments(process.env.KNOWLEDGE_PATH);
    let array = [];

    const result = async (docs) => {
        for (let i = 0; i < docs.length; i++){
            array.push(docs[i])
            const splittedDocument = await splitDocuments(array);
            array = [];

            const vectorsToInsert = await generateVectors(splittedDocument)
            await insertVectors(pineconeIndex, vectorsToInsert)
            
            const formatted = vectorsToInsert.reduce((acc, curr) => {
                // Obtener solo el nombre del archivo sin la ruta
                const filename = curr.filename.split('\\').pop();
            
                // Si no existe una entrada para este filename, crearla
                if (!acc[filename]) {
                    acc[filename] = {
                        filename: filename,
                        related_vector_id: []
                    };
                }
            
                // Agregar el ID al array de related_vector_id
                acc[filename].related_vector_id.push(curr.id);
            
                return acc;
            }, {});

            try {
                for (const key in formatted) {
                    if (formatted.hasOwnProperty(key)) {
                        const data = formatted[key];
                        const result = await saveVectorsReference(data);
                        console.log('result:', result);
                    }
                }
            } catch (error) {
                console.error('Error processing and saving vectors:', error);
            }    
        }
    }
    
    await result(docs)

    console.timeEnd()
} 