import { Router } from 'express'
import main from './main.js'
const routerMaster = Router();

routerMaster.use('/main', main)

export {routerMaster}