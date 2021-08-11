import Router from 'express';
import {todoController} from '../controller/todoController.js'

const router = new Router()


router.get('/today', (req, res) => {
    todoController.getCollectionOfTaskForToday(req, res)
});

export default router



// async
// findAllTodoByListId(listId, all)
// {
//     if (this.getBool(all)) {
//         let result = await pool.query('SELECT * FROM todolist WHERE listId=$1', [listId])
//         return result;
//     } else {
//         let result = await pool.query('SELECT * FROM todolist WHERE listId=$1 AND done=false', [listId])
//         return result;
//     }
// }