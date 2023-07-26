const express = require("express");
const { createTodo, getTodo, getTodos, deleteTodo, updateTodo, completedTodo, getCompleted} = require("../controller/todoController")

const router    = express.Router()

router
.get("/get/:id", getTodo)
.get("/lists", getTodos)
.post("/add", createTodo)
.delete("/delete/:id", deleteTodo)
.patch("/update/:id", updateTodo)
.patch("/checked/:id", completedTodo)
.get("/com", getCompleted)

module.exports = router