import formatFileNames from "./src/utils/formatFileNames.js";

const command = process.argv[2];

switch (command) {
    case 'formatfilenames':    
        formatFileNames();
        break;
    default:
        console.log("comando sin implementación")
        break;
}