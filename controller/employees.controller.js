const db = require('../db');
const {main} = require('../model/employees.model')

class EmployeesController {
    async getEmployees(req, res) {
        const planning = req.params.planning;
        const employees = await db.query(`SELECT *
                                          FROM empl`);
        res.end(main(employees.rows, planning));
    }
}

module.exports = new EmployeesController();