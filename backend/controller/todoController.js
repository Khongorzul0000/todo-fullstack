const Todo = require("../model/todoModel")

const createTodo = async (req, res) =>{
    const body = req.body;
    const result = await new Todo(body).save();
    res.send(result);
}

const getTodos = async (req, res) =>{
    const result = await Todo.find({})
    res.send(result)
}

const getTodo = async (req, res) =>{
    const id = req.params.id
    const result = await Todo.findById({_id:id})
    res.send(result)
}

const deleteTodo = async (req, res) =>{
    const id = req.params.id
    const result = await Todo.findByIdAndDelete({_id:id})
    res.send(result)
}

const updateTodo = async (req, res) =>{
    const id = req.params._id
    const body = req.body;
    const result = await Todo.findByIdAndUpdate(id, body)
    res.send(result)
}

module.exports = {createTodo, getTodo, getTodos, deleteTodo, updateTodo}