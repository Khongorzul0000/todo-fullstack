const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db")
const cors = require("cors");
const todorouter = require("./route/todoRoute")
const userrouter = require("./route/userRoute");
const cookieParser = require("cookie-parser");
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use(todorouter, userrouter)

app.get("/", (req, res) =>{
    res.send("todo list backend")
})
app.get("/test", (req, res) =>{
    res.send("this is endpoint")
})

connectDB()

app.listen(5000, () => console.log("server started on port 5000"))