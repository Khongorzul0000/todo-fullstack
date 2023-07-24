const mongoose = require("mongoose");

const uri = process.env.URI || "mongodb+srv://kongorzul8888:kongor0410@cluster0.kxfj4ot.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () =>{
    console.log(uri)
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri)
        console.log("Succesfully connected to MongoDB TODOLIST")
    }catch(error){
        console.log(error)
    }
};
module.exports = connectDB;