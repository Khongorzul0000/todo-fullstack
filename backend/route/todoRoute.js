const express = require("express");
const { createTodo, getTodo, deleteTodo, updateTodo, changeTodo, getUnDone, getIsDone} = require("../controller/todoController")

const todorouter    = express.Router()

todorouter
.get("/get/:id", getTodo)
.get("/done", getIsDone)
.get("/undone", getUnDone)
.post("/add", createTodo)
.delete("/delete/:id", deleteTodo)
.patch("/update/:id", updateTodo)
.patch("/checked/:id", changeTodo)

module.exports = todorouter