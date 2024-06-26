import * as dotenv from "dotenv";
import { pineconeClient, indexName } from '../config/pineconeConfig.js'

dotenv.config();
//si existe lo busca y sino lo crea.
const managePineconeIndex = async () => {
    await pineconeClient.createIndex({
        name: indexName,
        dimension: Number(process.env.PINECONE_INDEX_DIMENSION),
        metric: 'cosine',
        spec: { 
            serverless: { 
                cloud: process.env.PINECONE_CLOUD, 
                region: process.env.PINECONE_REGION 
            }
        },
        suppressConflicts: true,
        waitUntilReady: true
    });
    console.log("Se utiliza el index:",indexName)
    return pineconeClient.index(indexName);
}

export default managePineconeIndex