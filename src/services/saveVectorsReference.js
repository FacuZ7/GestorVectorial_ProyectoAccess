import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
const saveVectorsReference = async (data) => {
    const MONGO_URL = `http://localhost:${process.env.MONGO_PORT}/create-vector/`
    
    const obj = {
        vector_id: uuidv4(),
        ...data
    }

    try {
        const response = await axios.post(MONGO_URL, obj);
        return response.data;
    } catch (error) {
        console.error('Error consuming microservice:', error);
        throw error;
    }
};

export default saveVectorsReference