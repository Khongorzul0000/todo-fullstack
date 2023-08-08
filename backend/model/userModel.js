const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
},
{
    toJSON: { virtuals: true },
})

userSchema.virtual("todos", {
    ref:"Todo", 
    localField:"_id",
    foreignField:"user"
})

const User = model("User", userSchema)
module.exports = User