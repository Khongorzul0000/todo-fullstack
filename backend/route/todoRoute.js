const express = require("express");
const { createTodo, getTodo, getTodos, deleteTodo, updateTodo, completedTodo, getUnDone, getIsDone} = require("../controller/todoController")

const router    = express.Router()

router
.get("/get/:id", getTodo)
.get("/lists", getTodos)
.get("/done", getIsDone)
.get("/undone", getUnDone)
.post("/add", createTodo)
.delete("/delete/:id", deleteTodo)
.patch("/update/:id", updateTodo)
.patch("/checked/:id", completedTodo)

module.exports = router