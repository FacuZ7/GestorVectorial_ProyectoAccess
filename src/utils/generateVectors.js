import openaiEmbeddings from '../config/embeddingsConfig.js';
import { v4 as uuidv4 } from 'uuid'

const generateVectors = async (splittedDocuments) => {
    
    const embeddings = await openaiEmbeddings.embedDocuments(splittedDocuments.map(doc => doc.pageContent));

    const vectorsWithIDs = embeddings.map((embedding, index) => ({
        id: uuidv4(),  // Generar un ID único
        values: embedding,
        filename: splittedDocuments[index].metadata.source
    }));

    //const insertedIDs = vectorsWithIDs.map(vector => vector.id);
    //console.log({insertedIDs})
    return vectorsWithIDs

}

export default generateVectors