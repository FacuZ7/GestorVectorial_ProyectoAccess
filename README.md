## Readme Gestor Verctorial

**Descripción:**

* Es el repositorio encargado de gestionar la base de conocimiento y vectorización de información para persistir en base de datos vectorial: Pinecone

**Requisitos previos:**

* Node.js 16 o superior
* npm o yarn

**Instalación:**

1. Clone este repositorio: `git clone https://github.com/FacuZ7/GestorVectorial_ProyectoAccess.git`
2. Instale las dependencias: `npm install` o `yarn install`

**Uso:**
1. Es necesario cargar los documentos correspondientes en la carpeta "data" del proyecto (Los formatos permitidos a día de hoy son: .txt, .pdf y .docx)
2. Completar el archivo .env según el archivo .env.example preferentemente copiar las keys y pegarlo
3. Completar las key con los datos correspondientes: \
  . PINECONE_API_KEY = api key proporcionada una vez que se crea cuenta en pinecone.\
  . PINECONE_INDEX_NAME = este nombre es a elección.\
  . PINECONE_INDEX_DIMENSION = dimensión a eleccion, recomendado 1536.\
  . PINECONE_CLOUD = a elección segun configuración de pinecone.\
  . PINECONE_REGION = a eleccion segun configuracion de pinecone.\
  . OPENAI_API_KEY = para esto debemos registrarnos en OPENAI y crear una api key.\
  . KNOWLEDGE_PATH = se indica la ruta de la carpeta que contenga todos los documentos que compongan la base de conocimiento, por defecto dejar "src/data", si se desea reestructurar la estructura de carpetas, hay que tenerlo en cuenta.\
  . MONGO_PORT = puerto elegido para el repositorio de persistencia de información, MongoDB (API_AccessChatbot_Conversations)

Para iniciar la carga de documentos en su index elegido en pinecone, ejecute el siguiente comando en la terminal:

```
npm start
```
