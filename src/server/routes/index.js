import { Router } from 'express'
import vectorizeData from './vectorizeData.js'
const routerMaster = Router();

routerMaster.use('/vectorizeData', vectorizeData)

export {routerMaster}