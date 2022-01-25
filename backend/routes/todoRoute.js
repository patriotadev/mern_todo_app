const express = require('express')
const router = express.Router();
const {body, param} = require('express-validator')

const todoController = require('../controller/todoController')

router.get(
    '/get',
    todoController.getTodo
)

router.get('/get/:id', todoController.getDetail)

router.post(
    '/add',
    [
        body('msg').notEmpty(),
    ],
    todoController.addTodo
)

router.put(
    '/update/:id', 
    [
        body('msg').notEmpty(),
    ],
    todoController.updateTodo
    )

router.delete(
    '/delete/:id',
    todoController.deleteTodo
)

module.exports = router