const Router = require('express');
const employeeController = require('../controller/employees.controller');
const router = new Router();

router.get('/:planning', (req, res) => {
    employeeController.getEmployees(req, res);
});

module.exports = router;