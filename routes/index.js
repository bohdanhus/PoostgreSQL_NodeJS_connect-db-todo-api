const express = require('express')

const todo = require('./todo.routes')
const employees = require('./employees.routes')

const router = express.Router()

router.use('/todo', todo)
router.use("/employees", employees)


module.exports = router