const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db")
const cors = require("cors");
const router = require("./route/todoRoute")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors());
app.use(express.json());

app.use(router)

app.get("/", (req, res) =>{
    res.send("todo list backend")
})
app.get("/test", (req, res) =>{
    res.send("this is endpoint")
})

connectDB()

app.listen(5000, () => console.log("server started on port 5000"))