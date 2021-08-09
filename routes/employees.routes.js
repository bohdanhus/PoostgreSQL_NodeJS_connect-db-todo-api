import Router from 'express';
import {employeeController} from '../controller/employees.controller.js'

const router = new Router()

router.get('/:planning', (req, res) => {
    employeeController.getEmployees(req, res);
});

export default router;