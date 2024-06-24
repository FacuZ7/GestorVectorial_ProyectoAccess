import * as dotenv from "dotenv";
import fs from 'fs/promises'
import path from 'path'
dotenv.config();

const renameFile = async (id, filename ) => {

    const oldPath = path.join(process.env.KNOWLEDGE_PATH, filename);
    const newPath = path.join(process.env.KNOWLEDGE_PATH, `${id}_${filename}`);
    
    try {
        await fs.rename(oldPath, newPath);
        console.log(`File renamed to: ${`${id}_${filename}`}`);
    } catch (err) {
        console.error('Error renaming file:', err);
    }
}

export default renameFile;
