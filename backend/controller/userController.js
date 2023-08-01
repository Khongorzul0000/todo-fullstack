const User  = require("../model/userModel")

const createUser = async (req, res) =>{
    const body = req.body
    const result = await new User(body).save()
    res.send(result)
}

const getUsers = async (req, res) =>{
    const users = await User.find({}).populate({path:"todos"})
    res.send(users)
}

const getUser = async (req, res) =>{
    const id = req.params.id
    const result = await User.findById({_id:id})
    res.send(result)
}

const Login = async (req, res) =>{
    const {email, password} = req.body
    const user = await User.findOne({email:email})
    if(user !== null){
        if(user.password === password){
            res.send(user)
        }else{
            res.status(401).json({message:"Invalid password"})
        }
    }else{
        res.status(401).json({message:"User not found"})
    }
};

const deleteUser = async (req, res) =>{
    const id = req.params.id
    const result = await User.findByIdAndDelete({_id:id})
    res.send(result)
}

module.exports = {getUsers, createUser, getUser, Login, deleteUser}