import db from '../db.js';

class ToDoController {
    async getTasksForToday(req, res) {
        const [forToday, lists] = await Promise.all([
            db.query(`SELECT count(*) FROM todo WHERE DATE(due_date) BETWEEN current_date AND current_date`),
            db.query(`SELECT lists.title, count(*) FROM lists LEFT JOIN todo ON lists.id = todo.list_id group by lists.id;`)
        ])
        const result = {
            fortoday: forToday.rows,
            lists: lists.rows
        }
        res.json(result)

    }
   async getState(req, res) {
        const result = []

   }
    async createTask(req, res) {
        const {id, title, done, due_date} = req.body
        const result = await db.query(`INSERT INTO todo (id, title, done, due_date)
                                        VALUES ($1, $2, $3, $4)
                                        RETURNING *`, [id, title, done, due_date]);
        res.status(201);
        res.json(result.rows);
    }

    async getTasks(req, res) {
        const result = await db.query(`SELECT *
                                      FROM todo`)
        res.status(200);
        res.json(result.rows)
    }

    async getOneTask(req, res) {
        const id = req.params.id
        const result = await db.query(`SELECT *
                                     FROM todo
                                     where id = $1`, [id])
        res.status(200);
        res.json(result.rows[0])
    }

    async updateTask(req, res) {
        const {id, title, done, due_date} = req.body
        const result = await db.query(`UPDATE todo
                                           SET title    = $2,
                                               done     = $3,
                                               due_date = $4
                                           where id = $1
                                           RETURNING *`,
            [id, title, done, due_date])
        res.status(200);
        res.json(result.rows[0])
    }

    async deleteTask(req, res) {
        const id = req.params.id
        const result = await db.query(`DELETE
                                     FROM todo
                                     where id = $1`, [id])
        res.status(204);
        res.json(result.rows[0])
    }
    async getDashboard(req, res){

    }
}

export const todoController = new ToDoController()