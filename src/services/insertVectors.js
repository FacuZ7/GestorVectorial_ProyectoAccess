const insertVectors = async (pineconeIndex, vectorsWithIDs) => {
    const validVectors = vectorsWithIDs.map(({ id, values, filename }) => ({ 
        id, 
        values,
        metadata: { filename }
    }));
    console.log(validVectors);
    return await pineconeIndex.upsert(validVectors);
}

export default insertVectors;
