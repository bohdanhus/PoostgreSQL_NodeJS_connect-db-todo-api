import Router from 'express';
import {todoController} from '../controller/todo.controller.js'

const router = new Router()


router.get('/today', (req, res) => {
    todoController.getTasksForToday(req, res)
});
router.get('/state', (req, res) => {
    todoController.getState(req, res)
});
export default router