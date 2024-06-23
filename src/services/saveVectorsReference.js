import axios from 'axios';

const saveVectorsReference = async (data) => {
    const MONGO_URL = `http://localhost:${process.env.MONGO_PORT}/vectors/`
    
    try {
        const response = await axios.post(MONGO_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error consuming microservice:', error);
        throw error;
    }
};

export default saveVectorsReference