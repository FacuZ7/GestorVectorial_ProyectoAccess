import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";

export const loadDocuments = async (directory)=>{
    const loader = new DirectoryLoader(
        directory,
        {
          ".txt": (path) => new TextLoader(path),
          ".pdf": (path) => new PDFLoader(path, { splitPages: false }),
          ".docx": (path) => new DocxLoader(path) // Para pares pregunta respuesta validados
        }
    );
    
    const documents = await loader.load();
    return documents;
}


