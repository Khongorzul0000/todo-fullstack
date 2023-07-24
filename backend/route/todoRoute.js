const express = require("express");
const { createTodo, getTodo, getTodos, deleteTodo, updateTodo} = require("../controller/todoController")

const router    = express.Router()

router
.get("/get/:id", getTodo)
.get("/lists", getTodos)
.post("/add", createTodo)
.delete("/delete/:id", deleteTodo)
.patch("/update/:id", updateTodo)

module.exports = router