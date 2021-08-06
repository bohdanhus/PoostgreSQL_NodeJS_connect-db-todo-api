const express = require('express')

const todo = require('./todo.routes')
//const list = require('./employee')

const router = express.Router()

router.use('/todo', todo)
//router.use("/employee", list)


module.exports = router