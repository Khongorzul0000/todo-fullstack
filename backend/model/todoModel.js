const {Schema, model} = require("mongoose");

const todoSchema = new Schema ({
    todo:{
        type:String
    },
    isDone:{
        type:Boolean,
        default:false
    },
    createdDate:{
        type:Date,
        default: Date.now(),
    }
});

const Todo = model("Todo", todoSchema)
module.exports = Todo