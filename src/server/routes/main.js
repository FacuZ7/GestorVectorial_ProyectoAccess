import express from 'express'
import getData from '../controlleres/getdata.js'
const router = express.Router()

router.get("/", getData)
// router.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

export default router