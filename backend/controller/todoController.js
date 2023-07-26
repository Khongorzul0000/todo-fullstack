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
    const id = req.params.id
    const body = req.body;
    const result = await Todo.findByIdAndUpdate(id, body)
    res.send(result)
}

const completedTodo = async (req, res) =>{
    const id = req.params.id
    const result = await Todo.findById({_id:id})
    result.isDone = !result.isDone
    await result.save()
    res.send(result)
}

const getCompleted = async (req, res) =>{
    const id = req.params.id
    const result = await Todo.findById({_id:id})
    if(result.isDone ===false){
        res.send(result)
    }else{
        res.send("else")
    }

}

module.exports = {createTodo, getTodo, getTodos, deleteTodo, updateTodo, completedTodo, getCompleted}