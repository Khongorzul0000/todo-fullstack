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
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User", 
        required:true
    }
});

const Todo = model("Todo", todoSchema)
module.exports = Todo