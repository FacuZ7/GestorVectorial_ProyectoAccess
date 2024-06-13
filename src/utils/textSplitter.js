import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export const splitDocuments = async (docs) => {
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1024,
        chunkOverlap: 200
    });
    
    return await splitter.splitDocuments(docs);
}