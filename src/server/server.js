import express from 'express';
import { PORT } from './config/envConfig.js'
import { routerMaster } from './server/routes/index.js';

const app = express();

app.use(express.json());
app.use(routerMaster);
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

console.log(PORT)
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });