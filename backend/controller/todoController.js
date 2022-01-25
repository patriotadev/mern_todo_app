const todo = require('../model/todoModel')
const {validationResult} = require('express-validator')

const getTodo = async (req, res) => {
    const result = await todo.find()

    if(!result) {
        return res.status(400).json({
            success: false,
            message: 'Data not found!'
        })
    } else {
       return res.status(200).json({
            success : true,
            data : result
        })
    }
}

const getDetail = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    } else {
        return res.status(200).json({
            success: true,
            data : await todo.findById(req.params.id)
        })
    }
}

const addTodo = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    } else {
        const result = {
            msg : req.body.msg,
            done : req.body.done,
        }
    
        await todo.create(result)
        res.status(200).json({
            success: true,
            message: 'Success add new todo!'
        })
    }
}

const updateTodo = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    } else {

        await todo.updateOne({
            _id : req.params.id,
        }, {
            done: req.body.done
        })
        res.status(200).json({
            success: true,
            message: 'Success update todo!'
        })
    }
}

const deleteTodo = async (req, res) => {
    await todo.findByIdAndDelete(req.params.id)

    return res.status(200).json({
        success: true,
        message: 'Success delete todo!'
    })
}


module.exports = {getTodo, getDetail, addTodo, updateTodo, deleteTodo}