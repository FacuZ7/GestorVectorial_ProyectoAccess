import fs from 'fs/promises'
import * as dotenv from "dotenv";
import path from 'path'
dotenv.config();

/* Limpia los nombres de los archivos que tengan acento o espacios. */
const formatFileNames = async () => {
    try {
        const files = await fs.readdir(process.env.KNOWLEDGE_PATH);

        for (const file of files) {
            if (file.includes(' ')){
                const oldPath = path.join(process.env.KNOWLEDGE_PATH, file);
                const newFileName = file.replace(/\s+/g, '_');
                const normalizedFileName = removeAccents(newFileName);
                const newPath = path.join(process.env.KNOWLEDGE_PATH, normalizedFileName);

                await fs.rename(oldPath, newPath);
                console.log(`Renombrado: ${file} -> ${normalizedFileName}`);
            }
            
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default formatFileNames