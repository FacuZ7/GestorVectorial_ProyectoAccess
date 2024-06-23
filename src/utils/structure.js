
const structure = (vectorsWithIDs) => {
    console.log("structure: ", vectorsWithIDs)
    const formatted = vectorsWithIDs.reduce((acc, curr) => {
        // Obtener solo el nombre del archivo sin la ruta
        const filename = curr.filename.split('\\').pop();
    
        // Si no existe una entrada para este filename, crearla
        if (!acc[filename]) {
            acc[filename] = {
                filename: filename,
                related_vector_id: []
            };
        }
    
        // Agregar el ID al array de related_vector_id
        acc[filename].related_vector_id.push(curr.id);
    
        return acc;
    }, {});
}

export default structure