const User  = require("../model/userModel")
const {hashPassword, comparePassword} = require("../helpers/auth")
const jwt = require("jsonwebtoken")

const createUser = async (req, res) =>{
   try{
    const {username, email, password} = req.body
    // Check if name is created
    if(!username){
        return res.json({
            error:'Name is required'
        })
    }
    //Check if password is created or character is more than 6 
    if(!password || password.length < 6){
        return res.json({
            error:'Password should be at least 6 character long'
        })
    }
    //Check if email is already created
    const exist = await User.findOne({email})
    if(exist){
        return res.json({
            error:'Email is already taken'
        })
    }

    const hashedPassword = await hashPassword(password)

    const user = await User.create({
        username, email, password:hashedPassword
    })
    res.send(user)
   }catch (error){
    console.log(error)
   }
}

const getUsers = async (req, res) =>{
    const users = await User.find({})
    res.send(users)
}

const getUser = async (req, res) =>{
    const id = req.params.id
    const result = await User.findById({_id:id}).populate({path:"todos"})
    res.send(result)
}

const deleteUser = async (req, res) =>{
    const id = req.params.id
    const result = await User.findByIdAndDelete({_id:id})
    res.send(result)
}

const Login = async (req, res) =>{
  try{
    const {email, password} = req.body

    //Check if user exists
    const user = await User.findOne({email:email})
    if(!user){
        return res.json({
            error:'No user found'
        })
    }

    //Check if password matches
    const match = await comparePassword(password, user.password)
    if(match){
        jwt.sign({email:user.email, id:user._id, username:user.username}, process.env.JWT_SECRET, {}, (err, token) =>{
            if(err) throw err;
            res.cookie('token', token).json(user)
        })
    }
    if(!match){
        res.json({
            error:"Password doesn't match"
        })
    }
  }catch(error){
    console.log(error)
  }
};

module.exports = {getUsers, createUser, getUser, Login, deleteUser}