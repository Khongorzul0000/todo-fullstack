const express = require("express");
const { createTodo, getTodo, getTodos, deleteTodo, updateTodo, completedTodo} = require("../controller/todoController")

const router    = express.Router()

router
.get("/get/:id", getTodo)
.get("/lists", getTodos)
.post("/add", createTodo)
.delete("/delete/:id", deleteTodo)
.patch("/update/:id", updateTodo)
.patch("/checked/:id", completedTodo)

module.exports = router