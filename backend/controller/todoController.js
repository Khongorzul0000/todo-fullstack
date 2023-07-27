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

const getIsDone = async (req, res) =>{
   try{
    const result = await Todo.find({})
    const done = result.filter((word) => word.isDone == true)
    console.log(done.length)
    console.log(done)
    // res.json({count:done.length})
    res.send(done)
   }catch(err) {
    res.send(err)
   }
}

const getUnDone = async (req, res) =>{
    try{
        const result = await Todo.find({})
        const done = result.filter((word) => word.isDone == false)
        console.log(done.length)
        console.log(done)
        // res.json({count:done.length})
        res.send(done)
       }catch(err) {
        res.send(err)
       }
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

module.exports = {createTodo, getTodo, getTodos, deleteTodo, updateTodo, completedTodo, getIsDone, getUnDone}