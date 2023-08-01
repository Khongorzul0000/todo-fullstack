const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db")
const cors = require("cors");
const todorouter = require("./route/todoRoute")
const userrouter = require("./route/userRoute")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors());
app.use(express.json());

app.use(todorouter, userrouter)

app.get("/", (req, res) =>{
    res.send("todo list backend")
})
app.get("/test", (req, res) =>{
    res.send("this is endpoint")
})

connectDB()

app.listen(9000, () => console.log("server started on port 5000"))