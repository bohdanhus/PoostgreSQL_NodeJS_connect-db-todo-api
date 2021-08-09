import Router from 'express';
import {todoController} from '../controller/todo.controller.js'

const router = new Router()



router.post('/', (req, res) => {
    todoController.createTask(req, res)
});
router.get('/', (req, res) => {
    todoController.getTasks(req, res)
});
router.get('/:id', (req, res) => {
    todoController.getOneTask(req, res)
});
router.put('/', (req, res) => {
    todoController.updateTask(req, res)
});
router.delete('/:id', (req, res) => {
    todoController.deleteTask(req, res)
});

export default router
