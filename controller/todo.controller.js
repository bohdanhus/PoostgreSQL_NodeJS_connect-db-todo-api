const db = require('../db')

class todoController {

    async createTask(req, res) {
        const { id, title, done, due_date } = req.body
        const newTask = await db.query(`INSERT INTO todo (id, title, done, due_date) VALUES ($1, $2, $3, $4) RETURNING *`, [id, title, done, due_date]);
        res.status(201);
        res.json(newTask.rows);
    }
    async getTasks(req,res) {
        const tasks = await db.query(`SELECT * FROM todo`)
        res.status(200);
        res.json(tasks.rows)
    }
    async getOneTask(req,res){
        const id = req.params.id
        const task = await db.query(`SELECT * FROM todo where id = $1`, [id])
        res.status(200);
        res.json(task.rows[0])
    }
    async updateTask(req,res){
        const {id, title, done, due_date} = req.body
        const taskUpdate = await db.query(`UPDATE todo SET title =  $2, done = $3, due_date = $4 where id = $1 RETURNING *`,
            [id, title, done, due_date])
        res.status(200);
        res.json(taskUpdate.rows[0])
    }
    async deleteTask(req,res){
        const id = req.params.id
        const task = await db.query(`DELETE FROM todo where id = $1`, [id])
        res.status(204);
        res.json(task.rows[0])
    }
}
module.exports = new todoController();