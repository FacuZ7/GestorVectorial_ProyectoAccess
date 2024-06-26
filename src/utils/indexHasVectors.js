const indexHasVectors = async (index) => {
    try {
        const response = await index.describeIndexStats();
        return response.totalRecordCount > 0;
    } catch (error) {
        console.error('Error en indexHasVectors:', error);
        return false;
    }
}

export default indexHasVectors