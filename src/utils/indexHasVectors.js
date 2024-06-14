import { pineconeClient } from '../config/pineconeConfig.js'
dotenv.config();

const indexHasVectors = async () => {
    try {
        const response = await pineconeClient.describeIndexStats();
        return response.totalRecordCount > 0;
    } catch (error) {
        console.error('Error checking vectors:', error);
        return false;
    }
}

export default indexHasVectors