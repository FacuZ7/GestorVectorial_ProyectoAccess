import * as dotenv from "dotenv";
import { loadDocuments } from './utils/documentLoader.js';
import { splitDocuments } from './utils/textSplitter.js';
import managePineconeIndex from "./services/managePineconeIndex.js";
import indexHasVectors from "./utils/indexHasVectors.js";
import insertVectors from "./services/insertVectors.js";
import validateDocs from "./utils/validateDocs.js";

dotenv.config();

const pineconeIndex = await managePineconeIndex();
const hasVectors = await indexHasVectors(pineconeIndex)

if (!hasVectors){
    const docs = await loadDocuments(process.env.KNOWLEDGE_PATH);
    if (validateDocs(docs)){
        try {
            const splittedDocuments = await splitDocuments(docs);
            await insertVectors(splittedDocuments, pineconeIndex)

            console.log("Se insertó la información correctamente.")
        } catch (error) {
            console.log("Error al insertar vectores: ", error)
        }    
    }
}else{
    console.log("Ya existen vectores en el index")
}