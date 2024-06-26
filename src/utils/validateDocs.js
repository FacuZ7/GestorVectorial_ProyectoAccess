const validateDocs = (docs) => {
    if (docs.length == 0){
        console.log("No se cargaron documentos en la carpeta data")
        return false
    }

    return true
}

export default validateDocs