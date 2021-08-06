const Router = require('express');
const router = new Router()
const todoController = require('../controller/todo.controller')

router.post('/', (req, res) => {
    todoController.createTask(req, res)
});

router.get('/', (req, res) => {
    todoController.getTasks(req, res)
});
router.get('/', (req, res) => {
    todoController.getOneTask(req, res)
});
router.put('/', (req, res) => {
    todoController.updateTask(req, res)
});
router.delete('/', (req, res) => {
    todoController.deleteTask(req, res)
});

module.exports = router