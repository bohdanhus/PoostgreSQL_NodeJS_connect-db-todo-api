const db = require('../db');
const { main } = require('../model/employees.model')

class EmployeesController {
    async getEmployees(req, res) {
        const planning = req.params.planning;
        //console.log(planning);
        const employees = await db.query(`SELECT * FROM empl`);
        //console.log(employees.rows);
        res.json(main(employees.rows, planning));
        // console.log(main(employees.rows, planning));
    }
}

module.exports = new EmployeesController();