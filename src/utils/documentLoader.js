import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";

export const loadDocuments = async (directory)=>{
    const loader = new DirectoryLoader(
        directory,
        {
          ".txt": (path) => new TextLoader(path),
        }
    );

    return await loader.load();
}


