const db = require('../db')

class todoController {

    async createTask (req,res) {
        const {title, done, due_date} = req.body
        const newTask = await db.query(`INSERT INTO todo (title, done, due_date) VALUES ($1, $2, $3) RETURNING *`, [title, done, due_date]);
        res.status(201);
        res.json(newTask.rows);
    }

    async getTask(req,res){

    }
    async getOneTask(req,res){

    }
    async updateTask(req,res){

    }
    async deleteTask(req,res){

    }
}
module.exports = new todoController();