import express from "express";

import todo from './todo.routes.js'
import employees from './employees.routes.js'
import dashboard from './dashboard.js'
//import collection_today from './collection_today.js'
const router = express.Router()

router.use('/todo', todo)
router.use('/employees', employees)
router.use('/dashboard', dashboard)
//router.use('/collection/today/', collection_today);
export default router