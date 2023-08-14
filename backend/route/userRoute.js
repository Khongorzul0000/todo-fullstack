const express = require("express")
const {getUsers, createUser, getUser, Login, deleteUser, Logout} = require("../controller/userController")

const userrouter = express.Router()

userrouter
.get("/users", getUsers)
.get("/user/:id", getUser)
.post("/createuser", createUser)
.post("/login", Login)
.post("/logout", Logout)
.delete("/remove/:id", deleteUser)

module.exports = userrouter