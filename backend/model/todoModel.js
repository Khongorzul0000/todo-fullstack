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
        ref:"Üser", 
        required:true
    }
},{
    toJSON:{virtuals:true}
});


const Todo = model("Todo", todoSchema)
module.exports = Todo