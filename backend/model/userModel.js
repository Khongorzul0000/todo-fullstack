const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
        minlength:[8, 'Minimum password length is 8 character']
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